var Users = require('../controllers/users');
var Posts = require('../controllers/posts')

module.exports = function(app){
	app.post('/users',Users.create);
	app.get('/users',Users.index);
	app.post('/session',Users.login);
	app.get('/session',Users.session);
	app.post('/posts',Posts.create);
}