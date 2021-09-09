const regex = /\d{5}-?\d{3}/g
// para a expressão abaixo funcionar é preciso escapar o '\' com outro '\' 
const regex2 = new RegExp('\\d{5}-?\\d{3}', 'g')

module.exports = (cep) => {  
  if(cep.match(regex2)) {
    return true;
  }else{
    return false;
  }
}