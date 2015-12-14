'use strict';

angular
  .module('rebesWebsiteApp')
  .controller('bandHistoryCtrl', ['$scope', 'BandHistory', function($scope, bandHistory) {
    $scope.title = 'History';

    bandHistory.get().then(function(data) {
      $scope.history = data;
    });
  }]);
