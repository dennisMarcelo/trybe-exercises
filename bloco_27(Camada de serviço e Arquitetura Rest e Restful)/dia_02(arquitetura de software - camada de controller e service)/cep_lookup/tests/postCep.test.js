const frisby = require('frisby');
const { 
  url,
 headers,
 okBody,
 nullUfBody,
 ufInvalidResponse,
 cepInvalidBody,
 cepInvalidResponse,
} = require('./data')


describe('2 - rotas cep POST', ()=>{
  describe('CEP lalido', ()=> {
    it('Os dados enviado estão ok e a resposta retorna status 201 e o mesmo json enviado.', ()=>{
      return frisby
        .fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(okBody),
        })
        .expect('status', 201)
        .expect('json', okBody)
    })
  })


  describe('Todos os campos são obrigatórios', ()=>{
    it('Retonar status 400 Bad Request quando um dos campos esta vazio.', ()=> {
      return frisby
        .fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(nullUfBody),
        })
        .expect('status', 400)
        .expect('json', ufInvalidResponse)
    })

    it('Retonar status 400 Bad Request quando cep é invalido.', ()=> {
      return frisby
        .fetch(url, {
          method: 'POST',
          headers,
          body: JSON.stringify(cepInvalidBody),
        })
        .expect('status', 400)
        .expect('json', cepInvalidResponse)
    })
  })

  

})