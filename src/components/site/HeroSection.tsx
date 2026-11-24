import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";

import { BOOKING_HREF, BOOKING_LABEL } from "@/lib/site";
import { SignalPath } from "./SignalPath";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

/** Section 01: typography-first hero on the brand indigo, with the signal-line visual. */
export function HeroSection() {
  return (
    <section id="hero" className="cp-hero" aria-labelledby="hero-title">
      <div className="cp-hero__glow" aria-hidden="true" />
      <div className="cp-container cp-hero__grid">
        <div className="cp-hero__copy">
          <p className="cp-hero__eyebrow cp-reveal" style={step(0)}>
            Operations for founder-led product and service businesses
          </p>
          <h1 id="hero-title" className="cp-hero__title cp-reveal" style={step(1)}>
            Your business runs on you. <span>That is the problem we fix.</span>
          </h1>
          <p className="cp-hero__intro cp-reveal" style={step(2)}>
            CooPilot helps founder-led businesses fix the operational mess that appears when growth
            outpaces the way the company was set up. Our team of operators steps in, builds the
            operating structure, reporting and ways of working, then hands it over so the business
            can run without everything coming back to you.
          </p>
          <div className="cp-hero__action cp-reveal" style={step(3)}>
            <a className="cp-btn cp-btn--on-dark cp-btn--lg" href={BOOKING_HREF}>
              {BOOKING_LABEL}
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
            </a>
            <p className="cp-hero__note">
              30 minutes. You tell us what is breaking. We tell you what we would look at first.
            </p>
          </div>
          <p className="cp-hero__qualifier cp-reveal" style={step(4)}>
            Best suited to businesses with a team of around ten or more and revenue in the seven
            figures or heading there.
          </p>
        </div>
        <div className="cp-hero__visual">
          <SignalPath />
        </div>
      </div>
    </section>
  );
}
