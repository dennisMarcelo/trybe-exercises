SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';

-- outras formas 
-- SELECT * FROM sakila.payment
-- WHERE payment_date LIKE '2005-07-31%';

-- SELECT * FROM sakila.payment
-- WHERE payment_date LIKE '2005-07-31%';


-- SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
-- SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
-- SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
-- SELECT DAY(payment_date) FROM sakila.payment; -- Dia
-- SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
-- SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
-- SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo