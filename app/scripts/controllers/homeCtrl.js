'use strict';

angular.module('rebesWebsiteApp')
  .controller('homeCtrl', ['$scope', /*'Friends',*/ function($scope/*, Friends*/) {
    $scope.title = 'Home';
    // Friends.get().then(function(data) {
    //   $scope.friends = data;
    // });
    $scope.items = ['home','about','contact'];

    // selectedValue is used on the page which implements this controller.
    // It is used to preselect a value from the above item array when applying
    // that array to a select
    $scope.selectedValue = 'home';

    // here we're finally applying the data provided by friends to the scope
    // Friends.get().then(function(data) {
    //   $scope.friends = data;
    // });
  }]);
