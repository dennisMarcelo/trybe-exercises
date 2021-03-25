const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};
  
const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

function addturno(obj1, obj2) {
    console.log(Object.assign(obj2, {turno: obj1.turno}));
}

function listKeys(obj) {
    console.log(Object.keys(obj));
}

function lengthObj(obj) {
    console.log(Object.keys(obj).length);
}

function listValues(obj) {
    console.log(Object.values(obj));
}

const allObjct = Object.assign({}, {lesson1, lesson2, lesson3});

/* addturno(lesson1, lesson2);

listKeys(lesson1);

lengthObj(lesson1);

listValues(lesson1); */

function someStudents (obj) {
    let somaStudents = 0 
    const keys = Object.keys(obj);

    for (let index in keys) {
        somaStudents += obj[keys[index]].numeroEstudantes;
    }

    return somaStudents;
}

console.log(someStudents(allObjct))