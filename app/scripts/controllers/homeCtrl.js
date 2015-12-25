'use strict';

angular.module('rebelsWebsiteApp')
  .controller('homeCtrl', ['$scope', function($scope) {
    $('#loading-spinner').hide();
    $scope.title = 'Home';
  }]);
