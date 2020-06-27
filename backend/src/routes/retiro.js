const {Router} = require('express');
const router = Router();


const {hacerRetiro} = require('../controllers/retiroControllers');

router.route('/:id')
    .post(hacerRetiro)

module.exports = router;
