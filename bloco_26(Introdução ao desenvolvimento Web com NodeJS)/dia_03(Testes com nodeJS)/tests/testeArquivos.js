const { expect } = require('chai');
const fs = require('fs');
const sinon = require('sinon');

const lerArquivo = require('../lerArquivo');
const CONTEUDO_DO_ARQUIVO = 'VQV com TDD';

describe('leArquivo', ()=> {
  
  describe('Quando o arquivo existe', () => {
    const resposta = lerArquivo('texto.txt');
    
    before(()=>{
      sinon.stub(fs, 'readFileSync').returns(CONTEUDO_DO_ARQUIVO);
    })

    after(()=>{
      fs.readFileSync.restore();
    })

    it('é uma string', () => {
      // a asserção 'a' serve para validar o tipo do retorno.
      expect(resposta).to.be.a('string');
    });

    it('é igual ao conteúdo do arquivo', () => {
      expect(resposta).to.be.equals(CONTEUDO_DO_ARQUIVO);
    });
  });

  describe('Quando o arquivo não existe', () => {
    before(() => {
      sinon
        .stub(fs, 'readFileSync')
        .throws(new Error('Arquivo não encontrado'));
    });

    after(() => {
      fs.readFileSync.restore();
    });

    it('é igual a "null"', () => {
      const resposta = lerArquivo('arquivo_que_nao_existe.txt');

      expect(resposta).to.be.equals(null);
    });
  });
})