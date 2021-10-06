// ./dipExample.js

const fetch = require('node-fetch');

const url = 'https://icanhazdadjoke.com';

// aqui tem duas abordagens diferentes o getJokes através de uma callback decide qual usar.

const requestWithFetch = () => {
  fetch(url, {
    headers: new fetch.Headers({
      Accept: 'application/json',
    }),
  })
    .then((response) => response.json())
    .then((data) => console.log(data.joke))
    .catch((err) => console.log(err));
};

const requestWithAxios = () => {
  axios
    .get(url, {
      headers: { Accept: 'text/plain' },
    })
    .then((response) => console.log(response.data));
};

const getJokes = (numberOfJokes, jokeRequester = requestWithFetch) => {
  for (let i = 0; i < numberOfJokes; i += 1) jokeRequester();
};

// Repare que, agora, quem chama a função decide qual dependência a função terá 
getJokes(5, requestWithAxios);

module.exports = { getJokes };