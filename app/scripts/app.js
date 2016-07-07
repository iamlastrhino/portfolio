'use strict';

/**
 * @ngdoc overview
 * @name portfolioApp
 * @description
 * # portfolioApp
 *
 * Main module of the application.
 */
  var portfolioApp = angular
  .module('portfolioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'pascalprecht.translate',
    'ui.bootstrap'
  ])
  .controller('MainCtrl', function($scope, $location) {
    $scope.$location = $location;
  });

  portfolioApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/portfolio.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl',
        controllerAs: 'resume'
      })
      .when('/detail/:portfolio', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'detail'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  portfolioApp.config(['$translateProvider', function ($translateProvider) {
    //translations
    $translateProvider.translations('en', {
      'TITLE': 'Portfolio for Ryan Wilson'
    });
   
    $translateProvider.translations('de', {
      'TITLE': 'Cartera para Ryan Wilson'
    });
   
    $translateProvider.preferredLanguage('en');
  }]);

  portfolioApp.directive('openModal', function($uibModal, $location, analytics) {
    return {
      restrict: 'EA',
      link: function(scope, elem, attrs) {
        elem.bind('click', function() {
          var size = attrs.size || 'lg';
          var modalInstance = $uibModal.open({
              animation: true,
              templateUrl: 'views/'+attrs.template,
              size: size,
              scope: scope,
          });
          analytics.logPageLoad(scope, $location.absUrl(), 'views/'+attrs.template);
          modalInstance.result.then(function(selectedItem) {
              scope.selected = selectedItem;
          }, function() {});
        });
      }
    };
  });

  portfolioApp.directive('closeModal', function($uibModal, $uibModalStack) {
    return {
      restrict: 'EA',
      link: function(scope, elem) {
        elem.bind('click', function() {
        $uibModalStack.dismissAll();
        });
      }
    };
  });

  portfolioApp.directive('detailLink', function($location) {
    return {
      restrict: 'EA',
      link: function(scope, elem, attrs) {
        elem.bind('click', function() {
          $location.url('/detail/'+ attrs.detailKey);
          scope.$apply();
        });
      }
    };
  });

  portfolioApp.service('analytics', function($window) {
    return {
      logPageLoad: function ($scope, absoluteUrl, locationUrl) {
        $window.ga('send', 'pageview', {page: locationUrl});
      }
    };
  });

