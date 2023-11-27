document.getElementById('pageTitle').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.getElementById('pageLogo').addEventListener('click', function() {
    window.location.href = 'index.html';
});

document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');
  
    hamburgerMenu.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  });

/*const footer = document.getElementById('footer');

// Function to show/hide footer based on scroll position
function toggleFooterVisibility() {
  if (window.scrollY > 100) { // Change 100 to the scroll position where you want the footer to appear
    footer.style.display = 'block';
  } else {
    footer.style.display = 'none';
  }
}

// Event listener for scroll
window.addEventListener('scroll', toggleFooterVisibility);*/