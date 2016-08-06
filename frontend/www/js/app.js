// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
/*angular.module('starter', ['ionic'])


.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})*/



angular.module('ionicApp', ['ionic'])


.controller('Login', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    console.log("test login")
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

})

// Sign-up functions
.controller('SignUp', function($scope, $ionicModal, $timeout) {
$scope.signUpData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/signUp.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeSignUp = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.signUp = function() {
    console.log("test signUp")
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doSignUp = function() {
    console.log('Doing signUp', $scope.signUpData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeSignUp();
    }, 1000);
  };

})



.controller("ExampleController", function($scope, $http) {
    $scope.sendForm = function(formData) {
      $http({ 
             method:'POST', 
             url: '/main', 
             data: formData 
        })
        .then(
            function(result) { 
                alert("The form was sent"); 
            },
            function(reason) { 
                alert("There was a problem"); 
            }
        );
        //alert("username: " + username);
        console.log(formData);
    }
})




.controller("MainCtrl",function(){
  console.log("Main Controller says: Hello World");
})





.config(function($stateProvider, $urlRouterProvider){
  $stateProvider

  .state('main', {
    url: "/main",
    templateUrl: "templates/main.html",
    controller: 'Login'
  })
  
  .state('page2', {
    url: "/page2",
    templateUrl: "templates/page2.html",
    controller: 'MainCtrl'
  })

  .state('login', {
    url: "/login",
    templateUrl: "templates/login.html",
    controller: 'AppCtrl'
  })
  
  .state('signUp', {
    url: "/signUp",
    templateUrl: "templates/signUp.html",
    controller: 'SignUp'
  })


  .state('form1', {
    url: "/form1",
    templateUrl: "templates/form1.html",
    controller: 'MainCtrl'
  })



  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');
});

