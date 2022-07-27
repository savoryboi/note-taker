const html_router = require('express').Router();
const path = require('path');
const fs = require('fs');



html_router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'../public/notes.html'))
});

html_router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

html_router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = html_router;
