import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { BOOKING_HREF, BOOKING_LABEL } from "@/lib/site";

/**
 * Persistent booking control. Appears once the hero CTA has scrolled away and hides again
 * when the final call to action is on screen, so it never doubles up or covers the footer.
 * Desktop: compact bottom-right. Mobile: full-width bottom bar.
 */
export function StickyBooking() {
  const [pastHero, setPastHero] = useState(false);
  const [atClose, setAtClose] = useState(false);

  useEffect(() => {
    const heroCta = document.querySelector(".cp-hero .cp-btn");
    // The whole closing block (final CTA + footer), so the bar never sits over the footer.
    const close = document.querySelector(".cp-close");
    const observers: IntersectionObserver[] = [];
    if (heroCta) {
      const o = new IntersectionObserver(([entry]) => {
        if (entry) setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      });
      o.observe(heroCta);
      observers.push(o);
    } else {
      setPastHero(true);
    }
    if (close) {
      const o = new IntersectionObserver(([entry]) => {
        if (entry) setAtClose(entry.isIntersecting);
      });
      o.observe(close);
      observers.push(o);
    }
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const visible = pastHero && !atClose;

  // Lets the header drop its own booking button on phones while this bar is showing,
  // so there is only ever one persistent booking control on screen.
  useEffect(() => {
    const root = document.documentElement;
    if (visible) root.dataset["bookingBar"] = "";
    else delete root.dataset["bookingBar"];
    return () => {
      delete root.dataset["bookingBar"];
    };
  }, [visible]);

  return (
    <div className="cp-sticky" data-visible={visible || undefined}>
      <a
        className="cp-btn cp-btn--on-light cp-sticky__btn"
        href={BOOKING_HREF}
        aria-hidden={visible ? undefined : true}
        tabIndex={visible ? undefined : -1}
      >
        {BOOKING_LABEL}
        <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
      </a>
    </div>
  );
}
