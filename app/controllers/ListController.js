define('controllers/ListController', ['app', 'enums/StateEnum'], function (app, StateEnum) {
	'use strict';

	function ListController($scope, $timeout) {
		//In Real World :- Fetch from backend and set it here
		$scope.attributes = ['Changelist/Build', 'Owner', 'Time Started', 'State', 'Metrics', 'Build', 'Unit Test', 'Functional Test'];

		//Fake initial data fetched from backend using $http
		$scope.buildData = [
			{
				id: 1,
				type: 'build',
				name: 'Tenrox-R1_1235',
				owner: '',
				startTime: '',
				startDate: '',
				state: StateEnum.PENDING,
				metrics: { value: 0, colorCode: 'green', title: 'Metrics', test: 0, maintainabilty: 0, security: 0, status: 'up', workmanship: 0},
				build: { value: 0, colorCode: 'green', title: 'Build'},
				unitTest: { value: 0, colorCode: 'green', title: 'Unit Test', coverageValue: 0, passedValue: 0 },
				functionalTest: { value: 0, colorCode: 'green', title: 'Functional Test', coverageValue: 0, passedValue: 0 }
			},
			{
				id: 2,
				type: 'firewall',
				name: '432462',
				owner: 'jtuck',
				startTime: '12:12pm',
				startDate: '4/18/2014',
				state: StateEnum.RUNNING,
				metrics: { value: 0.5, colorCode: 'green', title: 'Metrics', test: 30, maintainabilty: 32, security: 64, status: 'up', workmanship: 72},
				build: { value: 0, colorCode: 'green', title: 'Build'},
				unitTest: { value: 0, colorCode: 'green', title: 'Unit Test', coverageValue: 88, passedValue: 87 },
				functionalTest: { value: 0, colorCode: 'green', title: 'Functional Test', coverageValue: 82, passedValue: 78 }
			},
			{
				id: 3,
				type: 'firewall',
				name: '432461',
				owner: 'samy',
				startTime: '10:53am',
				startDate: '4/18/2014',
				state: StateEnum.REJECTED,
				metrics: { value: -1, colorCode: 'red', title: 'Metrics', test: 64, maintainabilty: 50, security: 64, status: 'down', workmanship: 72},
				build: { value: 1, colorCode: 'green', title: 'Build'},
				unitTest: { value: 1, colorCode: 'green', title: 'Unit Test', coverageValue: 76, passedValue: 73 },
				functionalTest: { value: 1, colorCode: 'green', title: 'Functional Test', coverageValue: 0, passedValue: 0 }
			},
			{
				id: 4,
				type: 'build',
				name: 'Tenrox-R1_1234',
				owner: '',
				startTime: '9:42am',
				startDate: '4/17/2014',
				state: StateEnum.COMPLETED,
				metrics: { value: 1, colorCode: 'green', title: 'Metrics', test: 64, maintainabilty: 53, security: 64, status: 'up', workmanship: 72},
				build: { value: 1, colorCode: 'green', title: 'Build'},
				unitTest: { value: 1, colorCode: 'green', title: 'Unit Test', coverageValue: 92, passedValue: 90 },
				functionalTest: { value: 1, colorCode: 'green', title: 'Functional Test', coverageValue: 99, passedValue: 92 }
			}
		]

		$scope.StateEnum = StateEnum;
		$scope.buildInfo = {currentBuild: undefined};
		$scope.stepValues = ['metrics', 'build', 'unitTest', 'functionalTest'];
		$scope.modalContent = 'Here you add more info about your builds.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur faucibus lacus est, quis iaculis eros placerat nec. Donec posuere, urna nec convallis faucibus, sapien nibh tincidunt sapien, a dignissim sapien odio ac nibh. Donec ultrices non velit ac hendrerit. Nullam.';
		//Move to constants
		$scope.baseUnitValue = 32;

		/* Private Methods */

		/**
		 * Handler when the build has finished executing
		 * @param  {buildIndex} buildIndex is the index of build
		 */
		function finishExecution(buildIndex) {
			$scope.buildData[buildIndex].state = StateEnum.COMPLETED;
			$timeout(function() {
				$scope.renderChart($scope.buildData[buildIndex].id);
			}, 200);
		}

		/* Public Methods */

		/**
		 * getColor -> Get Color as per state (running -> green, rejected -> red) etc
		 * Todo :- Move to a colors service
		 * @param  {string} state running, rejected etc
		 * @return {string}       color string
		 */
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

		/**
		 * Shows the dummy modal
		 * @param  {[type]} event if called on any event i.e. click
		 */
		$scope.showModal = function (event) {
			event.stopPropagation();
			$scope.isModalShown = true;
		};


		/**
		 * Renders the pi chart for unit & functional tests of a buil
		 * ToDo:- Move to a service that deals with charts
		 * @param  {number} id buildid
		 */
		$scope.renderChart = function (id) {
			if ($scope.buildData[id - 1].state === StateEnum.PENDING || $scope.buildData[id - 1].state === StateEnum.RUNNING) {
				return;
			}
			 CanvasJS.addColorSet('customColorSet',
			[
				'#72AC4D',
				'#EB7D3B'
			]);

			for (var i = 0, testTypes = ['unitTest', 'functionalTest']; i < testTypes.length; i++) {
				var chart = new CanvasJS.Chart(testTypes[i] + 'ChartContainer' + id, {
					colorSet: 'customColorSet',
					animationEnabled: true,
					legend: {
						verticalAlign: 'top',
						horizontalAlign: 'left'
					},
					height: 100,
					backgroundColor: null,
					margin: 0,
					data: [
						{
							type: 'pie',
							indexLabelFontFamily: 'Garamond',
							indexLabelFontSize: 10,
							indexLabelFontWeight: 'bold',
							startAngle:40,
							indexLabelFontColor: 'MistyRose',
							indexLabelLineColor: 'darkgrey',
							indexLabelPlacement: 'inside',
							indexLabel: '#percent%',
							showInLegened: true,
							dataPoints: [
								{  y: $scope.buildData[id - 1].unitTest.passedValue, name: 'Tests Passed'},
								{  y: 100 - $scope.buildData[id - 1].unitTest.passedValue, name: 'Tests Failed'},
							]
						}
					]
				});
				chart.render();
			}
		};

		/**
		 * Fake updateData mocking polling/pushing on server
		 * Just completing the state of running build id:2, index:1 -> hardcoded for demo
		 */
		$scope.updateData = function (index) {
			var valuesToUpdate = $scope.stepValues;
			$timeout(function () {
				if (Number($scope.buildData[1][valuesToUpdate[index]].value.toFixed(1)) === 1) {
					index++;
				}
				if (index > 3) {
					finishExecution(1);
					return;
				}
				$scope.buildData[1][valuesToUpdate[index]].value += 0.1;
				$scope.buildData[1][valuesToUpdate[index]].value = Number($scope.buildData[1][valuesToUpdate[index]].value.toFixed(1));
				$scope.updateData(index);
			}, 1000);
		};
		$scope.updateData(0);
	}

	ListController.$inject = ['$scope', '$timeout'];

	app.controller('ListController', ListController);
});