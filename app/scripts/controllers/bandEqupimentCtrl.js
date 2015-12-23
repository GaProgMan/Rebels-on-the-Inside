'use strict';

angular
  .module('rebesWebsiteApp')
  .controller('bandEquipmentCrtl', ['$scope', 'BandEquipment', function($scope, bandFactory) {
    $scope.title = 'Band Equipment';

    bandFactory.get().then(function(data) {
      $scope.memberEquipment = data;
    });
  }]);
