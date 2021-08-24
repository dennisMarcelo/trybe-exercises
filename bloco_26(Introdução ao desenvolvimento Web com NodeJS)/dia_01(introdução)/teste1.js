const readline = require('readline-sync');

const name = readline.question('Qual seu nome? ');
const age = readline.questionInt('Qual sua idade? ');

console.log(`Hello, ${name}! You are ${age} years old!`);
console.log(`
| IMC                      | Situação                  |
| ------------------------ | ------------------------- |
| Abaixo de 18,5           | Abaixo do peso (magreza)  |
| Entre 18,5 e 24,9        | Peso normal               |
| Entre 25,0 e 29,9        | Acima do peso (sobrepeso) |
| Entre 30,0 e 34,9        | Obesidade grau I          |
| Entre 35,0 e 39,9        | Obesidade grau II         |
| 40,0 e acima             | Obesidade graus III e IV  |
`)