const {Schema, model} = require('mongoose');

const cash = new Schema({
    denominacion : {
        type: Number,
    },
    quantity : {
        type: Number,     
    }
})

module.exports = model('dineros', cash)