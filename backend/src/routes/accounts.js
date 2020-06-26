const {Router} = require('express');
const { update } = require('../models/modelATMCash');
const router = Router();


const {getSaldos, getSaldo} = require('../controllers/accountsController');

router.route('/')
    .get(getSaldos);

router.route('/:id')
    .get(getSaldo)


module.exports = router;
