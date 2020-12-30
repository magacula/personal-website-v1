// Global variables of the elements we want to target
const nav = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav__list");
const navLink = document.querySelectorAll(".nav__link");
const navLogo = document.getElementById("logo");
const sections = document.querySelectorAll("section[id]");
const header = document.getElementById("header");

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
  if (window.scrollY >= 200) {
    console.log("scrolled past 200px");
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }

  //   // removes the highlight class when website first renders
  //   if (window.scrollY < 200 && header) {
  //     header.classList.remove("highlight");
  //   }
};
window.addEventListener("scroll", scrollHeader);

// Runs all functions
const app = () => {
  mobileMenu();
  hideMenu();
  scrollActive();
};
app();
