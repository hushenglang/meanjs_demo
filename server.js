const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//app configuration
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//register routes
require('./server/route')(app)

//start server
app.listen(3000, function(){
	console.log("app start...")
})
