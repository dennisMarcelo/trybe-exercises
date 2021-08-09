async function getURL(api){
  try {
    const data = await fetch(api).then((respose) => respose.json())
    return data;
  } catch(erro){
    return `Erro ao acessar endereço, ERRO: ${erro}`
  }

}
export default getURL;