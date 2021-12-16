'use strict';

app.controller('deleteCtrl', ['$scope', 'memberService', '$location', '$stateParams', function($scope, memberService, $location, $stateParams){
	$scope.error = false;
	$scope.deletemember = $stateParams.member;

	//delete member
	$scope.delete = function(){
		var dmember = memberService.delete($scope.deletemember);
		dmember.then(function(response){
			if(response.data.error){
				$scope.error = true;
				$scope.message = response.data.message;
			}
			else{
				console.log(response);
				$location.path('home');
			}
		});
	}
}]);