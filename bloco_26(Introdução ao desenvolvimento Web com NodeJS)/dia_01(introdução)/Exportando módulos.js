/* 
Para exportar algo no sistema CommonJS, utilizamos a variável global 'module.exports' , atribuindo a ela o valor que desejamos exportar: 
*/
 
const brl = 5.37;

const usdToBrl = (valueInUsd) => valueInUsd * brl;

//module.exports = usdToBrl;

module.exports = {
  usdToBrl,
  brl
}