const fetch = require('node-fetch');

// Num ambiente real, esse valor viria do Local Storage, ou de uma variável de ambiente
const API_TOKEN = '2d635ea9b637ea0f27d58985cc161d64';
console.log('to rodando');

const headers = new fetch.Headers({
  Authorization: API_TOKEN,
  'Content-Type': 'application/json', // dizemos que estamos enviando um objeto json
});

const body = JSON.stringify({
  name: 'Tryber',
  email: 'tryber@betrybe.com',
  password: 'Tr1b3r'});


fetch('https://postman-echo.com/get?param1=teste', {
  method: 'POST',
  headers,
  body
})
  .then((response) => {
    // Ao receber a resposta, verificamos se correu tudo bem
    // Caso não, forçamos a Promise a ser rejeitada
    if (!response.ok) {
      return Promise.reject(response);
    }

    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((errorOrResponse) => {
    // Em caso de falha simples (a request completou com um status diferente de 2xx)
    // simplesmente logamos o status no console
    if (errorOrResponse.status) {
      return console.error(`Request failed with status ${errorOrResponse.status}`);
    }

    // Caso tenha acontecido um erro de rede (não foi possível completar a request)
    // logamos o erro todo
    console.error(errorOrResponse);
  });