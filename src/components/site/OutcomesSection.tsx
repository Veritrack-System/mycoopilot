import type { CSSProperties } from "react";

import { outcomes } from "@/content/home";
import { SectionHeading } from "./SectionHeading";

/**
 * Section 03: sticky editorial heading on the left, five outcomes on a signal line on the
 * right, then the closing test at display size.
 */
export function OutcomesSection() {
  return (
    <section
      id="what-we-fix"
      className="cp-section cp-section--paper"
      aria-labelledby="what-we-fix-title"
    >
      <div className="cp-container">
        <div className="cp-split">
          <div className="cp-split__aside">
            <SectionHeading
              id="what-we-fix-title"
              kicker={outcomes.kicker}
              heading={outcomes.heading}
            >
              <p className="cp-lead">{outcomes.intro}</p>
            </SectionHeading>
          </div>
          <ol className="cp-outcomes">
            {outcomes.items.map((item, index) => (
              <li
                key={item.title}
                className="cp-outcome"
                data-reveal=""
                style={{ "--i": index } as CSSProperties}
              >
                <span className="cp-outcome__node" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="cp-outcome__title">{item.title}</h3>
                <p className="cp-outcome__body">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className="cp-test" data-reveal="">
          {outcomes.closing[0]} <span>{outcomes.closing[1]}</span>
        </p>
      </div>
    </section>
  );
}
