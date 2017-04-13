/**
 * register model
 */

const log4js = require('log4js');
const log = log4js.getLogger("model");

module.exports = function(){
    require("./model/account");
    log.debug("register model success!");
}

