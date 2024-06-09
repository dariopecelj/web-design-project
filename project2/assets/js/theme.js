$(document).on('click', '#themeSwitcher', function () {
    const body = document.body;
    body.classList.toggle('dark-mode');
    this.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});