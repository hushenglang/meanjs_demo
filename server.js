const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const config = require("./config")

const app = express()

//app configuration
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//mongodb connection configuration
mongoose.connect(config.mongodb.url);
mongoose.connection.on('connected', function () {
	console.log('mongodb connect successfully ...');
});
mongoose.connection.on('error',function (err) {
	console.log('mongodb connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
	console.log('mongodb disconnected!');
});
process.on('SIGINT', function() {
	mongoose.connection.close(function () {
		console.log('mongodb connection disconnected through app termination');
		process.exit(0);
	});
});


//register mongoose models
require("./server/model")()

//register routes
require('./server/route')(app)

//start server
app.listen(3000, function(){
	console.log("app start...")
});