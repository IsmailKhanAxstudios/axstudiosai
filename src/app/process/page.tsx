// app/services/page.tsx
import { Metadata } from "next";

import ProcessSection from "@/components/sections/ProcessSection";
export const metadata: Metadata = {
  title: "Our Services — AI Automation, Agents & Development | AxStudios",
  description:
    "Explore AxStudios' complete AI services: AI Automation, AI Agents, Web Applications, SaaS Development, Strategy & Audit, Consultancy, Integration, and Maintenance.",
};

export default function ProcessPage() {
  return (
    <>
      <ProcessSection />
    </>
  );
}
