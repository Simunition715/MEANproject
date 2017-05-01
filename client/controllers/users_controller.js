app.controller('UsersController',function(UserFactory,$location,$routeParams){
	console.log('instanciating users controller...');

	var self = this;
	self.newUser = {}
	self.registrationErrors = [];
	self.loginErrors = [];
	self.current_user = {};
	self.loginUser = {'email': null, 'password': null}


	UserFactory.session(function(res){
		if(res){
			self.current_user = res.data;
			$location.url('/dashboard');
		}else {
			self.current_user = {};
			$location.url('/');
		}
	})

	self.createPost = function(newPost){
		newPost.author = UserFactory.current_user.name;
		console.log("maybe....")
		UserFactory.createPost(newPost, function(res){
			console.log(res);
			console.log('i am about to clear self.newPost');
			self.newPost = {};
			$location.url('/dashboard');
		})
	}
	self.logout = function(){
		console.log('ok');
		UserFactory.session = {}
		$location.url('/');

	}
	self.index = function(){
		UserFactory.index(function(res){
			self.users = res.data;
		})
	}
	self.create = function(newUser){
		self.registrationErrors = [];
		UserFactory.create(newUser,function(res){
			if(res.data.errors){
				for(key in res.data.errors){
					var error = res.data.errors[key]
					self.registrationErrors.push(error.message);
				}
			}else{
				self.current_user = res.data;
				console.log("Fuck this shit",self.current_user);

				console.log("this is res.data", res.data)
				$location.url('/dashboard')
			}
		})
	}
	self.login = function(loginUser){
		console.log("login");
		console.log(loginUser)
		UserFactory.login(loginUser, function(res){
			console.log('login res', res);
		self.loginErrors = [];
			if(res.data.errors){
				console.log("uh-oh");	
				self.loginErrors = {email:"",password:""};
				self.loginErrors.push(res.data.errors);
			}else{
				console.log('ok');
				self.current_user = res.data;
				$location.url('/dashboard')
			}
		})
	}

})