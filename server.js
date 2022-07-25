const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const path = require('path');

const indexPage = path.join(__dirname, '/public/index.html')
const notesPage = path.join(__dirname, '/public/notes.html')

app.get('/', (req, res) => {
    res.sendFile(indexPage);
})

app.get('/notes', (req, res) => {
    res.sendFile(notesPage)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});