var mongoose = require('mongoose');
var fs = require('fs');
var model_path = __dirname + '/../models';
console.log('connecting to db...');

mongoose.connect('mongodb://localhost/grapefruit');

mongoose.Promise = global.Promise;

fs.readdirSync(model_path).forEach(function(file){
	if(file.indexOf('.js')!= -1){
		console.log('loading ' + file + '...');
		require(model_path + '/' + file)
	}
})