/**
 * Created by Zahid on 4/10/2016.
 */
angular.module('starter')
.constant("FirebaseURL", "https://resturantapps.firebaseio.com/")
.service('loginUsers',function(FirebaseURL,$state,$ionicLoading,$firebaseArray){
    var vm = this;
    vm.restDetaill='';
    vm.orders=[];
    vm.loginUser =function(){
      var ref = new Firebase(FirebaseURL);
      vm.userList=$firebaseArray(ref.child('users'));
      ref.authWithOAuthPopup("facebook", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
         localStorage.setItem('name',authData.facebook.displayName);
          if(authData.token){
            vm.userList.$add(authData);
            $state.go('home')
          }else{
            $state.go('login')
          }
        }
      },{remember: "sessionOnly"})
    };
    vm.getUser=function(){
      return vm.userList;
    };

    vm.restaurantList= function () {
      var ref = new Firebase(FirebaseURL);
      vm.restaurantList=$firebaseArray(ref.child('restaurant list'));
      return vm.restaurantList;
    };
    vm.restaurantDetails=function(){
      vm.restDetaill='';
      var ref = new Firebase(FirebaseURL);
      vm.restaurantDetail=$firebaseArray(ref.child('restaurant list'));
      return vm.restaurantDetail;
    };
    vm.order=function(order){
      vm.orders.push(order);
      console.log('orders',vm.orders);
    };
    vm.orderPlace=function(object){
      var ref = new Firebase(FirebaseURL);
      vm.restaurantDetail=$firebaseArray(ref.child('orders'));
      //object.user =  vm.user.facebook.displayName;
      object.customerOrders =  vm.orders;
      vm.restaurantDetail.$add(object)
    }

});
