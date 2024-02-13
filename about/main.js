document.addEventListener("DOMContentLoaded", function() {
  const currentPage = window.location.pathname.split('/').pop(); 
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
      if (item.getAttribute('href').includes(currentPage)) {
          item.classList.add('active'); 
      }
  });
});

//loop for each project page
var projects = document.querySelectorAll('.project');
projects.forEach(function(project, index) {
    project.addEventListener('click', function() {
        var urls = ['https://github.com/ericaahayy/ZooWebApp', 'https://github.com/niftybif/FrogGame', 'https://github.com/ericaahayy/ITGurlsCOSC3337/tree/main', 'https://github.com/ericaahayy/WineQuality'];
        window.location.href = urls[index];
    });
});