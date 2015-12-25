'use strict';

angular
  .module('rebelsWebsiteApp')
  .controller('bandEquipmentCrtl', ['$scope', 'BandEquipment',
    function($scope, bandFactory) {
      $('#loading-spinner').show();

      $scope.title = 'Band Equipment';

      bandFactory.get()
        .success(function(data) {
          $scope.memberEquipment = data;
          $('#loading-spinner').hide();
        })
        .error(function(err) {
          console.log(err);
        });
    }]);
