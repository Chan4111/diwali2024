document.getElementById('submitButton').addEventListener('click', function() {
    const name = document.getElementById('nameInput').value;
    if (name) {
        // Show a message with the user's name
        document.getElementById('message').innerText = `Happy Diwali, ${name}!`;

        // Hide the input container
        document.querySelector('.container').style.display = 'none';

        // Trigger fireworks
        startFireworks();

        // Wait for a few seconds before redirecting (e.g., 3 seconds)
        setTimeout(function() {
            window.location.href = 'https://www.jqueryscript.net/demo/Realistic-Fireworks-Animations-Using-jQuery-And-Canvas-fireworks-js/';
        }, 5000); // 3000 milliseconds = 5 seconds
    } else {
        alert("Please enter your name.");
    }
});

function startFireworks() {
    // Your fireworks animation code here
    const canvas = document.getElementById('fireworksCanvas');
    const context = canvas.getContext('2d');
    // Add your fireworks animation logic here
}
