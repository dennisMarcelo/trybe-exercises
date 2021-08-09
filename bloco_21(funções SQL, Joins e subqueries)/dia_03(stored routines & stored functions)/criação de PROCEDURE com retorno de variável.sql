SELECT * FROM hr.employees;

USE hr;
DELIMITER $$

-- O 'OUT' signifia que ele é uma parametro de saída 
-- e DOUBLE é o tipo de variavel que ele vai retornar.
CREATE PROCEDURE PegarMediaDeSalarioDeFuncionarios(OUT MediaDeSalario DOUBLE)
BEGIN
	SELECT AVG(SALARY) 
    FROM employees 
    INTO MediaDeSalario;
END $$

DELIMITER ;

-- depos é só chamar com o: 
-- CALL PegarMediaDeSalarioDeFuncionarios(@variavel);
-- SELECT @variavel;