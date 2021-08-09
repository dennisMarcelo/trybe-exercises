//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = null;
let media = null;

for(let cont = 0; cont < numbers.length; cont++){
    soma += numbers[cont];
}

media = soma/numbers.length;

if(media > 20){
    console.log("valor maior que 20")
}else{
    console.log("valor menor ou igual a 20")    
}