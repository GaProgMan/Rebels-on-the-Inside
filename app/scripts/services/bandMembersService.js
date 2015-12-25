'use strict';

angular
  .module('rebesWebsiteApp')
  .factory('BandMembers', ['$http', function($http){
    return {
      get: function(){
        return $http.get('api/members.json')
        .success(function(response){
          return response.data;
        })
        .error(function(data){
          return data;
        });
      }
    };
  }]);
