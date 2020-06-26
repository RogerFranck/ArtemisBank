const { Schema, model } = require('mongoose');

const ATMCash = new Schema({
    denominación: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        requiered: true
    }
})

module.exports = model('ATMCash', ATMCash)