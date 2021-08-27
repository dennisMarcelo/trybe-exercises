const {expect} = require('chai')

const whatIsNumber = require('../exerciocio1.js');

describe('exercicio 1', () => {

  describe('Quando o numero é maior que 0 ', () => {
    it('Retorna positivo', () => {
      const resultado = whatIsNumber(1);
      
      expect(resultado).to.be.equal('positivo')
    })
  })
  
  describe('Quando o numero é menor que 0 ', () => {
    it('Retorna negativo', () => {
      const resultado = whatIsNumber(-1);
      
      expect(resultado).to.be.equal('negativo')
    })
  })
  
  describe('Quando o numero é igual a 0 ', () => {
    it('Retorna neutro', () => {
      const resultado = whatIsNumber(0);
      
      expect(resultado).to.be.equal('neutro')
    })
  })

  describe('Quando o parametro passado não é um numero', () => {
    it("Retorna erro escrito: 'Parâmetro passado não é uma string' ", () => {
      const resultado = whatIsNumber('Sou Uma String');

      expect(resultado).to.throw('Parâmetro passado não é uma string');
    });
  });
});