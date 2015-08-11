
angular
      .module('favorite').controller('PlacesListController', ['$scope','$meteor',
        function($scope, $meteor){
          $scope.items = $meteor.collection(Place);

          $scope.remove = function(item) {
          	$scope.items.remove(item);
          };
      }]);