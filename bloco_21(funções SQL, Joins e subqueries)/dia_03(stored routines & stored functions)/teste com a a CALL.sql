CALL PegarMediaDeSalarioDeFuncionariosDeUmCargo('IT_PROG', @media);
SELECT 
    FIRST_NAME, concat(SALARY, ' < ', @media) AS 'SALARIO ABAIXO DA MÉDIA'
FROM
    employees
WHERE
    SALARY < @media and JOB_ID = 'IT_PROG';