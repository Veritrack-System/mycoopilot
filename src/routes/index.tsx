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
import { TrustStrip } from "@/components/site/TrustStrip";
import { WaysToWorkSection } from "@/components/site/WaysToWorkSection";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { SITE_URL } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "COOPilot | Fractional COO for Founder-Led Businesses" },
      {
        name: "description",
        content:
          "COOPilot helps founder-led businesses fix reporting, ownership, finance operations and delivery, so the company can run without everything going through the founder.",
      },
      { property: "og:title", content: "Your business runs on you. That is the problem we fix." },
      {
        property: "og:description",
        content:
          "Practical operations support for founder-led businesses that have outgrown the way they were set up.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:site_name", content: "COOPilot" },
      // Crawlers (WhatsApp, LinkedIn, Slack) need an absolute image URL.
      { property: "og:image", content: `${SITE_URL}/brand/coopilot-og.png` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "COOPilot. Your business runs on you. That is the problem we fix.",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/brand/coopilot-og.png` },
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
    </>
  );
}
