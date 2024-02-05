// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route to handle GET requests to the /api/random-number endpoint
app.get('/api/random-number', (req, res) => {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // Send the random number as JSON response
    res.json({ randomNumber });
});




// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
