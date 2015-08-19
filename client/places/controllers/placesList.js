
angular
      .module('favorite').controller('PlacesListController', ['$scope','$meteor',
        function($scope, $meteor){
          $scope.items = $meteor.collection(Place).subscribe('places');

          $scope.remove = function(item) {
          	$scope.items.remove(item);
          };

      }]);