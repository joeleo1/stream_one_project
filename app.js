angular.module('bdSite', ['ngRoute', 'RouteControllers']);

angular.module('bdSite').config(function($locationProvider, $routeProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {

		templateUrl: 'templates/home.html',

		controller: 'homeCtrl'

	})

});
