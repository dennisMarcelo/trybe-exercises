//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

let porcentagem = 90;

if(porcentagem >= 90 && porcentagem < 100){
    console.log("Nota: A")
}else if(porcentagem >= 80 && porcentagem <= 89){
    console.log("Nota: B")
}else if(porcentagem >= 70 && porcentagem <= 79){
    console.log("Nota: C")
}else if(porcentagem >= 60 && porcentagem <= 69){
    console.log("Nota: D")
}else if(porcentagem >= 50 && porcentagem <= 59){
    console.log("Nota: E")
}else if(porcentagem >= 0 && porcentagem <= 49){
    console.log("Nota: F")
}else{
    console.log("Erro: numero invalido!")
}