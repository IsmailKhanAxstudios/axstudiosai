// app/about/page.tsx
import { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import Mission from "@/components/about/Mission";
import Philosophy from "@/components/about/Philosophy";
import Approach from "@/components/about/Approach";

import Values from "@/components/about/Values";
import CTASection from "@/components/sections/CTASection";
export const metadata: Metadata = {
  title: "About AxStudios — AI Automation Studio",
  description:
    "We build systems that make businesses smarter through AI, automation, and intelligent software.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Philosophy />
      <Approach />
      <Values />
      <CTASection />
    </>
  );
}
