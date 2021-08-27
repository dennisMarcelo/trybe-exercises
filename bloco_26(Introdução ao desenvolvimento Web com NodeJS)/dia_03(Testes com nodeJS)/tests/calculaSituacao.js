const {expect} = require('chai');

const calculaSituacao = require('../calculaSituacao');

describe('Média', () => {

  describe('Quando a média for menor que 7', () => {
    it('retorna reprovado se for iqual 4:', () => {
      const resposta = calculaSituacao(4);
      
      expect(resposta).equal('reprovado');
    });
    
    //  o "to e o be" são getters eles são apenas estéticos, não servem pra nada
    it('retorna reprovado se for iqual 5:', () => {
      const resposta = calculaSituacao(5);
      
      expect(resposta).to.be.equal('reprovado');
    });
  });
  
  describe('Quando a média for igual a 7', () => {
    it('retorna "aprovado"', () => {
      const resposta = calculaSituacao(7);
      
      expect(resposta).to.be.equals('aprovado');
    });
  });
  
})