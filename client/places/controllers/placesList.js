
angular
      .module('favorite').controller('PlacesListController', ['$scope','$meteor',
        function($scope, $meteor){
          $scope.items = $meteor.collection(Place).subscribe('places');

          $scope.remove = function(item) {
          	$scope.items.remove(item);
          };

          var url = "https://content.googleapis.com/gmail/v1/users/me/messages?q=craigslist.org%20has%3Aattachment%20larger%3A50K";
          var key = "Bearer ya29.1QGes21Nm_m4e_E48MLY6WhStIbRnofAw_ofygfwxjc87mqbvIPbJogmTiCkdjiAaC8KzA";
          Meteor.http.get(url, {
  			headers: {
      			"Authorization": key
   			}
  		  }, function(error, result){
  	 		console.log(result.statusCode);
  	 		console.log(result);
  		  });

      }]);