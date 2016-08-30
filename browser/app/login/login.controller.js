app.controller('LoginCtrl', function($scope, $http, $log){
	$scope.submitLogin = function(){
		return $http.post('/login', {email: $scope.email, password: $scope.password})
		.then(function(response){
			$scope.foundUser = response.data;
		})
		.catch($log.error);
	};
});