--- Aqui é selecionado todos os funcionários que ganham abaixo da média;
CALL PegarMediaDeSalarioDeFuncionarios(@media);
SELECT 
    FIRST_NAME, CONCAT(SALARY, ' < ', @media) AS SALARIOS_ABAIXO_DA_MEDIA
FROM
    employees
WHERE
    SALARY < @media
ORDER BY SALARY;
