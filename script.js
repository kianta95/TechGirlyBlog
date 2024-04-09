const modeToggle = document.getElementById('modeToggle');
const landingForm = document.getElementById('landingForm');

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

landingForm.addEventListener('Submit', function(event) {
    event.preventDefault();
    window.location.href = 'blogposts-page.html';
}

function toggleDarkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");
}