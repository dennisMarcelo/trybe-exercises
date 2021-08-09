let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayMultiplicado = []
for (let cont = 0; cont < array.length; cont++ ){
    if(array[cont+1] != undefined){
        arrayMultiplicado.push(array[cont] * array[cont+1])
    }else{
        arrayMultiplicado.push(array[cont] * 2)
    }
}

console.log(arrayMultiplicado)