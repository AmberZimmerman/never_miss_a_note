const notesApi = require('express').Router();
// require file that will help read and append files
const { readFromFile, writeToFile, readAndAppend } = require('../helpers/fsUtils')
const uuid = require('../helpers/uuid');

// Get route for retrieving all the notes
notesApi.get('/', (req, res) =>
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
    );

notesApi.delete(':id/', (req, res) => {
    let noteId = req.params.id;
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)))
})

// Post route for submitting notes
notesApi.post('/', (req, res) => {
    // need to destructure items in req.body
    const { title, text } = req.body;

    // check if all required properties are present with an if statement
    if (title && text) {
         // declare a variable that will be an object holding the notes
        const newNote = {
            title,
            text,
            id: uuid(),
        };

        // read and append new note to the json object
        readAndAppend(newNote, './db/db.json');

        const response = {
        status: 'success',
        body: newNote,
        }

        res.json(response);
    } else {
        res.json('Error in posting new note');
    }
});

module.exports = notesApi;