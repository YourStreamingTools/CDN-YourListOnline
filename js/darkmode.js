const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const table = document.querySelector('table');

window.addEventListener('load', () => {
  const isDarkMode = localStorage.getItem('darkMode');
  if (isDarkMode === 'true') {
    body.classList.add('dark-mode');
    table.classList.add('dark-mode-table')
  } else {
    table.classList.add('light-mode-table');
  }
});

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  table.classList.toggle('dark-mode-table');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
});