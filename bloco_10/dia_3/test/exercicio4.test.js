const string = require('../exercicio4');

describe('mockando funções do exercicio 4', () => {
    test('exercicio 4 - mockando a função getUppercaseString', () => {
        const mockGetUppercaseString = jest
            .spyOn(string, 'getUppercaseString')
            .mockImplementation((str) => str.toLowerCase());

        expect(mockGetUppercaseString('DENNIS')).toBe('dennis');
        expect(mockGetUppercaseString).toHaveBeenCalled();
        expect(mockGetUppercaseString).toHaveBeenCalledTimes(1);

    });

    test('exercicio 4 - mockando a função getFirstCharecter', () => {
        const getFirstCharecter = jest
            .spyOn(string, 'getFirstCharecter')
            .mockImplementation((str) => str.slice(str.length - 1, str.length));

        expect(getFirstCharecter('dennis')).toBe('s');
        expect(getFirstCharecter).toHaveBeenCalledTimes(1);
        expect(getFirstCharecter).toHaveBeenCalled();
    });

    test('exercicio 4 - mockando a função concatString', () => {
        const concatString = jest
            .spyOn(string, 'concatString')
            .mockImplementation((str1, str2, str3) => `${str1} ${str2} ${str3}`);

        expect(concatString('dennis', 'marcelo', 'santos')).toBe('dennis marcelo santos');
        expect(concatString).toHaveBeenCalledTimes(1);
        expect(concatString).toHaveBeenCalled();
    });
})

describe('resetando funções mockadas do exercicio 5', () => {
    test('restore a função getUppercaseString', () => {
        string.getUppercaseString.mockRestore();
        expect.assertions(1)
        expect(string.getUppercaseString('dennis')).toBe('DENNIS');
        
        // Quando a função é resetada o toHaveBeenCallede toHaveBeenCalledTimes parão de funcionar
        // expect(string.getUppercaseString).toHaveBeenCalled();
        // expect(string.getUppercaseString).toHaveBeenCalledTimes(1);
    });

    test('restore a função getFirstCharecter', () => {
        string.getFirstCharecter.mockRestore();
        expect(string.getFirstCharecter('dennis')).toBe('d');

    });

    test('restore a função concatString', () => {
        string.concatString.mockRestore();
        expect(string.concatString('dennis', 'marcelo', 'santos')).toBe('dennis marcelo'); // veja q o santos não é concatenado, Aee Xablau ta funcionando.
    });
});