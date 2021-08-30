const fs = require('fs').promises;

async function readData(file, searchID) {
  const data = JSON.parse(await fs.readFile(file, 'utf-8'));
  
  if(searchID) {
    const findedCharacter = data.filter(({id})=> Number(id) === searchID)
    
    if(findedCharacter.length <= 0) throw new Error('id não encontrado')
    
    return findedCharacter
  } else {
    return data;
  }
}

// O segundo parâmetro é opcional e deve ser um inteiro
readData('simpsons.json', 1)
  .then((data) => {
    data.forEach(({id, name}) => {
      console.log(`${id} - ${name}`);
    })
  }).catch((err) => {
    console.error(err)
  })