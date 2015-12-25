'use strict';

angular
  .module('rebelsWebsiteApp')
  .controller('showsCtrl', ['$scope', function($scope) {
    $('#loading-spinner').show();
    $scope.title = 'Shows';

    $scope.shows = [];
    $('#loading-spinner').hide();
  }]);
