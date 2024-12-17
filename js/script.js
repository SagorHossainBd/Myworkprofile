// Smooth Scroll for Navbar Links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Highlight Active Navbar Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 50; // Adjust for fixed navbar height
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Contact Form Interaction (Display WhatsApp Alert)
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission
  alert('Thank you for reaching out! I will contact you via WhatsApp shortly.');
  contactForm.reset(); // Clear form fields
});

// Navbar Animation on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});