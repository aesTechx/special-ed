angular.module('SED.Logout', [])
.controller('LogoutCtrl', function($location, $window, Auth) {
  logout = function () {
    if (Auth.isAuthuser()) {
      Auth.signout('com.SEDuser');
    } else if (Auth.isAuthteacher()) {
      Auth.signout('com.SEDteacher');
    } else if (Auth.isAuthcenter()) {
      Auth.signout('com.SEDcenter');
    } else {
      $window.localStorage.removeItem('typeOfUser');
      $location.path('/login');
    }
  };
  logout();

});
