'use strict';

angular
  .module('rebesWebsiteApp')
  .controller('bandRecordingsCtrl', ['$scope', 'BandRecordings', function($scope, bandRecordings) {
    $scope.title = 'Band Recordings';

    $scope.recordings = bandRecordings.get();
    // bandRecordings.get().then(function(data) {
    //   $scope.recordings = data;
    // });
  }]);