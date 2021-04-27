const { uppercase } = require('../exercicio1');

//experimente colocar uma letra em minusculo no .toBe
describe('Exercise tests 1', () => {
    it('the letters of dennis marcelo must be uppercase', done => {
        uppercase('dennis marcelo', (result) => {
            setTimeout(() => {
                expect(result).toBe('DENNIS MARCELO')
                done()
            }, 100)
        })
    });

    it('the letters of  julia must be uppercase', done => {
        uppercase('Julia', (result) => {
            setTimeout(() => {
                expect(result).toBe('JULIA')
                done() 
            }, 500)
        })
    });

    it('the letters of  laísa must be uppercase', done => {
        uppercase('laísa', (result) => {
            setTimeout(() => {
                expect(result).toBe('LAÍSA');
                done();
            }, 500)
        })
    });
});