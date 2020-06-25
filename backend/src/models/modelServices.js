const {Schema, model} = require('mongoose');

const services = new Schema({
    id : {
        type: Number,
        required: true
    },
    description : {
        type: String,
        requiered: true
    },
    cost: {
        type: Number,
        requiered: true
    }
})

module.exports = model('servicesModel', services)