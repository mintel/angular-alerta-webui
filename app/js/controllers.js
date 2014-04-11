'use strict';

/* Controllers */

var alertaControllers = angular.module('alertaControllers', []);

alertaControllers.controller('AlertListController', ['$scope', 'Alert',
  function($scope, Alert){
      Alert.query(function(response) {
        $scope.alerts = response.alerts;
      });
  }]);

alertaControllers.controller('AlertDetailController', ['$scope', '$routeParams', 'Alert',
  function($scope, $routeParams, Alert){
    Alert.get({id: $routeParams.id}, function(response) {
      $scope.alert = response.alert;
    });
  }]);
