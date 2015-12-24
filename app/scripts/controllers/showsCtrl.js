'use strict';

angular
  .module('rebesWebsiteApp')
  .controller('showsCtrl', ['$scope', function($scope) {
    $scope.title = 'Shows';

    $scope.shows = [];
  }]);
