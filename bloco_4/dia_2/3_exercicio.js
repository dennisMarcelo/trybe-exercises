//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = null;
let media = null;

for(let cont = 0; cont < numbers.length; cont++){
    soma += numbers[cont];
}

media = soma/numbers.length;

console.log(media)