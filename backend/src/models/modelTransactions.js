const {Schema, model} = require('mongoose');

const transactions = new Schema({
    id : {
        type: Number,
        required: true
    },
    typeId : {
        type: String,
        required: true
    },
    accountId : {
        type: Number,
        requiered: true
    },
    utilitiesId: {
        type: Number,
        requiered: true
    },
    ammount: {
        type: Number,
        requiered: true
    }
})

module.exports = model('transactionsModel', transactions)