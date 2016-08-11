angular.module('SED')
  .controller('teacherController', function($scope, $state, Auth) {
    $scope.teacherProfile = function () {
      if (Auth.isAuthteacher()) {
        Auth.signout('com.SEDteacher');
      } else {
        $location.path('/');
      }
    }
    console.log('im here')
  });
