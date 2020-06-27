const depositoCtrl = {};
const cashmodel = require('../models/modelATMCash');
const usermodel= require('../models/modelAccounts');


depositoCtrl.hacerDepositoAdmin = async (req, res) => {
  const denominacion = req.body.dinero
  const cantidad = req.body.cantidad
  const coin = await cashmodel.findOne({'denominacion': denominacion});
  const update = {
    denominacion : denominacion,
    quantity : coin.quantity + cantidad 
  }
  await cashmodel.findOneAndUpdate({_id:coin.id}, update)
  res.json({message:  `Se han agregado: ${cantidad*denominacion} al ATM` })
}

depositoCtrl.hacerDepositoUser = async (req, res) => {
  const denominacion = req.body.dinero
  const cantidad = req.body.cantidad
  const coin = await cashmodel.findOne({'denominacion': denominacion});
  const updatebank = {
    denominacion : denominacion,
    quantity : coin.quantity + cantidad 
  }
  await cashmodel.findOneAndUpdate({_id:coin.id}, updatebank)

  const user = await usermodel.findById({_id:req.params.id})
  const updateuser = {
    tipo: user.tipo,
    firstName: user.firstName,
    lastName: user.lastName,
    nip : user.nip,
    balance: user.balance + cantidad*denominacion
  }
  await usermodel.findOneAndUpdate({_id:user.id}, updateuser)
  res.json({message:  `Se han agregado: ${cantidad*denominacion} pesos a su cuenta` })
}

module.exports = depositoCtrl;

