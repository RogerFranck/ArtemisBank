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

//Create Account
accountsCtrl.createAccount = async (req, res) => {
    const { tipo, firstName, lastName, nip, balance } = req.body
    const newAccount = new accountsData({
        tipo: tipo,
        firstName: firstName,
        lastName: lastName,
        nip: nip,
        balance: balance
    });
    await newAccount.save();
    res.json({ message: 'Nueva cuenta guardado exitosamente' })
};

//Update Account
accountsCtrl.updateAccount = async (req, res) => {
    const { tipo, firstName, lastName, nip, balance } = req.body
    const newAccount = new accountsData({
        tipo: tipo,
        firstName: firstName,
        lastName: lastName,
        nip: nip,
        balance: balance,
    });
    await accountsData.findOneAndUpdate({ _id: req.params.id }, newAccount)
    res.json({ message: 'Cuenta Actualizada exitosamente' })
};


//Delete Account
accountsCtrl.deleteAccount = async (req, res) => {
    await accountsData.findOneAndDelete({ _id: req.params.id })
    res.json({ message: 'Cuenta Eliminada exitosamente' })
}


module.exports = accountsCtrl;
