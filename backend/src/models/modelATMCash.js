const { Schema, model } = require('mongoose');

const ATMCash = new Schema({
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