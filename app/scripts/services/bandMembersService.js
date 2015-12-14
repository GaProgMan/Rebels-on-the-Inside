'use strict';

angular
  .module('rebesWebsiteApp')
  .factory('BandMembers', ['$http', function($http){
    return {
      get: function(){
        return $http.get('api/members.json')
          .then(function(response){
            return response.data;
          });
      }
    };
  }]);
