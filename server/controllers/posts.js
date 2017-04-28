var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');



module.exports = {

	create: function(req,res){
		console.log('hitting');
		var post = new Post(req.body);
		console.log(post);
			post.save(function(err, doc){
				console.log('save');
				if(err){
					return res.json(err)
					console.log(err);
				}
				return res.json(doc)
				console.log(doc);
			})
	},

}