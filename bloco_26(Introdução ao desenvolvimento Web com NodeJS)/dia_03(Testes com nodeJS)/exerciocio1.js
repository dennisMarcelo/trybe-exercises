const whatIsNumber = (number) => {
  if( typeof number  === 'string') throw new Error('Parâmetro passado não é uma string')
  if(number > 0) return 'positivo';
  if(number < 0) return 'negativo';
  if(number === 0) return 'neutro';
}

module.exports = whatIsNumber