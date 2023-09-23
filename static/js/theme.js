function setTheme(theme) {
  const root = document.documentElement;
  const themeIcon = document.getElementById('theme-icon');
  
  root.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  
  themeIcon.classList.toggle('fa-moon', theme === 'dark');
  themeIcon.classList.toggle('fa-sun', theme === 'light');
}

function toggleTheme() {    
  const currentTheme = localStorage.getItem('theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
}

// Set the initial theme
setTheme(localStorage.getItem('theme') || 'dark');

const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', toggleTheme);