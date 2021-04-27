function hydrate(string) {
    const arrayNumbers = string.match(/\d+/g).map(Number);
    const sumArray = arrayNumbers.reduce((acc, curr) => acc + curr);
  
    if (sumArray === 1) return `${sumArray} copo de água`;
  
    return `${sumArray} copos de água`;
}

module.exports = hydrate;