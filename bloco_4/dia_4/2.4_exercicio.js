let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

positionHighestValue(array)

function positionHighestValue(array) {
    let qtd = array.length;
    let stringSize = null
    let name = null

    for (let i = 0; i < qtd; i++) {
        if (array[i].length > stringSize) {
            stringSize = array[i].length;
            name = array[i];
        }
    }

    console.log(`Maior nome = ${name}`)
}