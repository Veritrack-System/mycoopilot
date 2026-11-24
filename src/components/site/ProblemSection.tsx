import type { CSSProperties } from "react";
import { Check, Minus } from "lucide-react";

import { audience, problem } from "@/content/home";
import { SectionHeading } from "./SectionHeading";

const num = (i: number) => String(i + 1).padStart(2, "0");

/** Section 02: four numbered problem rows, the closing line, then who this is (and is not) for. */
export function ProblemSection() {
  return (
    <section id="problem" className="cp-section cp-section--white" aria-labelledby="problem-title">
      <div className="cp-container">
        <SectionHeading id="problem-title" kicker={problem.kicker} heading={problem.heading} />

        <ol className="cp-rows">
          {problem.statements.map((statement, index) => (
            <li
              key={statement.lead}
              className="cp-row"
              data-reveal=""
              style={{ "--i": index } as CSSProperties}
            >
              <span className="cp-row__num" aria-hidden="true">
                {num(index)}
              </span>
              <p className="cp-row__text">
                {statement.lead}
                {"detail" in statement && statement.detail ? (
                  <span> {statement.detail}</span>
                ) : null}
              </p>
            </li>
          ))}
        </ol>

        <p className="cp-statement" data-reveal="">
          {problem.closing[0]} <span>{problem.closing[1]}</span>
        </p>

        <div className="cp-fit" data-reveal="">
          <article className="cp-fit__card cp-fit__card--yes">
            <h3 className="cp-fit__title">
              <span className="cp-fit__icon" aria-hidden="true">
                <Check size={16} strokeWidth={2.5} />
              </span>
              {audience.fit.title}
            </h3>
            <p>{audience.fit.body}</p>
          </article>
          <article className="cp-fit__card cp-fit__card--no">
            <h3 className="cp-fit__title">
              <span className="cp-fit__icon" aria-hidden="true">
                <Minus size={16} strokeWidth={2.5} />
              </span>
              {audience.notYet.title}
            </h3>
            <p>{audience.notYet.body}</p>
          </article>
        </div>
        <p className="cp-fit__secondary" data-reveal="">
          {audience.secondary}
        </p>
      </div>
    </section>
  );
}
