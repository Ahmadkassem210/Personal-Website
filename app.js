function toggleTheme() {
    const checkbox = document.querySelector('#theme-toggle');
    const body = document.querySelector('body');
    const style = window.getComputedStyle(body);
    if (checkbox.checked) {
      body.style.colorScheme = 'dark';
    } else {
      body.style.colorScheme = 'light';
    }
  }

const themeBtn = document.querySelector('#theme-btn');
const content = document.querySelector('#content');

themeBtn.addEventListener('click', () => {
  content.classList.toggle('light');
});
  