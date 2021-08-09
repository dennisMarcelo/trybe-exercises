// para resolver este exercicio utilizei este forum: https://qastack.com.br/programming/881085/count-the-number-of-occurrences-of-a-character-in-a-string-in-javascript

const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    return names
    .reduce((acc, name) => {
        const qtd = (name.toLocaleLowerCase().match(/a/g) || []).length;
        return acc + qtd;
    }, 0)
}

assert.deepStrictEqual(containsA(), 20);