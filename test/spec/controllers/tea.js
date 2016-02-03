'use strict';

describe('Controller: TeaCtrl', function () {

  // load the controller's module
  beforeEach(module('teaShopUiApp'));

  var TeaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeaCtrl = $controller('TeaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeaCtrl.awesomeThings.length).toBe(3);
  });
});
