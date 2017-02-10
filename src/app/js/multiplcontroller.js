var app=angular.module('app',[]);

app.controller('Controller1', ['$scope', function($scope){

	$scope.text_in_controller1="Text in Controller1";
	
}]);

app.controller('Controller2', ['$scope', function($scope){
		$scope.text_in_controller2="Text in Controller2";

}]);

app.controller('Controller3', ['$scope', function($scope){

	$scope.contacts=[];

	$scope.addContact=function(){
		console.log("ENTERED");
		$scecope.contacts.push($scope.email);
		$scope.email="";
		
	}
	
}]);