DROP DATABASE IF EXISTS normalization;
CREATE DATABASE normalization;

use normalization;

DROP TABLE IF EXISTS Funcionarios;
CREATE TABLE Funcionarios(
 funcionario_id int PRIMARY key AUTO_INCREMENT not NULL,
 nome VARCHAR(45) NOT NULL,
 sobrnome VARCHAR(45) NOT NULL,
 email VARCHAR(60) NOT NULL,
 telefon VARCHAR(16) NOT NULL,
 data_cadastro DATE DEFAULT (CURRENT_DATE) not null,
 hora_cadastro TIME DEFAULT (CURRENT_TIME)
);

DROP TABLE IF EXISTS Setor;
CREATE TABLE Setor(
    setor_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    nome_setor VARCHAR(25) NOT NULL
);

DROP TABLE IF EXISTS Funcionario_setor;
CREATE TABLE Funcionario_setor(
 funcionario_id INTEGER,
 setor_id INTEGER,
 CONSTRAINT PRIMARY KEY(funcionario_id, setor_id),
 FOREIGN KEY (funcionario_id) REFERENCES Funcionarios(funcionario_id),
 FOREIGN KEY (setor_id) REFERENCES Setor(setor_id)
);

-- Inserindo valores dentro dos campos 
INSERT INTO Funcionarios(funcionario_id, nome, sobrnome, email, telefon)
VALUES 
	(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445'),
    (13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996'),
    (14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669');

INSERT INTO Setor(nome_setor)
VALUES
	('Administração'),
    ('Operacional'),
    ('Estratégico'),
    ('Marketing'),
    ('Vendas');
    
INSERT INTO Funcionario_setor(funcionario_id, setor_id)
VALUES 
	(12, 1),
    (12, 5),
    (13, 2),
    (14, 3),
    (14, 5);
    