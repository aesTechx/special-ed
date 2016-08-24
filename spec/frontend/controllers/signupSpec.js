describe('SignUp Controller', function() {
  beforeEach(function () {
    module('SED.services');
    module('SED.Signup');
  });

  var $controller;
  var Auth;
  var controller;
  var $q;
  beforeEach(inject(function(_$controller_, _Auth_, _$q_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $q = _$q_;
    $controller = _$controller_;
    Auth = _Auth_;
  }));

  describe('change selection', function() {
    it('sets selected student to true', function() {
      var $scope = {};
      controller = $controller('SignupCtrl', { $scope: $scope });
      $scope.option = 'Student';
      $scope.changeSelect();
      expect($scope.studentSelected).toEqual(true);
    });
  });
  describe('submit to server', function () {
    it ('if option is Teacher it should send to signupTeacher', function () {
      var $scope = {};
      var hasBeenCalled = false;
      var promise = function(user) { 
        return new Promise(function (resolve, reject) {
          hasBeenCalled = true;
          return resolve(user);
        }); };
      var Auth = {signupTeacher: promise};
      controller = $controller('SignupCtrl', { $scope: $scope, Auth: Auth});
      $scope.option = 'Teacher';
      $scope.user = {username: 'x'};
      $scope.submit();
      expect(hasBeenCalled).toEqual(true);
    });
  });
});