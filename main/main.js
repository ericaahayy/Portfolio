const jobTitles = ["SOFTWARE ENGINEER", "DATA ANALYST", "STUDENT"];
const typingSpeed = 100;
let index = 0;
let text = '';

function typeJobTitle() {
    if (index < jobTitles.length) {
        text = jobTitles[index];
        document.getElementById("job-title").textContent = '';
        typeCharacter(0);
    } else {
        index = 0;
        setTimeout(typeJobTitle, 1000);
    }
}

function typeCharacter(i) {
    if (i < text.length) {
        document.getElementById("job-title").textContent += text.charAt(i);
        setTimeout(function() {
            typeCharacter(i + 1);
        }, typingSpeed);
    } else {
        setTimeout(function() {
            deleteCharacter(text.length);
        }, 1000);
    }
}

function deleteCharacter(i) {
    if (i >= 0) {
        const newText = text.substring(0, i);
        document.getElementById("job-title").textContent = newText;
        setTimeout(function() {
            deleteCharacter(i - 1);
        }, typingSpeed / 2);
    } else {
        index++;
        setTimeout(typeJobTitle, 500);
    }
}

typeJobTitle();

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.nav-item');
  
    navItems.forEach(item => {
      item.addEventListener('click', function(event) {
        event.preventDefault(); 
        const targetId = this.getAttribute('href').substring(1); 
        const targetSection = document.getElementById(targetId); 
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth' }); 
        }
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var openBTC = document.getElementById('openBTC');

    openBTC.addEventListener('click', function () {
        var pdfUrl = '/projects/BTC.pdf';
        window.open(pdfUrl, '_blank');
    });
});

  document.addEventListener('DOMContentLoaded', function () {
    var openHelios = document.getElementById('openHelios');

    openHelios.addEventListener('click', function () {
        var pdfUrl = '/projects/HeliosReport.pdf';
        window.open(pdfUrl, '_blank');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var openWine = document.getElementById('openWine');

    openWine.addEventListener('click', function () {
        var pdfUrl = '/projects/DeterminingWineQuality.pdf';
        window.open(pdfUrl, '_blank');
    });
});

