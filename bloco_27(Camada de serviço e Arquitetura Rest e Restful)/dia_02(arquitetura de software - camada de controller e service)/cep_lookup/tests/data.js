const url = 'http://localhost:3000/cep';

//bodys
const okBody = {
  "cep": "01001-002",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}

const nullUfBody = {
  "cep": "01001-000",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "",
}

const cepInvalidBody = {
  "cep": "0100113",
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP",
}

// erros
const ufInvalidResponse = {
    "error": {
      "code": "invalidData",
      "message": "\"uf\" is not allowed to be empty"
  }
}

const cepInvalidResponse = {
    "error": { 
      "code": "invalidData", 
      "message": "CEP inválido" 
    }
}

const headers = { 'Content-Type': 'application/json'}

module.exports = {
 url,
 headers,
 okBody,
 nullUfBody,
 ufInvalidResponse,
 cepInvalidBody,
 cepInvalidResponse,
}