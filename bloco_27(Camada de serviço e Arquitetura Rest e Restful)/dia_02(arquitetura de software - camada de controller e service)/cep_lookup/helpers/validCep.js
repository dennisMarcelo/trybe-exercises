const regex = /\d{5}-?\d{3}/g
// para a expressão abaixo funcionar é preciso escapar o '\' com outro '\' 
const regex2 = new RegExp('\\d{5}-?\\d{3}', 'g')

module.exports = (cep) => {  
  if(regex.test(cep)) {
    return true;
  }else{
    return false;
  }
}