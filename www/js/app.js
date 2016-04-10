// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','firebase'])
  .config(function($urlRouterProvider, $stateProvider, $httpProvider, $ionicConfigProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginController'
      })
      .state('home',{
        url:'/home',
        templateUrl:'templates/home.html',
        controller:'homeController'
      })
      .state('restDetail',{
        url:'/hotelDetail',
        templateUrl:'templates/hotelDetail.html',
        controller:'hotelDetailController'

      })
      .state('orders',{
        url:'/orders',
        templateUrl:'templates/orders.html',
        controller:'ordersController'
      });

    $urlRouterProvider.otherwise('/login');
    //$httpProvider.interceptors.push('httpInterceptor');
  });
  //.run(function($rootScope, $state) {
//  $rootScope.$on('$stateChangeStart', function(event, toState) {
//    var firebaseLocalToken = localStorage.getItem('token');
//    if (toState.loginCompulsory && !firebaseLocalToken) {
//      event.preventDefault();
//      $state.go('login');
//    }
//  });
//})
//.factory('httpInterceptor', function() {
//  return {
//    request: function(config) {
//      var token = localStorage.getItem('token');
//      if (token) {
//        config.url = config.url + "?token=" + token;
//      }
//      return config;
//    }
//  }
//});
