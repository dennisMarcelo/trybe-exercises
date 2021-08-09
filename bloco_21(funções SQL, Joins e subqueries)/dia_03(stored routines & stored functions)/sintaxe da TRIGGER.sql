-- basicamente os TRIGGER servem para monitorar a entrada, atualização e saida dos dados em uma tabela, 
-- e com base nisso executa uma ação.

DELIMITER $$

CREATE TRIGGER nome_do_trigger
[BEFORE | AFTER] [INSERT | UPDATE | DELETE] ON tabela
FOR EACH ROW
BEGIN
    -- o código SQL entra aqui
END $$

DELIMITER $$ ;
