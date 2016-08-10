angular.module('SED.Teachers', [])

.controller('teacherController', function ($scope, Services,Auth) {
  $scope.data={};
  $scope.signout=function(){
    Auth.signoutTeacher();
  }
});
