import { useEffect } from "react";

/**
 * Reveals `[data-reveal]` elements once as they enter the viewport.
 * Hiding only applies after `cp-js` is set on <html>, so content stays visible without JS,
 * and the CSS skips the effect entirely under prefers-reduced-motion.
 */
export function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window) || targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          (entry.target as HTMLElement).dataset["reveal"] = "in";
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    // Anything already on screen (or above it, e.g. after an anchor jump) shows immediately.
    for (const el of targets) {
      if (el.getBoundingClientRect().top < window.innerHeight) el.dataset["reveal"] = "in";
      else observer.observe(el);
    }
    root.classList.add("cp-js");

    return () => observer.disconnect();
  }, []);
}
