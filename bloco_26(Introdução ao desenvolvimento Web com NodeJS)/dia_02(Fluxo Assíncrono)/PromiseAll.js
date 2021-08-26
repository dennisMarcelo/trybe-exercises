const fs = require('fs').promises;

// Serve para caso vc queira ler mais de uma promise 
// ou ler um array de promises
Promise.all([
  fs.readFile('texto1.txt'),
  fs.readFile('texto2.txt'),
  fs.readFile('texto3.txt'),
])
  .then(([texto1, texto2, texto3]) => {
    const fileSizeSum = texto1.byteLength + texto2.byteLength + texto3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });
