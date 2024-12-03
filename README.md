# Laravel 10 Boilerplate with Vue.js

A modern Laravel 10 boilerplate with Vue.js 3 frontend and API endpoints for mobile development.

## Features

- Laravel 10.x
- Vue 3 with Composition API
- Vue Router for SPA
- Vuex for state management
- TailwindCSS for styling
- Laravel Sanctum for API authentication
- Spatie Permission for roles and permissions
- API endpoints ready for mobile apps
- Modern authentication system
- Responsive design with TailwindCSS
- HeadlessUI and Heroicons integration

## Requirements

- PHP >= 8.1
- Composer
- Node.js >= 16
- NPM or Yarn

## Installation

1. Create a new project:
```bash
composer create-project lutfi/laravel-boilerplate your-project-name
```

2. Navigate to your project:
```bash
cd your-project-name
```

3. Install PHP dependencies:
```bash
composer install
```

4. Install NPM dependencies:
```bash
npm install
```

5. Copy the environment file:
```bash
cp .env.example .env
```

6. Generate application key:
```bash
php artisan key:generate
```

7. Configure your database in `.env`

8. Run migrations:
```bash
php artisan migrate
```

9. Build frontend assets:
```bash
npm run build
```

## Development

1. Start the Laravel development server:
```bash
php artisan serve
```

2. Start the Vite development server:
```bash
npm run dev
```

## API Endpoints

### Authentication

- POST `/api/v1/register` - Register a new user
- POST `/api/v1/login` - Login user
- POST `/api/v1/logout` - Logout user
- GET `/api/v1/user` - Get authenticated user

### Protected Routes

All protected routes require the `Authorization: Bearer {token}` header.

## Frontend Structure

```
resources/js/
├── App.vue              # Main app component
├── app.js              # Application entry point
├── router/             # Vue Router configuration
├── store/              # Vuex store modules
├── components/         # Reusable components
└── views/              # Page components
```

## Contributing

Feel free to submit pull requests or create issues for bugs and feature requests.

## License

This project is open-sourced software licensed under the MIT license.
