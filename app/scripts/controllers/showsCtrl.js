'use strict';

angular
  .module('rebesWebsiteApp')
  .controller('showsCtrl', ['$scope', function($scope) {
    $('#loading-spinner').show();
    $scope.title = 'Shows';

    $scope.shows = [];
    $('#loading-spinner').hide();
  }]);
