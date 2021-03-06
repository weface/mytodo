'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('MainCtrl', function ($scope, $window, localStorageService) {

    $scope.width = $window.innerwidth;
    $scope.height = $window.innerheight;

    var todosInStore = localStorageService.get('todos');
    $scope.todos = todosInStore && todosInStore.split('\n') || [];
    $scope.$watch('todos', function(){
        localStorageService.add('todos', $scope.todos.join('\n'));
    }, true);

    $scope.addTodo = function(){
    	// need to add error checking
    	$scope.todos.push($scope.todo);
    	$scope.todo='';
    };

    $scope.removeTodo = function(index){
    	// need to add error checking
    	$scope.todos.splice(index, 1);
    };


});
