const chai = require('chai');
const {stub} = require('sinon');
const chaiHttp = require('chai-http');
const { expect } = require('chai');

const { Book } = require('../src/models')
const app = require('../index');
const {allBooks} = require('./booksMock')

chai.use(chaiHttp);

describe('busca todos os livros', ()=> {
  let findAllStub = null;
  before(()=> {
    findAllStub = stub(Book, 'findAll');
  })

  after(()=> findAllStub.restore());

  describe('quanto busca todos os livros e não encontra nenhum', ()=> {
    let result = null;

    before(async ()=> {
      findAllStub.resolves([])
      result  = await chai.request(app)
        .get('/book');
    });
  
    it('a função findAll é chamada', () =>{
      expect(Book.findAll.calledOnce).to.be.equals(true);
    })

    it('o status é 200', ()=> {
      expect(result).to.be.status(200);
    })

    it('retorna um arrai vazio', ()=> {
      expect(result.body).to.be.empty;
    })
  });

  describe('quanto busca todos os livros e retorna um array de livros', ()=> {
    let result = null;

    before(async ()=> {
      findAllStub.resolves(allBooks)
      result  = await chai.request(app)
        .get('/book');
    });

    it('retorna status 200', ()=>{
      expect(result).to.be.status(200);
    });

    it('retorna um array com dois itens', ()=>{
      expect(result.body).to.be.an('array').that.length(2);
    });

    it('retorna um array de objetos', ()=>{
      expect(result.body[0]).to.be.an('object');
      expect(result.body[1]).to.be.an('object');
    });
  });
});