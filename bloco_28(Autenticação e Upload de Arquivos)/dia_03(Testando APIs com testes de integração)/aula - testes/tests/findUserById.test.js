const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer} = require('mongodb-memory-server');

const server = require('../src/api/api');

chai.use(chaiHttp);

const { expect } = chai;

const fakeId = '605de6ded1ff223100cd6aa1'
const user = { username: 'blackPanther', password: 'wakand forevar'}

describe('GET /api/users/:userId', () => {
  
  describe('requisição sem toke', async () => {
    let responseWithoutToken;
    const DBServer = new MongoMemoryServer();

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);

      responseWithoutToken = await chai.request(server)
        .get(`/api/users/:${fakeId}`)
    })
      
    after( async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });
      
    it('retorna código de status 401 - /Not Found/', async () => {
        expect(responseWithoutToken).to.have.status(401);
    });
    
    it('retorna mensagem de erro no body da response com o texto /Token não encontrado ou informado/', () => {
      expect(responseWithoutToken.body.error).to.be.equal('Token não encontrado')
    });
  });

  //-----------------------------------------------------------
  
  describe('requisição com token invalido', () => {
    let responseInvalidToken;

    before(async () => {
      const URLMock = await DBServer.getUri();
      const connectionMock = await MongoClient.connect(URLMock,
        { useNewUrlParser: true, useUnifiedTopology: true }
      );

      sinon.stub(MongoClient, 'connect')
        .resolves(connectionMock);

      connectionMock.db('jwt_exercise')
        .collection('users')
        .insertOne({
          _id: EXAMPLE_ID,
          name:'T\'Challa',
          username: 'blackPanther', 
          password: 'wakand forevar',
          profession: 'super hero'
        })


      const {body: { token }} = await chai.request(server)
        .post('/api/users')
        .send(user)

      responseWithoutToken = await chai.request(server)
        .get(`/api/users/:${fakeId}`)
        .set('authorization', token)
      
      // Ainda é preciso fazer algumas alterações no validateJWT
      // projeto abandonado.
    })
      
    after( async () => {
      MongoClient.connect.restore();
      await DBServer.stop();
    });


    it('retorna Código de status 401 - /Unauthorized/', () => {
      expect(responseInvalidToken).to.have.status(401);
    })

    it('retorna mensagem no body da response com o texto /Acesso negado/', () => {
      expect(responseInvalidToken.body.message).to.be.equal('Acesso negado')
    });
  });

  //-----------------------------------------------------------

  describe.skip('requisição com suario autenticado corretamente', () => {
    let responseOK;

    it('Código de status 200 - OK.', async () => {
      expect(responseOK).to.have.status(200);
    });

    it('retorna os dados da pessoa usuária em um objeto em um objeto no corpo ( body ) da resposta ( response )', async () => {
      expect(responseOK.body.message).to.be.equal('')
    });
  });
});



/* 
  contratos GET /api/users/:userId: 
    requisição sem toke  
      - retorna código de status 400 - 'Not Found'.
      - retorna Mensagem de erro no body da response com o texto 'Token não encontrado ou informado'.

    requisição com token invalido
      - retorna Código de status 401 - 'Unauthorized' 
      - retorna mensagem no body da response com o 'texto Acesso negado'.
    
    requisição com suario autenticado corretamente
      - retorna os dados da pessoa usuária em um objeto em um objeto no corpo ( body ) da resposta ( response ).
      - Código de status 200 - OK.
*/