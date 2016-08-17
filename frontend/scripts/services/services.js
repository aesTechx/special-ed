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
    })
  };
  return {submitForm: submitForm};
})

.factory('Centers', function ($http) {
  var getAllCenters=function(){
    return $http({
      method:'GET',
      url: '/api/centers',
    })
    .then(function(resp){
      return resp.data;
    })
  }
  return {
    getAllCenters:getAllCenters
  };
})
.factory('Teachers', function($http){
  var getCurrentTeacher=function(){
    console.log("here")
    return $http({
      method:'GET',
      url:'/api/teachers/currentteacher'
    })
    .then(function(resp){
      console.log(resp.data);
      return resp.data;
    })
  }
  return{
    getCurrentTeacher:getCurrentTeacher
  }
})
.factory('Students', function($http) {
  var getCurrentStudent=function(){
    return $http({
      method:'GET',
      url:'/api/students/currentStudent'
    })
    .then(function(resp){
      return resp.data;
    })
  }
  var viewTeachers=function(){
     return $http({
      method:'GET',
      url:'/api/students/specialists'
    })
    .then(function(resp){
      return resp.data;
    })
  }
  var viewGames=function(){
    return $http({
      method:'GET',
      url:'/api/students/games'
    })
    .then(function(resp){
      return resp.data;
    })
  }
  var viewRecords=function(){
    return $http({
      method:'GET',
      url:'/api/students/records'
    })
    .then(function(resp){
      return resp.data;
    })
  }
  var editProfile=function(user){
     return $http({
      method:'POST',
      url:'/api/students/editProfile',
      data: user
    })
    .then(function(resp){
      return resp.data;
    })
  }
  var getRecords=function(){
    return $http({
      method:'GET',
      url:'/api/form/student'
    })
    .then(function(resp){
      return resp.data;
    })
  }
  return {
    getCurrentStudent:getCurrentStudent,
    viewTeachers:viewTeachers,
    viewGames:viewGames,
    viewRecords:viewRecords,
    editProfile:editProfile,
    getRecords:getRecords
  };
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
      url: '/api/students/signin',
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
      url: '/api/centers/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signupUser = function (user) {
    return $http({
      method: 'POST',
      url: '/api/students/signup',
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
    console.log(user)
    return $http({
      method: 'POST',
      url: '/api/centers/signup',
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