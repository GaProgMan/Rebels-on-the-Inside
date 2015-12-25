'use strict';

angular.module('rebesWebsiteApp')
  .controller('homeCtrl', ['$scope', function($scope) {
    $('#loading-spinner').hide();
    $scope.title = 'Home';
  }]);
