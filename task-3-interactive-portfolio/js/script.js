/* ================= SELECT ELEMENTS ================= */

const navbar = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav-links a");

const themeToggle = document.getElementById("theme-toggle");

const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

/* ================= NAVBAR SCROLL EFFECT ================= */

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});

/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {

      currentSection = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === `#${currentSection}`
    ) {

      link.classList.add("active");

    }

  });

});

/* ================= DARK MODE TOGGLE ================= */

if (localStorage.getItem("theme") === "light") {

  document.body.classList.add("light-mode");

}

themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if (
    document.body.classList.contains("light-mode")
  ) {

    localStorage.setItem("theme", "light");

  } else {

    localStorage.setItem("theme", "dark");

  }

});

/* ================= EMAIL VALIDATION ================= */

function validateEmail(email){

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);

}

/* ================= CONTACT FORM VALIDATION ================= */

contactForm.addEventListener("submit", (event) => {

  event.preventDefault();

  let isValid = true;

  /* Clear Old Errors */

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  /* Name Validation */

  if (
    nameInput.value.trim() === ""
  ) {

    nameError.textContent =
      "Name is required";

    isValid = false;

  }

  /* Email Validation */

  if (
    emailInput.value.trim() === ""
  ) {

    emailError.textContent =
      "Email is required";

    isValid = false;

  } else if (
    !validateEmail(emailInput.value)
  ) {

    emailError.textContent =
      "Enter a valid email address";

    isValid = false;

  }

  /* Message Validation */

  if (
    messageInput.value.trim() === ""
  ) {

    messageError.textContent =
      "Message is required";

    isValid = false;

  }

  /* Success */

  if (isValid) {

    alert(
      "Message submitted successfully!"
    );

    contactForm.reset();

  }

});

/* ================= SMOOTH ACTIVE LINK CLICK ================= */

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item => {

      item.classList.remove("active");

    });

    link.classList.add("active");

  });

});