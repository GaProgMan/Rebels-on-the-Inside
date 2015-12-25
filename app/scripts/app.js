'use strict';

/**
 * @ngdoc overview
 * @name rebelsWebsiteApp
 * @description
 * # rebelsWebsiteApp
 *
 * Main module of the application.
 */
angular
  .module('rebelsWebsiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider',
    function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'views/home.html',
          controller: 'homeCtrl'
        })
        .state('history', {
          url: '/band-info/band-history',
          templateUrl: 'views/band-info/band-history.html',
          controller: 'bandHistoryCtrl'
        })
        .state('members', {
          url: '/band-info/band-members',
          templateUrl: 'views/band-info/band-members.html',
          controller: 'bandMembersCtrl'
        })
        .state('equipment' ,{
          url:'/band-info/band-equipment',
          templateUrl: 'views/band-info/band-equipment.html',
          controller: 'bandEquipmentCrtl'
        })
        .state('recordings', {
          url : '/band-info/band-recordings',
          templateUrl : '/views/band-info/band-recordings.html',
          controller : 'bandRecordingsCtrl'
        })
        .state('shows', {
          url: '/shows',
          templateUrl:'/views/shows.html',
          controller: 'showsCtrl'
        });
  }]);
