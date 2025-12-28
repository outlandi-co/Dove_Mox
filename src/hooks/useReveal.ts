import { useEffect } from "react";

export function useReveal(selector = "[data-reveal]") {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll(selector)) as HTMLElement[];
    if (!nodes.length) return;

    // set initial hidden state (in case CSS loads after)
    nodes.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("reveal--in");
            observer.unobserve(entry.target);
          }
        }
      },
      { root: null, threshold: 0.12 }
    );

    nodes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector]);
}
