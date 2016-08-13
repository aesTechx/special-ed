angular.module ('SED')
.controller('OverviewCtrl', function ($scope, $state, Auth) {
  $scope.logout = function () {
    if (Auth.isAuthuser()) {
      Auth.signout('com.SEDuser');
    } else if (Auth.isAuthteacher()) {
      Auth.signout('com.SEDteacher');
    } else if (Auth.isAuthcenter()) {
      Auth.signout('com.SEDcenter');
    } else {
      $location.path('/');
    }
  };
});
