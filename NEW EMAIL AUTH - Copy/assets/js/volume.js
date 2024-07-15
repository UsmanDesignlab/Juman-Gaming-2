let volumeIcon = document.querySelector("#volume_icon");
let isVolumeOn = true; // Initialize volume as on
let audio = document.getElementById("myAudio");

// Function to toggle volume on/off
function toggleVolume() {
    if (isVolumeOn) {
        // Turn volume off
        audio.pause(); // Stop the sound
        volumeIcon.classList.remove("bx-volume-low"); // Remove volume icon class
        volumeIcon.classList.add("bx-volume-mute"); // Add mute icon class
    } else {
        // Turn volume on
        audio.play(); // Play the sound
        volumeIcon.classList.remove("bx-volume-mute"); // Remove mute icon class
        volumeIcon.classList.add("bx-volume-low"); // Add volume icon class
    }
    isVolumeOn = !isVolumeOn; // Toggle volume status
}

// Add event listener for clicking on the music icon to toggle volume
document.querySelector('.music').addEventListener('click', function() {
    toggleVolume(); // Toggle volume when clicking on the music icon
});

// Add event listener for clicking outside the sidebar to close it
document.addEventListener('click', function(event) {
    const sidebar = document.querySelector('.sidebar');
    if (!event.target.closest('.sidebar')) {
        sidebar.classList.remove('active'); // Close the sidebar
    }
});

const checkbox = document.querySelector('.checkbox');
const colorPicker = document.getElementById('colorPicker');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        const selectedColor = colorPicker.value;
        document.body.style.backgroundColor = selectedColor;
    } else {
        document.body.style.backgroundColor = '';
    }
});

colorPicker.addEventListener('input', function() {
    // Only change background color if checkbox is checked
    if (checkbox.checked) {
        const selectedColor = this.value;
        document.body.style.backgroundColor = selectedColor;
    }
});
function startStopwatch() {
    let seconds = 0;
    let minutes = 0;
    let hours = 0;

    // Update the stopwatch display every second
    const timer = setInterval(function() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        // Format numbers to always show two digits (e.g., 00:00:00)
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        document.getElementById('stopwatch').textContent = formattedTime;

        // Check if one hour (3600 seconds) has passed
        if (hours === 1 && minutes === 0 && seconds === 0) {
            clearInterval(timer);
            alert("You've played games for one hour. It is dangerous for your health.");
        }
    }, 1000); // Update every second (1000 milliseconds)
}

// Call the function to start the stopwatch when the page loads
document.addEventListener('DOMContentLoaded', function() {
    startStopwatch();
});