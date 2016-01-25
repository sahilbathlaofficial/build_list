/**
 * ModalBoxDirective - Wraps any random content inside a modal box.
 *
 * @restrict attribute
 * @example:
 * <div modal-box>
 *  <!-- Content of modal box comes here ->
 * </div>
 *
 * modal-controller is optional
 */
define(['angular', 'app', 'text!views/shared/directives/modal-box.html'], function (ng, app, template) {
	'use strict';

	function ModalBoxDirective () {
		return {
			//Inherit scope from the parent.
			scope: {
				isOpen: '=controlVariable',
				onClose: '&?',
				content: '@',
				title: '@'
			},
			restrict: 'E',
			template: template,
			compile: function () {
				return function link(scope, element, attrs) {
					// Move this modalbox to body because modal box spans to complete screen,
					// so it shouldn't be interrupted by any other element's CSS (like overflow: hidden).
					document.body.appendChild(element[0]);

					scope.close = function close() {
						scope.isOpen = false;
					};

					scope.$on('$destroy', function () {
						element.remove();
					});
				};
			}
		};
	}

	app.directive('modalBox', ModalBoxDirective);
});
