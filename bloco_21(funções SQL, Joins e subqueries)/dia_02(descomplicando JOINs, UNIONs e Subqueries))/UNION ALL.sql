-- O UNION remove os dados duplicados, enquanto o UNION ALL os mantém. Observe que, 
-- para usar o comando corretamente, a mesma quantidade de colunas deve ser utilizada.
(SELECT 
    first_name, last_name, '-' AS 'customer_id'
FROM
    sakila.actor) UNION ALL (SELECT 
    first_name, last_name, customer_id
FROM
    sakila.customer)
ORDER BY first_name
limit 10 OFFSET 10;