require.config({
	paths: {
		'angular': '../bower_components/angular/angular',
		'angular-route': '../bower_components/angular-route/angular-route',
	},
	shim: {
		'angular' : { exports : 'angular' },
		'angular-route' : { deps : ['angular'] }
	}
});

requirejs(['app', 'angular', 'controllers/ListController'], function (app, angular, ListController) {
	'use strict';

	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '/app/views/list.html',
			controller: 'ListController'
		}).otherwise({redirectTo : '/a'});
	}]);

	angular.bootstrap(document, ['buildTaskApp']);
});