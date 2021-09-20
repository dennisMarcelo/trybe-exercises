// Form-data é uma biblioteca que ajuda a montar requisição do tipo  'multipart/form-data'
const FormData = require('form-data');
const axios = require('axios');
const fs = require('fs');

/* Criação do stream do arquivo */
const stream = fs.createReadStream('./files/texto.txt');

stream.on('data', (chunk) => {
  console.log('funciona');
  console.log(chunk.toString());
});


// criação do do formulário com o campo 'arquivo'.
// colocando o stream no formulário.
const form = new FormData();
form.append('arquivo', stream);

/* Esse arquivo não será enviado no body da requisição como de costume. */
/* Em ambientes NodeJS, é preciso setar o valor de boundary no header */
/* 'Content-Type' chamando o método `getHeaders` */

// const formHeaders = form.getHeaders();

// axios
//   .post('http://localhost:8080/upload', form, {
//     headers: { ...formHeaders },
//   })
//   .then(response => {
//     console.log(response.status);
//     // console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error.message);
//   })