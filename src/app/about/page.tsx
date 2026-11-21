import { pageMetadata } from "@/lib/seo";
// app/about/page.tsx
import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Philosophy from "@/components/about/Philosophy";
export const metadata = pageMetadata(
  "/about",
  "About Our Dubai AI Agency",
  "AxStudios is an AI agency headquartered in Dubai, United Arab Emirates. We build AI automation, custom AI agents, and software for businesses.",
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
