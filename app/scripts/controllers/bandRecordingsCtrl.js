'use strict';

angular
  .module('rebesWebsiteApp')
  .controller('bandRecordingsCtrl', ['$scope', 'BandRecordings',
    function($scope, bandRecordings) {
      $('#loading-spinner').show();
      $scope.title = 'Band Recordings';

      $scope.recordings = bandRecordings.get();
      $('#loading-spinner').hide();
      // bandRecordings.get().then(function(data) {
      //   $scope.recordings = data;
      // });
    }]);
