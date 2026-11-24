import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";

import { waysToWork } from "@/content/home";
import { BOOKING_HREF, BOOKING_LABEL } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

/** Section 04: three equal routes; Operating Review is marked as the recommended start. */
export function WaysToWorkSection() {
  const offers = waysToWork.offers.filter((offer) => offer.published);
  return (
    <section
      id="ways-to-work"
      className="cp-section cp-section--white"
      aria-labelledby="ways-to-work-title"
    >
      <div className="cp-container">
        <SectionHeading
          id="ways-to-work-title"
          kicker={waysToWork.kicker}
          heading={waysToWork.heading}
        >
          <p className="cp-lead cp-lead--strong">{waysToWork.lead}</p>
        </SectionHeading>

        <ol className="cp-offers">
          {offers.map((offer, index) => (
            <li
              key={offer.title}
              className={offer.recommended ? "cp-offer cp-offer--recommended" : "cp-offer"}
              data-reveal=""
              style={{ "--i": index } as CSSProperties}
            >
              <article className="cp-offer__inner" aria-labelledby={`offer-${index}`}>
                <div className="cp-offer__top">
                  <span className="cp-offer__num" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {offer.recommended ? <span className="cp-badge">Recommended</span> : null}
                </div>
                <h3 id={`offer-${index}`} className="cp-offer__title">
                  {offer.title}
                </h3>
                <p className="cp-offer__body">{offer.body}</p>
                <p className="cp-offer__best">
                  <strong>Best for</strong>
                  {offer.bestFor.charAt(0).toUpperCase() + offer.bestFor.slice(1)}
                </p>
                <a
                  className={
                    offer.recommended
                      ? "cp-btn cp-btn--on-light cp-btn--block cp-offer__cta"
                      : "cp-btn cp-btn--outline cp-btn--block cp-offer__cta"
                  }
                  href={BOOKING_HREF}
                  aria-describedby={`offer-${index}`}
                >
                  {BOOKING_LABEL}
                  <ArrowRight aria-hidden="true" size={16} strokeWidth={2} />
                </a>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
