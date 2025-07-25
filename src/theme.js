// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
  // Create theme toggle button
  const themeToggle = document.createElement('button');
  themeToggle.id = 'theme-toggle';
  themeToggle.className = 'fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 transition-all duration-300';
  themeToggle.setAttribute('aria-label', 'Toggle theme');
  
  // Get theme from localStorage or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Set initial theme
  let isDark = savedTheme === 'dark' || (savedTheme === null && systemPrefersDark);
  
  // Apply initial theme
  updateTheme(isDark);
  
  // Add click event
  themeToggle.addEventListener('click', () => {
    isDark = !isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateTheme(isDark);
  });
  
  // Add to DOM
  document.body.appendChild(themeToggle);
  
  // Update theme function
  function updateTheme(dark) {
    if (dark) {
      document.documentElement.classList.add('dark-theme');
      document.documentElement.style.setProperty('color-scheme', 'dark');
      
      // Force update text colors
      document.querySelectorAll('.text-white, .text-gray-300, .text-gray-400').forEach(el => {
        el.classList.remove('text-white', 'text-gray-300', 'text-gray-400');
        el.classList.add('text-gray-100');
      });
    } else {
      document.documentElement.classList.remove('dark-theme');
      document.documentElement.style.setProperty('color-scheme', 'light');
      
      // Force update text colors for light theme
      document.querySelectorAll('.text-white, .text-gray-300, .text-gray-400').forEach(el => {
        el.classList.remove('text-white', 'text-gray-300', 'text-gray-400');
        el.classList.add('text-gray-800');
      });
    }
    
    // Force repaint
    document.body.style.display = 'none';
    document.body.offsetHeight; // Trigger reflow
    document.body.style.display = '';
    
    updateThemeIcon(themeToggle, dark);
  }
  
  // Update the theme icon based on current theme
  function updateThemeIcon(button, isDark) {
    button.innerHTML = isDark 
      ? `
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
        </svg>
      `
      : `
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      `;
    
    // Update button styles based on theme
    button.className = `fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 transition-all duration-300 ${
      isDark 
        ? 'bg-gray-800 hover:bg-gray-700 text-white' 
        : 'bg-white hover:bg-gray-100 text-gray-800'
    }`;
  }
});
