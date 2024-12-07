// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 20, // Small offset to account for the fixed header height
      behavior: 'smooth',
    });
  });
});

// Form Validation for the Appointment Form
const appointmentForm = document.querySelector('#book-appointment form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const availabilityInput = document.querySelector('#availability');

appointmentForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Validate name input
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  // Validate email input
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // Validate availability input
  if (availabilityInput.value.trim() === '') {
    alert('Please select your preferred appointment time.');
    availabilityInput.focus();
    return;
  }

  // If all fields are valid, show a confirmation alert
  alert('Your appointment has been booked successfully!');

  // Optionally, you can reset the form after submission:
  // appointmentForm.reset();
});

// Fade-in effect on page load for all sections
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add('fade-in');
    }, index * 300); // Delaying each section's animation slightly
  });
});

// Adding fade-in effect to section titles
const sectionTitles = document.querySelectorAll('.section-title-container h2');

sectionTitles.forEach((title, index) => {
  setTimeout(() => {
    title.classList.add('fade-in-title');
  }, index * 300);
});

// For smooth scrolling back to top
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑ Back to Top';
backToTopBtn.style.position = 'fixed';
backToTopBtn.style.bottom = '20px';
backToTopBtn.style.right = '20px';
backToTopBtn.style.padding = '10px 20px';
backToTopBtn.style.backgroundColor = '#ff6600';
backToTopBtn.style.color = 'white';
backToTopBtn.style.border = 'none';
backToTopBtn.style.borderRadius = '5px';
backToTopBtn.style.fontSize = '16px';
backToTopBtn.style.cursor = 'pointer';
backToTopBtn.style.display = 'none';
document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
