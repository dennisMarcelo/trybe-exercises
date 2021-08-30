// para fazer um post você precisa:
// 1 - passar o method,
// 2 - passar o/os headers,
  // aqui é o melhor lugar para se enviar tokens.
// 3 - O mais importante enviar a estrutura do body,

const fetch = require('node-fetch');

fetch(`http://localhost:3001/recipes/`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    token: '10Acla!20'
  },
  body: JSON.stringify({
    "id": 4,
    "name": "Picadinho de Eliza Samudio",
    "price": 100,
    "waitTime": 90
  })
});