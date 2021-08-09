-- Opção 1 - Incluindo a lista de condições fixas
USE sakila;
UPDATE staff 
SET 
    last_name = 'marcelo'
WHERE
    staff_id IN (1 , 2, 3)
;