// Wait for the DOM to load before executing the JavaScript code
document.addEventListener('DOMContentLoaded', function() {
    // Fetch the HTML file
    fetch('navbar.html')
      .then(response => response.text())
      .then(data => {
        // Insert the fetched HTML into the <nav> element
        document.getElementById('navbar').innerHTML = data;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
  