'use strict';

angular
  .module('rebesWebsiteApp')
  .controller('bandHistoryCtrl', ['$scope', 'BandHistory',
    function($scope, bandHistory) {
      $('#loading-spinner').show();

      $scope.title = 'History';

      bandHistory.get()
        .success(function(data) {
          $scope.history = data;
          $('#loading-spinner').hide();
        })
        .error(function(err) {
          console.log(err);
        });
  }]);
