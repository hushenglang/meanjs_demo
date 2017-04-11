/**
 * mapping to "account" collection
 *
 */

const mongoose = require('mongoose');

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
});

accountSchema.statics.findByAccountName = function(accountName){
    return this.find({name: accountName})
};


mongoose.model("account", accountSchema);


