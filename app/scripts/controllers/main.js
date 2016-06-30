'use strict';

/**
 * @ngdoc function
 * @name portfolioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolioApp
 */
angular.module('portfolioApp')
  .controller('MainCtrl', ['$http',  function ($http) {
  	var MainCtrl = this;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      '$http'
    ];

    $http.get('/json/portfolio.json').success(function(data) {
    	MainCtrl.portfolios = data;
    	console.log(MainCtrl.portfolios);
    });
  }]);
