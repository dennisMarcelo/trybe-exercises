//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtd = numbers.length;
let maiorNumero = null;

for(let cont = 0; cont < qtd; cont++){
    if(maiorNumero == null){
        maiorNumero = numbers[cont];
    }

    if(maiorNumero < numbers[cont]){
        maiorNumero = numbers[cont];
    }
}

console.log("Maior Numero: ",maiorNumero);
