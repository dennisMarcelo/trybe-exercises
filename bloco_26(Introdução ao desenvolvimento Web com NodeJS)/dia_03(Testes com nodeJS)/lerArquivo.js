const fs = require('fs')

const lerArquivo = (nomeArquivo) => {
  try {
    const data = fs.readFileSync(nomeArquivo, 'utf8');

    return data;
  } catch(err) {
    return null;
  }
}

module.exports = lerArquivo;