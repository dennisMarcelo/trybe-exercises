-- Criando um índice em uma coluna
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;




-- utilizando na pratica:
-- ates 
SELECT *
FROM sakila.address
WHERE address LIKE '%drive%';

-- depois 
CREATE FULLTEXT INDEX index_address ON sakila.address(address);
SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive');