const accountsCtrl = {}

const accountsData = require ('../models/modelAccounts')

accountsCtrl.getSaldo = async (req, res) => {
    const respu = await accountsData.find({ 'id': 1 })
    res.json(respu)
}