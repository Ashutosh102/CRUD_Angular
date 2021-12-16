'use strict';

app.controller('editCtrl', ['$scope', 'memberService', '$location', '$stateParams', function($scope, memberService, $location, $stateParams){
	$scope.error = false;
	$scope.updatedmember = $stateParams.member;

	//edit member
	$scope.update = function(){
		var updatemember = memberService.update($scope.updatedmember);
		updatemember.then(function(response){
			console.log(response);
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