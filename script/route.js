angular.module('myApp',['ngRoute', 'ngAnimate'])
.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/top.html',
		controller:'TopCtrl'
	})
	.otherwise({
		redirectTo:'/'
	})
});
