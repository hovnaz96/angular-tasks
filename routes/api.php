<?php

use Illuminate\Http\Request;

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

Route::get('/', function (Request $request) {
    $token = \Illuminate\Support\Str::random(60);
    dd(hash('sha256', $token));
});

Route::group(['prefix' => 'auth'], function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
});


Route::group(['middleware' => 'auth-api'], function () {
    Route::get('tests', function() {
        dd(auth()->user());
    });
});
