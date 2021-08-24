/* 
Ao importarmos recebemos um objeto dessa forma: 
  { brl: 5.37, usdToBrl: [Function: usdToBrl] }
*/

//const convert = require('./Exportando módulos');
const {usdToBrl, brl} = require('./Exportando módulos');

const usd = 10;
const convertedValue = usdToBrl(usd);

console.log(`valor a ser convertido: ${usd}`)
console.log(`valor da converção: ${convertedValue}`)
console.log(`valor convertido: ${convertedValue}`)
