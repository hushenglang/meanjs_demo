const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require("./config");
const log4js = require('log4js');
log4js.configure('log4js.json')

const app = express()

var log = log4js.getLogger("server");

//app configuration
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//mongodb connection configuration
mongoose.connect(config.mongodb.url);
mongoose.connection.on('connected', function () {
	log.info('mongodb connect successfully!');
});
mongoose.connection.on('error',function (err) {
	log.error('mongodb connection error: ' + err);
});
mongoose.connection.on('disconnected', function () {
	log.warn('mongodb disconnected!');
});
process.on('SIGINT', function() {
	log.warn("shut down the server...");
	mongoose.connection.close(function () {
		log.warn('mongodb connection disconnected through app termination!');
		process.exit(0);
	});
});

//register mongoose models
require("./server/model")()

//register routes
require('./server/route')(app)

//start server
app.listen(3000, function(){
	log.info("server start...");
});