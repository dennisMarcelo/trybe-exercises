// aqui os arquivos são lidos de forma sincrona

const fs = require('fs');

const fileName = "texto.txt";

try{
  const data = fs.readFileSync(fileName, 'utf-8');
  console.log(data);
} catch (err) {
  console.error(`Error ao ler arquivo: ${err.path}`);
  console.log(err)
}