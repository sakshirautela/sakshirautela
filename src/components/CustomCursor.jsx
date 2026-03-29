import { useEffect, useRef } from "react";
import "../styles/CustomCursor.css";
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    let mx = 0, my = 0;
    let rx = 0, ry = 0;

    let dotScale = 1;
    let ringScale = 1;

    const move = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;

      dot.style.transform =
        `translate(${mx}px, ${my}px) scale(${dotScale})`;

      ring.style.transform =
        `translate(${rx}px, ${ry}px) scale(${ringScale})`;

      requestAnimationFrame(animate);
    };

    const onEnter = () => {
      dotScale = 1.8;
      ringScale = 1.8;
    };

    const onLeave = () => {
      dotScale = 1;
      ringScale = 1;
    };

    const onDown = () => {
      dotScale = 0.8;
      ringScale = 2.2;
    };

    const onUp = () => {
      dotScale = 1;
      ringScale = 1;
    };

    const elements = document.querySelectorAll("a, button, [data-hover]");

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);

    elements.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    animate();

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);

      elements.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}