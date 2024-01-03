const sqlite3 = require('sqlite3').verbose();



const db = new sqlite3.Database('database.sqlite');

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT)');
});
db.serialize(() => {
    db.run('INSERT INTO usuarios (nome) VALUES (?)', ['João']);
});
db.all('SELECT * FROM usuarios', (err, rows) => {
    if (err) {
        console.error(err.message);
    } else {
        rows.forEach((row) => {
            console.log(row.id, row.nome);
        });
    }
});
db.close();
const { exec } = require('child_process');

const meuScriptBash = 'sqlite3 database.sqlite .dump > sqlite_data_dump.sql';

// Executa o script bash
exec(meuScriptBash, (error, stdout, stderr) => {
    if (error) {
        console.error(`Erro ao executar o script: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Erro no script: ${stderr}`);
        return;
    }
    console.log(`Saída do script:\n${stdout}`);
});
