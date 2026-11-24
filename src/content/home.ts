/**
 * Homepage content, as editable collections (offers, cases, FAQs, founder profile).
 * All copy is the client-approved handoff copy. When a CMS is added, it should return these
 * same shapes so the section components do not change.
 */

export type ProblemStatement = { lead: string; detail?: string };

export const problem = {
  kicker: "The problem",
  heading: ["You have proved the business.", "The operation has not caught up."],
  statements: [
    {
      lead: "Every approval comes back to you.",
      detail: "Clients, retailers, funders and suppliers expect you in the room.",
    },
    { lead: "Revenue relies on relationships that only you hold." },
    { lead: "Delivery changes every time, so it is hard to price, repeat or hand over." },
    {
      lead: "The team is capable and stretched, but ownership is unclear and nobody can see the whole picture.",
    },
  ] satisfies ProblemStatement[],
  closing: [
    "This is not a people problem.",
    "It is what happens when a business outgrows the way it was first set up.",
  ],
} as const;

export const audience = {
  fit: {
    title: "A good fit",
    body: "CooPilot works with founder-led product and service businesses that have paying customers, a team of around ten or more and revenue in the seven figures or heading there. The usual trigger is a new sales channel, more complex client delivery, a bigger team, a new market or a founder who can no longer carry every decision.",
  },
  notYet: {
    title: "Not yet",
    body: "If you are pre-revenue, still proving the offer or have no team yet, you do not need an operator. The immediate job is sales.",
  },
  secondary:
    "We also work with established charities and social enterprises that have a team, active funding or earned income, and an operating model that relies too heavily on the founders.",
} as const;

export const outcomes = {
  kicker: "What we fix",
  heading: ["We build the system,", "not a report about it."],
  intro:
    "We work inside the business as the operating layer and build what the company has outgrown. Then we write it down and hand it over, so it can run without us.",
  items: [
    {
      title: "Clear ownership and faster decisions",
      body: "Who owns what, which approvals the founder keeps, which decisions move to the team and the weekly rhythm that keeps work moving.",
    },
    {
      title: "Commercial operations that repeat",
      body: "Someone owns the revenue number. Offers are packaged and priced clearly. When a client, retailer, partner or funder says yes, the scope, terms, delivery and follow-through are ready.",
    },
    {
      title: "Reporting leaders can use",
      body: "A small set of numbers that shows what is happening, what needs attention and who owns the next action. Not a dashboard that looks busy and decides nothing.",
    },
    {
      title: "Finance operations with a cadence",
      body: "Clear cash visibility, a reliable month-end rhythm and tools that match the stage of the business. Where needed, bookkeeping can be delivered by a partner firm, with one accountable point of contact.",
    },
    {
      title: "Processes people can follow",
      body: "SOPs a new joiner can use, recurring admin automated where it should be and a handover plan that does not depend on one person being available.",
    },
  ],
  closing: ["The test is simple.", "If we left tomorrow, would it still run?"],
} as const;

export type Offer = {
  title: string;
  body: string;
  bestFor: string;
  recommended: boolean;
  published: boolean;
};

export const waysToWork = {
  kicker: "Ways to work",
  heading: ["Start with the problem.", "Then choose what needs to happen next."],
  lead: "Most clients start with an Operating Review.",
  offers: [
    {
      title: "Operating Review",
      recommended: true,
      published: true,
      body: "Three weeks inside the business, looking at how it actually runs: decisions, delivery, reporting, cash and where time or money is leaking. You receive a prioritised plan showing what to fix, in what order and why. Then you decide whether to run it internally or ask us to build it.",
      bestFor: "founders who want the real picture before committing to a larger piece of work.",
    },
    {
      title: "Build",
      recommended: false,
      published: true,
      body: "A fixed-scope project with a fixed end date. We build the specific systems the business needs, such as a reporting layer, operating rhythm, SOPs, finance operations or automated recurring admin. The project ends with your team running it without us.",
      bestFor: "a business that knows what is broken and wants it fixed, not permanently managed.",
    },
    {
      title: "Run",
      recommended: false,
      published: true,
      body: "A monthly fractional operations engagement. A CooPilot operator works inside the business, leads the operating cadence, turns the reporting into decisions and coordinates the specialist partners needed to keep the operation moving. You get experienced operational ownership now, without hiring a full-time COO before the business is ready.",
      bestFor:
        "a company growing quickly enough that operations needs an owner now, not just a plan.",
    },
  ] satisfies Offer[],
} as const;

/**
 * Proof publication gate (handoff): named organisations, the 80% grant-funded figure, the
 * six-figure pipeline, the US entity, pricing, financing and finance-governance descriptions
 * need client sign-off. Set `published: false` on any case until it is approved.
 */
