angular.module('bdSite', ['ngRoute', 'RouteControllers']);

angular.module('bdSite').config(function($locationProvider, $routeProvider) {

	$locationProvider.html5Mode(true);

	$routeProvider

	.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'videoCtrl'
	})
	.when('/about', {
			templateUrl: 'templates/about.html',
	})
	.when('/services', {
			templateUrl: 'templates/services.html',
  })
	.when('/contact', {
		  templateUrl: 'templates/contact.html',
	})
	.otherwise({redirectTo: '/'});


});
