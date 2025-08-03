import "@sass/main.scss";
import "./home.js";
import "./lenis.js";
import "./conquer-english.js";

// Reproductor Plyr
import 'plyr/dist/plyr.css'; // estilos por defecto de Plyr
import Plyr from 'plyr'; // la librería

// Espera a que esté el DOM listo
document.addEventListener('DOMContentLoaded', () => {
  // Inicializa todos los videos que estén dentro del wrapper
  const selector = '.conquer_english__master--video video';
  const players = Array.from(document.querySelectorAll(selector))
    .map(video => new Plyr(video, {
      controls: [
        'play-large', // botón grande al centro
        'play', 'progress', 'current-time',
        'mute', 'volume', 'settings',
        'fullscreen'
      ],
      settings: ['quality', 'speed', 'loop']
    }));
});
