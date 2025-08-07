import Swiper from "swiper";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

Swiper.use([
  
]);

new Swiper(".conquer_english__hero", {
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  speed: 800,
});

// Accordion FAQ
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".accordion-item");

  items.forEach((item) => {
    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Cierra todos
      items.forEach((i) => i.classList.remove("active"));

      // Abre el actual si no estaba abierto
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
});