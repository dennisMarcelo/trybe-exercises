// aqui os arquivos são lidos de forma assincrona

// Primeira forma
/* const fs = require('fs');

const nomeDoArquivo = 'texto.txt';

fs.readFile(nomeDoArquivo, 'utf8', (err, data) => {
  if (err) {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  }
  console.log(`Conteúdo do arquivo: \n\n${data}`);
}); */


// Segunda forma
const fs = require('fs').promises;

const fileName = 'texto.txt';

fs.readFile(fileName, 'utf-8')
  .then((data) => {
    console.log(`conteúdo do arquivo: \n\n${data}`);
  })
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1);
  });