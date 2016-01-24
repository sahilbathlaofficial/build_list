define('controllers/ListController', ['app', 'enums/StateEnum'], function (app, StateEnum) {
	'use strict';

	function ListController($scope) {
		//In Real World :- Fetch from backend and set it here
		$scope.attributes = ['Changelist/Build', 'Owner', 'Time Started', 'State', 'Metrics', 'Build', 'Unit Test', 'Functional Test'];

		//Fake initial data fetched from backend
		$scope.buildData = [
			{ id: 1, type: 'build', name: 'Tenrox-R1_1235', owner: '', timeStarted: '', state: StateEnum.PENDING, metricsValue: 0, buildValue: 0, unitValue: 0, functionalValue: 0 },
			{ id: 2, type: 'firewall',  name: '432462', owner: 'jtuck', timeStarted: '4/18/2014 12:12pm', state: StateEnum.RUNNING, metricsValue: 0.5, buildValue: 0, unitValue: 0, functionalValue: 0 },
			{ id: 3, type: 'firewall',  name: '432461', owner: 'samy', timeStarted: '4/18/2014 10:53am', state: StateEnum.REJECTED, metricsValue: -1, buildValue: 1, unitValue: 1, functionalValue: 1 },
			{ id: 4, type: 'build',  name: 'Tenrox-R1_1234', owner: '', timeStarted: '4/17/2014 9:42am', state: StateEnum.COMPLETED, metricsValue: 1, buildValue: 1, unitValue: 1, functionalValue: 1 }
		]

		$scope.StateEnum = StateEnum;

		$scope.getColor = function (state) {
			switch (state) {
				case StateEnum.PENDING:
					return 'grey';
				case StateEnum.REJECTED:
					return 'red';
				case StateEnum.RUNNING:
					return 'blue';
				case StateEnum.ACCEPTED:
					return 'green';
				case StateEnum.COMPLETED:
					return 'green';
			}
		};

		$scope.stepValues = ['metricsValue', 'buildValue', 'unitValue', 'functionalValue'];

		//Move to constants
		$scope.baseUnitValue = 32;
	}

	ListController.$inject = ['$scope'];

	app.controller('ListController', ListController);
});