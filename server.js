const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const path = require('path');

const html_router = require('./routes/html_routes')
const api_router = require('./routes/api_routes')

const indexPage = path.join(__dirname, '/public/index.html')
const notesPage = path.join(__dirname, '/public/notes.html')

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});