const express = require('express')
const router = express.Router()


router.get('/get', function(req, res){
	res.send('get hi')
})

/**
 * user login 
 */
router.post('/login', function(req, res){
	const username = req.body.username
	const password = req.body.password
	var is_success = false;
	if(username=='hushenglang' && password='hushenglang')
		is_success = true;

	if(is_success){
		
	}
})

module.exports = router