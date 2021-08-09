function encode(word) {
    const characters = word.split('');
    characters.forEach((char, i) => {
        if (char === 'a') characters[i] = 1;
        if (char === 'e') characters[i] = 2;
        if (char === 'i') characters[i] = 3;
        if (char === 'o') characters[i] = 4;
        if (char === 'u') characters[i] = 5;
    })
    return characters.join('');
    
}

function decode(word) {
    const characters = word.split('');
    characters.forEach((char, i) => {
        if (char === '1' ) characters[i] = 'a';
        if (char === '2' ) characters[i] = 'e';
        if (char === '3' ) characters[i] = 'i';
        if (char === '4' ) characters[i] = 'o';
        if (char === '5' ) characters[i] = 'u';
    })
    return characters.join('');
}

module.exports = {
    encode,
    decode,
}