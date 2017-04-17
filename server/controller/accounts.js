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

router.get('/get/:username', function(){

});


module.exports = router;