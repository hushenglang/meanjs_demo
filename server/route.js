/**
 * register controllers
 */

const log4js = require('log4js');
const log = log4js.getLogger("route");

module.exports = function(app){
	app.use('/account',require('./controller/accounts'));
	log.debug("register routes success!");
}
