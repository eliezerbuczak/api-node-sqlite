PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT);
INSERT INTO usuarios VALUES(1,'João');
INSERT INTO usuarios VALUES(2,'Psss');
INSERT INTO usuarios VALUES(3,'João');
INSERT INTO usuarios VALUES(4,'João');
INSERT INTO usuarios VALUES(5,'João');
INSERT INTO usuarios VALUES(6,'João');
INSERT INTO usuarios VALUES(7,'João');
INSERT INTO usuarios VALUES(8,'João');
INSERT INTO usuarios VALUES(9,'João');
INSERT INTO usuarios VALUES(10,'João');
DELETE FROM sqlite_sequence;
INSERT INTO sqlite_sequence VALUES('usuarios',10);
COMMIT;