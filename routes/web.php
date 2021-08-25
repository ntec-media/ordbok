<?php

use App\Http\Controllers\NewWordController;
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

// Search
Route::inertia("/", "Search");
Route::inertia('/statistics', 'Statistics');
Route::inertia('/app', 'App');
Route::inertia('/word', 'WordSuggestion');
Route::inertia('/about', "About");

// New Word
Route::post("/word", [NewWordController::class, "store"]);



