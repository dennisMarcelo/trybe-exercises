//Ordene o array numbers em ordem decrescente e imprima seus valores;

let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];

for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
        if (array[i] > array[j]) {
            let position = array[i];

            array[i] = array[j];
            array[j] = position;
        }
    }
}

console.log(array)