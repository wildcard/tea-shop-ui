'use strict';

/**
 * @ngdoc function
 * @name teaShopUiApp.controller:TeaCtrl
 * @description
 * # TeaCtrl
 * Controller of the teaShopUiApp
 */
angular.module('teaShopUiApp')
  .controller('TeaCtrl', function (Restangular, $routeParams) {

    var me = this;
    var tea = Restangular.one('teas', $routeParams.id);

    tea.get().then(function(tea) {
      me.details = tea;
    });

  });
