const assert = require('assert');
// escreva a função wordLengths aqui
const wordLengths = (array) =>{  
    let arrayLength = [];
    array.forEach( e => arrayLength.push(e.length));
    return arrayLength;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');

const output = wordLengths(words);
assert.deepStrictEqual(output, expected);