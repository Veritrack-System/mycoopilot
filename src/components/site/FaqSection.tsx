import { useState } from "react";

import { faq } from "@/content/home";
import { SectionHeading } from "./SectionHeading";

/** Section 07: accessible accordion. First item open; real buttons with aria-expanded. */
export function FaqSection() {
  const items = faq.items.filter((item) => item.published);
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="cp-section cp-section--white" aria-labelledby="faq-title">
      <div className="cp-container">
        <div className="cp-split cp-split--faq">
          <div className="cp-split__aside">
            <SectionHeading id="faq-title" kicker={faq.kicker} heading={faq.heading} />
          </div>
          <div className="cp-faq" data-reveal="">
            {items.map((item, index) => {
              const isOpen = open === index;
              const buttonId = `faq-q-${index}`;
              const panelId = `faq-a-${index}`;
              return (
                <div key={item.question} className="cp-faq__item" data-open={isOpen || undefined}>
                  <h3 className="cp-faq__q">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="cp-faq__icon" aria-hidden="true" />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="cp-faq__a"
                    hidden={!isOpen}
                  >
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
