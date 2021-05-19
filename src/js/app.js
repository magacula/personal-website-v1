// Global variables of the elements we want to target
const nav = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav__list");
const navLink = document.querySelectorAll(".nav__link");
const navLogo = document.getElementById("logo");
const sections = document.querySelectorAll("section[id]");
const header = document.getElementById("header");
const popUpMenu = document.getElementById("popup-menu");
const openBtn = document.getElementById("open-popup-btn");
const closeBtn = document.getElementById("close-popup-btn");

/*===== Display / hide (toggles) mobile menu =====*/
const mobileMenu = () => {
  // Event listener that triggers upon click event
  nav.addEventListener("click", () => {
    console.log("clicked");
    // toggle method returns true if token is now present, and false otherwise.
    nav.classList.toggle("is-active");
    menu.classList.toggle("nav-active");
  });
};

/*===== Remove Menu upon clicking on link  =====*/
const hideMenu = () => {
  // remove menu if logo is clicked
  navLogo.addEventListener("click", () => {
    menu.classList.remove("nav-active");
  });

  // remove menu if one of the links are clicked
  navLink.forEach((n) =>
    n.addEventListener("click", () => {
      // remove active menu
      menu.classList.remove("nav-active");
    })
  );
};

/*===== Display active bar on scrolled section =====*/
const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(`.nav__list .nav__item a[href='#${sectionId}']`)
        .classList.add("active-link");
    } else {
      document
        .querySelector(`.nav__list .nav__item a[href='#${sectionId}']`)
        .classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== Change background header =====*/
const scrollHeader = () => {
  if (window.scrollY >= 100) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
};
window.addEventListener("scroll", scrollHeader);

/*===== Popup Modal =====*/
const popupModal = () => {
  openBtn.addEventListener("click", () => {
    popUpMenu.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    popUpMenu.classList.remove("active");
  });
};

// Runs all functions
const app = () => {
  mobileMenu();
  hideMenu();
  scrollActive();
  popupModal();
};
app();

/*
============================================================
GSAP Animations
============================================================
*/
gsap.from(".home__img", { opacity: 0, duration: 2, delay: 0.5, x: 60 });
gsap.from(
  ".home-content, .home__name, .home__profession, .button, .home__social",
  {
    opacity: 0,
    duration: 2,
    delay: 0.8,
    y: 25,
    ease: "expo.out",
    stagger: 0.16,
  }
);
