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
  