myApp.controller('submitController', ['$scope', 'multipartForm','$http', function($scope, multipartForm,$http){
	$scope.fileData = [{
        fileName: "Equity",
        segmentzid: "1",
        fileExt:".txt"
    },
    {
        fileName: "Equirt",
        segmentzid: "4",
        fileExt:".csv"
    },
    {
    fileName: "Currency",
    segmentzid: "2",
    fileExt:".png"
},
{
fileName: "Commodity",
segmentzid: "3",
fileExt:".jpg"
}
    
];
$scope.fileformdata= $scope.fileData;
$scope.data = { };
$scope.sendFile = [];

	$scope.customer = {};
	$scope.Submit = function(){
		var uploadUrl = '/api/upload';
		//multipartForm.post(uploadUrl, $scope.customer);

		var fd = new FormData();
		for(var key in $scope.customer)
			fd.append(key, $scope.customer[key]);
		$http.post(uploadUrl, fd, {
			transformRequest: angular.indentity,
			headers: { 'Content-Type': undefined }
		}).then(function(response){
			console.log(response.data);
			if(response.data.error_code==0)
			{
				alert("Successfully uoloaded");
			}
		});
	}
}]);