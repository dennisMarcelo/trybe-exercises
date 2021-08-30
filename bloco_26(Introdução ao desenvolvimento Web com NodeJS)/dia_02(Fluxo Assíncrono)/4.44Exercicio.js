const fs = require('fs').promises;

async function family(newName, replaceName){
  const string = await fs.readFile('simpsons.json');
  let data  = JSON.parse(string);
  const lastIndex = data.length -1

  if(replaceName === undefined){
    data.push({ 
      id: `${Number(data[lastIndex].id) + 1}`, 
      name: newName })
  } else {
    const index = data.findIndex(({name}) => name === newName)
    if(index === -1) return new Erro('Name not found!')

    data[index] = {...data[index], name: replaceName}
  }

  await fs.writeFile('simpsons.json', JSON.stringify(data), (err)=>{
    if (err) return err;
    console.log('The file has been saved!')
  });

  console.log(data);
}

family('Alvo Dumbledore', 'Dennis Marcelo')