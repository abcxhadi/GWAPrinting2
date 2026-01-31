import { useState, useEffect } from "react";

export function AnimatedCounter({ end, duration = 2000, visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let startTime;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [visible, end, duration]);

  return <span className="flip-number">{count}</span>;
}
