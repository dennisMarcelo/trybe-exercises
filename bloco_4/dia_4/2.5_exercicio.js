let array = [2, 3, 2, 5, 8, 2, 3];

moreRepeated(array)

function moreRepeated(array) {
    let qtd = array.length;
    let numberMoreRepeated = null;
    let numberCountPast = null;

    for (let i = 0; i < qtd; i++) {
        let numberCount = null;

        for (let i2 = i; i2 < qtd; i2++) {
            if (array[i] == array[i2]) {
                numberCount++
            }
        }

        if (numberCount > numberCountPast) {
            numberCountPast = numberCount;
            numberMoreRepeated = array[i];
        }
        
    }

    console.log(`Numero que mais se repete = ${numberMoreRepeated}`)

}