<?php

namespace Lutfi\LaravelBoilerplate;

use Illuminate\Support\ServiceProvider;

class LaravelBoilerplateServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->publishes([
            __DIR__.'/../stubs/app' => base_path('app'),
            __DIR__.'/../stubs/config' => base_path('config'),
            __DIR__.'/../stubs/database' => base_path('database'),
            __DIR__.'/../stubs/resources' => base_path('resources'),
            __DIR__.'/../stubs/routes' => base_path('routes'),
            __DIR__.'/../stubs/package.json' => base_path('package.json'),
            __DIR__.'/../stubs/vite.config.js' => base_path('vite.config.js'),
            __DIR__.'/../stubs/tailwind.config.js' => base_path('tailwind.config.js'),
        ], 'lutfi-laravel-boilerplate');
    }

    public function register()
    {
        $this->mergeConfigFrom(
            __DIR__.'/../stubs/config/auth.php', 'auth'
        );

        $this->mergeConfigFrom(
            __DIR__.'/../stubs/config/sanctum.php', 'sanctum'
        );
    }
}
