'use strict';

/**
 * @ngdoc function
 * @name teaShopUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the teaShopUiApp
 */
angular.module('teaShopUiApp')
  .controller('MainCtrl', function (Restangular) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
