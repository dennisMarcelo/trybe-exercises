const juntaNome = (name) => {
    return name.split(' ').join('')
}

const pessoa = (nomeCompleto) => {
    return  {
        nomeCompleto: nomeCompleto,
        emain: `${juntaNome(nomeCompleto)}@trybe.com`
    }   
}

const newEmployees = (newPerson) => {
    const employees = {
      id1: newPerson('dennis marcelo'),
      id2: newPerson('joão carlos'),
      id3: newPerson('Laíza bastos'),
    }
    return employees;};

  console.log(newEmployees(pessoa))