<?php

namespace Database\Seeders;

use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = [
            [
                'name' => 'Wireless Bluetooth Headphones',
                'slug' => 'wireless-bluetooth-headphones',
                'description' => 'High-quality wireless headphones with noise cancellation',
                'price' => 99.99,
                'sale_price' => 79.99,
                'stock_quantity' => 50,
                'sku' => 'PRD-HEAD-001',
                'category_id' => 1,
                'is_active' => true,
                'is_featured' => true,
            ],
            [
                'name' => 'Smartphone Case',
                'slug' => 'smartphone-case',
                'description' => 'Protective case for smartphones',
                'price' => 19.99,
                'stock_quantity' => 100,
                'sku' => 'PRD-CASE-001',
                'category_id' => 1,
                'is_active' => true,
            ],
            [
                'name' => 'Cotton T-Shirt',
                'slug' => 'cotton-t-shirt',
                'description' => 'Comfortable cotton t-shirt in various colors',
                'price' => 15.99,
                'stock_quantity' => 200,
                'sku' => 'PRD-TSHIRT-001',
                'category_id' => 2,
                'is_active' => true,
            ],
            [
                'name' => 'Denim Jeans',
                'slug' => 'denim-jeans',
                'description' => 'Classic denim jeans',
                'price' => 49.99,
                'sale_price' => 39.99,
                'stock_quantity' => 75,
                'sku' => 'PRD-JEANS-001',
                'category_id' => 2,
                'is_active' => true,
                'is_featured' => true,
            ],
            [
                'name' => 'Programming Book',
                'slug' => 'programming-book',
                'description' => 'Comprehensive guide to programming',
                'price' => 29.99,
                'stock_quantity' => 30,
                'sku' => 'PRD-BOOK-001',
                'category_id' => 3,
                'is_active' => true,
            ],
            [
                'name' => 'Garden Tools Set',
                'slug' => 'garden-tools-set',
                'description' => 'Complete set of gardening tools',
                'price' => 34.99,
                'stock_quantity' => 25,
                'sku' => 'PRD-GARDEN-001',
                'category_id' => 4,
                'is_active' => true,
            ],
            [
                'name' => 'Yoga Mat',
                'slug' => 'yoga-mat',
                'description' => 'Non-slip yoga mat for exercise',
                'price' => 24.99,
                'stock_quantity' => 40,
                'sku' => 'PRD-YOGA-001',
                'category_id' => 5,
                'is_active' => true,
            ],
            [
                'name' => 'Basketball',
                'slug' => 'basketball',
                'description' => 'Official size basketball',
                'price' => 19.99,
                'stock_quantity' => 60,
                'sku' => 'PRD-BALL-001',
                'category_id' => 5,
                'is_active' => true,
                'is_featured' => true,
            ],
        ];

        foreach ($products as $product) {
            Product::create($product);
        }
    }
}
