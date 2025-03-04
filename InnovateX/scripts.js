// Countdown Timer
function startCountdown() {
    const countdown = document.getElementById("countdown");
    const endDate = new Date("2025-10-15T09:00:00").getTime();

    setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = endDate - now;

        if (timeRemaining < 0) {
            countdown.innerHTML = "Conference Started!";
        } else {
            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            countdown.innerHTML = `${days} days remaining`;
        }
    }, 1000);
}
startCountdown();

// Form validation for contact form
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Form submitted successfully!');
        contactForm.reset();
    });
}

// Fetch and display speakers from JSON
const speakersList = document.getElementById('speakers-list');
if (speakersList) {
    fetch('speakers.json')
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json();
        })
        .then(speakers => {
            console.log("Speakers loaded:", speakers); // ✅ Check if data is fetched
            speakers.forEach(speaker => {
                speakersList.innerHTML += `
                    <div class="speaker-card">
                        <img src="${speaker.image}" alt="${speaker.name}">
                        <h3>${speaker.name}</h3>
                        <p><strong>${speaker.title}</strong></p>
                        <p>${speaker.bio}</p>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error('Error loading speakers:', error);
            speakersList.innerHTML = '<p>Error loading speakers. Please try again later.</p>';
        });
}
