// Function to generate and display a random number
function generateRandomNumber() {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // Update the paragraph element with the generated number
    document.getElementById('randomNumber').textContent = `Random Number: ${randomNumber}`;
}

// Add event listener to the button to trigger random number generation
document.getElementById('generateButton').addEventListener('click', generateRandomNumber);