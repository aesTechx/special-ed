angular.module('SED.Profile', [])
.controller('ProfileCtrl', function($location, $window) {
  var route = function () {
    console.log('route')
    if ($window.localStorage.getItem('typeOfUser') === 'student') {
      console.log('student')
      $location.path('/dashboard/studentProfile');
    } else if ($window.localStorage.getItem('typeOfUser') === 'teacher') {
      console.log('teacher')
      $location.path('/dashboard/teacherProfile');      
    } else if ($window.localStorage.getItem('typeOfUser') === 'center'){
      console.log('it is a center', $window.localStorage.getItem('com.SEDcenter'))
      $location.path('/dashboard/centerProfile');      
    }
  }
  route();

});
