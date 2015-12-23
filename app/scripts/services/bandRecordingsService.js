'use strict';

angular
  .module('rebesWebsiteApp')
  .factory('BandRecordings', ['$http', function($http){
    return {
      get: function(){
        return [];
        // return [
        //   {
        //     "title" : "Recording 1",
        //     "url" : "test.com",
        //     "imageUrl" : "",
        //     "imageAltText" : "This will be an image some day"
        //   }
        // ];
        /* TODO implement this once there are recordings to display */
      }
    };
  }]);
