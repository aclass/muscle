angular.module('myApp',['ngRoute', 'ngAnimate'])
.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'app/views/top.html',
		controller:'TopCtrl'
	})
	.when('/detail/:memberNomber',{
		templateUrl:'app/views/detail.html',
		controller:'DetailCtrl'
	})
	.otherwise({
		redirectTo:'/'
	})
});
