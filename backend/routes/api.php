<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\CustomerController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\OrderController;
use App\Http\Controllers\Api\ProductController;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\CartController;
use App\Http\Controllers\Api\CloudinarySignatureController;

// use App\Http\Controllers\Api\ReportController;

/*
|--------------------------------------------------------------------------
| PUBLIC AUTH ROUTES
|--------------------------------------------------------------------------
*/

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);



// Allow guests to add to cart
Route::post('/cart/add', [CartController::class, 'addToCart']);

Route::middleware('auth:sanctum')->group(function () {
    // Auth
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/cart', [CartController::class, 'index']);
    Route::delete('/cart/{id}', [CartController::class, 'remove']);
    Route::put('/cart/{id}', [CartController::class, 'updateQuantity']);

    Route::options('/cloudinary/signature', fn() => response()->json([], 200));
    Route::get('/cloudinary/signature', [CloudinarySignatureController::class, 'generate']);
});

/*
|--------------------------------------------------------------------------
| ADMIN ROUTES
|--------------------------------------------------------------------------
*/

Route::middleware(['auth:sanctum', 'admin'])->group(function () {

    /*
    |--------------------------------------------------------------------------
    | CRUD
    |--------------------------------------------------------------------------
    */

    Route::apiResource('products', ProductController::class);

    Route::apiResource('users', UserController::class);

    Route::apiResource('customers', CustomerController::class);

    Route::apiResource('categories', CategoryController::class)
        ->except(['show']);

    Route::get('/categories/tree', [CategoryController::class, 'getAsTree']);

    Route::get('/countries', [CustomerController::class, 'countries']);

    /*
    |--------------------------------------------------------------------------
    | ORDERS
    |--------------------------------------------------------------------------
    */

    Route::get('/orders', [OrderController::class, 'index']);

    Route::get('/orders/statuses', [OrderController::class, 'getStatuses']);

    Route::post('/orders/change-status/{order}/{status}', [
        OrderController::class,
        'changeStatus'
    ]);

    Route::get('/orders/{order}', [OrderController::class, 'view']);

    /*
    |--------------------------------------------------------------------------
    | DASHBOARD
    |--------------------------------------------------------------------------
    */

    Route::get('/dashboard/customers-count', [
        DashboardController::class,
        'activeCustomers'
    ]);

    Route::get('/dashboard/products-count', [
        DashboardController::class,
        'activeProducts'
    ]);

    Route::get('/dashboard/orders-count', [
        DashboardController::class,
        'paidOrders'
    ]);

    Route::get('/dashboard/income-amount', [
        DashboardController::class,
        'totalIncome'
    ]);

    Route::get('/dashboard/orders-by-country', [
        DashboardController::class,
        'ordersByCountry'
    ]);

    Route::get('/dashboard/latest-customers', [
        DashboardController::class,
        'latestCustomers'
    ]);

    Route::get('/dashboard/latest-orders', [
        DashboardController::class,
        'latestOrders'
    ]);

    /*
    |--------------------------------------------------------------------------
    | REPORTS
    |--------------------------------------------------------------------------
    */

    // Route::get('/report/orders', [ReportController::class, 'orders']);

    // Route::get('/report/customers', [ReportController::class, 'customers']);
});
