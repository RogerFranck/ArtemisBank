const depositoCtrl = {};
const cashmodel = require('../models/modelATMCash');


depositoCtrl.hacerDeposito = async (req, res) => {
  const cantidad = req.body.dinero
  const coin = await cashmodel.findOne({'denominacion': cantidad});
  const update = {
    denominacion : cantidad,
    quantity : coin.quantity + 1
  }
  await cashmodel.findOneAndUpdate({_id:coin.id}, update)
  res.json({message: "Deposito realizado con éxito"})
}

module.exports = depositoCtrl;

