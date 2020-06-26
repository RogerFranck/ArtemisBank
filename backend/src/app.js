const express = require('express');
const cors = require('cors');
const app = express();

//settings
app.set('port', process.env.PORT || 4000)

//middlewares
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(express.json());

//routes
app.use('/login', require('./routes/login'))
app.use('/api/accounts', require ('./routes/accounts'))
app.use('/api/transactions', require('./routes/transactions'))

module.exports = app;