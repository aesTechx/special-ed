
angular.module('SED.services', [])
.factory ('Record', function ($http) {
  var submitForm = function(form) {
    console.log(form);
    return $http({
      method: 'POST',
      url: '/api/forms/submitForm',
      data: form
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  return {submitForm: submitForm};
})
.factory('Centers', function ($http) {
  getAllCenters=function(){
    return $http({
     method: 'GET',
     url: '/api/centers'
   })
   .then(function (resp) {
    console.log(resp);
     return resp;
     });
    }
  return {
    getAllCenters:getAllCenters
  }
})
.factory('Students', function ($http) {
  getCurrentStudent=function(){
    return $http({
     method: 'GET',
     url: '/api/oneStudent'
   })
   .then(function (resp) {
    console.log(resp);
     return resp;
     });
    }
  return {
    getCurrentStudent:getCurrentStudent
  }
})
.factory('Teachers',function($http){
  getAllTeachers=function(){
      return $http({
     method: 'GET',
     url: '/api/teachers'
   })
   .then(function (resp) {
     return resp;
     });
  }
  return {
    getAllTeachers:getAllTeachers
  }
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signinUser = function (user) {
    console.log(user);
    return $http({
      method: 'POST',
      url: '/api/users/signinUser',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signinTeacher = function (user) {
    console.log(user);
    return $http({
      method: 'POST',
      url: '/api/users/signinTeacher',
      data: user
    })
    .then(function (resp) {
            console.log(resp.data.token)

      return resp.data.token;
    })
    .catch(function(error) {
      console.log(error);
    });
  };


  var signinCenter = function (user) {
    console.log(user);
    return $http ({
      method: 'POST',
      url: '/api/users/signinCenter',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signupUser = function (user) {
    console.log(user)
    return $http({
      method: 'POST',
      url: '/api/student/addstudent',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };
  var signupTeacher = function (user) {
    return $http({
      method: 'POST',
      url: '/api/teacher/addTeacher',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };
  var signupCenter = function (user) {
    return $http({
      method: 'POST',
      url: '/api/center/addCenter',
      data: user
    })
    .then(function (resp) {
      console.log(resp.data);
      return resp.data.token;
    });
  };

  var isAuthuser = function () {
    return !!$window.localStorage.getItem('com.SEDuser');
  };

  var isAuthteacher = function () {
    return !!$window.localStorage.getItem('com.SEDteacher');
  };

  var isAuthcenter = function () {
    return !!$window.localStorage.getItem('com.SEDcenter');
  };

  var signout = function (item) {
    console.log(item);
    $window.localStorage.removeItem(item);
    $location.path('/');
  };

  return {
    signinUser: signinUser,
    signinCenter: signinCenter,
    signupCenter: signupCenter,
    signupUser: signupUser,
    signinTeacher: signinTeacher,
    signupTeacher: signupTeacher,
    isAuthuser: isAuthuser,
    isAuthcenter: isAuthcenter,
    isAuthteacher: isAuthteacher,
    signout: signout
  };
});