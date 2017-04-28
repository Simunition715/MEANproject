var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');


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
	},
	posts: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post'
	}]
},{timestamps: true});

UserSchema.pre('save',function(done){
	this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
	done();
});

mongoose.model('User',UserSchema);