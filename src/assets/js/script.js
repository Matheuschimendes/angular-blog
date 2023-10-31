window.addEventListener('scroll', () => {
  var navbar = document.querySelectorAll('nav');

  if (window.scrollY > 100) {
      navbar.style.boxShadow = '10px 4px 6px rgba(220,0,0, 2.0)';
  } else {
      navbar.style.boxShadow = '0 0 10px rgba(420, 220, 20, 0.5)';
  }
});
