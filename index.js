// Import required packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express(); // Create an Express application
const PORT = process.env.PORT || 3000; // Set port to 3000 or use environment variable

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Sample route
app.get('/', (req, res) => {
    res.send('Welcome to the File Management System!'); // Respond with a welcome message
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Log server start message
});
