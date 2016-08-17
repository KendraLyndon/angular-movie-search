var app = angular.module("app",["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/',{
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  })
  .when('/search/:title',{
    templateUrl: 'partials/search.html',
    controller: 'SearchController'
  })
  .when('/show/:id',{
    templateUrl: 'partials/show.html',
    controller: 'ShowController'
  })
  .otherwise('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  })
  $locationProvider.html5Mode(true);
});
