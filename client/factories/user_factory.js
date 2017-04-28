app.factory('UserFactory', function($http){
	var factory = {};
	factory.current_user = {};

	factory.session = function(callback){
		$http.get('/session').then(function(res){
			if(!res.data.errors){
				factory.current_user = res.data;
				callback(res);
			}else{
				factory.current_user = {};
				callback(false);
			}
		})
	}

	factory.create =function(newUser, callback){
		console.log(newUser);
		$http.post("/users",newUser).then(function(res){
			if(!res.data.errors){
				console.log(res.data.errors);
				factory.current_user = res.data;
			}
			console.log(res);
			callback(res);
		})
	}

	factory.createPost = function(newPost, callback){
		console.log("factory")
		$http.post("/posts", newPost).then(function(callback){
			console.log('Routing...');
		})
	}

	factory.login = function(loginUser, callback){
		$http.post("/session", loginUser).then(function(res){
			if(!res.data.errors){
				factory.current_user = res.data;
			}
			callback(res);
		})
	}

	return factory;
})