var app = angular.module('olympicApp', ['ngRoute']);



  angular.module('olympicApp').config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/wrestlers', {
        templateUrl: 'views/wrestlers.html',
        controller: 'WrestController'
      })
      .when('/lifters', {
        templateUrl: 'views/lifters.html',
        controller: 'LiftController'
      })
      .when('/boxers', {
        templateUrl: 'views/boxers.html',
        controller: 'BoxController'
      })
      .when('/kayakers', {
        templateUrl: 'views/kayakers.html',
        controller: 'KayakController'
      })
      .when('/judoka', {
        templateUrl: 'views/judoka.html',
        controller: 'JudoController'
      })

    $locationProvider.html5Mode(true);
  })

  angular.module('olympicApp').controller('WrestController', function($scope, $http){
  $http.get('olympics/wrestlers').then(function(response){
  console.log(response);
  $scope.wrestlers = ('Our wrestler is ' + response.data.name + ' from ' + response.data.location);
  return $scope.wrestlers;
  })
});

  angular.module('olympicApp').controller('LiftController', function($scope, $http){     $http.get('olympics/lifters').then(function(response){
      console.log(response);
      $scope.lifters = ('Our weightlifter is ' + response.data.name + ' from ' + response.data.location);
      return $scope.lifters;
      })
  });

  angular.module('olympicApp').controller('BoxController', function($scope, $http){
  $http.get('olympics/boxers').then(function(response){
  console.log(response);
  $scope.boxers = ('Our boxer is ' + response.data.name + ' from ' + response.data.location);
  return $scope.boxers;
  })
});

  angular.module('olympicApp').controller('KayakController', function($scope, $http){
  $http.get('olympics/kayakers').then(function(response){
  console.log(response);
  $scope.kayakers =  ('Our kayaker is ' + response.data.name + ' from ' + response.data.location);
  return $scope.kayakers;
  })
});

  angular.module('olympicApp').controller('JudoController', function($scope, $http){
  $http.get('olympics/judoka').then(function(response){
  console.log(response);
  $scope.judoka = ('Our judoka is ' + response.data.name + ' from ' + response.data.location);
  return $scope.judoka;
  })
});
