import { ArrowRight } from "lucide-react";

import { finalCta } from "@/content/home";
import { BOOKING_HREF, BOOKING_LABEL, CONTACT, LOGO, NAV_ITEMS } from "@/lib/site";

/** Section 08: the closing booking call, then the footer, on one navy surface. */
export function FinalCtaSection() {
  return (
    <div className="cp-close">
      <div className="cp-hero__glow cp-close__glow" aria-hidden="true" />
      <section id="book" className="cp-close__cta" aria-labelledby="book-title">
        <div className="cp-container">
          <h2 id="book-title" className="cp-close__title" data-reveal="">
            {finalCta.heading}
          </h2>
          <p className="cp-close__body" data-reveal="">
            {finalCta.body}
          </p>
          <div data-reveal="">
            <a className="cp-btn cp-btn--on-dark cp-btn--lg" href={BOOKING_HREF}>
              {BOOKING_LABEL}
              <ArrowRight aria-hidden="true" size={18} strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  const legalLinks = [
    { label: "Privacy policy", href: CONTACT.privacyHref },
    { label: "Cookie notice", href: CONTACT.cookieHref },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <footer className="cp-footer">
      <div className="cp-container">
        <div className="cp-footer__top">
          <a className="cp-footer__logo" href="#hero" aria-label={`${LOGO.alt}, back to top`}>
            <img src={LOGO.onDark} alt="" width={433} height={119} loading="lazy" />
          </a>
          <nav aria-label="Footer">
            <ul className="cp-footer__nav">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {CONTACT.email || CONTACT.linkedin ? (
          <div className="cp-footer__contact">
            {CONTACT.email ? (
              <p>
                Prefer to write first? <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </p>
            ) : null}
            {CONTACT.linkedin ? (
              <p>
                <a href={CONTACT.linkedin} rel="noopener noreferrer" target="_blank">
                  LinkedIn
                </a>
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="cp-footer__bottom">
          <div className="cp-footer__legal">
            <p>
              © {new Date().getFullYear()} {CONTACT.legalName}
            </p>
            {CONTACT.registration ? <p>{CONTACT.registration}</p> : null}
          </div>
          {legalLinks.length > 0 ? (
            <ul className="cp-footer__links">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
}
