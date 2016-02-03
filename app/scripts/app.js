'use strict';

/**
 * @ngdoc overview
 * @name teaShopUiApp
 * @description
 * # teaShopUiApp
 *
 * Main module of the application.
 */

var app = angular.module('teaShopUiApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'restangular',
  'ngCart'
]);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/teas/:id', {
      templateUrl: 'views/tea.html',
      controller: 'TeaCtrl',
      controllerAs: 'tea'
    })
    .when('/teas', {
      templateUrl: 'views/teas.html',
      controller: 'TeasCtrl',
      controllerAs: 'teas'
    })
    .when('/cart', {
      templateUrl: 'views/cart.html',
      controller: 'CartCtrl',
      controllerAs: 'cart'
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.config(function (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://localhost:3000');
  //RestangularProvider.setExtraFields(['name']);
  //RestangularProvider.setResponseExtractor(function (response, operation) {
  //  return response.data;
  //});
  //
  //RestangularProvider.addElementTransformer('accounts', false, function (element) {
  //  element.accountName = 'Changed';
  //  return element;
  //});
  //
  //RestangularProvider.setDefaultHttpFields({cache: true});
  //RestangularProvider.setMethodOverriders(["put", "patch"]);
  //
  //// In this case we are mapping the id of each element to the _id field.
  //// We also change the Restangular route.
  //// The default value for parentResource remains the same.
  //RestangularProvider.setRestangularFields({
  //  id: "_id",
  //  route: "restangularRoute",
  //  selfLink: "self.href"
  //});
  //
  //RestangularProvider.setRequestSuffix('.json');
  //
  //// Use Request interceptor
  //RestangularProvider.setRequestInterceptor(function (element, operation, route, url) {
  //  delete element.name;
  //  return element;
  //});
  //
  //// ..or use the full request interceptor, setRequestInterceptor's more powerful brother!
  //RestangularProvider.setFullRequestInterceptor(function (element, operation, route, url, headers, params, httpConfig) {
  //  delete element.name;
  //  return {
  //    element: element,
  //    params: _.extend(params, {single: true}),
  //    headers: headers,
  //    httpConfig: httpConfig
  //  };
  //});

});
