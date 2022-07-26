const note_router = require('express').Router();
const fs = require('fs');
const path = require('path')

const store = require('../db/store')


note_router.get('/notes', (req, res) => {
    store
        .getNotes()
        .then(note_data => {
            res.json(note_data)
        })
        .catch(err => res.status(500).json(err))
});

note_router.post('/notes', (request, response) => {
    store
        .addNote(request.body)
        .then(note_data => {
            response.json(note_data)
        })
        .catch(err => response.status(500).json(err))
});

note_router.delete('/notes/:id', (req, res) => {
    store
        .removeNote(req.params.id)
        .then(() => {
            res.json({ok:true})
        })
        .catch(err => res.status(500).json(err))
})


module.exports = note_router;