//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 3500;
let salarioBase = null
let salarioLiquido = null
let parcelaIR = null

if(salarioBruto >= 0 && salarioBruto <= 1556.94){
    salarioBase = salarioBruto - (salarioBruto * 8)/100;

}else if(salarioBruto > 1556.94 && salarioBruto <= 2594.92){
    salarioBase = salarioBruto - (salarioBruto * 9)/100;

}else if(salarioBruto > 2594.92 && salarioBruto <= 5189.82){
    salarioBase = salarioBruto - (salarioBruto * 11)/100;

}else if(salarioBruto > 5189.82){
    salarioBase = salarioBruto - 570.88;
    
}

if(salarioBase >= 1903.99 && salarioBase <= 2826.65){
    parcelaIR = ((salarioBase * 7.5)/100 - 57.45);
    ir = ((salarioBase*7.5)/100);
    salarioLiquido = salarioBase - (ir - parcelaIR);    

}else if(salarioBase > 2826.65 && salarioBase <= 3751.05){
    parcelaIR = ((salarioBase * 15)/100 - 354.80);
    ir = ((salarioBase*15)/100);
    salarioLiquido = salarioBase - (ir - parcelaIR); 

}else if(salarioBase > 3751.05 && salarioBase <= 4664.68){
    parcelaIR = ((salarioBase * 22.5)/100 - 636.13);
    ir = ((salarioBase*22.5)/100);
    salarioLiquido = salarioBase - (ir - parcelaIR); 

}else if(salarioBase > 4664.68){
    parcelaIR = ((salarioBase * 27.5)/100 - 869.36);
    ir = ((salarioBase*27.5)/100);
    salarioLiquido = salarioBase - (ir - parcelaIR); 

}

console.log(salarioLiquido)