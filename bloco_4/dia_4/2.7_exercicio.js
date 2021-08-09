verificaFimPalavra("trybe", "be")

function verificaFimPalavra(srt1, str2){
    let qtdStr2 = str2.length;
    let st1Final = srt1.slice(-qtdStr2);

    if(st1Final == str2){
        console.log("true");
    }else{
        cosole.log("false")
    }    
}