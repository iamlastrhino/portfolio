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

  portfolioApp.directive('openModal', function($uibModal) {
    return {
      restrict: 'EA',
      link: function(scope, elem, attrs) {
        elem.bind('click', function() {
          var size = attrs.size || 'lg';
          var modalInstance = $uibModal.open({
              animation: true,
              templateUrl: 'views/modals/'+attrs.template,
              size: size,
              scope: scope,
          });
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

