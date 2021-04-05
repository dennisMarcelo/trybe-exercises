const contador = (respostaCorretas, respostaAlunos) => {
    let constador = 0;
    for (let key in respostaAlunos) {
        
        if (respostaAlunos[key] !== 'N.A') {
            if (respostaAlunos[key] === respostaCorretas[key]) {
                constador += 1
            }else {
                constador -= 0.5 
            }
        }
    }
    return constador
}

const checkRes = (res, studeRes, callback) => {
    return callback(res, studeRes)
}


const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const studentAnswers2 = ['N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'N.A', 'C'];


console.log(checkRes(rightAnswers, studentAnswers, contador))