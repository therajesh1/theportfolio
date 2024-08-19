const toggleThemeBtn = document.querySelector('.toggle-theme');
const body = document.body;

// Set the initial icon based on the dark mode being active
const icon = toggleThemeBtn.querySelector('i');
icon.classList.remove('fa-moon');
icon.classList.add('fa-sun');

toggleThemeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    // Change icon based on the theme
    if (body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});
