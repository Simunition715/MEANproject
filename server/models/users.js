var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
	name:{
		type: String,
		minlength: 3,
		unique: true,
		required: true
	},
	email:{
		type: String,
		minlength: 4,
		unique: true,
		required: true
	},
	password:{
		type: String,
		required: true
	}
},{timestamps: true});

mongoose.model('User',UserSchema);