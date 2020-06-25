const { Schema, model } = require('mongoose');

const accounts = new Schema({
    id: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        requiered: true
    }
})

module.exports = model('ATMCashModel', ATMCash)