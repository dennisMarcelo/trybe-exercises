-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))
SELECT ROUND(7 + (RAND() * 6));

-- É só pegar o valor menor e somar com o que falta pra chegar ao valor maximo.
SELECT round(15 + (RAND() * 5));

