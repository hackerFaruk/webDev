// Import required modules
const express = require('express');
const cors = require('cors');

// Create an Express application
const app = express();

app.use(cors());
// if fetch gets cors error 
    // npm install cors

// Define a route to handle GET requests to the /api/random-number endpoint
app.get('/api/random-number', (req, res) => {
    console.log("data fetch");

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
