SELECT * FROM hr.employees;

USE hr;
DELIMITER $$

-- O 'IN' signifia que ele é uma parametro de entrada 
-- e NUMERIC é o tipo de variavel que esta sendo esperado.
CREATE PROCEDURE SelecionarEmpregadosComSalarioMaiorQue(IN ParametroSalario NUMERIC)
BEGIN
	SELECT * 
	FROM employees
    WHERE SALARY > ParametroSalario;
END $$

DELIMITER ;

-- depos é só chamar com o CALL SelecionarEmpregadosComSalarioMaiorQue(VALOR);
