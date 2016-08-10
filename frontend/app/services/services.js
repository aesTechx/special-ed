angular.module('SED.services', [])

.factory ('Record', function ($http) {
	var submitForm = function(form){
	console.log(form)
	return $http({
		method: 'POST',
		url: '/api/forms/submitForm',
		data: form
	})
	.then(function (resp) {
		return resp.data;
	});
	}
return {submitForm: submitForm}
})

.factory('Services',function($http){

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
	return $http({
		method: 'POST',
		url: '/api/users/signinTeacher',
		data: user
	})
	.then(function (resp) {
		return resp.data.token;
	});
	};

	var signinCenter = function (user) {
	return $http({
		method: 'POST',
		url: '/api/users/signinCenter',
		data: user
	})
	.then(function (resp) {
		return resp.data.token;
	});
	};

	var signupUser = function (user) {
	return $http({
		method: 'POST',
		url: '/api/users/signupUsers',
		data: user
		})
	.then(function (resp) {
		return resp.data.token;
		});
	};
	var signupTeacher= function (user) {
	return $http({
		method: 'POST',
		url: '/api/users/signupTeacher',
		data: user
	})
	.then(function (resp) {
		return resp.data.token;
		});
	};
	var signupCenter= function (user) {
	return $http({
		method: 'POST',
		url: '/api/users/signupCenter',
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

	var signoutUser = function () {
	$window.localStorage.removeItem('com.SEDuser');
	$location.path('/');
	};

	var signoutTeacher = function () {
	$window.localStorage.removeItem('com.SEDteacher');
	$location.path('/');
	};

	var signoutCenter = function () {
	$window.localStorage.removeItem('com.SEDcenter');
	$location.path('/');
	};

	return {
	signinUser: signinUser,
	signupUser: signupUser,
	signinTeacher: signinTeacher,
	signupTeacher: signupTeacher,
	isAuthuser: isAuthuser,
	isAuthcenter: isAuthcenter,
	isAuthteacher: isAuthteacher,
	signoutUser: signoutUser,
	signoutTeacher: signoutTeacher,
	signoutCenter:signoutCenter
	};
});