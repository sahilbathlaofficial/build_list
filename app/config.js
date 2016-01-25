/*Require JS Config*/
require.config({
	paths: {
		'angular': '../bower_components/angular/angular',
		'angular-route': '../bower_components/angular-route/angular-route',
		'text' : "../bower_components/requirejs-text/text"
	},
	shim: {
		'angular' : { exports : 'angular' },
		'angular-route' : { deps : ['angular'] }
	}
});

requirejs(['app', 'angular', 'controllers/ListController', 'directives/ModalBoxDirective'], function (app, angular, ListController) {
	'use strict';

	/* Handle Routes */
	app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: '/app/views/list.html',
			controller: 'ListController'
		}).otherwise({redirectTo : '/'});
	}]);

	angular.bootstrap(document, ['buildTaskApp']);
});