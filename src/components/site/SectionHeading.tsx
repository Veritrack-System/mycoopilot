import type { ReactNode } from "react";

type Props = {
  id: string;
  kicker: string;
  heading: string | readonly string[];
  tone?: "light" | "dark";
  children?: ReactNode;
};

/** Kicker + H2 used by every major section. A two-part heading puts line two in the accent. */
export function SectionHeading({ id, kicker, heading, tone = "light", children }: Props) {
  const [first, ...rest] = typeof heading === "string" ? [heading] : heading;
  return (
    <header className={`cp-heading cp-heading--${tone}`} data-reveal="">
      <p className="cp-kicker">{kicker}</p>
      <h2 id={id} className="cp-h2">
        {first}
        {rest.length > 0 ? <span> {rest.join(" ")}</span> : null}
      </h2>
      {children}
    </header>
  );
}
