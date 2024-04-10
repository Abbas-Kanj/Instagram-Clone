<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\PostController;


Route::controller(AuthController::class)->group(function () {
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
    Route::post('/updateUser/{id}', 'updateUser');
});

Route::get('/getUser/{id}', [UserController::class, 'getUser']);

// Posts Controllers
Route::get('/getAllPosts', [PostController::class, 'getAllPosts']);
Route::post('/createPost/{id}', [PostController::class, 'createPost']);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
