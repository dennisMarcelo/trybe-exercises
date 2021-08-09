let numero = 6
let contDivisiveis = null

for (let cont = 1; cont <=numero; cont++){
    if(numero%cont == 0) {
        contDivisiveis++
    }  
}

if(contDivisiveis<=2){
    console.log(`${numero} é primo`)
}else{
    console.log(`${numero} não é primo`) 
}