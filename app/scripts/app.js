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
  ]);

  portfolioApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
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
    console.log('translations');
    $translateProvider.translations('en', {
      'TITLE': 'Portfolio for Ryan Wilson',
      'FOO': 'This is a paragraph'
    });
   
    $translateProvider.translations('de', {
      'TITLE': 'Cartera para Ryan Wilson',
      'FOO': 'Dies ist ein Absatz'
    });
   
    $translateProvider.preferredLanguage('en');
  }]);


  portfolioApp.directive('contactModal', function($uibModal) {
    return {
        restrict: 'EA',
        link: function(scope, elem, attrs) {
          elem.bind('click', function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'views/contact.html',
                size: 'sm',
            });

            modalInstance.result.then(function(selectedItem) {
                scope.selected = selectedItem;
            }, function() {});
          });
        }
    };
});

