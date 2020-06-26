const {Router} = require('express');
const router = Router();


const {hacerDeposito} = require('../controllers/depositoControllers');

router.route('/')
    .post(hacerDeposito)
module.exports = router;
