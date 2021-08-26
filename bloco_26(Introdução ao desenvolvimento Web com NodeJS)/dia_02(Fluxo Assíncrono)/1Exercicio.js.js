const readLine = require("readline-sync")

function sumAndMult(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    const result = (a+b)*c;

    if(result < 50) reject(new Error(`Resultado ${result} abaixo do esperado!`));
    
    resolve(result);
  })

  return promise;
}

const num1 = readLine.questionInt("Digite um numero inteiro: ");
const num2 = readLine.questionInt("Digite um numero inteiro: ");
const num3 = readLine.questionInt("Digite um numero inteiro: ");

sumAndMult(num1, num2, num3)
  .then((response) => console.log(response))
  .catch((error) => console.log(`Erro: ${error.message}`))
