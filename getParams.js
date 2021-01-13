const url = window.location.search; // Getting URL 
const urlParams = new URLSearchParams(url); // Searching URL parameters
const ft = urlParams.get('ft'); // Looking for ft parameter
document.getElementById('urlParams').innerHTML = ft; // Placing ft parameter to html with ID urlParams