<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::inertia("/", "Search");
Route::inertia('/statistics', 'Statistics');
Route::inertia('/app', 'App');
Route::inertia('/word', 'WordSuggestion');
Route::inertia('/about', "About");




