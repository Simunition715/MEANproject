var app = angular.module('app',['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/login.html',
		controller: 'UsersController as UC'
	})
	.when('/dashboard',{
		templateUrl: 'partials/index.html',
		controller: 'UsersController as UC'
	})
	.otherwise('/')
})