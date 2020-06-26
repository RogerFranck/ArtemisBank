const {Router} = require('express');
const { update } = require('../models/modelATMCash');
const router = Router();


const {getAccounts, getAccount, createAccount, updateAccount, deleteAccount} = require('../controllers/accountsController');

router.route('/')
    .get(getAccounts)
    .post(createAccount);

router.route('/:id')
    .get(getAccount)
    .put(updateAccount)
    .delete(deleteAccount);



module.exports = router;
