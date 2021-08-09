function numeroSortiado(a, b) {
    return a === b
}

function sortiado(escolhido, callback) {
    let sorteio = parseInt((Math.random() * (5 - 1) + 1).toFixed(0));
    return callback(escolhido, sorteio) ? 'Parabens você ganhou!' : 'Tente Novamente.';
}

console.log(sortiado(1, numeroSortiado))