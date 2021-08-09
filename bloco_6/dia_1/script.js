function addEstages() {
    const select = document.getElementById('estados');
    const estados = ['Acre', 'Alagoas', 'Amapá','Amazonas', 'Bahia', 'Ceará','Distrito Federal*','Espírito Santo','Goiás','Rio de Janeiro'];
    estados.forEach((e, i) => {
        const option = document.createElement('option');
        option.value = e;
        option.innerText = e;
        select.appendChild(option);
    });
}

function btnEvent() {
    const btn = document.getElementById('btnEnviar');
    btn.addEventListener('click', (e) => {
        const data = document.getElementById('dataInicio').value.split('-')
        const day  = data[2];
        const month = data[1];
        const year = data[0];
        if(day<1 || day>31 || month<1 || month>31 || year<0){
            alert("As datas não podem ser menores que 1 ou maiores que 31!")
            e.preventDefault();
        }
    });
}

function btnClear() {
    const btn = document.getElementById('limpar')
    btn.addEventListener('click',(e) =>{
        6
    })
}

addEstages();
btnEvent();
btnClear();