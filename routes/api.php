<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\ErrorSubmitController;
use App\Http\Controllers\StatisticsController;
use App\Http\Controllers\NewWordController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Index page - Search
Route::get("/search", [SearchController::class, "get"]);
Route::post("/error", [ErrorSubmitController::class, "store"]);

// Statistics
Route::get("/statistic/week", [StatisticsController::class, "week"]);
Route::get("/statistic/month", [StatisticsController::class, "month"]);
Route::get("/statistic/year", [StatisticsController::class, "year"]);

// Word suggestion
Route::post("/word", [NewWordController::class, "store"]);