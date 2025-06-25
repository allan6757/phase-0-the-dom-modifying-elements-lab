// Write your code here!
// Remove the main element with id 'main'
const main = document.getElementById('main');
if (main) {
  main.remove();
}

// Create a new h1 element
const newHeader = document.createElement('h1');

// Set an id of 'victory'
newHeader.id = 'victory';

// Set the text content - replace 'YOUR-NAME' with your name
newHeader.textContent = "Allan is the champion";

// Append the new header to the body
document.body.append(newHeader);