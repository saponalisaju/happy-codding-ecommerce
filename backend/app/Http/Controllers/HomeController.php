<?php

// app/Http/Controllers/HomeController.php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;

class HomeController extends Controller
{
    public function index()
    {
        $categories = Category::take(6)->get();

        $featuredProducts = Product::where('featured', 1)
            ->latest()
            ->take(8)
            ->get();

        $latestProducts = Product::latest()
            ->take(8)
            ->get();

        return view('storefront.pages.home', compact(
            'categories',
            'featuredProducts',
            'latestProducts'
        ));
    }
}