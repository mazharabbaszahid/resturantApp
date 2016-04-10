/**
 * Created by Zahid on 4/10/2016.
 */
angular.module('starter')

.controller('loginController',function($scope,$state,loginUsers){
    console.log('login controller');
  $scope.login=function(){
    loginUsers.loginUser();
}
})

  .controller("homeController", function($scope,$state,loginUsers){
    $scope.userList = loginUsers.getUser();
    $scope.user=localStorage.getItem('name');
   console.log('homeController');
    $scope.restaurants=loginUsers.restaurantList();

    $scope.resDetail=function(name){
      console.log(name);
    loginUsers.restDetaill=name;
    $state.go("restDetail")
    }
  })
.controller('hotelDetailController',function($scope,$state,loginUsers){
    $scope.restInfo=loginUsers.restDetaill;
    $scope.restDetail=loginUsers.restaurantDetails();
    $scope.orders=function(orders) {
      loginUsers.order(orders);
    };
    $scope.OrderPlacementState = function(){
      $state.go("orders")
    }
})
.controller("ordersController",function($scope,$state,loginUsers){
    $scope.orders = {};
    $scope.OrderPlacement = function (orders) {
      loginUsers.orderPlace(orders);
      $state.go('home')
    }

  });

