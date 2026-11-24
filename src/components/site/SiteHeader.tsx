import { useEffect, useRef, useState } from "react";

import { BOOKING_HREF, BOOKING_LABEL, LOGO, NAV_ITEMS } from "@/lib/site";

const MENU_ID = "cp-mobile-menu";
const DESKTOP_QUERY = "(min-width: 861px)";

/**
 * Global header. Transparent over the indigo hero, then a solid paper bar with a fine rule
 * once the hero has scrolled under it. Desktop shows the nav inline; mobile shows logo,
 * booking control and a menu button that opens a full-height panel.
 */
export function SiteHeader() {
  const [solid, setSolid] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Switch to the solid bar once the hero no longer sits under the header.
  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setSolid(true);
      return;
    }
    const headerHeight = headerRef.current?.offsetHeight ?? 72;
    const observer = new IntersectionObserver(
      ([entry]) => entry && setSolid(!entry.isIntersecting),
      {
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
      },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  // While still over the hero, add an indigo veil once the page moves so hero text
  // never shows through behind the logo and nav.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu: lock page scroll, trap focus, close on Escape or when resizing to desktop.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", onDesktop);

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !headerRef.current) return;
      const focusables = Array.from(
        headerRef.current.querySelectorAll<HTMLElement>(`#${MENU_ID} a[href], .cp-header__toggle`),
      );
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      root.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onDesktop);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <a className="cp-skip" href="#main-content">
        Skip to content
      </a>
      <header
        ref={headerRef}
        className="cp-header"
        data-state={solid ? "solid" : scrolled ? "veil" : "clear"}
        data-open={open ? "" : undefined}
      >
        <div className="cp-container cp-header__bar">
          <a
            className="cp-header__logo"
            href="#hero"
            aria-label={`${LOGO.alt}, back to top`}
            onClick={close}
          >
            <img className="cp-logo--dark" src={LOGO.onDark} alt="" width={475} height={128} />
            <img className="cp-logo--light" src={LOGO.onLight} alt="" width={475} height={128} />
          </a>

          <nav className="cp-nav" aria-label="Primary">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <a className="cp-btn cp-btn--on-dark cp-header__cta" href={BOOKING_HREF}>
            {BOOKING_LABEL}
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="cp-header__toggle"
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div id={MENU_ID} className="cp-menu" hidden={!open}>
          <div className="cp-container cp-menu__inner">
            <nav aria-label="Mobile">
              <ul>
                {NAV_ITEMS.map((item, index) => (
                  <li key={item.href}>
                    <a className="cp-menu__link" href={item.href} onClick={close}>
                      <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="cp-menu__cta">
              <a
                className="cp-btn cp-btn--on-dark cp-btn--lg cp-btn--block"
                href={BOOKING_HREF}
                onClick={close}
              >
                {BOOKING_LABEL}
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
