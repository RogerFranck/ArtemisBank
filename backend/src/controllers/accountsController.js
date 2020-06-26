const accountsCtrl = {};

const accountsData = require('../models/modelAccounts');

accountsCtrl.getSaldos = async (req, res) => {
    const respu = await accountsData.find();
    res.json(respu);
};

accountsCtrl.getSaldo = async  (requ, res) => {
    const respu = await accountsData.findById(req.params.id);
    res.json(respu);
};

module.exports = accountsCtrl;
