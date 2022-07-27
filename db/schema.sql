-- DROP DATABASE IF EXISTS notes_db;

-- CREATE DATABASE notes_db;

USE notes_db;

CREATE TABLE all_notes(
    id INT AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(20),
    note VARCHAR(1000)
);