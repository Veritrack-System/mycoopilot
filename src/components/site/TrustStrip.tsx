import { CREDENTIALS } from "@/lib/site";

/**
 * Text-only credential strip directly under the hero. Framed as experience, not clients,
 * and no logos until written permission exists.
 */
export function TrustStrip() {
  return (
    <section className="cp-trust" aria-label="Experience">
      <div className="cp-container cp-trust__inner">
        <p className="cp-trust__lead">Built inside founder-led businesses.</p>
        <div className="cp-trust__creds">
          <p className="cp-trust__label">Shaped by experience at</p>
          <ul className="cp-trust__list">
            {CREDENTIALS.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
