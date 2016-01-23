define('controllers/ListController', ['app'], function (app) {
	'use strict';

	function ListController($scope) {
		$scope.list = ['Try Me'];
	}

	ListController.$inject = ['$scope'];

	app.controller('ListController', ListController);
});