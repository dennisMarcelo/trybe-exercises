function divida(num1,num2) {
  if(num2 === 0) throw new Error('segundo parâmetro não pode ser 0');

  const resultado = num1/num2;

  return resultado;
}

try{
  const resultado  = divida(2, 1)
  console.log(resultado);
} catch(err) {
  console.log("Erro: %er", err.message);
}
