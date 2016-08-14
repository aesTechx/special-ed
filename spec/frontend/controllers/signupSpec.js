describe('SignUp Controller', function() {
   beforeEach(function () {
      module('SED.services');
      module('SED.Signup');
  });

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('change selection', function() {
    it('sets selected student to true', function() {
      var $scope = {};
      var controller = $controller('SignupCtrl', { $scope: $scope });
      console.log(controller)
      $scope.option = 'Student';
      $scope.changeSelect();
      expect($scope.studentSelected).toEqual(true);
    });
  });
});