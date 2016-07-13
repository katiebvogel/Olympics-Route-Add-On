var app = angular.module('olympicApp', ['ngRoute']);

// app.controller('OlympicController', function($scope, $http){


  angular.module('olympicApp').config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/wrest', {
        templateUrl: 'views/wrest.html',
        controller: 'WrestController'
      })
      .when('/lift', {
        templateUrl: 'views/lift.html',
        controller: 'LiftController'
      })
      .when('/box', {
        templateUrl: 'views/box.html',
        controller: 'BoxController'
      })
      .when('/kayak', {
        templateUrl: 'views/kayak.html',
        controller: 'KayakController'
      })
      .when('/judo', {
        templateUrl: 'views/judo.html',
        controller: 'JudoController'
      })

    $locationProvider.html5Mode(true);
  })

  angular.module('olympicApp').controller('WrestController', function($scope){
    console.log(response);
    $scope.wrest = ('Our wrestler is ' + response.data.name + ' from ' + response.data.location);
    return $scope.wrest;
  });

  angular.module('olympicApp').controller('LiftController', function($scope){
    console.log(response);
    $scope.lift = ('Our weightlifter is ' + response.data.name + ' from ' + response.data.location);
    return $scope.lift;
  });

  angular.module('olympicApp').controller('BoxController', function($scope){

  });

  angular.module('olympicApp').controller('KayakController', function($scope){

  });
  angular.module('olympicApp').controller('JudoController', function($scope){

  });



  $scope.getFive = function(){


      $http.get('/olympics/lifters').then(function(response){
      console.log(response);
      $scope.lift = ('Our weightlifter is ' + response.data.name + ' from ' + response.data.location);
      return $scope.lift;
      })

      $http.get('/olympics/wrestlers').then(function(response){
      console.log(response);
      $scope.wrest = ('Our wrestler is ' + response.data.name + ' from ' + response.data.location);
      return $scope.wrest;
      })

      $http.get('/olympics/boxers').then(function(response){
      console.log(response);
      $scope.box = ('Our boxer is ' + response.data.name + ' from ' + response.data.location);
      return $scope.box;
      })

      $http.get('/olympics/kayakers').then(function(response){
      console.log(response);
      $scope.kayak =  ('Our kayaker is ' + response.data.name + ' from ' + response.data.location);
      return $scope.kayak;
      })

      $http.get('/olympics/judoka').then(function(response){
      console.log(response);
      $scope.judo = ('Our judoka is ' + response.data.name + ' from ' + response.data.location);
      return $scope.judo;
      })

  }

j

});
