-- Sim este é o SELF JOIN, ele é bem simple basicamente compara os valores da mesma tabela.
SELECT 
    t1.title, t1.replacement_cost, t2.title, t2.replacement_cost
FROM
    sakila.film AS t1,
    sakila.film AS t2
WHERE
    t1.length = t2.length
