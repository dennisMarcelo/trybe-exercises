//Escreva um programa que defina 'três números' em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .

let a = 10%2 == 0;
let b = 3%2 == 0;
let c = 7%2 == 0;

if(a || b || c) {
    console.log("true")
}else{
    console.log("false")
}

