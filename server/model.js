/**
 * register model
 */

var log4js = require('log4js');
var log = log4js.getLogger("model");

module.exports = function(){
    require("./model/account");
    log.debug("register model success!");
}

