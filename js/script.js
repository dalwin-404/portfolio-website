// Toggle mobile menu
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (this.window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});

// Typing Text
function runTypingEffect() {
  const text = 'I am Winner Ayanboye.';
  const typingElement = document.getElementById('typing-text');
  const typingDelay = 100;

  typeText(text, typingElement, typingDelay);
}
function typeText(text, typingElement, delay) {
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      typingElement.textContent += text.charAt(i);
    }, delay * i);
  }
}
document.addEventListener('DOMContentLoaded', runTypingEffect);


document.addEventListener('DOMContentLoaded', () => {
  const themeToggleMain = document.getElementById('theme-toggle-main');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  const body = document.body;

  // Function to update theme
  function updateTheme(isDarkMode) {
    // Toggle theme on the body
    body.classList.toggle('dark-theme', isDarkMode);

    // Update icons for both toggles
    [themeToggleMain, themeToggleMobile].forEach(toggle => {
      if (toggle) {  // Check if toggle button exists
        const icon = toggle.querySelector('i');
        if (icon) {  // Check if icon exists
          icon.classList.toggle('fa-sun', !isDarkMode);
          icon.classList.toggle('fa-moon', isDarkMode);
        }
      }
    });
  }

  // Load theme from local storage on page load
  const savedTheme = localStorage.getItem('theme') || 'light';
  const isDarkMode = savedTheme === 'dark';
  updateTheme(isDarkMode);

  // Event listener for both toggle buttons
  [themeToggleMain, themeToggleMobile].forEach(toggle => {
    if (toggle) {  // Check if toggle button exists
      toggle.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-theme'); // Toggle dark theme
        updateTheme(isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Save theme
      });
    }
  });
});
