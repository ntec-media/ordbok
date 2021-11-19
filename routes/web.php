<?php

use App\Http\Controllers\NewWordController;
use App\Http\Controllers\ErrorSubmitController;
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

// Legacy app
Route::view("/legacy", "legacy");

// Search
Route::inertia("/", "Main");
Route::inertia('/statistics', 'Statistics');
Route::inertia('/app', 'App');
Route::inertia('/word', 'WordSuggestion');
Route::inertia('/about', "About");
Route::inertia('/newSearch', "NewSearch");

// New Word
Route::post("/word", [NewWordController::class, "store"]);

// Dictionary Errors
Route::post("/error", [ErrorSubmitController::class, "store"]);


