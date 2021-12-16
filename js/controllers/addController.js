'use strict';

app.controller('addCtrl', ['$scope', 'memberService', '$location', function($scope, memberService, $location){
	$scope.error = false;
	//add member
	$scope.add = function(){
		var addmember = memberService.create($scope.member);
		addmember.then(function(response){
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