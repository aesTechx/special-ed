var App = angular.module('drag-and-drop', ['ngDragDrop']);

      App.controller('oneCtrl', function($scope, $timeout) {
        $scope.images = [{'thumb': '1.png'},{'thumb': '2.png'},{'thumb': '3.png'},{'thumb': '4.png'}]
        $scope.list1 = [];
        $scope.ch=false;
        $scope.true1=false;
        $scope.false1=false;
        $scope.right=["Fish","Rabbit","Tiger","Dog"];
        angular.forEach($scope.images, function(val, key) {
          $scope.list1.push({});
        });
        $scope.list2 = [
          { 'title': 'Dog', 'drag': true },
          { 'title': 'Tiger', 'drag': true },
          { 'title': 'Rabbit', 'drag': true },
          { 'title': 'Fish', 'drag': true }
        ];

        $scope.startCallback = function(event, ui, title) {
          $scope.draggedTitle = title.title;
        };

        $scope.dropCallback = function(event, ui) {
            if($scope.list1[0].title!==undefined && $scope.list1[1].title!==undefined && $scope.list1[2].title!==undefined && $scope.list1[3].title!==undefined){
              console.log($scope.list1);
              $scope.ch=true;
            }
        };

        $scope.check=function(){
          $scope.ch=false;
          var Answer=true;
          for (var i=0;i<$scope.list1.length;i++){
            if($scope.list1[i].title!==$scope.right[i]){
              Answer=false;
            }
          }
          if(Answer===true){
            $scope.true1=true;
          }else{
            $scope.false1=true;
          }
          return Answer;
        }
      });