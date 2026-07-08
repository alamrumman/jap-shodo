import { useEffect } from "react";

let observer = null;
const seen = new WeakSet();

function getObserver() {
  if (observer || typeof window === "undefined") return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
  );
  return observer;
}

export function useReveal(deps = []) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Fallback for browsers without IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll(
          ".reveal, .reveal-left, .reveal-right, .reveal-blur, .reveal-clip"
        )
        .forEach((n) => n.classList.add("is-visible"));
      return;
    }

    const io = getObserver();
    if (!io) return;
    const nodes = document.querySelectorAll(
      ".reveal:not(.is-visible), .reveal-left:not(.is-visible), .reveal-right:not(.is-visible), .reveal-blur:not(.is-visible), .reveal-clip:not(.is-visible)"
    );
    nodes.forEach((n) => {
      if (seen.has(n)) return;
      seen.add(n);
      // If already in viewport, reveal immediately — avoids "stuck hidden" cards
      const r = n.getBoundingClientRect();
      const inView =
        r.top < window.innerHeight * 0.95 && r.bottom > 0;
      if (inView) {
        n.classList.add("is-visible");
        return;
      }
      io.observe(n);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
