const express = require('express');
const mysql = require('mysql');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');


const app = express();
const port = 3000;

const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'password',
    database: 'nodedb',
};

const connection = mysql.createConnection(dbConfig)

app.get('/', (req, res) => {
    // const name = "Teste"
    const name = uniqueNamesGenerator({ dictionaries: [adjectives, colors, animals] }); // big_red_donkey


    connection.query(`INSERT INTO people (nome) VALUES ('${name}')`)

    connection.query(`SELECT nome FROM people`, (error, results, fields) => {
        res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ol>
          ${!!results.length ? results.map(el => `<li>${el.nome}</li>`).join('') : ''}
        </ol>
      `)
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});