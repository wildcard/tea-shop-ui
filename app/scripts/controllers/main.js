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
    var teas = Restangular.all('teas').all('featured');

    teas.getList().then(function(teas) {
      me.teas = teas;
    });
  });
