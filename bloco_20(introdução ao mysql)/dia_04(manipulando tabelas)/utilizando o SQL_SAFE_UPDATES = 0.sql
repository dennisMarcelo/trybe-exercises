USE sakila;
SET SQL_SAFE_UPDATES = 0;
UPDATE actor
set first_name = 'JULES'
WHERE first_name = 'JULIA';