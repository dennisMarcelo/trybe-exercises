//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtd = numbers.length;
let numeroImpar;
let contImpar = null;

for(let cont = 0; cont < qtd; cont++){
    if(numbers[cont]%2 != 0){
        contImpar++
    }
}

if(contImpar > 0){
    console.log("Quantidade de numeros impares: ", contImpar)
}else{
    console.log("nenhum valor ímpar encontrado")
}