hdio.controller('inbox', ['$scope', function($scope){
	$scope.msgs = "New Messages";
	$scope.init = function(){
			$scope.presentUser();
	}

}])