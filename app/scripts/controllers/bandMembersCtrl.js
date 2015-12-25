'use strict';

angular
  .module('rebelsWebsiteApp')
  .controller('bandMembersCtrl',['$scope', 'BandMembers',
    function($scope, bandMembers) {
      $('#loading-spinner').show();

      $scope.title = 'The Rebels';

      bandMembers.get().success(function(data) {
        $scope.rebels = data;
        $('#loading-spinner').hide();
      }).
      error(function(err){
        console.log(err);
      });
    }]);
