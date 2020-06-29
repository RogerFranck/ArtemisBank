const {Router} = require('express');
const { update } = require('../models/modelATMCash');
const router = Router();


const {getAllTransactions, getUserTransactionsType, getUserTransactions, postTransaction, getTypeTransactions, getServiceTransactions} = require('../controllers/transactionsControllers');

router.route('/')
    .get(getAllTransactions)
    .post(postTransaction)

router.route('/:id')
    .get(getUserTransactions)
    .post(getUserTransactionsType)

router.route('/typeFilter/:tipo')
    .get(getTypeTransactions)

router.route('/serviceFilter/:serviceId')
    .get(getServiceTransactions)
module.exports = router;
