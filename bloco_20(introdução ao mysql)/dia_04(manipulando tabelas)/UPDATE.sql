-- Para desativar o safeMode adiciona a querry abaixo
-- SET SQL_SAFE_UPDATES = 0;

USE sakila;
UPDATE staff 
SET 
    first_name = 'DENNIS',
    last_name = 'MARCELO'
WHERE
    staff_id = 3
;
