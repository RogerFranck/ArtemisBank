const { Router } = require('express')
const router = Router();

const { createNewService, updateService, allService, deleteService }= require('../controllers/adminServicesController')

router.route('/')
    .get(allService)
    .post(createNewService);

router.route('/:id')
    .put(updateService)
    .delete(deleteService);

module.exports = router;