<?php

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

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();


Route::get('/pdf', 'HomeController@pdf')->name('pdf');
Route::post('/uparcodigo', 'ImprimirsController@uparcodigp')->name('uparcodigo');
Route::post('/codigo', 'ImprimirsController@codigo')->name('codigo');
Route::post('/temporary', 'ImprimirsController@temporary')->name('temporary');
Route::get('/home', 'HomeController@index')->name('home');
Route::post('/imprimir', 'ImprimirsController@imprimir')->name('imprimir');
