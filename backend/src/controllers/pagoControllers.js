const pagoCtrl = {};
const cashmodel = require('../models/modelATMCash');
const usermodel= require('../models/modelAccounts');



pagoCtrl.pagoTarjeta = async (req, res) => {
  const user = await usermodel.findById(req.params.id)

  const updateuser = {
    tipo: user.tipo,
    firstName: user.firstName,
    lastName: user.lastName,
    nip : user.nip,
    balance: user.balance - req.body.costo,
  }

  if(user.balance < req.body.costo){
    res.json({pago: false })
  }
  else{
    await usermodel.findOneAndUpdate({_id:user.id}, updateuser)
    res.json({pago: true })
  }
}

pagoCtrl.pagoEfectivo = async (req, res) => {
  const denominacion = req.body.dinero
  const cantidad = req.body.cantidad
  const coin = await cashmodel.findOne({'denominacion': denominacion});
  const update = {
    denominacion : denominacion,
    quantity : parseInt(coin.quantity) + parseInt(cantidad) 
  }
  await cashmodel.findOneAndUpdate({_id:coin.id}, update)
  res.json({message:  `Se han agregado: ${cantidad*denominacion} al ATM` })

}

module.exports = pagoCtrl;

