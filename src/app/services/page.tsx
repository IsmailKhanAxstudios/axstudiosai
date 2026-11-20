// app/services/page.tsx
import { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import AIAgentsSection from "@/components/sections/AIAgentsSection";
import AIWebApplications from "@/components/sections/AIWebApplications";
import CustomAISaaSDevelopment from "@/components/sections/CustomAISAASDev";
import AIStrategyAudit from "@/components/sections/AIStrategyAudit";
export const metadata: Metadata = {
  title: "Our Services — AI Automation, Agents & Development | AxStudios",
  description:
    "Explore AxStudios' AI automation, agents, web applications, SaaS development, Chrome extensions, MVP development, strategy, integration, and maintenance services.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <AIAgentsSection />
      <AIWebApplications />
      <CustomAISaaSDevelopment />
      <AIStrategyAudit />
    </>
  );
}
