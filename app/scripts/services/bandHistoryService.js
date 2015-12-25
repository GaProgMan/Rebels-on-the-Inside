'use strict';

angular
  .module('rebelsWebsiteApp')
  .factory('BandHistory', ['$http', function($http){
    return {
      get: function(){
        return $http.get('api/history.json')
          .success(function(response){
            return response.data;
          })
          .error(function(data){
            return data;
          });
      }
    };
  }]);
