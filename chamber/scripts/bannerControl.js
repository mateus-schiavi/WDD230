// Function to check if it's Monday, Tuesday, or Wednesday
function isMeetingDay() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 is Sunday, 1 is Monday, etc.

    return dayOfWeek >= 1 && dayOfWeek <= 3; // 1 is Monday, 3 is Wednesday
}

// Function to show or hide the banner based on the day
function toggleMeetGreetBanner() {
    const banner = document.getElementById('meetGreetBanner');
    if (isMeetingDay()) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

// Close banner functionality
document.getElementById('closeBannerBtn').addEventListener('click', function() {
    const banner = document.getElementById('meetGreetBanner');
    banner.style.display = 'none';
});

// Check and toggle banner visibility when the page loads
window.onload = function() {
    toggleMeetGreetBanner();
};
