const { sum }  = require('../dia3_bloco7_exercicio1');
const { myRemove } = require('../dia3_bloco7_exercicio2');
const { myRemoveWithoutCopy } = require('../dia3_bloco7_exercicio3')

describe('teste no exercicio1 dia3 bloco7', ()=> {
    it('teste 1 de soma 10+50 = 60',()=>{
        expect(sum(10, 50)).toBe(60)
    })

    it('teste 2 de soma 4+5 = 9', () => {
        expect(sum(4, 5)).toBe(9);
    })

    it('teste 3 de soma 0+0 = 0', () => {
        expect(sum(0, 0)).toBe(0);
    })

    it('teste 4 parametro não pode ser string', () => {
        expect(() => sum(4, '5')).toThrowError(Error);
    })
});

describe('teste no exercicio2 dia3 bloco7', ()=> {
    it('teste 1 verifica se a funão myRemove é um funciton', () => {
        expect(typeof myRemove).toBe('function');
    });

    it('teste 2 verifica se o número 3 é retirado do array', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4])
    })

    it('teste 3 verifica se o array passado como parametro é diferente do experado', () => {
        const array1 = [[1, 2, 3, 4]]
        const received = myRemove(array1, 4)
        expect(received).not.toStrictEqual([1, 2, 3, 4])
    });

    it('teste 4 verifica se a função myRemove altera o array original(array1)', () => {
        const array1 = [1, 2, 3, 4]
        myRemove(array1, 4)
        expect(array1).toStrictEqual([1, 2, 3, 4])
    });

    it('teste 5 verifica se o array passado como parametro é diferente do experado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toStrictEqual([1, 2, 3, 4])
    });
    
    it('verifica se o parametro 5 altera o ultimo numro do array', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4])
    })

});

describe('teste no exercicio3 dia3 bloco7', ()=> {
    it('teste 1 verifica se a função myRemoveWithoutCopy é de fato uma função',()=>{
        expect(typeof myRemoveWithoutCopy).toBe('function');
    })

    it('teste 2', () => {
        const array = [4,5,6,4];
        myRemoveWithoutCopy(array, 4);

        expect(array).toStrictEqual([4, 5, 6, 4]);
    })

    it('teste 3', () => {
        expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4])
    })
});