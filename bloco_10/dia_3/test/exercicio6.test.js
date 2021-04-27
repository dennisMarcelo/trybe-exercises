const api = require('../exercicio6');

describe('testes em funões assincronas', () => {
    const apiUrl = jest.spyOn(api, 'fetchURL');
    afterEach(api.fetchURL.mockReset);    

    test('testando requisição caso promise resolve', async () => {
        apiUrl.mockResolvedValue('request sucess');

        apiUrl();
        expect(apiUrl).toHaveBeenCalled();
        expect(apiUrl).toHaveBeenCalledTimes(1);
        expect(apiUrl()).resolves.toBe('request sucess') 
    })

    test('testando requisição caso promise reject', async () => {
        apiUrl.mockRejectedValue('request failed')

        expect(apiUrl).toHaveBeenCalledTimes(0);
        expect(apiUrl()).rejects.toBe('request failed');
        expect(apiUrl).toHaveBeenCalledTimes(1);
    })
})