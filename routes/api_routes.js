const note_router = require('express').Router();
const fs = require('fs');
const path = require('path');
const uuid = require('uuid').v4;


note_router.get('/notes', (req, res) => {

    fs.readFile('./db/db.json', (err, data) => {
        if (err) console.log(err);
        
        console.log(data);
        res.json(data);
    })
  
});

note_router.post('/notes', (req, res) => {
    const userNotes = req.body;
   

    fs.readFile('./db/db.json', (err, data) => {
        if (err) console.log(err);

        let dbData = JSON.parse(data);
        dbData.push(userNotes);

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
    res.send('you made a note!');
});

// note_router.delete('/notes', (req, res) => {

// });


module.exports = note_router;