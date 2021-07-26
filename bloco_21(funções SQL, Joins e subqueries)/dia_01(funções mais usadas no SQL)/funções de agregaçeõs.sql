USE sakila;
SELECT AVG(rental_rate) AS 'MÉDIA aluguel' FROM film;

SELECT MIN(rental_rate) AS 'MÍNIMO aluguel' FROM film;

SELECT MAX(rental_rate) AS 'MÁXIMO aluguel' FROM film;

SELECT SUM(rental_rate) AS 'SOMA aluguel' FROM film;

SELECT COUNT(rental_rate) AS 'QUANTIDE aluguel' FROM film;