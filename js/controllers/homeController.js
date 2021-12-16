'use strict';

app.controller('homeCtrl', ['$scope', 'memberService', function($scope, memberService){
	//fetch members
	$scope.fetch = function(){
		var members = memberService.read();
		members.then(function(response){
			$scope.members = response.data;
		});
	}

}]);