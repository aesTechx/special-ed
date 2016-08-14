    var states = [
        { name: 'base', state: { abstract: true, url: '', templateUrl: 'views/base.html', data: {text: "Base", visible: false } } },
        { name: 'login', state: { url: '/login', parent: 'base', templateUrl: 'views/login.html', controller: 'LoginCtrl', data: {text: "Login", visible: false } } },
        { name: 'dashboard', state: { url: '/dashboard', parent: 'base', templateUrl: 'views/dashboard.html', controller: 'DashboardCtrl', data: {text: "Dashboard", visible: false } } },
        { name: 'overview', state: { url: '/overview', parent: 'dashboard', templateUrl: 'views/dashboard/overview.html', controller: 'OverviewCtrl', data: {text: "Overview", visible: true } } },
        { name: 'reports', state: { url: '/reports', parent: 'dashboard', templateUrl: 'views/dashboard/reports.html', data: {text: "Reports", visible: true } } },
        { name: 'logout', state: { url: '/login', data: {text: "Logout", visible: true }} },
        { name: 'signup', state: { url: '/signup', parent: 'base', templateUrl: 'views/signup.html',  controller: 'SignupCtrl', data: {text: "SignUp", visible: false }} },
        { name: 'play', state: { url: '/play', parent: 'dashboard', templateUrl: 'views/dashboard/game.html',  controller: 'MainController', data: {text: "Play Game", visible: true }} },
        { name: 'assessment', state: { url: '/assessment', parent: 'dashboard', templateUrl: 'views/dashboard/assessmentForm.html',  controller: 'assessmentController', data: {text: "C.A.R.S Assessment", visible: true }} },
        { name: 'profile', state: { url: '/profile', parent: 'dashboard', templateUrl: 'views/dashboard/profileStudent.html',  controller: 'studentController', data: {text: "Profile", visible: true }}}
    ];
   
angular.module('SED', [
                // 'SED.student',
                'dragDropSampleApp',
                'SED.multiForms',
                'SED.services',
                'ngRoute',
                'ngAnimate',
                'ngTouch',
                'ngResource',
                'ui.bootstrap',
                'ui.router',
                'snap',
                'ngAnimate'
            ])
.config(function($stateProvider, $urlRouterProvider,$routeProvider,$httpProvider) {
    $urlRouterProvider.when('/dashboard', '/dashboard/overview');
    $urlRouterProvider.otherwise('/login');

    angular.forEach(states, function (state) {
        $stateProvider.state(state.name, state.state);
    });
    $httpProvider.interceptors.push('AttachTokens');
})

.factory('AttachTokens', function ($window) {
  // this is an $httpInterceptor
  // its job is to stop all out going request
  // then look in local storage and find the user's token
  // then add it to the header so the server can validate the request
  var attach = {
    request: function (object) {
      console.log("attach")
      var jwt = $window.localStorage.getItem('com.GSstudent');
      console.log(jwt)
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
});

// // .run(function ($rootScope, $location, Auth) {
//   // here inside the run phase of angular, our services and controllers
//   // have just been registered and our app is ready
//   // however, we want to make sure the user is authorized
//   // we listen for when angular is trying to change routes
//   // when it does change routes, we then look for the token in localstorage
//   // and send that token to the server to see if it is a real user or hasn't expired
//   // if it's not valid, we then redirect back to signin/signup
//   $rootScope.$on('$routeChangeStart', function (evt, next, current) {
//     if ($location.path()==='/user' &&next.$$route && next.$$route.authenticate && !Auth.isAuthuser()) {
//       $location.path('/signinUser');
//     } 
//     else if ( $location.path()!== '/user' && $location.path() !== '/center'&&next.$$route && next.$$route.authenticate && !Auth.isAuthteacher()) {
//       $location.path('/signinTeacher');
//     }
//     else if ( $location.path()!== '/user' && $location.path()!== '/teacher'&&next.$$route && next.$$route.authenticate && !Auth.isAuthcenter()) {
//       $location.path('/signinCenter');
//     }
//   });
// }); 