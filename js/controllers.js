'use strict';

/* Controllers */

var ethanControllers = angular.module('ethanControllers', []);

ethanControllers.controller('HomeProjectsCtrl', ['$scope', 'Project',
  function($scope, Project) {
    $scope.projects = Project.query();
    $scope.orderProp = 'age';
  }]);

ethanControllers.controller('ProjectsListCtrl', ['$scope', 'Project',
  function($scope, Project) {
    $scope.projects = Project.query();
    $scope.orderProp = 'age';
  }]);

ethanControllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('projects/' + $routeParams.projectId + '.json').success(function(data) {
      $scope.project = data;
    });
  }]);