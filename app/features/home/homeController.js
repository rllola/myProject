(function() {
	'use strict';

	function HomeController() { 
		console.log('Welcome');
	}

	angular
	    .module('app')
	    .controller('HomeController', HomeController);

})();