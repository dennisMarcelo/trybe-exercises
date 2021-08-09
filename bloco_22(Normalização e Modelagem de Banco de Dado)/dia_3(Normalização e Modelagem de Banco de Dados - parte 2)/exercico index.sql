-- teste não utilizando index:
DROP INDEX index_category ON sakila.category;
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';


-- teste com utilizando index:
CREATE FULLTEXT INDEX index_category on sakila.category(name);
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');
