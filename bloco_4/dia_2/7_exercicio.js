//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtd = numbers.length;
let menorNumero = null;

for(let cont = 0; cont < qtd; cont++){
    if(menorNumero == null){
        menorNumero = numbers[cont];
    }

    if(menorNumero > numbers[cont]){
        menorNumero = numbers[cont];
    }
}

console.log("Menor Numero: ",menorNumero);
