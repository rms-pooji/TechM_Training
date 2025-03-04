function displayCountdown(): void {
    const conferenceDate = new Date("2025-10-15T09:00:00").getTime();
    const now = new Date().getTime();
    const timeRemaining = conferenceDate - now;
    
    if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        console.log(`Time remaining: ${days} days`);
    } else {
        console.log("Conference has started!");
    }
}

displayCountdown();
