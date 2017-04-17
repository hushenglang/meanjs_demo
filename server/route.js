/**
 * register controllers
 */
const CONST = require('./util/CONST');
const log4js = require('log4js');
const log = log4js.getLogger("route");

// route middleware to verify a token
var tokenVerify = function(req, res, next) {

    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {

        // verifies secret and checks exp
        jwt.verify(token, CONST.JWT_SECRAT, function(err, user) {
            if (err) {
            	log.error('Failed to authenticate token.');
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.user = user;
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        log.error('No token provided.');
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
};

module.exports = function(app){
    //register token verification
    app.use('/api', tokenVerify);

    //register routes
    app.use('/api/account',require('./controller/accounts'));
    app.use('/auth',require('./controller/authentications'));
    log.debug("register routes success!");
};