angular.module("favorite").run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireUser promise is rejected
    // and redirect the user back to the main page
    if (error === "AUTH_REQUIRED") {
      console.log("you need login.");
      $state.go('placeList');
    }
  });
}]);


angular.module('favorite').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $stateProvider
      .state('placeList', {
        url: '/places',
        templateUrl: 'client/places/views/place-list.ng.html',
        controller: 'PlacesListController'
      })
      .state('placeDetail', {
        url: '/places/:placeId',
        templateUrl: 'client/places/views/place-detail.ng.html',
        controller: 'PlacesDetailController',
        resolve: {
          "currentUser": ["$meteor", function($meteor){
            return $meteor.requireUser();
          }]
        }
      });

      $urlRouterProvider.otherwise('/places');
}]);



