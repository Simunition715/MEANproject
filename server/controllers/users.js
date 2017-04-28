var mongoose = require('mongoose');
var User = mongoose.model('User');
var bcrypt = require('bcryptjs');

module.exports = {
	index: function(req,res){
		User.find({}).exc(function(err,doc){
			if(err){
				return res.json(err);
			}
			return res.json(doc);
		})
	},
	create: function(req, res){
		console.log('nice');
		if(req.body.password != req.body.password_confirmation){
			return res.json({
				"errors":{
					"password":{
						"message":"passwords do not match!"
					}
				}
			})
		}
		var user = new User(req.body);
		user.save(function(err, user){
			if(err){
				return res.json(err);
			}
			req.session.user = user
			return res.json(user);
		})
	},
	login: function(req,res){
		console.log("server login");
		var isValid = true;
		User.findOne({email:req.body.email}).exec(function(err,doc){
			if(err){
				return res.json(err);
			}
			if(!doc){
				isValid = false;
			} else {
				if(bcrypt.compareSync(req.body.password,doc.password)){
					var user = {
						name:doc.name,
						email:doc.email,
						_id:doc.id
					}
					req.session.user = user
					return res.json(user);
				} else {
					isValid = false;
				}
			}
			if(!isValid){
				return res.json({
					"errors": "invalid credentials"
				})
			}
		})
	},	
	session: function(req, res){
		if(!req.session.user){
			return res.json({
				"errors": "not authorized"
			})
		}
		return res.json(req.session.user);
	},
	login: function(req, res){
		console.log('hello')
		return res.json({'this': 'works'})
	}
}