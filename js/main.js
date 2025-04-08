'use strict'
// burger
document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header__nav");

  burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    menu.classList.toggle("open");
  });
});
//scrol
document.addEventListener("DOMContentLoaded", function () {
  const scrollDown = document.querySelector(".scroll-down");

  scrollDown.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#next-section");

    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      });
    }
  });
});
//gallery
const lightbox = GLightbox({ selector: '.glightbox' });

document.getElementById('openGallery').addEventListener('click', function () {
    lightbox.open(); 
});
document.querySelectorAll('.loupe').forEach(button => {
    button.addEventListener('click', function () {
        lightbox.open();
    });
});
//form
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const phoneError = document.getElementById('phoneError');
  const emailError = document.getElementById('emailError');
  const messageDiv = document.getElementById('message');

  
  function validatePhone(phone) {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return regex.test(phone);
  }

  
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    
    phoneError.textContent = '';
    emailError.textContent = '';
    messageDiv.textContent = '';

    
    if (!phoneInput.value.trim()) {
      phoneError.textContent = 'Please enter your phone number';
      isValid = false;
    } else if (!validatePhone(phoneInput.value.trim())) {
      phoneError.textContent = 'Please enter the correct phone number';
      isValid = false;
    }

  
    if (!emailInput.value.trim()) {
      emailError.textContent = 'Please enter your email';
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address';
      isValid = false;
    }

    
    if (isValid) {
      messageDiv.textContent = 'The form has been successfully submitted!';
      contactForm.reset();
      
      
      setTimeout(() => {
        messageDiv.textContent = '';
      }, 5000);
    }
  });

  
  phoneInput.addEventListener('input', function() {
    if (phoneInput.value.trim() && !validatePhone(phoneInput.value.trim())) {
      phoneError.textContent = 'Please enter the correct phone number';
    } else {
      phoneError.textContent = '';
    }
  });

  emailInput.addEventListener('input', function() {
    if (emailInput.value.trim() && !validateEmail(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email addre';
    } else {
      emailError.textContent = '';
    }
  });
});