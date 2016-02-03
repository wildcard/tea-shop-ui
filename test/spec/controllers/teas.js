'use strict';

describe('Controller: TeasCtrl', function () {

  // load the controller's module
  beforeEach(module('teaShopUiApp'));

  var TeasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TeasCtrl = $controller('TeasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TeasCtrl.awesomeThings.length).toBe(3);
  });
});
