    function startCountdown() {
        var countdownElement = document.getElementById('countdown');
        var messageElement = document.getElementById('message');
        var count = 10;

        function updateCountdown() {
            countdownElement.innerText = count;
            count--;

            if (count >= 0) {
                setTimeout(updateCountdown, 1000); // Schedule the next update after 1 second
            } else {
                // Countdown is complete, display the message with animation
                messageElement.innerText = "Happy Independence Day!";
                messageElement.style.opacity = 1; // Show message with animation
                messageElement.style.backgroundImage= "linear-gradient(to bottom,orange,white,green)";
                
           

            }
        }

        updateCountdown(); // Initial display
    }

    // Start the countdown when the page is loaded
    window.onload = startCountdown;