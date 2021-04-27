const searchEmployee = require('../exercicio4')

describe('testes exercicio 4', () => {
    test('searchEmployee é uma function', () => {
        expect(typeof searchEmployee).toBe('function')
    });

    test(`O passado errado passado como paremetro deve retornar 'ID não identificado'.`, () => {
        expect(searchEmployee('99999', 'firstName')).toBe('ID não identificado')
    })

    test(`se o details não existir retorne a msg "Informação indisponível" `, () => {
        expect(searchEmployee('8579-6', 'color')).toBe('Informação indisponível')
    })

    test(`se o id for '8579-6' e o detail for firstName deve retornar Ana`, () => {
        expect(searchEmployee('8579-6', 'firstName')).toBe('Ana')
    })

    test(`se o id for '1256-4' e o detail for 'specialities' deve retornar Ana`, () => {
        expect(searchEmployee('1256-4', 'specialities')).toEqual(['Hooks', 'Context API', 'Tailwind CSS'])
    })
});
