angular.module('myApp',['ngRoute', 'ngAnimate'])
.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'views/top.html',
		controller:'TopCtrl'
	})
	.when('/detail/:memberNomber',{
		templateUrl:'views/detail.html',
		controller:'DetailCtrl'
	})
	.otherwise({
		redirectTo:'/'
	})
});
