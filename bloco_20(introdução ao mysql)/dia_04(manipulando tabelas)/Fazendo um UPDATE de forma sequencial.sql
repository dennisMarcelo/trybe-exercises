USE sakila;
UPDATE staff
SET last_name = 'Marc'
WHERE last_name = 'Marcelo'
ORDER BY staff_id DESC
LIMIT 2;
