// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller("ExampleController", function($scope, $http) {
    $scope.sendForm = function(formData) {
      $http({ 
             method:'POST', 
             url: '...', 
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

.config(function($stateProvider) {
   $stateProvider
   .state('index', { url: '/index', templateUrl: '../index.html'})
   .state('form1', {url: '/form1', templateUrl: '../templates/form1.html'});
})

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
})


