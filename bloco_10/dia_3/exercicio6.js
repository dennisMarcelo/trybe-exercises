const fetch = require('node-fetch');

async function fetchURL() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    
    return response.json()
        .then((json) => response.ok? Promise.resolve(json) : Promise.reject(json))
        .catch((err) => err)
}

module.exports = {
    fetchURL,
}