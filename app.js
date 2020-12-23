// function that displays mobile menu
// Declare variables to target

const mobileMenu = () => {
  const nav = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".nav__list");
  // Event listener that triggers upon click event
  nav.addEventListener("click", () => {
    console.log("clicked");
    // toggle method returns true if token is now present, and false otherwise.
    nav.classList.toggle("is-active");
    menu.classList.toggle("nav-active");

    // menuLinks.classList.toggle("nav-active")
  });
};

mobileMenu();

//   // Closes mobile menu when clicking on a menu item
// const hideMobileMenu = () => {
//     // target the menu bars
//     const menuBars = document.querySelector(".is-active"); // 'is-active' means menu is active (true) since dropdown menu is activated
//     if (window.innerWidth <= 768 && menuBars) {
//       menu.classList.toggle("is-active");
//       menuLinks.classList.remove("active");
//     }
//   };

//   // adds event listeners
//   menuLinks.addEventListener("click", hideMobileMenu);
//   navLogo.addEventListener("click", hideMobileMenu);
