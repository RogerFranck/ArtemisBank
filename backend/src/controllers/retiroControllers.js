const retiroCtrl = {};
const cashmodel = require('../models/modelATMCash');
const usermodel= require('../models/modelAccounts');

async function actualizarMonedas(cantidad, id){
  const coin = await cashmodel.findOne({'denominacion': cantidad});
  
  const update = {
      denominacion : cantidad,
      quantity : coin.quantity - 1
  }
 await cashmodel.findOneAndUpdate({_id:coin.id}, update)//Actualizar Monedas Cajero

  const user = await usermodel.findById({_id:id})
  const updateuser = {
    tipo: user.tipo,
    firstName: user.firstName,
    lastName: user.lastName,
    nip : user.nip,
    balance: user.balance - cantidad
  }
    await usermodel.findOneAndUpdate({_id:user.id}, updateuser)//Actualizar balance cuenta 
}

function ordenamiento(inputArr) {
  let len = inputArr.length;
  for (let i = 0; i < len -1; i++) {
    for (let j = 0; j < len -i -1; j++) {
      if (inputArr[j][0] > inputArr[j + 1][0]) {
        let tmp = inputArr[j];
        inputArr[j] = inputArr[j + 1];
        inputArr[j + 1] = tmp;
      }
    }
  }
  return inputArr;
}

function dynamic(monedas, cantidad, user) {
  monedas = ordenamiento(monedas);
  n = cantidad;
  cantidadTotal = 0;

  

  for (var i = 0; i<monedas.length; i++) {
    cantidadTotal = cantidadTotal + monedas[i][0] * monedas[i][1];
  }
  if (cantidad > cantidadTotal) {
    return "Error, la cantidad de monedas no alcanza a cubrir la cantidad ingresada";
  }
  else if(cantidad < 0){
    return "Error, no se aceptan números negativos";
  }
  else if(cantidad > user.balance){
    return "Error, no hay suficiente dinero en la cuenta"
  }

  //Hasta aqui todo bien
  var matriz = [];
  var fila1 = ["#"];
  for (i = 0; i<cantidad + 1; i++) {
    fila1.push(i);
  }
  matriz.push(fila1);
  
  var fila1 = [];
  for (var i = 0; i<monedas.length; i++) {
    for (var j = 0; j<cantidad + 2; j++) {
      if (j == 0) {
        fila1.push(monedas[i][0]);
      }
      else if(matriz[0][j] < monedas[i][0])
      {
        fila1.push(matriz[i][j]);
      }
      else if(matriz[0][j] == monedas[i][0])
      {
        fila1.push(1);
      }
      else if(matriz[0][j] > monedas[i][0])
      {
        fila1.push(fila1[j - monedas[i][0]] + 1);
      }
    }
    matriz.push(fila1);
    var fila1 = [];
  }
  //Checkpoint
  var numeros = [];
  while (n != 0) {
    var posiblesMonedas = [];
    for (i = 1; i<monedas.length + 1; i++) {
      posiblesMonedas.push([matriz[i][n + 1], i]);
    }
    //posiblesMonedas.sort()
    posiblesMonedas = ordenamiento(posiblesMonedas);
    

    for (i = 0; i< posiblesMonedas.length; i++) {
      if (monedas[posiblesMonedas[i][1] - 1][1] > 0) {
        if ((n - matriz[posiblesMonedas[i][1]][0]) >= 0) {
          numeros.push(matriz[posiblesMonedas[i][1]][0]);
          n = n - matriz[posiblesMonedas[i][1]][0];
          monedas[posiblesMonedas[i][1] - 1][1] = monedas[posiblesMonedas[i][1] - 1][1] - 1;
          actualizarMonedas(matriz[posiblesMonedas[i][1]][0], user.id)
          break;
        }
        else if(monedas[posiblesMonedas[i][1] - 1][1] < 0)
        {
          return "Error, no se puede retornar dicha cantidad, por falta de monedas";
        }
      }
    }
  }
  return numeros;
}

retiroCtrl.hacerRetiro = async (req, res) => {
  const cash = await cashmodel.find();
  const dineroDisponible = []; 
  for( i=0; i<cash.length; i++) //Acomodar dinero para el algoritmo
  {
    const aux = []
    aux.push(cash[i].denominacion)
    aux.push(cash[i].quantity)
    dineroDisponible.push(aux)
  }
  const user = await usermodel.findById({_id:req.params.id});
 
  res.json(dynamic(dineroDisponible, req.body.dinero, user))
};


module.exports = retiroCtrl;

