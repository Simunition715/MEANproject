var mongoos = require('mongoose');
var fs = require('fs');
var models_path = __dirname + '/../models';
console.log('connecting to db...');

mongoose.connect('mongodb://localhost/personal');

mongoose.Promise = global.Promise;

fs.readdirSync(model_path).forEach(function(file){
	if(file.indexOf('.js')!= -1){
		console.log('loading ' + file + '...');
		require(models_path + '/' + file)
	}
})