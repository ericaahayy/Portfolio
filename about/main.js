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

document.getElementById('download-exe').addEventListener('click', function() {
    // Replace '/path/to/executable.exe' with the actual path to your executable file
    var exeUrl = '"C:/Users/erica/Downloads/test/test/Swamps to Skies.exe"';
    // Create a temporary link element
    var link = document.createElement('a');
    link.href = exeUrl;
    // Set the download attribute to specify the filename
    link.download = 'your-executable-file-name.exe';
    // Append the link to the body
    document.body.appendChild(link);
    // Trigger a click event on the link
    link.click();
    // Remove the link from the body
    document.body.removeChild(link);
});
