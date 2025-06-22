const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});


//new code

// Add this JavaScript to your existing main.js file

document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu functionality (your existing code should be here)
  const menuBtn = document.getElementById("menu-btn")
  const navLinks = document.getElementById("nav-links")

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active")
    })
  }

  // Dropdown functionality for mobile
  const dropdowns = document.querySelectorAll(".dropdown")
  const submenuItems = document.querySelectorAll(".dropdown-submenu")

  // Handle main dropdown clicks on mobile
  dropdowns.forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle")
    const menu = dropdown.querySelector(".dropdown-menu")

    if (toggle && menu) {
      toggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault()
          dropdown.classList.toggle("active")

          // Close other dropdowns
          dropdowns.forEach((otherDropdown) => {
            if (otherDropdown !== dropdown) {
              otherDropdown.classList.remove("active")
            }
          })
        }
      })
    }
  })

  // Handle submenu clicks on mobile
  submenuItems.forEach((submenu) => {
    const toggle = submenu.querySelector(".submenu-toggle")
    const menu = submenu.querySelector(".submenu")

    if (toggle && menu) {
      toggle.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault()
          submenu.classList.toggle("active")

          // Close other submenus
          submenuItems.forEach((otherSubmenu) => {
            if (otherSubmenu !== submenu) {
              otherSubmenu.classList.remove("active")
            }
          })
        }
      })
    }
  })

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active")
      })
      submenuItems.forEach((submenu) => {
        submenu.classList.remove("active")
      })
    }
  })

  // Handle window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove("active")
      })
      submenuItems.forEach((submenu) => {
        submenu.classList.remove("active")
      })
    }
  })

  // Smooth scrolling for anchor links (optional enhancement)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#" && document.querySelector(href)) {
        e.preventDefault()
        document.querySelector(href).scrollIntoView({
          behavior: "smooth",
        })

        // Close mobile menu after clicking
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active")
        }
      }
    })
  })
})
