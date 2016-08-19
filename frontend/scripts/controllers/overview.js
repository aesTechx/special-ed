angular.module ('SED.Overview', [])
.controller('OverviewCtrl', function ($scope, $state, Auth, $location) {
  // $scope.logout = function () {
  //   if (Auth.isAuthuser()) {
  //     console.log(1)
  //     Auth.signout('com.SEDuser');
  //   } else if (Auth.isAuthteacher()) {
  //     console.log(2)
  //     Auth.signout('com.SEDteacher');
  //   } else if (Auth.isAuthcenter()) {
  //     console.log(3)
  //     Auth.signout('com.SEDcenter');
  //   } else {
  //     console.log(4)
  //     $location.path('/login');
  //   }
  // };
});
