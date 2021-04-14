const assert = require('assert');

const greetPeople = (people) => {
    let greeting = 'Hello';
    let arraGreet = []
    for (const person in people) {
        arraGreet.push(`${greeting} ${people[person]}`);
    }
    return arraGreet;
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function')
assert.notStrictEqual(parameter,result);
assert.deepStrictEqual(greetPeople(parameter),result);