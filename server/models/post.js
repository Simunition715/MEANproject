var mongoose = require('mongoose');


var PostSchema = new mongoose.Schema({
	title:{
		type: String,
		minlength: 3,
		required: true
	},
	post:{
		type: String,
		minlength: 4,
		unique: true,
		required: true
	},
	author:{
		type: String,
		required:true
	}
},{timestamps: true});

mongoose.model('Post',PostSchema);
