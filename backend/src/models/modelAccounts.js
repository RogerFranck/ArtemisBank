const {Schema, model} = require('mongoose');

const accounts = new Schema({
    tipo: {
        type: Number,
        requiere: true,
    },
    id : {
        type: Number,
        required: true,
    },
    firstName : {
        type: String,
        requiered: true
    },
    lastName: {
        type: String,
        requiered: true
    },
    nip: {
        type: Number,
        requiered: true
    },
    balance: {
        type: Number,
        requiered: true
    }
})

module.exports = model('accountsModel', accounts)