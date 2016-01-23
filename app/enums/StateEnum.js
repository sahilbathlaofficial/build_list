define('enums/StateEnum', ['app'], function (app) {
	'use strict';

	return {
		PENDING: 'Pending',
		RUNNING: 'Running',
		COMPLETE: 'Complete',
		REJECTED: 'Rejected'
	};
});