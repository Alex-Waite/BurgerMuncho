DROP DATABASE IF EXISTS alexburgers_db;

CREATE DATABASE alexburgers_db;

USE alexburgers_db;

CREATE TABLE burgers 
(
    id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);