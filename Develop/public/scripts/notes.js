const noteSave = document.getElementById('saveButton');

// when floppy disk is clicked
noteForm
    .addEventListener('click', (e) => {
        e.preventDefault();

    // Get title text and assign it to a variable
    let ntitle = document.getElementById('ntitle').value;

    // Get note text and assign to a variable
    let ntext = document.getElementById('ntext').value;
    })