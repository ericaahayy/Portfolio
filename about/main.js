document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split('/').pop(); 
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
      if (item.getAttribute('href').includes(currentPage)) {
          item.classList.add('active'); 
      }
  });
});