import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

export default function KonamiMonaco() {
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const code = [
      "ArrowUp", "ArrowUp"
    ];
    let input = [];

    function keyHandler(e) {
      input.push(e.key);
      if (input.length > code.length) input.shift();

      if (input.join("") === code.join("") && !activated) {
        setActivated(true);
        triggerMonacoMode();
      }
    }

    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [activated]);

  function triggerMonacoMode() {
    // Confetti blast
   for (let i = 0; i < 20; i++) {
  setTimeout(() => confetti({
    particleCount: 100,
    spread: 160,
    origin: { y: 0.6 }
  }), i * 150);
}
    // Page title
    document.title = "Party Mode Activated!";

    // CSS Animations
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes flash {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }

      @keyframes floatBoat {
        0% { transform: translateY(0); }
        100% { transform: translateY(-15px); }
      }
    `;
    document.head.appendChild(style);
  }

  return null;
}
