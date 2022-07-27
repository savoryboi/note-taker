const note_router = require('express').Router();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost', 
    database: 'notes_db',
    user: 'root',
    password: '', 
    multipleStatements: true
});

note_router.get('/notes', (req, res) => {
    connection.query('SELECT * FROM all_notes', (err, data) => {
        if (err) return console.log(err);
    
        res.json(data);
    });
});

note_router.post('/notes', (req, res) => {
    connection.query(`INSERT INTO all_notes SET ?`, req.body, (err, data) => {
        if(err) return console.log(err);
        console.log(req.body);
        res.json(data);
    });
});

note_router.delete('/notes/', (req, res) => {
    const id = 
    connection.query(`DELETE FROM todos WHERE id = `)
})


module.exports = note_router;