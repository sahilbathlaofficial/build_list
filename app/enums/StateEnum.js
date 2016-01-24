define('enums/StateEnum', ['app'], function (app) {
	'use strict';

	return {
		PENDING: 'Pending',
		RUNNING: 'Running',
		COMPLETED: 'Complete',
		REJECTED: 'Rejected',
		ACCEPTED: 'Accepted'
	};
});