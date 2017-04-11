/**
 * register controllers
 */
module.exports = function(app){
	app.use('/account',require('./controller/accounts'));
	console.log("register routes success!");
}
