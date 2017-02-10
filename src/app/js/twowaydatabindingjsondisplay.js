	// //this is one way of fetching the data form 

	var app=angular.module('gitusersdemo', []);
	app.controller('GitUserController', function($scope,$http){
		console.log("ENTERED ");
		//this is one way of fetching the data form 
		$http({
			method:'GET',
			url:'https://raw.githubusercontent.com/trinadhkoya/MyShortNotes/master/dummyjson'


		}).then(function successCallback(response){
			//success message 
			console.log(response.data);
			console.log(response.status);
			console.log(response.headers);
			console.log(response.config);
			console.log(response.statusText);
			$scope.gitdataset=response.data

		},function errorCallback(response){
			//failure data

		});


	});
	//this is another way of fetching the data ,by passing dynamic url in the method itself from view
	//
	
	angular.module('gitusersdemo', [])
	.controller('GitUserController',['$scope','$http',function($scope,$http){

		$scope.updateModel=function(method,url){
			console.log("ENTERED");
			$scope.method=method;
			$scope.url=url;
			console.log(method);
			console.log(url);
			$http({
			method:$scope.method,
			url:$scope.url


		}).then(function successCallback(response){
			//success message 
			console.log(response.data);
			console.log(response.status);
			console.log(response.headers);
			console.log(response.config);
			console.log(response.statusText);
			$scope.gitdataset=response.data;

		},function errorCallback(response){
			//failure data
			
			$scope.gitdataset_error_message=response.data;
		});

		}

		



	}]);
