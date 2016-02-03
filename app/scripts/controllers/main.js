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

    var me = this;
    var teas = Restangular.all('teas');

    teas.getList().then(function(teas) {
      me.teas = teas;
    });

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
