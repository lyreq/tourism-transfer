<?php

use App\Http\Controllers\CarsController;
use App\Http\Controllers\DriversController;
use App\Http\Controllers\TransfersController;
use App\Http\Controllers\TravellersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get("/cars",[CarsController::class,'index']);
Route::post("/cars",[CarsController::class,'store']);
Route::get("/cars/{id}",[CarsController::class,'show']);
Route::put("/cars/edit/{id}",[CarsController::class,'update']);
Route::delete("/cars/{id}",[CarsController::class,'destroy']);

Route::get("/drivers",[DriversController::class,'index']);
Route::get("/drivers/{id}",[DriversController::class,'show']);
Route::delete("/drivers/{id}",[DriversController::class,'destroy']);
Route::put("/drivers/edit/{id}",[DriversController::class,'update']);
Route::post("/drivers",[DriversController::class,'store']);

Route::get("/travellers",[TravellersController::class,'index']);
Route::post("/travellers",[TravellersController::class,'store']);
Route::get("/travellers/{id}",[TravellersController::class,'show']);
Route::put("/travellers/edit/{id}",[TravellersController::class,'update']);
Route::delete("/travellers/{id}",[TravellersController::class,'destroy']);


Route::get("/transfers",[TransfersController::class,'index']);
Route::get("/transfers-today",[TransfersController::class,'todayTransfers']);
Route::post("/transfers",[TransfersController::class,'store']);
Route::get("/transfers/{id}",[TransfersController::class,'show']);
Route::delete("/transfers/{id}",[TransfersController::class,'destroy']);
Route::put("/transfers/edit/{id}",[TransfersController::class,'update']);