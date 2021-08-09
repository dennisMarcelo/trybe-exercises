const { getUserName } = require('../exercicio2');

describe('Teste utilizadando sintaxe de promises exercicio 2', () => {
    it('O nome recuperado através do id 4 deve ser Mark', () => {
        expect.assertions(1)
        return getUserName(4).then((name) => {
            expect(name).toEqual('Mark')
        })
    })

    it('Deve ser retornado erro caso o id não exista', () => {
        expect.assertions(1)
        return getUserName(10).catch((err) => {
            expect(err).toEqual({ error: 'User with 10 not found.' })
        })
    })   
});

describe('testes utilizando a sintaxe async/await exercicio 2', () => {
    it('O nome recuperado através do id 4 deve ser Mark', async () => {
        const name = await getUserName(4);
        expect(name).toEqual('Mark')
    })

    it('Deve ser retornado erro caso o id não exista', async () => {
        try {
            await getUserName(10);
        } catch (erro) {
            expect(erro).toEqual({ error: 'User with 10 not found.' })
        }
    })
})