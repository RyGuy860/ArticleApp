angular.module('mab')

.controller('CategoriesCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('/categories').success(function(data){
		$scope.categories = data;
	});
}]);