const { json } = require("express");

const noteSave = document.getElementById('saveButton');

// when floppy disk is clicked
noteForm
    .addEventListener('click', (e) => {
        e.preventDefault();

    // Get title text and assign it to a variable
    let ntitle = document.getElementById('ntitle').value;

    // Get note text and assign to a variable
    let ntext = document.getElementById('ntext').value;

    // Create an object to hold the new note information
    const newNote = {
        ntitle,
        ntext,
    };

  

    // Fetch POST request to the server
    fetch('api/notes', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
    })
        .then((res) => res.json())
        .then((data) => {
            alert(data.status)
            ntitle = '';
            ntext = '';
        });

    })

    .catch((error) => {
        console.error('Error:', error);
    })