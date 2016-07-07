'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:ResumeCtrl
 * @description
 * # ResumeCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('ResumeCtrl',   		
  		['$scope', '$http', 'analytics', '$location',
  		function ($scope, $http, analytics, $location) {
	analytics.logPageLoad($scope, $location.absUrl(), 'resume');
}]);
