<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocalDictionaryController;
use App\Http\Controllers\StatisticsController;

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

Route::post("/search", [LocalDictionaryController::class, "words"]);
Route::post("/statistic/week", [StatisticsController::class, "week"]);
Route::post("/statistic/month", [StatisticsController::class, "month"]);
Route::post("/statistic/year", [StatisticsController::class, "year"]);