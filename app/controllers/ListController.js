define('controllers/ListController', ['app', 'enums/StateEnum'], function (app, StateEnum) {
	'use strict';

	function ListController($scope) {
		//In Real World :- Fetch from backend and set it here
		$scope.attributes = ['Changelist/Build', 'Owner', 'Time Started', 'State', 'Metrics', 'Build', 'Unit Test', 'Functional Test'];

		//Fake initial data fetched from backend
		$scope.buildData = [
			{ id: 1, name: 'Tenrox-R1_1235', owner: 'sdsdsd', timeStarted: 'sdsdsdsddsds', state: StateEnum.PENDING, metricsValue: 0, buildValue: 0, unitValue: 0, functionalValue: 0 },
			{ id: 2, name: '432462', owner: 'jtuck', timeStarted: '4/18/12', state: StateEnum.REJECTED, metricsValue: 60, buildValue: 0, unitValue: 0, functionalValue: 0 }
		]

		$scope.getBuildClassName = function (state) {
			switch (state) {
				case StateEnum.PENDING:
					return 'build-row--grey';
				case StateEnum.REJECTED:
					return 'build-row--red'
			}
		};
	}

	ListController.$inject = ['$scope'];

	app.controller('ListController', ListController);
});