define('controllers/ListController', ['app', 'enums/StateEnum'], function (app, StateEnum) {
	'use strict';

	function ListController($scope) {
		//In Real World :- Fetch from backend and set it here
		$scope.attributes = ['Changelist/Build', 'Owner', 'Time Started', 'State', 'Metrics', 'Build', 'Unit Test', 'Functional Test'];

		//Fake initial data fetched from backend
		$scope.buildData = [
			{
				id: 1,
				type: 'build',
				name: 'Tenrox-R1_1235',
				owner: '',
				timeStarted: '',
				state: StateEnum.PENDING,
				metrics: { value: 0, colorCode: 'green', title: 'Metrics'},
				build: { value: 0, colorCode: 'green', title: 'Build'},
				unitTest: { value: 0, colorCode: 'green', title: 'Unit Test'},
				functionalTest: { value: 0, colorCode: 'green', title: 'Functional Test'}
			},
			{
				id: 2,
				type: 'firewall',
				name: '432462',
				owner: 'jtuck',
				timeStarted: '4/18/2014 12:12pm',
				state: StateEnum.RUNNING,
				metrics: { value: 0.5, colorCode: 'green', title: 'Metrics'},
				build: { value: 0, colorCode: 'green', title: 'Build'},
				unitTest: { value: 0, colorCode: 'green', title: 'Unit Test'},
				functionalTest: { value: 0, colorCode: 'green', title: 'Functional Test'}
			},
			{
				id: 3,
				type: 'firewall',
				name: '432461',
				owner: 'samy',
				timeStarted: '4/18/2014 10:53am',
				state: StateEnum.REJECTED,
				metrics: { value: -1, colorCode: 'red', title: 'Metrics'},
				build: { value: 0, colorCode: 'green', title: 'Build'},
				unitTest: { value: 0, colorCode: 'green', title: 'Unit Test'},
				functionalTest: { value: 0, colorCode: 'green', title: 'Functional Test'}
			},
			{
				id: 4,
				type: 'build',
				name: 'Tenrox-R1_1234',
				owner: '',
				timeStarted: '4/17/2014 9:42am',
				state: StateEnum.COMPLETED,
				metrics: { value: 1, colorCode: 'green', title: 'Metrics'},
				build: { value: 1, colorCode: 'green', title: 'Build'},
				unitTest: { value: 1, colorCode: 'green', title: 'Unit Test'},
				functionalTest: { value: 1, colorCode: 'green', title: 'Functional Test'}
			}
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
					return 'green_accepted';
				case StateEnum.COMPLETED:
					return 'green';
			}
		};

		$scope.buildInfo = {
			currentBuild: undefined
		};

		$scope.stepValues = ['metrics', 'build', 'unitTest', 'functionalTest'];

		//Move to constants
		$scope.baseUnitValue = 32;
	}

	ListController.$inject = ['$scope'];

	app.controller('ListController', ListController);
});