'use strict';

angular
  .module('rebesWebsiteApp')
  .controller('bandMembersCtrl',['$scope', 'BandMembers', function($scope, bandMembers) {
    $scope.title = 'The Rebels';

    bandMembers.get().then(function(data) {
      $scope.rebels = data;
    });
  }]);
