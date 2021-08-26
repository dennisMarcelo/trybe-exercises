const { resolve } = require("path/posix")

function divida(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if(num2 === 0 ) reject(new Error('segundo parâmetro não pode ser 0'))

    const resultado = num1/num2;

    resolve(resultado)
  })

  return promise;
}

divida(2, 8913)
  .then((resultado) => console.log(resultado))
  .catch((err) => console.log("Erro: %er", err.message))