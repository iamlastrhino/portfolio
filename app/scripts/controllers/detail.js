'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('DetailCtrl', 
  		['$scope', '$http', '$routeParams', 'analytics', '$location',
  		function ($scope, $http, $routeParams, analytics, $location) {
  	var DetailCtrl = this;
	analytics.logPageLoad($scope, $location.absUrl(), 'detail/'+$routeParams.portfolio);

    $http.get('/json/portfolio.json').success(function(data) {
    	for(var i=0; i < data.works.length; i++) {
    		if(data.works[i].key === $routeParams.portfolio) {
    			DetailCtrl.portfolio = data.works[i];
    			DetailCtrl.portfolio.template = 'views/'+ DetailCtrl.portfolio.template;
    			DetailCtrl.portfolio.previouskey = null;
    			DetailCtrl.portfolio.nextkey = null;
    			if (data.works[i-1]) {
    				DetailCtrl.portfolio.previouskey = data.works[i-1].key;
    			}
    			if (data.works[i+1]) {
    				DetailCtrl.portfolio.nextkey = data.works[i+1].key;
    			}
    		}
    	}
    	DetailCtrl.portfolios = data;
    	DetailCtrl.headertemplate = DetailCtrl.portfolios.headertemplate;
    	DetailCtrl.footertemplate = DetailCtrl.portfolios.footertemplate;
    });

  }]);
