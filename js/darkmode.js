const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

window.addEventListener('load', () => {
  const isDarkMode = localStorage.getItem('darkMode');
  if (isDarkMode === 'true') {
    body.classList.add('dark-mode');
  }
});

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});