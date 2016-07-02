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
console.log(attrs);
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
      link: function(scope, elem, attrs) {
        elem.bind('click', function() {
        $uibModalStack.dismissAll();
        });
      }
    };
  });

  $(window).on('popstate', function() {
  alert('Back button was pressed.');
});
