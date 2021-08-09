DROP DATABASE IF EXISTS zoo_database;
CREATE DATABASE zoo_database;

USE zoo_database;

DROP TABLE IF EXISTS gerente;
CREATE TABLE gerente(
	gerente_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(60)
);

DROP TABLE IF EXISTS localizaçao;
CREATE TABLE localizaçao(
	localizaçao_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    endereço VARCHAR(15) NOT NULL,
    cidade VARCHAR(50),
    estado VARCHAR(4)
);

DROP TABLE IF EXISTS especie;
CREATE TABLE especie(
	especie_id INT NOT NULL PRIMARY KEY,
    especie VARCHAR(40)
);


DROP TABLE IF EXISTS animais;
CREATE TABLE animais(
	animal_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    especie_id INTEGER NOT NULL,
    nome VARCHAR(60) NOT NULL,
    idade INT NOT NULL,
    localizaçao_id INTEGER NOT NULL,
    FOREIGN KEY (localizaçao_id) REFERENCES localizaçao(localizaçao_id),
    FOREIGN KEY (especie_id) REFERENCES especie(especie_id)
);


DROP TABLE IF EXISTS cuidadores;
CREATE TABLE cuidadores(
	cuidador_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INTEGER,
    FOREIGN KEY (gerente_id) REFERENCES gerente(gerente_id)
);


DROP TABLE IF EXISTS animal_cuidador;
CREATE TABLE animal_cuidador(
	animal_id INTEGER NOT NULL ,
    cuidador_id INTEGER NOT NULL,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animais(animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id)
);
