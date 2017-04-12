const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var log4js = require('log4js');
var log = log4js.getLogger("accounts");

var Account = mongoose.model("account");

router.get('/hi', function(req, res, next){
    log.error("hi-1");
    next();
});


router.get('/hi', function(req, res){
    log.error("hi-2");
    res.send("hi...");
});

/**
 * user login.
 * username
 * password
 * return: token json
 */
router.post('/login', function(req, res){
    log.info("user login ...");
	const username = req.body.username;
	const password = req.body.password;
	var is_success = false;
    try {
        Account.findByAccountName(username)
            .then(function (user) {
                log.debug(user);
            })
            .error(function (err) {
                log.error(err);
            })
    }catch(err){
        log.error("login error occur!");
        throw err;
    }
});

module.exports = router;