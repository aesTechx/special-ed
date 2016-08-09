angular.module('SED.Centers', [])

.controller('centerController', function ($scope, Services,Auth) {
  $scope.data={};
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
