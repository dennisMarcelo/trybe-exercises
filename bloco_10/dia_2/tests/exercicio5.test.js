const { 
    getAnimal,
    getAgeOfAnimals
} = require('../exercicio5');

describe('Testando promise - findAnimalByName', () => {
    describe('Quando existe o animal com o nome procurado', () => {
      test('Retorne o objeto do animal', () => {
        expect.assertions(1);
        return getAnimal('Dorminhoco').then(animal => {
          expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
        });
      });
    });
  
    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return getAnimal('Bob').catch(error =>
          expect(error).toEqual('Nenhum animal com esse nome!')
        );
      });
    });

    describe('Quando existe uma animal com a idade procurada', () => {
      test('Retorna um array de objetos com a idade procurada', async () => {
        expect.assertions(1);
        const arrayAnimals = await getAgeOfAnimals(5);
        expect(arrayAnimals).toEqual([{ name: 'Preguiça', age: 5, type: 'Cat' }])
      })

      test('Retorna um array de objetos com animais de idade iqual a 2', async () => {
        expect.assertions(1);
        const arrayAnimals = await getAgeOfAnimals(2);
        expect(arrayAnimals).toEqual([
          { name: 'Soneca', age: 2, type: 'Dog' },
          { name: 'mini While', age: 2, type: 'beluga' },
        ])
      })
    });


    describe('Quando não existe uma animal com a idade procurada', () => {
      test('Retorna um array de objetos com a idade procurada', async () => {
        try {
          await getAgeOfAnimals(10);
        } catch (error) {
          expect(error).toEqual({ error: 'Nenhum animal com essa idade'})
        }
      })
    });
});