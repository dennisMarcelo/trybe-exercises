const fatorrial = number => number === 1 ? number : number * fatorrial(number-1);

console.log(fatorrial(5));
