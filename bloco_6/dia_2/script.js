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
        const data = document.getElementById('dataInicio').value.split(' ')
        const day  = data[2];
        const year = data[3];
        if(day<1 || day>31 || year<0){
            alert("As datas não podem ser menores que 1 ou maiores que 31!")
            e.preventDefault();
        }
    });
}

function btnClear() {
    const btn = document.getElementById('limpar')
    btn.addEventListener('click',(e) =>{
        document.getElementById('myForm').reset();
    })
}

function pikaday() {
    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        format: 'DD-MMMM-YYYY',
    });
}

addEstages();
btnEvent();
btnClear();
pikaday();