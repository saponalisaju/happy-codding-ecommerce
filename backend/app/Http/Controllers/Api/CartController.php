<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\CartItem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    private function getCartIdentifier(Request $request)
    {
        // If user is authenticated, use user ID
        if (Auth::check()) {
            return 'user_' . Auth::id();
        }
        
        // For guests, use session ID or create a guest identifier
        $guestId = $request->session()->get('guest_id');
        if (!$guestId) {
            $guestId = 'guest_' . uniqid();
            $request->session()->put('guest_id', $guestId);
        }
        return $guestId;
    }

    public function addToCart(Request $request)
{
    $request->validate([
        'product_id' => 'required|integer',
        'quantity' => 'required|integer|min:1'
    ]);

    $userId = Auth::id();

    if (!$userId) {
        return response()->json([
            'message' => 'Unauthenticated'
        ], 401);
    }

    $cartItem = CartItem::where('user_id', $userId)
        ->where('product_id', $request->product_id)
        ->first();

    if ($cartItem) {
        $cartItem->quantity += $request->quantity;
        $cartItem->save();
    } else {
        $cartItem = CartItem::create([
            'user_id' => $userId,
            'product_id' => $request->product_id,
            'quantity' => $request->quantity
        ]);
    }

    return response()->json([
        'message' => 'Added to cart',
        'cart_item' => $cartItem
    ]);
}
    public function index(Request $request)
    {
        $cartIdentifier = $this->getCartIdentifier($request);
        
        // For guest carts, return from session
        if (strpos($cartIdentifier, 'guest_') === 0) {
            $cart = $request->session()->get('cart', []);
            return response()->json($cart);
        }

        // For authenticated users, return from database
        $cart = CartItem::with('product')
            ->where('user_id', Auth::id())
            ->get();

        return response()->json($cart);
    }

    public function remove(Request $request, $id)
    {
        $cartIdentifier = $this->getCartIdentifier($request);
        
        // For guest carts, remove from session
        if (strpos($cartIdentifier, 'guest_') === 0) {
            $cart = $request->session()->get('cart', []);
            unset($cart[$id]);
            $request->session()->put('cart', $cart);
            return response()->json(['message' => 'Item removed']);
        }

        // For authenticated users, remove from database
        CartItem::where('id', $id)
            ->where('user_id', Auth::id())
            ->delete();

        return response()->json(['message' => 'Item removed']);
    }

    public function updateQuantity(Request $request, $id)
    {
        $request->validate([
            'quantity' => 'required|integer|min:1'
        ]);

        $cartIdentifier = $this->getCartIdentifier($request);
        
        // For guest carts, update in session
        if (strpos($cartIdentifier, 'guest_') === 0) {
            $cart = $request->session()->get('cart', []);
            if (isset($cart[$id])) {
                $cart[$id]['quantity'] = $request->quantity;
                $request->session()->put('cart', $cart);
                return response()->json($cart[$id]);
            }
            return response()->json(['message' => 'Not found'], 404);
        }

        // For authenticated users, update in database
        $cartItem = CartItem::where('id', $id)
            ->where('user_id', Auth::id())
            ->first();

        if (!$cartItem) {
            return response()->json(['message' => 'Not found'], 404);
        }

        $cartItem->quantity = $request->quantity;
        $cartItem->save();

        return response()->json($cartItem);
    }
}
