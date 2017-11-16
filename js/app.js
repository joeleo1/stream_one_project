angular.module('bdSite', ['ngRoute', 'RouteControllers']);

angular.module('bdSite').config(function($routeProvider) {



	$routeProvider

	.when('/', {

		templateUrl: 'templates/home.html',
		controller: 'homeCtrl'

	})

	.when('/about', {
			'templateUrl': 'templates/about.html',
		})

	.when('/services', {

				templateUrl: 'templates/services.html',

    })

		.when('/contact', {

					templateUrl: 'templates/contact.html',

	    })

		.otherwise({redirectTo: '/'});


});
