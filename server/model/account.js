/**
 * mapping to "account" collection
 *
 */
const COLLECTION_NAME = 'account';

const mongoose = require('mongoose');
const log4js = require('log4js');
const log = log4js.getLogger("account");

// how to define index, and how to define primary-key
var accountSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'account.name is required!'],
        maxlength: 50
    },
    pwd: {
        type: String,
        required: [true, 'account.pwd is required!']
    },
    create_date: {
        type: Date,
        default: Date.now
    }
}, { collection: COLLECTION_NAME });

accountSchema.statics.findByAccountName = function(accountName){
    return this.findOne({"name": accountName});
};

mongoose.model('account', accountSchema);


