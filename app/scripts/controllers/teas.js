'use strict';

/**
 * @ngdoc function
 * @name teaShopUiApp.controller:TeasCtrl
 * @description
 * # TeasCtrl
 * Controller of the teaShopUiApp
 */
angular.module('teaShopUiApp')
  .controller('TeasCtrl', function (Restangular) {

    // TODO: query/filter

    var me = this;
    var teas = Restangular.all('teas');

    teas.getList().then(function(teas) {
      me.teas = teas.map(function (tea) {
        tea.price = parseFloat(tea.price);
        return tea;
      });
    });
  });
