// Ele é parecido com o readFile
const fs = require('fs').promises;

const filName = 'texto3.txt'

async function readFile() {
  try{
    const data = await fs.readFile(filName, 'utf-8');
    console.log(`Dados do arquivo:\n${data}`);
  } catch(err) {
    console.error(`Erro ao ler arquivo:\n\n ${err.message}`)
  }
}

// flag:
// w - Cria um novo arquivo caso não exista.
// x - dispara um erro caso o arquivo não exista.
async function writeFile() {
  try{
    await fs.writeFile(filName, 'Texto escrito com sucesso.', {flag: 'w'})
    console.log('Arquivo escrito com sucesso.');
    readFile()
  } catch(err) {
    console.error(`Erro ao escrever o arquivo: \n\n${err.message}`);
  }
} 

writeFile();
