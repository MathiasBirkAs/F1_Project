import { useEffect, useRef } from "react";
import confetti from "canvas-confetti";

export default function SummonMax() {
  const maxSummoned = useRef(false);

  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key.toLowerCase() === "m" && !maxSummoned.current) {
        maxSummoned.current = true;
        triggerMax();
      }
    }

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  function triggerMax() {
    const audio = new Audio("/audio/max-verstappen.mp3");
    audio.volume = 0.5;
    audio.play();

    const car = document.createElement("img");
    car.src = "/assets/max.png";
    car.style.position = "fixed";
    car.style.left = "-400px";
    car.style.bottom = "60px";
    car.style.width = "300px";
    car.style.zIndex = "9999";
    car.style.transition = "left 1.2s ease-in-out";
    document.body.appendChild(car);

    setTimeout(() => {
      car.style.left = "calc(50% - 150px)";
    }, 100);

    const text = document.createElement("div");
    text.innerText = "MAX IS HERE";
    text.style.position = "fixed";
    text.style.top = "40%";
    text.style.left = "50%";
    text.style.transform = "translateX(-50%)";
    text.style.fontSize = "3.2rem";
    text.style.color = "#fff";
    text.style.fontFamily = "Orbitron, sans-serif";
    text.style.textShadow = "0 0 12px #e10600, 0 0 22px #e10600";
    text.style.zIndex = "9999";
    text.style.animation = "fadeInOut 6s ease-in-out forwards";
    document.body.appendChild(text);

    setTimeout(() => {
      confetti({ particleCount: 250, spread: 120 });
      car.remove();
      text.remove();
      maxSummoned.current = false; // 🔓 Unlock again
    }, 6000);

    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeInOut {
        0% { opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  return null;
}
