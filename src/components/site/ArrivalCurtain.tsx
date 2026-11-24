import { useEffect, useState } from "react";

// Arrival curtain: brand mark settles, then the curtain lifts. Unchanged from the original build.
export function ArrivalCurtain() {
  const [gone, setGone] = useState(false);
  useEffect(() => {
    const curtain = document.querySelector(".coopilot-curtain");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !curtain) {
      setGone(true);
      return;
    }
    const finish = (event?: Event) => {
      if (event && event.target !== curtain) return;
      setGone(true);
    };
    const running = curtain.getAnimations?.() ?? [];
    if (running.length > 0 && running.every((animation) => animation.playState === "finished")) {
      finish();
      return;
    }
    curtain.addEventListener("animationend", finish);
    const timer = window.setTimeout(finish, 1700);
    return () => {
      curtain.removeEventListener("animationend", finish);
      window.clearTimeout(timer);
    };
  }, []);
  if (gone) return null;
  return (
    <div className="coopilot-curtain" aria-hidden="true">
      <style>{`
        .coopilot-curtain {
          position: fixed;
          inset: 0;
          z-index: 80;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--cp-indigo);
          background-image: radial-gradient(
            60% 70% at 85% 30%,
            rgb(var(--cp-glow) / 0.45) 0%,
            rgb(var(--cp-glow) / 0) 70%
          );
          animation: coopilot-curtain-up 780ms cubic-bezier(0.76, 0, 0.24, 1) 560ms forwards;
        }
        .coopilot-curtain-mark {
          perspective: 800px;
        }
        .coopilot-curtain img {
          display: block;
          width: 136px;
          height: 136px;
          transform-origin: center center;
          animation: coopilot-mark-settle 640ms cubic-bezier(0.76, 0, 0.24, 1) both;
        }
        @keyframes coopilot-mark-settle {
          from { transform: rotateX(14deg) rotateY(-18deg) scale(0.9); }
          to { transform: rotateX(0deg) rotateY(0deg) scale(1); }
        }
        html:has(.coopilot-curtain),
        html:has(.coopilot-curtain) body {
          overflow: hidden;
        }
        @keyframes coopilot-curtain-up {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(0, -100%, 0); }
        }
        @media (max-width: 767px) {
          .coopilot-curtain img { width: 108px; height: 108px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .coopilot-curtain { display: none !important; animation: none; }
          html:has(.coopilot-curtain),
          html:has(.coopilot-curtain) body { overflow: auto; }
        }
      `}</style>
      <div className="coopilot-curtain-mark">
        <img src="/brand/coopilot-mark-light.png" alt="" />
      </div>
    </div>
  );
}
