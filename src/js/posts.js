document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todos los elementos que tengan la clase "posts__hero"
  const heroes = document.querySelectorAll(".posts__hero");

  // Recorre cada uno de ellos
  heroes.forEach((hero) => {
    // Obtiene el número de artículo desde el atributo data-article
    const articleNumber = hero.dataset.article;

    // Si tiene número, aplica el fondo correspondiente con el gradiente
    if (articleNumber) {
      hero.style.background = `
        rgba(51, 51, 51, 0.95) url("./img/bg-article${articleNumber}.webp")
      `;
      hero.style.backgroundPosition = "center";
      hero.style.backgroundRepeat = "no-repeat";
      hero.style.backgroundSize = "cover";
      hero.style.backgroundBlendMode = "multiply"; // Mezcla el color y la imagen
    }
  });
});