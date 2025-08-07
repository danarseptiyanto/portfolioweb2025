<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProjectController;

Route::get('/', [HomeController::class, 'index']);
Route::get('/project/{slug}', [ProjectController::class, 'index']);


// Route::get('/', function () {
//     return inertia('Home');
// });

// Route::get('/about', function () {
//     return inertia('About');
// });

// Route::get('/project', function () {
//     return inertia('Project');
// });
