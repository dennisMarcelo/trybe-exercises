//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let custo = 55;
let custoTotal = custo + ((custo*20)/100);
let valorVenda = 70;
let lucro = null; 

if( custoTotal <= 0 || valorVenda <=0){
    console.log("Erro os valores de entrada não podem ser < 0")
}else{
    lucro = (valorVenda - custoTotal)*1000
    console.log("O lucro da empresa foi de: ",lucro)
}