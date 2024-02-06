// Function to generate and display a random number
function generateRandomNumber() {
    // Generate a random number between 1 and 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    // Update the paragraph element with the generated number
    document.getElementById('randomNumber').textContent = `Random Number: ${randomNumber}`;
}



  // Function to handle the button click event
  function getAPI() {
    console.log("request made");
    // if fetch gets cors error 
    // npm install cors
    // Send a GET request to the API endpoint
    fetch('http://localhost:3000/api/random-number')
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Update the paragraph element with the random number
            document.getElementById('apiAnswer').textContent = `Api answer is : ${data.randomNumber}`;
        })
        .catch(error => {
            // Handle any errors
            console.error('Error fetching data:', error);
        });
}



// dom dan eventi dinlemeye başladın clicke func cağırdın signal slot mantığı 


// Add event listener to the button
document.getElementById('apiButton').addEventListener('click', getAPI);

// Add event listener to the button to trigger random number generation
document.getElementById('generateButton').addEventListener('click', generateRandomNumber);







// scroll animation 


// Get a reference to the animated element
const animationElement = document.getElementById("animationElement");

// Function to check if an element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  if (isInViewport(animationElement)) {
    animationElement.classList.add("animate");
  }
}

// Add event listener for scroll event
window.addEventListener("scroll", handleScroll);

// Trigger initial check in case element is already in viewport
handleScroll();
