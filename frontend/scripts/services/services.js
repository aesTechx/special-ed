angular.module('SED.services', [])
.factory ('Record', function ($http) {
  var submitForm = function(form) {
    //Submit final assessment result
    return $http({
      method: 'POST',
      url: '/api/forms/submitForm',
      data: form
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  var getAll = function () {
    //Get all assessments
    return $http({
      method: 'GET',
      url: '/api/forms'
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  return {
    submitForm: submitForm,
    getAll: getAll
  };
})
.factory('ApiKeys', function ($http) {
  getImgurApi = function () {
    //Get imgur API key from backend
    return $http ({
      method: 'GET',
      url: '/api/imgurKey'
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  getGmapApi = function () {
    //Get google map API from backend
    return $http ({
      method: 'GET',
      url: '/api/gmapKey'
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  return {
    getImgurApi: getImgurApi,
    getGmapApi: getGmapApi
  };
})
.factory('Assessment', function ($http) {
  var getNew = function () {
    // Load a new assessment form with empty answers
    return $http({
      method: 'GET',
      url: '/api/assessments/cars/new',
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  var save = function (assessment) {
    // Save assessment answers to view later
    return $http({
      method: 'POST',
      url: '/api/assessments/cars/save',
      data: assessment
    })
    .then(function (resp) {
      return resp;
    });
  };
  var getAssessments = function () {
    // Get saved assessments
    return $http({
      method: 'GET',
      url: '/api/assessments/cars/assessments'
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  return {
    getNew: getNew,
    save: save,
    getAssessments: getAssessments
  };
})
.factory('Centers', function ($http) {
  var editProfile = function(user) {
    //Edit center profile
    return $http({
      method: 'POST',
      url: '/api/centers/editProfile',
      data: user
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  var getAllCenters = function() {
    //Get all centers from database
    return $http({
      method: 'GET',
      url: '/api/centers',
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  var getCurrentCenter = function () {
    //Get logged in center information from DB
    return $http({
      method: 'GET',
      url: '/api/center'
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  var getCenter = function (id) {
    //Get center with id from database
    return $http({
      method: 'GET',
      url: '/api/center/else/' + id
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  var getTeachers = function () {
    //Get center's teachers
    return $http({
      method: 'GET',
      url: '/api/center/teachers'
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  var getStudents = function () {
    //Get center's students
    return $http({
      method: 'GET',
      url: '/api/center/students'
    })
    .then(function (resp) {
      return resp.data;
    });
  };
  return {
    editProfile: editProfile,
    getStudents: getStudents,
    getTeachers: getTeachers,
    getCurrentCenter: getCurrentCenter,
    getAllCenters: getAllCenters,
    getCenter: getCenter
  };
})
.factory ('Teachers', function ($http) {
  var getCurrentTeacher = function () {
    //Get current teacher's profile info
    return $http({
      method: 'GET',
      url: '/api/specialists/currentteacher'
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  var getTeacher = function (id) {
    //Get selected teacher's profile info
    return $http({
      method: 'GET',
      url: '/api/specialists/teacher/else/' + id
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  var viewStudents = function () {
    //Get teacher's students
    return $http({
      method: 'GET',
      url: '/api/specialists/students'
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  return {
    getCurrentTeacher: getCurrentTeacher,
    viewStudents: viewStudents,
    getTeacher: getTeacher
  };
})
.factory ('Students', function ($http) {
  var getCurrentStudent = function () {
    //get current students
    return $http({
      method: 'GET',
      url: '/api/students/currentStudent'
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  var getStudent = function (id) {
    //get student's profile info
    return $http({
      method: 'GET',
      url: '/api/students/currentStudent/else/' + id
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  var viewTeachers = function () {
    //get student's teachers
    return $http({
      method: 'GET',
      url: '/api/students/specialists'
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  var viewGames = function () {
    //get student's games
    return $http({
      method: 'GET',
      url: '/api/students/games'
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  var viewRecords = function () {
    //get student's records (assessment's results)
    return $http({
      method: 'GET',
      url: '/api/students/records'
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  var editProfile = function (user) {
    //Edit student's profile
    return $http({
      method: 'POST',
      url: '/api/students/editProfile',
      data: user
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  var getRecords = function () {
    //Get all students records
    return $http({
      method: 'GET',
      url: '/api/form/student'
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  var addTeacher = function (id) {
    //Add teacher to student
    return $http({
      method: 'POST',
      url: '/api/student/addstudent',
      data: id
    })
    .then(function(resp) {
      return resp.data;
    });
  };
  return {
    getCurrentStudent: getCurrentStudent,
    viewTeachers: viewTeachers,
    viewGames: viewGames,
    viewRecords: viewRecords,
    editProfile: editProfile,
    getRecords: getRecords,
    addTeacher: addTeacher,
    getStudent: getStudent
  };
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.SEDuser'
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
    return !!$window.localStorage.getItem('com.SEDuser');
  };

  var isAuthcenter = function () {
    return !!$window.localStorage.getItem('com.SEDuser');
  };
  var requestPassStudent = function(email) {
    //Request new password
    return $http({
      method: 'GET',
      url: '/api/students/requestPass/' + email
    })
    .then(function(res) {
      return res;
    });
  };
  var requestPassTeacher = function(email) {
    //Request new password
    return $http({
      method: 'GET',
      url: '/api/specialists/requestPass/' + email
    })
    .then(function(res) {
      return res;
    });
  };
  var requestPassCenter = function(email) {
    //Request new password
    return $http({
      method: 'GET',
      url: '/api/centers/requestPass/' + email
    })
    .then(function(res) {
      return res;
    });
  };
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