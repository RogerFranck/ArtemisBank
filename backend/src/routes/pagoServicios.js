const {Router} = require('express');
const router = Router();


const {pagoTarjeta, pagoEfectivo } = require('../controllers/pagoControllers');

router.route('/tarjeta/:id')
    .post(pagoTarjeta)
router.route('/efectivo')
    .post(pagoEfectivo)

module.exports = router;
