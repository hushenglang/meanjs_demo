/**
 * register controllers
 */
module.exports = function(app){
	app.use('/account',require('./controller/account'))
}
