const {Router} = require('express');
const router = Router();


const {hacerRetiro} = require('../controllers/retiroControllers');

router.route('/')
    .post(hacerRetiro)
module.exports = router;
