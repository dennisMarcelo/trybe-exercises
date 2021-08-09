const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
    { name: 'mini While', age: 2, type: 'beluga' },
];

const findAnimalByName = (name) => (
    new Promise((resolve, reject) => {
        setTimeout(() => {
            const animalFound = Animals
                .find(({name: animalName}) => animalName === name)       
            if (animalFound) {
                return resolve(animalFound);
            }

            return reject('Nenhum animal com esse nome!')
        }, 300)
    } )
);


const getAnimal = (name) => {
    return findAnimalByName(name);
};

const findAgeOfAnimals = (age) => (
    new Promise((resolve, reject) => {
        const filteredAnimals = Animals
            .filter(({age: animalAge}) => animalAge === age);
        if (filteredAnimals.length > 0) resolve(filteredAnimals);
        
        reject({ error: 'Nenhum animal com essa idade'})
    })
);

const getAgeOfAnimals = (age) => {
    return findAgeOfAnimals(age)
}

module.exports = {
    getAnimal, 
    getAgeOfAnimals
};