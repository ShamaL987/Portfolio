function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.addEventListener('DOMContentLoaded', function(){
  var options = {
      strings: [ 'Programmer','Application Developer',  'Web Developer'],
      typeSpeed: 100,
      backSpeed:100,
      loop: true
  };
  var typed = new Typed('.typing', options);
});


function navigateToExperience() {
  const experienceSection = document.getElementById('experience');
  experienceSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToProjects() {
  const projectsSection = document.getElementById('projects');
  projectsSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

let scrollPercentage = () => {
  let scrollProgress = document.getElementById('progress');
  let progressValue = document.getElementById('progress-value');
  let pos = document.documentElement.scrollTop;

  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  let scrollValue = Math.round(pos * 100 / calcHeight);
  console.log(scrollValue);

  if (scrollValue < 100) {
    scrollProgress.style.background = `conic-gradient(#E9967A ${scrollValue}% , #c0cfff ${scrollValue}%)`;
    progressValue.textContent = `${scrollValue}%`;
  } else {
    // Set the background color to a solid color when 100%
    scrollProgress.style.background = '#F08080';
    // Display the checkmark icon
    progressValue.innerHTML = '<img src="./assets/check.png" alt="Completed" width="30" height="30" />';
  }
}

window.onscroll = scrollPercentage;
