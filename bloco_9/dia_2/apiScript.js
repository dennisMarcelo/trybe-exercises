// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
// Adicionar lógica aqui!
    const myObject = {
        method: 'get',
        headers: {'accept':'application/json'}
    }

    return fetch(API_URL, myObject)
        .then((response) => response.json())
        .then(data => data)
};

window.onload = async () => {
    const data = await fetchJoke();
    const $jokeContainer = document.getElementById('jokeContainer');
    $jokeContainer.innerHTML = data.joke;
    console.log(data.joke);
};
