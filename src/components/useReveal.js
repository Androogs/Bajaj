import { useEffect } from "react";

/** Anima los elementos .reveal cuando entran en pantalla. */
export default function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal:not(.is-in)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
