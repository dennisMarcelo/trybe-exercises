USE sakila; 
SELECT * FROM film
where length = 50 
OR ( length > 60 and length < 70)
ORDER BY length;