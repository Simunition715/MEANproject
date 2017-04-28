var Users = require('../controllers/users');

module.exports = function(app){
	app.post('/users',Users.create);
	app.get('/users',Users.index);
	app.post('/session',Users.login);
	app.get('/session',Users.session);
}