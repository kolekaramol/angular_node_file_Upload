myApp.service('multipartForm', ['$http', function($http){
	this.post = function(uploadUrl, data){
		var fd = new FormData();
		for(var key in data)
			fd.append(key, data[key]);
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
}])