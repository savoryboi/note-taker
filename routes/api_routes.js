const note_router = require('express').Router();
const fs = require('fs');
const path = require('path');
const uuid = require('uuid').v4;


note_router.get('/notes', (req, res) => {

    fs.readFile('./db/db.json', (err, data) => {
        if (err) console.log(err);

        let dbData = JSON.parse(data);

        res.send(dbData);
    })
});

note_router.post('/notes', (req, res) => {
    const userNote = {
        title: req.body.title,
        text: req.body.text
    };

    fs.readFile('./db/db.json', (err, data) => {
        if (err) console.log(err);

        let dbData = JSON.parse(data);
        dbData.push(userNote);

        dbData.forEach((note, index) => {
            const id = uuid().slice(0, 4);
            note.id = id;
            return dbData;
        });

        console.log(dbData);

        const stringyNotes = JSON.stringify(dbData);

        fs.writeFile('./db/db.json', stringyNotes, (err, data) => {
            if (err) console.log(err);
        });

    });
    res.send('thank you for your note!');
});


// note_router.delete('/notes/', (req, res) => {
//     const id = req.body.id;
//     connection.query(`DELETE FROM todos WHERE id = ${id}`, req.body, (err, data) => {
//         if (err) return console.log(err);
// note_router.delete('/notes', (req, res) => {

//         res.json(data);
//     })
// })
// });


module.exports = note_router; 