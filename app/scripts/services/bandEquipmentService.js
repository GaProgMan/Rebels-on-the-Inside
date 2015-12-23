'use strict';

angular
  .module('rebesWebsiteApp')
  .factory('BandEquipment', ['$http', function($http){
    return {
      get: function(){
        return $http.get('api/equipment.json')
          .then(function(response){
            return response.data;
          });
      }
    };
  }]);
