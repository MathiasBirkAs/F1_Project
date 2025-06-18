import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function MouseConfetti() {
  useEffect(() => {
    function handleClick(e) {
      confetti({
        particleCount: 15,
        startVelocity: 30,
        spread: 80,
        origin: {
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        }
      });
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return null;
}
