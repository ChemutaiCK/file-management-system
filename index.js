const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the 'public' folder (your frontend)
app.use(express.static('public'));

// Endpoint to get the list of directories/files (as an example)
app.get('/', (req, res) => {
    res.send('Welcome to Chemutais File mgt system :x');
    // You'd add your logic here to list files
    res.json([{name: 'File1.txt'}, {name: 'File2.txt'}]);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
