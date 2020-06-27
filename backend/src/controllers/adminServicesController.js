const serviceCtrl = {}

const servicesData = require('../models/modelServices');
const transactionsData = require('../models/modelTransactions');

//Create New Service
serviceCtrl.createNewService = async (req, res) => {
    const { description, cost } = req.body
    const newService = servicesData ({
        description: description,
        cost: cost
    });
    await newService.save();
    res.json({ message: 'Guardado exitosamente' })
};


//Update Service
serviceCtrl.updateService = async (req, res) => {
    const { description, cost } = req.body
    const newService = servicesData ({
        description: description,
        cost: cost
    });
    await servicesData.findOneAndUpdate({ _id: req.params.id }, newService);
    res.json({ message: 'Servicio actualizado' })
};

//Show all Services
serviceCtrl.allService = async (req, res) => {
    respu = await servicesData.find(); 
    res.json(respu);
};

serviceCtrl.getService = async (req, res) => {
    respu = await servicesData.findById(req.params.id); 
    res.json(respu);
};
//Delete Service
serviceCtrl.deleteService = async (req, res) => {
    respu = await transactionsData.findOne({ utilitiesId: req.body.servicio })
    if(respu){
        await servicesData.findOneAndDelete( { descrition: req.body.servicio});
        res.json({ message: 'Servicio Eliminado correctamente' });
    }
    res.json({ message: 'No es posible eliminar el servicio' });
};


module.exports = serviceCtrl;