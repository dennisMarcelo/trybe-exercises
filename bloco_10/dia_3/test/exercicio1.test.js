const number = require('../exercicio1')

/* jest.mock('../exercicio1.js', () =>({
  getRandomNumber: jest.fn().mockReturnValue(10),
})); */

describe('Testes utilizando mock', () => {
	test('exercicio1 - retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
		number.getRandomNumber = jest.fn().mockReturnValue(10)
		
		expect(number.getRandomNumber()).toBe(10);
		expect(number.getRandomNumber).toHaveBeenCalled();
		expect(number.getRandomNumber).toHaveBeenCalledTimes(1);
	});
 
	
	
	test('exercicio2 -  deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez.', () => {
		number.getRandomNumber.mockReset(); //vamo de reseteeee

		number.getRandomNumber
			.mockReturnValue(10) //valor padrão 
			.mockImplementationOnce((a, b) => a / b); //valor que sera chamado uma vez

		expect(number.getRandomNumber(20 ,5)).toBe(4);
		expect(number.getRandomNumber).toHaveBeenCalled();
		expect(number.getRandomNumber).toHaveBeenCalledTimes(1)
		expect(number.getRandomNumber).toHaveBeenCalledWith(20,5);

		expect(number.getRandomNumber()).toBe(10) //Ele expera 10 pq o mockImplementationOnce só funciona uma vez, depois disso o mockReturnValue retorna o valor padrão definido como 10.
	})


	test('exercicio 3 - crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.', () => {
		number.getRandomNumber.mockReset();
		number.getRandomNumber.mockImplementation((a,b,c) => a*b*c);

		number.getRandomNumber();
		expect(number.getRandomNumber).toHaveBeenCalled();
		expect(number.getRandomNumber(2,2,2)).toBe(8);
		expect(number.getRandomNumber).toHaveBeenCalledTimes(2);
	});

	test('continuando o teste do exercico 3', () => {
		number.getRandomNumber.mockReset();
		expect(number.getRandomNumber(2,2,2)).toBe(undefined); 
		expect(number.getRandomNumber).toHaveBeenCalledTimes(1); //Ela foi resetada por isso o expect espera receber 1

		number.getRandomNumber.mockImplementation( (a) => a**2 );
		expect(number.getRandomNumber(10)).toBe(100); //isso é 'maravilhouuuso'
		expect(number.getRandomNumber).toHaveBeenCalledTimes(2);
	})
})