let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active")
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {
  let current = "";
  let offset = 150;
  sections.forEach(sec => {
    let top = window.scrollY;
    let offsetTop = sec.offsetTop - offset;
    let offsetBottom = offsetTop + sec.offsetHeight;
    if (top >= offsetTop && top < offsetBottom) {
      current = sec.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
});

ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
}).reveal(".reveal");

ScrollReveal().reveal(".home-content, heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-contact hi, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

const words = ["Frontend Developer", "Smart Contract Developer", "Product Manager", "Wordpress Developer", "Virtual Assistence"];

let index = 0;
let letterIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // Adjust typing speed (milliseconds per character)

function type() {
  const word = words[index];
  const text = word.substring(0, letterIndex + 1, "|");

  document.getElementById("skills").textContent = text;
 
  if (!isDeleting) {
    letterIndex++;
  } else {
    letterIndex--;
  }

  if (isDeleting && letterIndex === -1) {
    isDeleting = false;
    index++;
    if (index === words.length) {
      index = 0; // Reset index when reaching the end of the words array
    }
  }

  if (!isDeleting && letterIndex === word.length) {
    isDeleting = true;
    typingSpeed = 100; // Pause at the end of typing word
  } else if (isDeleting && letterIndex === -1) {
    typingSpeed = 50; // Adjust typing speed after deleting word
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, typingSpeed);
});

function toggleText() {
  let moreText = document.getElementById("moreText");
  let btnText = document.getElementById("toggleBtn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btnText.innerHTML = "Read less";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Read more";
  }
}

function openPopup(id) {
  document.getElementById(id).style.display = "block";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}
// Get the current year
const currentYear = new Date().getFullYear();
// Set the text content of the element with id "currentYear" to the current
document.getElementById("CurrentYear").textContent = currentYear;

const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // Stop default form submission

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      form.reset(); // Clear the form
      successMessage.style.display = 'block'; // Show success message
    } else {
      alert('Oops! Something went wrong.');
    }
  }).catch(error => {
    alert('There was an error sending your message.');
  });
});