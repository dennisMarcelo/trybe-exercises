let array = [0, 3, 6, 7, 10, 1];

positionHighestValue(array)

function positionHighestValue(array) {
    let qtd = array.length;
    let highestValue = null;
    let positionValue = null

    for (let i = 0; i < qtd; i++) {
        if (array[i] > highestValue) {
            highestValue = array[i]
            positionValue = i;
        }
    }

    console.log(`Indice do maior valor = ${positionValue}`)
}