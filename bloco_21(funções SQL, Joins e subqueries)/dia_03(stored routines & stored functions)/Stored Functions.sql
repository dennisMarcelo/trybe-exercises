-- 'READS SQL DATA' dis para o banco de dados que essa função somente vai ler dados de uma tabela
-- isso significa que ira somente utilizar o 'SELECT'
use hr;
DELIMITER $$

CREATE FUNCTION retornaMaiorSalario(
	primeiraLetra VARCHAR(10), departamentoId VARCHAR(10)
)
RETURNS DOUBLE READS SQL DATA
BEGIN
	DECLARE maiorSalario DOUBLE;
	SELECT SALARY
		FROM employees
		WHERE FIRST_NAME LIKE concat(primeiraLetra, '%') AND JOB_ID = departamentoId
		ORDER BY SALARY
		LIMIT 1
        INTO maiorSalario;
	RETURN maiorSalario;
END $$

DELIMITER ;

-- Retorna o maior salario do funcionari com a letra e carga desejado;
-- para executar a função chame
-- SELECT retornaMaiorSalario('d', 'IT_PROG')
-- 		INTO(@variavel);
