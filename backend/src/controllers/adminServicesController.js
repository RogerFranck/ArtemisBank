const serviceCtrl = {}

const servicesData = require('../models/modelServices');
const transactionsData = require('../models/modelTransactions');

//Create New Service
serviceCtrl.createNewService = async (req, res) => {
    const { description, cost } = req.body
    const newService = servicesData({
        description: description,
        cost: cost
    });
    await newService.save();
    res.json({ message: 'Guardado exitosamente' })
};


//Update Service
serviceCtrl.updateService = async (req, res) => {
    const { description, cost } = req.body
    const newService = {
        description: description,
        cost: cost
    };
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
    var respu2 = 0
    respu2 = await transactionsData.findOne({ utilitiesId: req.params.id })
    console.log(respu2);
    
    if (respu2!=null) {
        res.json({ message: 'No es posible eliminar el servicio' });
    } else {
        await servicesData.findOneAndDelete({ description: req.params.id });
        res.json({ message: 'Servicio Eliminado correctamente' });
    }
};


module.exports = serviceCtrl;