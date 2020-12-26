// function that displays / hides (toggles) mobile menu
const mobileMenu = () => {
  const nav = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav__list");
  // Event listener that triggers upon click event
  nav.addEventListener("click", () => {
    console.log("clicked");
    // toggle method returns true if token is now present, and false otherwise.
    nav.classList.toggle("is-active");
    menu.classList.toggle("nav-active");
  });
};

mobileMenu();

function app() {}
