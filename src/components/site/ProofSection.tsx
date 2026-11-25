import { proof } from "@/content/home";
import { SectionHeading } from "./SectionHeading";
import { Testimonials } from "./Testimonials";

/**
 * Section 05: editorial case blocks on the navy surface. The outcome is always visible.
 * Only cases marked `published` render (see the publication gate in content/home.ts).
 * Credentials live in the trust strip only; Proof keeps the Clients row (client review).
 */
export function ProofSection() {
  const cases = proof.cases.filter((item) => item.published);
  return (
    <section id="proof" className="cp-section cp-section--navy" aria-labelledby="proof-title">
      <div className="cp-container">
        <SectionHeading
          id="proof-title"
          kicker={proof.kicker}
          heading={proof.heading}
          tone="dark"
        />

        <div className="cp-cases">
          {cases.map((item, index) => (
            <article key={item.title} className="cp-case" data-reveal="">
              <div className="cp-case__meta">
                <span className="cp-case__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="cp-case__title">{item.title}</h3>
                <p className="cp-case__engagement">{item.engagement}</p>
              </div>
              <div className="cp-case__story">
                <p className="cp-case__narrative">{item.narrative}</p>
                <div className="cp-case__outcome">
                  <p className="cp-case__outcome-label">Outcome</p>
                  <p className="cp-case__outcome-text">{item.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Testimonials />

        <dl className="cp-names" data-reveal="">
          <div className="cp-names__row">
            <dt>Clients</dt>
            <dd>
              <ul>
                {proof.clients.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
