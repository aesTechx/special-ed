angular.module('SED.multiForms', ['ngAnimate', 'ui.bootstrap'])
// controller for creating multi form in one view one after one
.controller('assessmentController', function assessmentController ($scope, $location, $log, $uibModal, Assessment, Record, Students) {
  $scope.counter = 0;
  $scope.list = {};
  var Qnum;
  var finalScore = { "social": 0, "preservation": 0, "sensoryDisturbance": 0, "communicationAndDevelopment": 0, "attentionAndSafety": 0 };
  var savedAssessmentQs = {};
  $scope.showSavedAs = false;
  $scope.totalNumberOfQuestions = 76;
  $scope.showAllQs = false;
  $scope.animationsEnabled = true;
  $scope.data = {};
  
  $scope.open = function (size) {
    var modalInstance = $uibModal.open( {
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: function ($scope, $location, $uibModalInstance, Record) {
        $scope.ok = function () {
          $uibModalInstance.close (finalScore);
        };
        $scope.cancel = function () {
          $uibModalInstance.dismiss ('cancel');
        };
      },
      size: size,
      resolve: {
        finalScore: function () {
          return finalScore;
        }
      }
    });
    modalInstance.result.then(function (finalScore) {
      Record.submitForm(finalScore)
      .then(function(data) {
        $location.path('/dashboard/profile')
      })
      .catch (function (error) {
      } );
    }, function () {
      $log.info ('Modal dismissed at: ' + new Date ());
    });
  };
  $scope.saveAs = function (questions) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalSaveAs.html',
      controller: function($scope, $uibModalInstance, $location) {
        $scope.savedAssessment = {};
        $scope.ok = function () {
          $scope.savedAssessment.questions = savedAssessmentQs;
          $uibModalInstance.close($scope.savedAssessment);
        };
        $scope.cancel = function () {
          $uibModalInstance.dismiss('cancel');
        };
      },
      resolve: {
        savedAssessment: function () {
          return $scope.savedAssessment;
        }
      }
    });
    modalInstance.result.then(function (savedAssessment) {
      $location.path('/dashboard/overview')
      Assessment.save(savedAssessment)
      .then(function (resp) {
        $location.path('/dashboard/assessment')
      })
      .catch(function (err) {
        alert('error occured, please contact admin')
      })
    }, function () {
      $log.info ('Modal dismissed at: ' + new Date ());
    });
  };
  $scope.start = function () {
    $scope.readyToStart = false;
    $scope.currentQuestion = $scope.list.questions[Qnum];
  };
  $scope.showAll = function () {
    $scope.showAllQs = !$scope.showAllQs;
  };
  $scope.nextQuestion = function () {
    console.log($scope.currentQuestion)
    if ($scope.currentQuestion.value) {
      finalScore[$scope.currentQuestion.field] += (JSON.parse($scope.currentQuestion.value) * (20 / JSON.parse($scope.currentQuestion.Weight)));
    }
    Qnum++;
    if (Qnum < 76) {
      $scope.currentQuestion = $scope.list.questions[Qnum];
    } else if (Qnum === 76) {
      var j = 0;
      for (var i = 0; i < $scope.list.questions.length; i++) {
        if ($scope.list.questions.value) {
          j++;
        }
      }
      // if (j === 76) {
        $scope.readyToSubmit = true;
      // } else {
      //   alert('Please complete all questions before you can submit')
      // }
    }
  };
  $scope.showSaved = function () {
    Assessment.getAssessments()
    .then(function (resp) {
      $scope.data.savedAssessments = resp
      $scope.showSavedAs = true;
    })
    .catch(function (error) {
      alert('error occured, please contact admin')
    })
  }
  $scope.saveAndContinue = function () {
    for (var i = 0; i < $scope.list.questions.length; i++) {
      savedAssessmentQs[$scope.list.questions[i].questionNum.toString()] = JSON.parse($scope.list.questions[i].value);
    }
    $scope.saveAs(savedAssessmentQs);
  };
  $scope.goToQuestion = function (no) {
    Qnum = no;
    $scope.showAllQs = !$scope.showAllQs;
    $scope.currentQuestion = $scope.list.questions[no];
  };
  $scope.showSelectedAssessment = function (assessment) {
    var j = 0;
    for (var i in assessment.questions){
      $scope.list.questions[j].value = assessment.questions[i]
      j++;
    }
    $scope.showSavedAs = false;
    $scope.start();
  };
  $scope.backHome = function () {
    $scope.readyToStart = true;
    $scope.showAllQs = false;
    $scope.showSavedAs = false;
  }
  $scope.initialize = function () {
    $scope.readyToSubmit = false;
    $scope.readyToStart = true;
    Assessment.getNew()
    .then(function (data) {
      $scope.list.questions = data;
    })
    Qnum = 0;
  };
  $scope.result = [];
  $scope.initialize ();
});
