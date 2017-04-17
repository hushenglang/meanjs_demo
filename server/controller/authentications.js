/**
 * authentication moduel which do not need token verification.
 */
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const jwt    = require('jsonwebtoken');
const CONST = require('../util/CONST');

const log4js = require('log4js');
const log = log4js.getLogger("authentications");

var Account = mongoose.model("account");

/**
 * user login.
 * username
 * password
 * return: token json
 */
router.post('/login', function(req, res, next){
    log.info("user login ...", req.body.username);
    const username = req.body.username;
    const password = req.body.password;
    try {
        Account.findByAccountName(username)
            .then(function(user){
                if (user&&password == user.pwd){
                    log.debug("account validation success!");
                    var token = jwt.sign(user, CONST.JWT_SECRAT,{expiresIn: '2h'}); //expire in 2 hours
                    res.json({
                        success: true,
                        message: 'account validation success!',
                        token: token
                    });
                }else{
                    log.debug("account validation fail!");
                    res.json({
                        success: false,
                        message: 'account validation fail!'
                    });
                }
            })
            .catch(next);
    }catch(err){
        log.error("login error occur!");
        throw err;
    }
});

module.exports = router;