
angular
      .module('favorite').controller('PlacesDetailController', ['$scope','$stateParams','$meteor',
        function($scope, $stateParams, $meteor){
          $scope.item = $meteor.object(Place, $stateParams.placeId, false).subscribe('parties');
          $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

          $scope.save = function(){
            $scope.item.save();
          };

          $scope.reset = function(){
            $scope.item.reset();
          };

          

      }]);