'use strict';

/**
 * @ngdoc function
 * @name teaShopUiApp.controller:CartCtrl
 * @description
 * # CartCtrl
 * Controller of the teaShopUiApp
 */
angular.module('teaShopUiApp')
  .controller('CartCtrl', function (ngCart) {
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99); 
  });
