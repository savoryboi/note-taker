const note_router = require('express').Router();
const fs = require('fs');
const path = require('path')

function getNoteData() {
   return fs.promises.readFile(path.join(__dirname, '../db/db.json'), 'utf8')
    .then(data => JSON.parse(data));
}

note_router.get('/notes', (req, res) => {
    getNoteData()
        .then(note_data => {
            res.json(note_data)
        })
        .catch(err => console.log(err))
});

note_router.post('/notes', (request, response) => {

    response.json({
        message: 'note received'
    })
});


module.exports = todo_router;