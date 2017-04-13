const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const log4js = require('log4js');
const log = log4js.getLogger("accounts");

var Account = mongoose.model("account");

router.get('/create', function(req, res){
    log.info("create account");
    new_account = new Account();
    new_account.name = "hushenglang@gmail.com";
    new_account.pwd = "123";
    new_account.save().then(function(e){
        log.info("success", e);
    });
    res.send("create success");
});

/**
 * user login.
 * username
 * password
 * return: token json
 */
router.post('/login', function(req, res){
    log.info("user login ...", req.body.username);
	const username = req.body.username;
	const password = req.body.password;
	var is_success = false;
    try {
        user = Account.findByAccountName(username);
        log.debug(typeof(user));
        res.send("hi");
            //.then(function (user) {
            //    log.debug(user);
            //})
            //.error(function (err) {
            //    log.error(err);
            //})
    }catch(err){
        log.error("login error occur!");
        throw err;
    }
});

module.exports = router;