angular.module('SED.services', [])

.factory ('Record', function ($http) {
  var submitForm = function(form) {
    return $http({
      method: 'POST',
      url: '/api/forms/submitForm',
      data: form
    })
    .then(function (resp) {
      return resp.data;
    })
  }
  var getAll = function(){
    return $http({
      method:'GET',
      url:'/api/forms'
    })
    .then(function(resp){
      return resp.data
    })
  }
  return {
    submitForm: submitForm,
    getAll:getAll
  };
})
.factory('ApiKeys', function ($http) {
  getImgurApi = function () {
    return $http ({
      method:'GET',
      url: '/api/imgurKey'
    })
    .then(function (resp) {
      return resp.data;
    })
  }
  getGmapApi = function () {
    return $http ({
      method:'GET',
      url: '/api/gmapKey'
    })
    .then(function (resp) {
      return resp.data;
    })
  }
  return {
    getImgurApi: getImgurApi,
    getGmapApi: getGmapApi
  }
})
.factory('Assessment', function ($http) {
  var getNew = function () {
    return $http({
      method: 'GET',
      url: '/api/assessments/cars/new',
    })
    .then(function (resp) {
      return resp.data;
    })
  };
  var save = function (assessment) {
    return $http({
      method: 'POST',
      url: '/api/assessments/cars/save',
      data: assessment
    })
    .then(function (resp) {
      return resp;
    })
  }
  var getAssessments = function () {
    return $http({
      method: 'GET',
      url: '/api/assessments/cars/assessments'
    })
    .then(function (resp) {
      return resp.data;
    })
  }
  return {
    getNew: getNew,
    save: save,
    getAssessments: getAssessments
  }
})
.factory('Centers', function ($http) {
  var editProfile=function(user){
     return $http({
      method:'POST',
      url:'/api/centers/editProfile',
      data: user
    })
    .then(function(resp){
      return resp.data;
    })
  }
  var getAllCenters=function(){
    return $http({
      method:'GET',
      url: '/api/centers',
    })
    .then(function(resp){
      return resp.data;
    })
  }
  var getCurrentCenter=function(){
    return $http({
      method:'GET',
      url:'/api/center'
    })
    .then(function(resp){
      return resp.data;
    })
  }
  var getTeachers=function(){
    return $http({
      method:'GET',
      url:'/api/center/teachers'
    })
    .then(function(resp){
      return resp.data;
    })
  }
  var getStudents=function(){
     return $http({
      method:'GET',
      url:'/api/center/students'
    })
    .then(function(resp){
      return resp.data;
    })
  }
  return {
    editProfile:editProfile,
    getStudents:getStudents,
    getTeachers:getTeachers,
    getCurrentCenter: getCurrentCenter,
    getAllCenters:getAllCenters
  };
})
.factory('Teachers', function($http){
  var getCurrentTeacher=function(){
    return $http({
      method:'GET',
      url:'/api/specialists/currentteacher'
    })
    .then(function(resp){
      return resp.data;
    })
  }
  var getTeacher=function(id){
    return $http({
      method:'GET',
      url:'/api/specialists/teacher/' + id
    })
    .then(function(resp){
      return resp.data;
    })
  }
  var viewStudents=function(){
    return $http({
      method:'GET',
      url:'/api/specialists/students'
    })
    .then(function(resp){
      return resp.data;
    })
  }
  return{
    getCurrentTeacher: getCurrentTeacher,
    viewStudents: viewStudents,
    getTeacher: getTeacher
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
  var addTeacher=function(id){
    return $http({
      method:'POST',
      url:'/api/student/addstudent',
      data: id
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
    getRecords:getRecords,
    addTeacher:addTeacher
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
  var signinStudent = function (user) {
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
    return $http({
      method: 'POST',
      url: '/api/specialists/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    })
    .catch(function(error) {
      console.log(error);
    });
  };

  var signinCenter = function (user) {
    return $http ({
      method: 'POST',
      url: '/api/centers/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signupStudent = function (user) {
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
      url: '/api/specialists/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };
  var signupCenter = function (user) {
    return $http({
      method: 'POST',
      url: '/api/centers/signup',
      data: user
    })
    .then(function (resp) {
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
  var requestPassStudent = function(email){
    return $http({
      method : 'GET',
      url : '/api/students/requestPass/' + email
    })
    .then(function(res){
      return res;
    })
  };
  var requestPassTeacher = function(email){
    return $http({
      method : 'GET',
      url : '/api/specialists/requestPass/' + email
    })
    .then(function(res){
      return res;
    })
  }
  var requestPassCenter = function(email){
    return $http({
      method : 'GET',
      url : '/api/centers/requestPass/' + email
    })
    .then(function(res){
      return res;
    })
  }
  return {
    signinStudent: signinStudent,
    signinCenter: signinCenter,
    signupCenter: signupCenter,
    signupStudent: signupStudent,
    signinTeacher: signinTeacher,
    signupTeacher: signupTeacher,
    isAuthuser: isAuthuser,
    isAuthcenter: isAuthcenter,
    isAuthteacher: isAuthteacher,
    requestPassStudent: requestPassStudent,
    requestPassTeacher: requestPassTeacher,
    requestPassCenter: requestPassCenter
  };
});