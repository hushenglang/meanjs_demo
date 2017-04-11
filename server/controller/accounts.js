const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var Account = mongoose.model("account")

router.get('/get', function(req, res){
	res.send('get hi')
});

/**
 * user login.
 * username
 * password
 * return: token json
 */
router.post('/login', function(req, res){
	const username = req.body.username;
	const password = req.body.password;
	var is_success = false;

    Account.findByAccountName(username)
        .then(function(user){
            console.log(user);
        })
        .error(function(err){
            console.error(err);
        })
});

module.exports = router;