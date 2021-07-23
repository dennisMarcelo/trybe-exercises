-- Note que o MySQL inclui o valor inicial e o final nos resultados

-- SELECT title, length FROM sakila.film
-- WHERE length BETWEEN 50 AND 120
-- ORDER BY length;

-- da para pegar uma faixa de dados em formato de string
-- SELECT * FROM sakila.language
-- WHERE name BETWEEN 'Italian' AND 'Mandarin'
-- ORDER BY name;

-- tbm funciona para datas 
SELECT 
    rental_id, rental_date
FROM
    sakila.rental
WHERE
    rental_date BETWEEN '2005-05-27' AND '2005-07-17';