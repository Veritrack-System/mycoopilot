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
    body: "COOPilot works with founder-led product and service businesses that have paying customers, a team of around ten or more and revenue in the seven figures or heading there. The usual trigger is a new sales channel, more complex client delivery, a bigger team, a new market or a founder who can no longer carry every decision.",
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
    "We work inside the business as the operating layer and build what the company has outgrown. Then we write it down and hand it over, so it runs without us.",
  items: [
    {
      title: "Clear ownership and faster decisions",
      body: "Who owns what, which approvals the founder keeps, which decisions move to the team and the weekly rhythm that keeps work moving.",
    },
    {
      title: "Commercial operations that repeat",
      body: "Someone owns the revenue number. What you sell is packaged and priced so it can be sold the same way twice. And when a retailer, partner or funder says yes, the launch actually happens: the pitch, the terms, the logistics, the follow through.",
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
      body: "SOPs a new joiner can follow, recurring admin automated where it should be, and a handover plan that does not depend on one person being available.",
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
  lead: "Most people start with the Operating Review.",
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
      body: "The embedded engagement. A COOPilot operator works inside the business on a monthly commitment: the weekly leadership conversation, the operating cadence, the reporting, and the specialist partners under us for finance. You get a COO's judgement without a COO's salary, and a backbone that stays when the engagement ends.",
      bestFor:
        "a company growing quickly enough that the operation needs an owner now, not just a plan.",
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
        "Orders ship whether or not Chantel is in the inbox. The Sephora order flow is written down with an owner and a cover for every step.",
      published: true,
    },
    {
      title: "From grant dependent to two revenue engines",
      engagement: "Six-week strategy and operating model sprint",
      narrative:
        "I led a six-week strategy and operating model sprint for a cancer care charity that was more than 80 per cent grant funded and routed every decision through its two founders. The work included nine stakeholder interviews, a target operating model, delegated approvals, a founder transition plan, two priced training offers, a hospital advocacy package and a weekly operating rhythm the team now runs.",
      outcome: "The confirmed pipeline at handover was six figures.",
      published: true,
    },
  ] satisfies CaseStudy[],
  clients: ["RUKA", "From Me To You", "Sorted Chale"],
} as const;

/**
 * Testimonial slots (client review): seven people, client quotes first. Quotes are supplied
 * by Chantel. A slot renders only once its `quote` is filled in and `published` is true, so
 * the layout never ships an empty card.
 */
export type Testimonial = {
  name: string;
  role: string;
  organisation: string;
  quote: string | null;
  published: boolean;
};

export const testimonials = {
  label: "What clients and colleagues say",
  items: [
    { name: "Vidette", role: "CEO", organisation: "Sorted Chale", quote: null, published: false },
    { name: "Tendai", role: "CEO", organisation: "RUKA", quote: null, published: false },
    { name: "Ugo Agbai", role: "CSO", organisation: "RUKA", quote: null, published: false },
    {
      name: "Ashleigh Neptial",
      role: "CEO",
      organisation: "From Me To You",
      quote: null,
      published: false,
    },
    {
      name: "Nancy Peters",
      role: "Executive Director",
      organisation: "JPMorgan",
      quote: null,
      published: false,
    },
    {
      name: "Esther Phillips",
      role: "Strategic Business Partner",
      organisation: "St George's University Hospitals NHS Foundation Trust",
      quote: null,
      published: false,
    },
    {
      name: "Oyin Jayeola",
      role: "Vice President",
      organisation: "Deutsche Bank",
      quote: null,
      published: false,
    },
  ] as Testimonial[],
};

export const founder = {
  kicker: "Founder and team",
  heading: "Chantel Bawuah, founder of COOPilot.",
  // Set to an approved image path (e.g. "/images/chantel-bawuah.webp") when supplied.
  portrait: null as string | null,
  paragraphs: [
    "Chantel has spent her career inside operations where the numbers had to be right: data visualisation at JPMorgan, advanced analytics and reporting at IAG Cargo, data analytics consulting at Forensic Risk Alliance, resource planning at British Airways and compliance at Deloitte.",
    "She then moved into founder-led businesses and did the work itself, most recently as Head of Operations at RUKA Hair. That included the retail launch, operating model, pricing, cash plan and handover.",
    "COOPilot is built around that standard of work. Chantel leads a team of operators who bring practical experience across operations, data, reporting, finance and delivery. Chantel leads every engagement, with other operators brought in where the work needs them.",
  ],
  teaching:
    "Chantel is also a qualified teacher. That matters because a system only holds if the people running it understand it. The work is not finished until the report can be read quickly, the process can be followed and the team can run it without COOPilot.",
  // Oldest to newest (client review). Chantel to confirm the exact order.
  path: [
    "Deloitte",
    "British Airways",
    "Forensic Risk Alliance",
    "IAG Cargo",
    "JPMorgan",
    "RUKA",
    "COOPilot",
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
        "Usually, yes. Three weeks is enough to see how the business actually runs, and it means any Build or Run work is scoped on evidence rather than on the first conversation. If you already know exactly what is broken, say so on the call and we go straight to Build.",
      published: true,
    },
    {
      question: "Do you work with early-stage businesses?",
      answer:
        "No. If you do not have paying customers and a team yet, you do not need an operator. Sales matters more than an operating layer at that stage. Come back when the operation is what is slowing you down.",
      published: true,
    },
    {
      question: "What is the difference between Build and Run?",
      answer:
        "Build has a fixed scope and an end date: specific systems built, handed over, done. Run is a monthly engagement where a COOPilot operator sits inside the business as your fractional operator. Build fixes a thing. Run owns the operation.",
      published: true,
    },
    {
      question: "Will the founder still be involved?",
      answer:
        "Yes, and more usefully. The work moves routine approvals and delivery off your desk so your time goes to direction, customers and funders. You keep the decisions that should stay with you. The rest get an owner.",
      published: true,
    },
    {
      question: "What types of businesses do you work with?",
      answer:
        "Founder-led organisations with a team of ten or more and revenue in the seven figures or heading there. We also work with established charities and social enterprises where the operating model and the revenue structure need to change together.",
      published: true,
    },
  ] satisfies Faq[],
} as const;

export const finalCta = {
  heading: "Start with the real picture.",
  body: "A 30 minute call. You describe what is breaking, we tell you what we would look at first and whether an Operating Review is the right next step. No deck, no pitch.",
} as const;
