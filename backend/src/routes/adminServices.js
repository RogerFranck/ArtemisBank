const { Router } = require('express')
const router = Router();

const { createNewService, getService, updateService, allService, deleteService }= require('../controllers/adminServicesController')

router.route('/')
    .get(allService)
    .post(createNewService);

router.route('/:id')
    .get(getService)
    .put(updateService)
    .delete(deleteService);

module.exports = router;