// Single source of truth for site-wide COOPilot values.

// Public origin, used for absolute share-image URLs. Change to the custom domain at launch.
export const SITE_URL = "https://mycoopilot.vercel.app";

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

// Vector logos rebuilt from the designer's source file (COO Pilot Logo Opt .pdf) with the
// wordmark set as one word, "COOPilot", in Eudoxus Sans. PNG versions sit alongside for decks.
export const LOGO = {
  onLight: "/brand/coopilot-logo-blue.svg", // Signal blue #315EEB
  onDark: "/brand/coopilot-logo-white.svg",
  alt: "COOPilot",
} as const;

// Footer contact + legal. Leave as null until the client supplies the real value:
// nothing renders for a null entry, so no placeholder text or dead link ships.
export const CONTACT = {
  email: null as string | null,
  linkedin: null as string | null,
  privacyHref: null as string | null,
  cookieHref: null as string | null,
  legalName: "COOPILOT LTD",
  // Companies Act 2006 / 2015 trading disclosure line, exactly as supplied by the client.
  registration:
    "COOPILOT LTD is registered in England and Wales, company number 16882954. Registered office: 167-169 Great Portland Street, 5th Floor, London W1W 5PF." as
      string | null,
} as const;

export const CREDENTIALS = [
  "JPMorgan",
  "IAG Cargo",
  "British Airways",
  "Deloitte",
  "Forensic Risk Alliance",
] as const;
