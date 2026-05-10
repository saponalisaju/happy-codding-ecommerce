# Ecommerce Backend API

This is the backend API for an ecommerce application built with Laravel 12.

## Features

- User authentication with Laravel Sanctum
- Product management (CRUD)
- Category management (CRUD)
- Order management with order items
- Stock management
- RESTful API endpoints

## Installation

1. Install dependencies:
```bash
composer install
```

2. Copy environment file:
```bash
cp .env.example .env
```

3. Generate application key:
```bash
php artisan key:generate
```

4. Run migrations and seeders:
```bash
php artisan migrate:fresh --seed
```

5. Start the development server:
```bash
php artisan serve
```

## API Endpoints

### Authentication
- `POST /api/register` - Register a new user
- `POST /api/login` - Login user
- `POST /api/logout` - Logout user (requires auth)
- `GET /api/user` - Get authenticated user (requires auth)

### Products
- `GET /api/products` - List products (with filtering)
- `POST /api/products` - Create product (requires auth)
- `GET /api/products/{id}` - Get product details
- `PUT /api/products/{id}` - Update product (requires auth)
- `DELETE /api/products/{id}` - Delete product (requires auth)

### Categories
- `GET /api/categories` - List categories
- `POST /api/categories` - Create category (requires auth)
- `GET /api/categories/{id}` - Get category details
- `PUT /api/categories/{id}` - Update category (requires auth)
- `DELETE /api/categories/{id}` - Delete category (requires auth)

### Orders
- `GET /api/orders` - List user orders (requires auth)
- `POST /api/orders` - Create new order (requires auth)
- `GET /api/orders/{id}` - Get order details (requires auth)
- `PUT /api/orders/{id}` - Update order status (requires auth)
- `DELETE /api/orders/{id}` - Cancel order (requires auth)

## Sample Data

The application comes with sample data including:
- 5 product categories
- 8 sample products
- 1 test user (test@example.com)

## Database Schema

- **users**: User accounts
- **categories**: Product categories
- **products**: Product catalog
- **orders**: Customer orders
- **order_items**: Individual order line items
- **personal_access_tokens**: Sanctum authentication tokens

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
