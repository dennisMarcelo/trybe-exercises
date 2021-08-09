-- teste com IF
SELECT title, IF(rental_rate > 0.99, 'caro', 'barato') as 'valor'
FROM sakila.film
ORDER BY valor;


-- teste com case
SELECT title, rental_rate, 
	CASE
	WHEN rental_rate >= 0.00 AND rental_rate <= 0.99 THEN 'BARATO'
        WHEN rental_rate > 0.99 AND rental_rate <= 4.99 THEN 'MÉDIO'
        WHEN rental_rate > 4.99 AND rental_rate <= 4.99 THEN 'CARO'
	ELSE rental_rate = 'NÃO CLASSIFICADO'
END AS valor
FROM sakila.film
ORDER BY valor;
