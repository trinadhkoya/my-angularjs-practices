var app=angular.module('twdbwed', []);
app.controller('TwoWayDBWEController', ['$scope', function($scope){
	// checking whether it was entered in to script or not
	console.log("ENTERED");
	$scope.clickname="";
	//checking whether onclck functions of submit and rest working or not
	$scope.postData=function(){
		console.log("Clicked on Submit Button");
		$scope.clickname="submit";
		$scope.firstName="default";
		$scope.lastName="default";
		$scope.userEmail="default@gmail.com";
	};

	$scope.resetData=function(){
		console.log("Clicked on Reset Button");
		$scope.firstName="";
		$scope.lastName="";
		$scope.userEmail="";
		$scope.clickname="";

	};
	//just for checking i called this postdata again here 
	//$scope.postData();
	
}]);