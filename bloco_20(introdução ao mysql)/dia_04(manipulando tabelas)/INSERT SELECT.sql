USE sakila;
INSERT INTO 
	actor (first_name, last_name)
SELECT 
	first_name, last_name
FROM 
	customer
WHERE 
	address_id = 3
LIMIT 
	5
;