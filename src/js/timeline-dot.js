const boxes = document.querySelectorAll(
  ".conquer_english__levels_timeline--box"
);

function handleScroll() {
  const viewportHeight = window.innerHeight;

  boxes.forEach((box, index) => {
    const dot = box.querySelector(".timeline-dot");
    const rect = box.getBoundingClientRect();
    const dotOffset = rect.top + rect.height / 2;

    if (dotOffset < viewportHeight * 0.5) {
      dot.style.transform = "scale(2)";
      dot.style.backgroundColor = "var(--blue)";
    } else {
      dot.style.transform = "scale(1.4)";
      dot.style.backgroundColor = "white";
    }

    // “Fusión” entre dots: cuando están cerca
    if (index < boxes.length - 1) {
      const nextBox = boxes[index + 1];
      const nextDot = nextBox.querySelector(".timeline-dot");
      const nextRect = nextBox.getBoundingClientRect();

      const distance = Math.abs(rect.bottom - nextRect.top);

      if (distance < 60) {
        dot.style.backgroundColor = "var(--blue)";
        nextDot.style.backgroundColor = "var(--blue)";
      }
    }
  });
}

window.addEventListener("scroll", handleScroll);