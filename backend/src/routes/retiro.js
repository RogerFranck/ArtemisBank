const {Router} = require('express');
const router = Router();


const {hacerRetiro, darCambio} = require('../controllers/retiroControllers');

router.route('/') 
    .post(darCambio)
router.route('/:id')
    .post(hacerRetiro)

module.exports = router;
