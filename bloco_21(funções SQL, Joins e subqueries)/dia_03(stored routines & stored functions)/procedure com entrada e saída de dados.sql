SELECT * FROM hr.employees;

USE hr;
DELIMITER $$

-- Misturando parametros de saída e entrada
CREATE PROCEDURE PegarMediaDeSalarioDeFuncionariosDeUmCargo(IN IdCargo VARCHAR(50), OUT MediaDeSalario DOUBLE)
BEGIN
	SELECT AVG(SALARY) 
    FROM employees 
    WHERE JOB_ID = IdCargo
    INTO MediaDeSalario;
END $$

DELIMITER ;

-- depos é só chamar com o: 
-- CALL PegarMediaDeSalarioDeFuncionariosDeUmCargo(@variavel);
-- SELECT @variavel;