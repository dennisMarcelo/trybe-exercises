SELECT * FROM hr.employees;

USE hr;
DELIMITER $$

-- Misturando parametros de saída e entrada
CREATE PROCEDURE RetornarSalarioDoFuncionario(INOUT funcionario_name  VARCHAR(200))
BEGIN
	SELECT concat('O funcionário ', FIRST_NAME, ' recebe ', SALARY)
    FROM employees 
    WHERE FIRST_NAME = funcionario_name
    INTO funcionario_name;
END $$

DELIMITER ;

-- Para chamar a procedure execute:
-- SET @funcionario = 'Clara';
-- CALL RetornarSalarioDoFuncionario(@funcionario);
-- SELECT @funcionario;

