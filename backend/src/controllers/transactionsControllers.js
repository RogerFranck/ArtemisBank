const transactionCtrl = {};

const transactionModel = require('../models/modelTransactions')
//getAllTransactions, getUserTransactions, postTransaction

transactionCtrl.getAllTransactions = async (req,res) =>{
  const transactions = await transactionModel.find();
  res.json(transactions)
}

transactionCtrl.getUserTransactions = async (req,res) => {
  const transactions = await transactionModel.findOne({accountId : req.params.id});
  res.json(transactions)
}

transactionCtrl.getTypeTransactions = async (req,res) => {
  const transactions = await transactionModel.findOne({typeId : req.params.tipo});
  res.json(transactions)
}

transactionCtrl.getServiceTransactions = async (req,res) => {
  const transactions = await transactionModel.findOne({utilitiesId : req.params.serviceId});
  res.json(transactions)
}

transactionCtrl.postTransaction = async (req,res) => {
  const {typeId, accountId, utilitiesId, ammount} = req.body;
  const newTransaction = new transactionModel({
    typeId: typeId,
    accountId: accountId,
    utilitiesId: utilitiesId,
    ammount: ammount,
  });
  await newTransaction.save();
  res.json({message: "Transacción guardada"})
}

module.exports = transactionCtrl;