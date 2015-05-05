'use strict';

describe('Controller: MovieDetailCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var MovieDetailCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MovieDetailCtrl = $controller('MovieDetailCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
