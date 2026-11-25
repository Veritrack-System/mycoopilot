import { founder } from "@/content/home";
import { SectionHeading } from "./SectionHeading";

/**
 * Section 06: founder biography with the experience path drawn as a signal line, and the
 * teaching point tied to handover. The portrait space is held with a monogram until an approved image is set.
 */
export function FounderSection() {
  return (
    <section id="founder" className="cp-section cp-section--paper" aria-labelledby="founder-title">
      <div className="cp-container">
        <div className="cp-split cp-split--founder">
          <div className="cp-split__aside">
            <SectionHeading id="founder-title" kicker={founder.kicker} heading={founder.heading} />
            {founder.portrait ? (
              <img
                className="cp-founder__portrait"
                src={founder.portrait}
                alt="Chantel Bawuah, founder of COOPilot"
                loading="lazy"
                decoding="async"
              />
            ) : (
              // Space held for the headshot (client review) until the approved image is supplied.
              <div
                className="cp-founder__portrait cp-founder__portrait--pending"
                aria-hidden="true"
              >
                <span>CB</span>
              </div>
            )}
            <div className="cp-founder__path" data-reveal="">
              <p className="cp-label">Experience</p>
              <ol className="cp-path">
                {founder.path.map((name, index) => (
                  <li
                    key={name}
                    className={
                      index === founder.path.length - 1
                        ? "cp-path__step cp-path__step--now"
                        : "cp-path__step"
                    }
                  >
                    {name}
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="cp-founder__bio">
            {founder.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="cp-founder__para" data-reveal="">
                {paragraph}
              </p>
            ))}
            <blockquote className="cp-founder__teaching" data-reveal="">
              <p>{founder.teaching}</p>
            </blockquote>
            <div className="cp-founder__education" data-reveal="">
              <p className="cp-label">Education</p>
              <p>{founder.education}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