export type CaseStudy = {
  title: string;
  engagement: string;
  narrative: string;
  outcome: string;
  published: boolean;
};

export const proof = {
  kicker: "Proof",
  heading: "Built in real businesses.",
  cases: [
    {
      title: "A UK brand into US retail",
      engagement: "Fractional Chief of Staff, then Head of Operations",
      narrative:
        "I led retail and channel operations across Selfridges in the UK and the Sephora US supply chain, from 3PL and EDI partner selection through DC compliance and order flow. I set up the US entity and financing paperwork, built the multi-currency pricing model, negotiated supplier terms and held finance at governance level until a finance director was hired.",
      outcome:
        "I then documented the Sephora order flow with an owner and cover for every step, so orders could ship without relying on me being in the inbox.",
      published: true,
    },
    {
      title: "From grant dependent to two revenue streams",
      engagement: "Six-week strategy and operating model sprint",
      narrative:
        "I led a six-week strategy and operating model sprint for a cancer care charity that was more than 80 per cent grant funded and routing every decision through its two founders. The work included nine stakeholder interviews, a target operating model, delegated approvals, a founder transition plan, two priced training offers, a hospital advocacy package and a weekly operating rhythm the team could run.",
      outcome: "The confirmed pipeline at handover was six figures.",
      published: true,
    },
  ] satisfies CaseStudy[],
  clients: ["RUKA", "From Me To You", "Sorted Chale", "Vertria"],
  credentials: ["JPMorgan", "IAG Cargo", "British Airways", "Deloitte", "Forensic Risk Alliance"],
} as const;

export const founder = {
  kicker: "Founder and team",
  heading: "Chantel Bawuah, founder of CooPilot.",
  // Set to an approved image path (e.g. "/images/chantel-bawuah.webp") when supplied.
  portrait: null as string | null,
  paragraphs: [
    "Chantel has spent her career inside operations where the numbers had to be right: data visualisation at JPMorgan, advanced analytics and reporting at IAG Cargo, data analytics consulting at Forensic Risk Alliance, resource planning at British Airways and compliance at Deloitte.",
    "She then moved into founder-led businesses and did the work itself, most recently as Head of Operations at RUKA Hair. That included the retail launch, operating model, pricing, cash plan and handover.",
    "CooPilot is built around that standard of work. Chantel leads a team of operators who bring practical experience across operations, data, reporting, finance and delivery. The right operator is matched to the problem, with clear ownership from diagnosis through to handover.",
  ],
  teaching:
    "Chantel is also a qualified teacher. That matters because a system only holds if the people running it understand it. The work is not finished until the report can be read quickly, the process can be followed and the team can run it without CooPilot.",
  path: [
    "JPMorgan",
    "IAG Cargo",
    "Forensic Risk Alliance",
    "British Airways",
    "Deloitte",
    "RUKA",
    "CooPilot",
  ],
  education:
    "BSc Chemistry and Forensic Science, Queen Mary University of London. MSc Data Science and Analytics.",
} as const;

export type Faq = { question: string; answer: string; published: boolean };

export const faq = {
  kicker: "FAQ",
  heading: "Common questions.",
  items: [
    {
      question: "What happens on the discovery call?",
      answer:
        "You describe what is breaking, where decisions are getting stuck and what growth has changed. We will tell you what we would look at first and whether an Operating Review is the right next step.",
      published: true,
    },
    {
      question: "Do I need to start with an Operating Review?",
      answer:
        "Most clients do because it prevents the business from fixing the loudest symptom first. If the scope is already clear, we can decide whether a Build engagement is the better starting point.",
      published: true,
    },
    {
      question: "Do you work with early-stage businesses?",
      answer:
        "Not before the business has paying customers and a team. At that point, sales and customer learning matter more than an operating layer.",
      published: true,
    },
    {
      question: "What is the difference between Build and Run?",
      answer:
        "Build is a fixed project with a defined handover. Run is an embedded monthly engagement where a CooPilot operator owns the operating rhythm while the business grows.",
      published: true,
    },
    {
      question: "Will the founder still be involved?",
      answer:
        "Yes. The goal is not to remove the founder from the business. It is to stop routine approvals, reporting and delivery from depending on them.",
      published: true,
    },
    {
      question: "What types of businesses do you work with?",
      answer:
        "Our primary focus is established founder-led product and service businesses. We also work with established charities and social enterprises where the operating model and revenue structure need to change together.",
      published: true,
    },
  ] satisfies Faq[],
} as const;

export const finalCta = {
  heading: "Start with the real picture.",
  body: "A 30-minute call. Tell us what is breaking, where decisions are getting stuck and what growth has changed. We will tell you what we would look at first, and whether an Operating Review is the right next step. No deck and no pitch.",
} as const;
