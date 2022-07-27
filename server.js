const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const path = require('path');


const html_routes = require('./routes/html_routes');
const note_routes = require('./routes/api_routes');


// Attach client side form data to the request.body object
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// Static files
app.use(express.static(path.join(__dirname, 'public')));


// Load routes
app.use('/', html_routes);
app.use('/api', note_routes);



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});