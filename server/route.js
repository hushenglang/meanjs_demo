/**
 * register controllers
 */

var log4js = require('log4js');
var log = log4js.getLogger("route");

module.exports = function(app){
	app.use('/account',require('./controller/accounts'));
	log.debug("register routes success!");
}
