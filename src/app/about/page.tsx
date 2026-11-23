import { pageMetadata } from "@/lib/seo";
// app/about/page.tsx
import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Philosophy from "@/components/about/Philosophy";
export const metadata = pageMetadata(
  "/about",
  "About Our Dubai AI Automation Agency",
  "Meet AxStudios, a Dubai-based AI automation and software development agency building custom AI agents, business integrations, and SaaS products.",
);

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Philosophy />
    </>
  );
}
