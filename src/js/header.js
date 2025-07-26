// Toggle menú principal (hamburguesa)
const mainBtn = document.querySelector(".menu__toggle");
const mainMenu = document.getElementById(mainBtn.getAttribute("aria-controls"));

mainBtn.addEventListener("click", () => {
  const open = mainBtn.getAttribute("aria-expanded") === "true";
  mainBtn.setAttribute("aria-expanded", String(!open));
  mainBtn.setAttribute("aria-label", open ? "Abrir menú" : "Cerrar menú");
  mainMenu.classList.toggle("is-open", !open);
});

// Toggle submenu Idiomas
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

// Cerrar todo al hacer clic fuera
document.addEventListener("click", (ev) => {
  // Submenu
  const submenuOpen = submenu.classList.contains("is-open");
  const clickInSubmenu = submenu.contains(ev.target);
  const clickInSubmenuBtn = submenuBtn.contains(ev.target);

  if (submenuOpen && !clickInSubmenu && !clickInSubmenuBtn) {
    submenu.classList.remove("is-open");
    submenuBtn.setAttribute("aria-expanded", "false");
    submenuBtn.setAttribute("aria-label", "Abrir idiomas");
  }

  // Menú hamburguesa
  const mainOpen = mainMenu.classList.contains("is-open");
  const clickInMain = mainMenu.contains(ev.target);
  const clickInMainBtn = mainBtn.contains(ev.target);

  if (mainOpen && !clickInMain && !clickInMainBtn) {
    mainMenu.classList.remove("is-open");
    mainBtn.setAttribute("aria-expanded", "false");
    mainBtn.setAttribute("aria-label", "Abrir menú");
  }
});