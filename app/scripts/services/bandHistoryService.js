'use strict';

angular
  .module('rebesWebsiteApp')
  .factory('BandHistory', ['$http', function($http){
    return {
      get: function(){
        return $http.get('api/history.json')
          .then(function(response){
            return response.data;
          });
      }
    };
  }]);
