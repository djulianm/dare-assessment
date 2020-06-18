'use strict'

const { RouteResource } = require('@adonisjs/framework/src/Route/Manager');

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/login','UserController.login');
Route.post('/user','UserController.create');

Route.get('client/:id','ClientController.detail').middleware(['auth']);
Route.get('clients','ClientController.list').middleware(['auth']);

Route.get('policy/:id','PolicyController.detail').middleware(['auth']);
Route.get('policies','PolicyController.list').middleware(['auth']);