const nightSky = document.querySelector('.night-sky');

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Increase the size range for the stars
    const size = Math.random() * 10 + 10; // Size between 10px and 20px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random position for the star
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    star.style.left = `${xPos}px`;
    star.style.top = `${yPos}px`;

    // Random animation duration for twinkling
    const duration = Math.random() * 0.75 + 0.25; // Between 0.25s and 1s
    star.style.animationDuration = `${duration}s`;

    nightSky.appendChild(star);
}

// Create 50 stars
for (let i = 0; i < 50; i++) {
    createStar();
}

const button = document.getElementById('details-button');
const details = document.getElementById('details');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Toggle the 'hidden' class on the details element
    details.classList.toggle('hidden');
    
    // Change the button text based on visibility
    if (details.classList.contains('hidden')) {
        button.textContent = 'Show Details';
    } else {
        button.textContent = 'Hide Details';
    }
});