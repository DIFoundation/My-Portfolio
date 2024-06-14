let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active")
}



// let sections = document.querySelector("section");
// let navLinks = document.querySelector("header nav a");

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute("id");

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove("active");
//                 document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
//             });
//         };
//     });



//     let header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 100);

    
//     menuIcon.classList.remove("fa-xmark");
//     navbar.classList.remove("active");
// };

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header nav a");

// window.onscroll = () => {
//   let current = "";
//   let offset = 150;
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offsetTop = sec.offsetTop - offset;
//     let offsetBottom = offsetTop + sec.offsetHeight;
//     if (top >= offsetTop && top < offsetBottom) {
//       current = sec.getAttribute("id");
//     }
//   });

//   navLinks.forEach(link => {
//     link.classList.remove("active");
//     if (link.getAttribute("href") === "#" + current) {
//       link.classList.add("active");
//     }
//   });

//   let header = document.querySelector("header");
//   header.classList.toggle("sticky", window.scrollY > 100);
// };


// ScrollReveal({
//     distance: "80px",
//     duration: 2000,
//     delay: 200,
// });

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



const words = ["JavaScript", "Typing", "Text", "Animation", "OpenAI"];

let index = 0;
let letterIndex = 0;
let isDeleting = false;
let typingSpeed = 100; // Adjust typing speed (milliseconds per character)

function type() {
  const word = words[index];
  const text = word.substring(0, letterIndex + 1);

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
    typingSpeed = 100; // Adjust typing speed after deleting word
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, typingSpeed);
});