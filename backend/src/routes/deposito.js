const {Router} = require('express');
const router = Router();


const {hacerDepositoAdmin, hacerDepositoUser} = require('../controllers/depositoControllers');

router.route('/admin')
    .post(hacerDepositoAdmin)
router.route('/user/:id')
    .post(hacerDepositoUser)
module.exports = router;
