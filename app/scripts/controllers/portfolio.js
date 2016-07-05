'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:PortfolioCtrl
 * @description
 * # PortfolioCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('PortfolioCtrl', ['$http',  function ($http) {
  	var PortfolioCtrl = this;

    $http.get('/json/portfolio.json').success(function(data) {
    	PortfolioCtrl.portfolios = data;
    	PortfolioCtrl.headertemplate = PortfolioCtrl.portfolios.headertemplate;
    	PortfolioCtrl.footertemplate = PortfolioCtrl.portfolios.footertemplate;
    });

  }]);
