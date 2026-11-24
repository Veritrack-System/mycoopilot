import { createFileRoute } from "@tanstack/react-router";

import { ArrivalCurtain } from "@/components/site/ArrivalCurtain";
import { FaqSection } from "@/components/site/FaqSection";
import { FinalCtaSection } from "@/components/site/FinalCtaSection";
import { FounderSection } from "@/components/site/FounderSection";
import { HeroSection } from "@/components/site/HeroSection";
import { OutcomesSection } from "@/components/site/OutcomesSection";
import { ProblemSection } from "@/components/site/ProblemSection";
import { ProofSection } from "@/components/site/ProofSection";
import { SiteHeader } from "@/components/site/SiteHeader";
import { StickyBooking } from "@/components/site/StickyBooking";
import { TrustStrip } from "@/components/site/TrustStrip";
import { WaysToWorkSection } from "@/components/site/WaysToWorkSection";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CooPilot | Fractional COO for Founder-Led Businesses" },
      {
        name: "description",
        content:
          "CooPilot helps founder-led businesses fix reporting, ownership, finance operations and delivery, so the company can run without everything going through the founder.",
      },
      { property: "og:title", content: "Your business runs on you. That is the problem we fix." },
      {
        property: "og:description",
        content:
          "Practical operations support for founder-led businesses that have outgrown the way they were set up.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/brand/coopilot-og.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "/brand/coopilot-og.png" },
    ],
    scripts: [
      {
        // Review-only: ?palette=starter previews the handoff's original Navy + Signal blue.
        // Runs before paint so the page never flashes the default palette first.
        children:
          "try{if(new URLSearchParams(location.search).get('palette')==='starter')document.documentElement.setAttribute('data-palette','starter')}catch(e){}",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <>
      <ArrivalCurtain />
      <SiteHeader />
      <div className="cp-page">
        <main id="main-content">
          <HeroSection />
          <TrustStrip />
          <ProblemSection />
          <OutcomesSection />
          <WaysToWorkSection />
          <ProofSection />
          <FounderSection />
          <FaqSection />
        </main>
        <FinalCtaSection />
      </div>
      <StickyBooking />
    </>
  );
}
