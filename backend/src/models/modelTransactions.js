const {Schema, model} = require('mongoose');

const transactions = new Schema({
    typeId : {
        type: String,
        
    },
    accountId : {
        type: String,
        
    },
    utilitiesId: {
        type: String,
        
    },
    ammount: {
        type: Number,
        
    }
})

module.exports = model('transactionsModel', transactions)