var mongoose = require('mongoose');
var User = mongoose.model('User');
var Post = mongoose.model('Post');



module.exports = {

	create: function(req,res){
		console.log('hitting');
		var post = new Post(req.body);
		post.save(function(err, doc){
			console.log('save');
			if(err){
				console.log("ok....");
			return res.json(err)
			}
			console.log(doc);
			return res.json(doc)
			
		})
	},

}