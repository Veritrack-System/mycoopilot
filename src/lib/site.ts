// Single source of truth for site-wide CooPilot values.

export const BOOKING_LABEL = "Book a discovery call";

// Placeholder until the client supplies the Cal.com / Calendly event URL.
// Every booking control must read from here so the swap is a one-line change.
export const BOOKING_HREF = "#book";

export const NAV_ITEMS = [
  { label: "The problem", href: "#problem" },
  { label: "What we fix", href: "#what-we-fix" },
  { label: "Ways to work", href: "#ways-to-work" },
  { label: "Proof", href: "#proof" },
  { label: "About", href: "#founder" },
] as const;

// Interim raster logos. Swap for the client SVGs when supplied:
//   onLight -> /brand/coopilot-logo-horizontal.svg       (full colour)
//   onDark  -> /brand/coopilot-logo-horizontal-dark.svg  (cube faces kept, wordmark white)
export const LOGO = {
  onLight: "/brand/coopilot-logo-horizontal.png",
  onDark: "/brand/coopilot-logo-horizontal-light.png",
  alt: "CooPilot",
} as const;

// Footer contact + legal. Leave as null until the client supplies the real value:
// nothing renders for a null entry, so no placeholder text or dead link ships.
export const CONTACT = {
  email: null as string | null,
  linkedin: null as string | null,
  privacyHref: null as string | null,
  cookieHref: null as string | null,
  legalName: "COOPILOT LTD",
} as const;

export const CREDENTIALS = [
  "JPMorgan",
  "IAG Cargo",
  "British Airways",
  "Deloitte",
  "Forensic Risk Alliance",
] as const;
