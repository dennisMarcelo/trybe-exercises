const { encode } = require('../exercicio1');
const { decode } = require('../exercicio1');

describe('Teste exercicio 1', () => {
    it('decode e encode devem ser funções', () => {
        expect(typeof decode).toBe('function');
        expect(typeof encode).toBe('function');
    })

    it('A string aeiou dever ser codificada para 12345', () => {
        expect(encode('aeiou')).toBe('12345')
    })

    it('A string 12345 dever ser codificada para aeiou', () => {
        expect(decode('12345')).toBe('aeiou')
    })

    it('Teste function encode, a string dennis deve convertida para d2nn3s', () => {
        expect(encode('dennis')).toBe('d2nn3s')
    })

    it('Teste function decode, a string d2nn3s deve convertida para dennis', () => {
        expect(decode('d2nn3s')).toBe('dennis')
    })
    
    it('a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        const strDecodifica = 'dennis marcelo';
        const strCodificada = 'd2nn3s m1rc2l4';
        const quantidadeStrDecodifica = strDecodifica.length;
        const quantidadeStrCodificada = strCodificada.length;

        expect(encode(strDecodifica).length).toBe(quantidadeStrCodificada)
        expect(decode(strCodificada).length).toBe(quantidadeStrDecodifica)

    })
});