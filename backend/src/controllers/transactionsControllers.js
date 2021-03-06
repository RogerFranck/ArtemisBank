const transactionCtrl = {};

const transactionModel = require('../models/modelTransactions')
//getAllTransactions, getUserTransactions, postTransaction

transactionCtrl.getAllTransactions = async (req,res) =>{
  const transactions = await transactionModel.find();
  res.json(transactions)
}

transactionCtrl.getUserTransactions = async (req,res) => {
  const transactions = await transactionModel.find({accountId : req.params.id});
  res.json(transactions)
}

transactionCtrl.getTypeTransactions = async (req,res) => {
  const transactions = await transactionModel.find({typeId : req.params.tipo});
  res.json(transactions)
}

transactionCtrl.getUserTransactionsType = async (req,res) => {
  if (req.body.utilitiesId){
    const transactions = await transactionModel.find({accountId: req.params.id , utilitiesId : req.body.utilitiesId});
    res.json(transactions)
  }
  else if (req.body.tipo){
    const transactions = await transactionModel.find({accountId: req.params.id , typeId : req.body.tipo});
    res.json(transactions)
  }
}

transactionCtrl.getServiceTransactions = async (req,res) => {
  const transactions = await transactionModel.find({utilitiesId : req.params.serviceId});
  res.json(transactions)
}

transactionCtrl.postTransaction = async (req,res) => {
  const {typeId, accountId, utilitiesId, ammount} = req.body;
  const newTransaction = new transactionModel({
    typeId: typeId, //Retiro, deposito o pago servicio
    accountId: accountId, //Quien lo hizo
    utilitiesId: utilitiesId,//Qué servicio es
    ammount: ammount, //cantidad
  });
  await newTransaction.save();
  res.json({message: "Transacción guardada"})
}

module.exports = transactionCtrl;