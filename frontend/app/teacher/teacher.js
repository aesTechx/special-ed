angular.module('SED.Teachers', [])

.controller('teacherController', function ($scope, Services,Auth) {
  $scope.data={};
  //$scope.data.orders=[{order_id:"5",fullname:"eshraq",phoneNumber:"0799999",address:"amman",quentity:"2"},{order_id:"4",fullname:"hussam",phoneNumber:"079ddd9",address:"irbid",quentity:"3"}];
  	Services.getAllOrders().then(function(data){
  		$scope.data.orders=data.data;
      console.log(data.data)
  	})
  	.catch(function(err){
  		console.error(err);
  	});
  $scope.delivered=function(index){
  	console.log(index);
  	Services.delivered($scope.data.orders[index].order_id);//order_id depend on database
    $scope.data.orders.splice(index, 1);
  }
  $scope.signout=function(){
    Auth.signoutProvider();
  }
});
