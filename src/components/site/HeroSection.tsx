import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";

import { BOOKING_HREF, BOOKING_LABEL } from "@/lib/site";
import { HeroDiagram } from "./HeroDiagram";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

/** Section 01: typography-first hero on the brand navy, with the before -> after ownership diagram. */
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
            COOPilot is the operating partner founder-led companies bring in when growth has outrun
            the way the business was set up. Our founder, Chantel Bawuah, ran the US expansion of a
            UK brand into Sephora, first as its fractional Chief of Staff and then as its Head of
            Operations, and rebuilt a grant-dependent charity around two earned revenue engines and
            an operating model that no longer routes every decision through its founders.
          </p>
          <div className="cp-hero__action cp-reveal" style={step(3)}>
            <a className="cp-btn cp-btn--on-dark cp-btn--lg" href={BOOKING_HREF}>
              {BOOKING_LABEL}
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
            </a>
            <p className="cp-hero__note">
              30 minutes. You describe what is breaking, we tell you what we would look at first.
            </p>
          </div>
          <p className="cp-hero__qualifier cp-reveal" style={step(4)}>
            For organisations with a team of ten or more and revenue in the seven figures or heading
            there.
          </p>
        </div>
        <div className="cp-hero__visual">
          <HeroDiagram />
        </div>
      </div>
    </section>
  );
}
