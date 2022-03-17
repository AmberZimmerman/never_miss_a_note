const express = require('express');
const api = require('./routes/index.js');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000

// Middleware for parsing JSON and urlencoded form data, this needs to go in all the time for express to work
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// making sure get /notes returns notes.html file
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// returning the index.html file
app.get('/*', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
