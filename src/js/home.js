import "@sass/main.scss";
import { CountUp } from "countup.js";

/* Toggle principal menu (hamburger) */
const mainBtn = document.querySelector(".menu__toggle");
const mainMenu = document.getElementById(mainBtn.getAttribute("aria-controls"));

mainBtn.addEventListener("click", () => {
  const open = mainBtn.getAttribute("aria-expanded") === "true";

  // Flip ARIA state
  mainBtn.setAttribute("aria-expanded", String(!open));
  mainBtn.setAttribute("aria-label", open ? "Abrir menú" : "Cerrar menú");

  // Show/hide menu and change icon
  mainMenu.classList.toggle("is-open", !open);
  mainBtn.classList.toggle("is-open", !open); // Activate the X SVG icon
});

/* Toggle Languages submenu */
const submenuBtn = document.querySelector(".submenu__toggle");
const submenu = document.getElementById(
  submenuBtn.getAttribute("aria-controls")
);

submenuBtn.addEventListener("click", () => {
  const open = submenuBtn.getAttribute("aria-expanded") === "true";

  submenuBtn.setAttribute("aria-expanded", String(!open));
  submenuBtn.setAttribute(
    "aria-label",
    open ? "Abrir idiomas" : "Cerrar idiomas"
  );

  submenu.classList.toggle("is-open", !open);
});

/* Close everything when clicking outside */
document.addEventListener("click", (ev) => {
  /* Submenu */
  if (
    submenu.classList.contains("is-open") &&
    !submenu.contains(ev.target) &&
    !submenuBtn.contains(ev.target)
  ) {
    submenu.classList.remove("is-open");
    submenuBtn.setAttribute("aria-expanded", "false");
    submenuBtn.setAttribute("aria-label", "Abrir idiomas");
  }

  /* Hamburger Menu */
  if (
    mainMenu.classList.contains("is-open") &&
    !mainMenu.contains(ev.target) &&
    !mainBtn.contains(ev.target)
  ) {
    mainMenu.classList.remove("is-open");
    mainBtn.classList.remove("is-open"); // Switch back to the hamburger SVG icon
    mainBtn.setAttribute("aria-expanded", "false");
    mainBtn.setAttribute("aria-label", "Abrir menú");
  }
});

/* Counter Metrics Section */
const counters = document.querySelectorAll(".counter");

const animate = (el) => {
  const target = +el.getAttribute("data-count");
  const counter = new CountUp(el, target, {
    duration: 2,
    separator: ",",
  });

  if (!counter.error) counter.start();
};

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counters.forEach((counter) => observer.observe(counter));