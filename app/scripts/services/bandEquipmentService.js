'use strict';

angular
  .module('rebesWebsiteApp')
  .factory('BandEquipment', ['$http', function($http){
    return {
      get: function(){
        return $http.get('api/equipment.json')
        .success(function(response){
          return response.data;
        })
        .error(function(data){
          return data;
        });
      }
    };
  }]);
