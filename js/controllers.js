app.controller("HeaderController",function($scope){
  $scope.view = {};
})

app.controller("HomeController",function($scope){
  $scope.view = {};
  $scope.view.message = "you're home";
})

app.controller("SearchController",function($scope, $http, $routeParams){
  console.log($routeParams);
  $scope.view = {};
  $http({
    method: 'GET',
    url:`http://www.omdbapi.com/?s=${$routeParams.title}&type=movie`
  }).then(function(movies){
      $scope.movies = (movies.data.Search);
  }).catch(function(errors){
      $scope.view.errors = errors.data;
  })
})

app.controller("ShowController",function($scope, $http, $routeParams){
  $http.get(`http://www.omdbapi.com/?i=${$routeParams.id}`).then(function(movie){
    $scope.movie = movie.data;
    console.log(movie.data);
  })
  $scope.view = {};
  $scope.search = function(input){
      location.href = '/search';
  };
})
