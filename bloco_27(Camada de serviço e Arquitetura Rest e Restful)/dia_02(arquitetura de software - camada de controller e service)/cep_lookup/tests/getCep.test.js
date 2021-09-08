const frisby = require('frisby');

const url = 'http://localhost:3000';

describe('1 - rotas cep get', () => {
  describe('Teste de roras', () => {
    it('teste estão rodando na porta 3000', async () =>{
      await frisby
        .get(`${url}/ping`)
        .expect('status', 200)
    });
  
    it('A rota /ping retorna status 200 e o json { "message": "pong!" }', async () => {
      await frisby
        .get(`${url}/ping`)
        .expect('status', 200)
        .expect('json', { message: 'pong!'})
    });
  })
  

  describe('CEP valido', ()=>{
    it('Retorna status `200 OK` e os dados do CEP no formato experado, caso tenha 8 digitos com traço', async () => {
      
    });

    it('Retorna status `200 OK` e os dados do CEP no formato experado, caso tenha 8 digitos sem traço', async () => {
      
    });
  });

  describe('CEP invalido', () => {
    it('Retorna status 400 Bad Request e o json no formato experado.', async() => {
      await frisby
        .get(`${url}/cep/24246-24`)
        .expect('status', 400)
        .expect('json', { "error": { "code": "invalidData", "message": "CEP inválido" } })
    });
  })

  describe('CEP não encontrado no banco de dados', () => {
    it('Retorna status 404 Not Found e o json no formato esperado.', async() => {
      
    })
  });
});