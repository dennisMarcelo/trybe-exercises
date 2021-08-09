/* const promise = new Promise((resolve, reject) => {
    const arraySquared = [];
    for(let cont = 1; cont <= 10; cont += 1){
        const number = Math.floor(Math.random() * (50 -1) + 1);
        arraySquared.push(number**2);
    }
    const some = arraySquared.reduce((acc, cur) => acc+cur);
    if (some < 8000) {
        console.log(some)
        resolve(some);
    }
    reject("É mais de oito mil! Essa promise deve estar quebrada!");
})
.then((some) => [2, 3, 4, 10].map(e => Math.floor(some/e)))
.then((arrDivided) => arrDivided.reduce((acc,cur)=> acc+cur))
.then((arraySome) => console.log(arraySome))
.catch((err) => console.log(err));
 */
async function promise() {
    const arraySquared = [];
    for(let cont = 1; cont <= 10; cont += 1){
        const number = Math.floor(Math.random() * (50 -1) + 1);
        arraySquared.push(number**2);
    }
    const some = arraySquared.reduce((acc, cur) => acc+cur);
    if (some < 8000) {
        console.log(some)
        return(some);
    }
    throw new Error("É mais de oito mil! Essa promise deve estar quebrada!");
}

async function postResult() {
   const result = await promise()
    .then((some) => [2, 3, 4, 10].map(e => Math.floor(some/e)))
    .then((arrDivided) => arrDivided.reduce((acc,cur)=> acc+cur))
    .catch((err) => err+' malditos numeros randomicos!');

    console.log(result);
}

postResult()