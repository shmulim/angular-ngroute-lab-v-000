angular.module('app')
  .config(function($routeProvider){
    $routeProvider.when('/user/:id', {
      templateUrl: 'views/user.html',
      controller: 'UserController as user',
      resolve: {
        user: function(UserService, $route){
          return UserService.getUser($route.current.params.id);
        } 
      }
    });
  });