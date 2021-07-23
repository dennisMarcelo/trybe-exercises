-- Opção 2 - Especificando como cada entrada será alterada individualmente
SET SQL_SAFE_UPDATES = 0;
USE sakila;
UPDATE staff 
SET last_name = (
CASE staff_id 
	WHEN 1 THEN 'Marcelo 1'
	WHEN 2 THEN 'Marcelo 2'
	WHEN 3 THEN 'Marcelo 3'
	ELSE last_name
END);
