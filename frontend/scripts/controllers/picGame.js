var App = angular.module('drag-and-drop', ['ngDragDrop']);

      App.controller('oneCtrl', function($scope, $timeout) {
        $scope.images = [{'thumb': '1.png'},{'thumb': '2.png'},{'thumb': '3.png'},{'thumb': '4.png'}]
        $scope.list1 = [];
        $scope.right=["Fish","Rabbit","Lion","Dog"]
        angular.forEach($scope.images, function(val, key) {
          $scope.list1.push({});
        });
        $scope.list2 = [
          { 'title': 'Dog', 'drag': true },
          { 'title': 'Lion', 'drag': true },
          { 'title': 'Rabbit', 'drag': true },
          { 'title': 'Fish', 'drag': true }
        ];

        $scope.startCallback = function(event, ui, title) {
          //console.log('You started draggin: ' + title.title);
          $scope.draggedTitle = title.title;
        };

        $scope.stopCallback = function(event, ui) {
          //console.log('Why did you stop draggin me?');
          //console.log($scope.list1[0].title);
          // for(var i=0;i<$scope.list1.length;i++){
          //   if($scope.list1[i].title!==undefined){
          //    // console.log("not undefined")
          //     if($scope.list1[i].title!==$scope.right[i]){
          //       console.log($scope.list1[i].title);
          //       //event.originalPosition={"left":0,"top":0};
          //       //ui('option','revert',true);
          //     }
          //   }
          // }
         // console.log(ui);
        };

        $scope.dragCallback = function(event, ui) {
          //console.log('hey, look I`m flying');
        };

        $scope.dropCallback = function(event, ui) {
          //console.log('hey, you dumped me :-(' , $scope.draggedTitle);
         // $scope=
        };

        $scope.overCallback = function(event, ui) {
          //console.log('Look, I`m over you');
        };

        $scope.outCallback = function(event, ui) {
          //console.log('I`m not, hehe');
        };
        $scope.check=function(){
          // var Answer=true;
          // for (var i=0;i<$scope.list1.length;i++){
          //   if($scope.list1[i]!==$scope.right){
          //     Answer=false;
          //   }
          // }
          // console.log(Answer)
          // return Answer;
        }
      });