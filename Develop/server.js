const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000

// returning the index.html file
app.get('/', (req, res)) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
};

// making sure get /notes returns notes.html file
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
