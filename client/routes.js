//load the modules
angular.module('favorite',['angular-meteor', 'ui.router']);


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
        controller: 'PlacesDetailController'
      });

      $urlRouterProvider.otherwise('/places');
}]);

angular
      .module('favorite').controller('PlacesListController', ['$scope','$meteor',
        function($scope, $meteor){
          $scope.items = $meteor.collection(Place);

          $scope.remove = function(item) {
          	$scope.items.remove(item);
          };
      }]);

angular
      .module('favorite').controller('PlacesDetailController', ['$scope','$stateParams',
        function($scope, $stateParams){
          $scope.placeId = $stateParams.placeId;
      }]);

