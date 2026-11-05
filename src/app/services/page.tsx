// app/services/page.tsx
import { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";
import UseCases from "@/components/sections/UseCases";
import AIAgentsSection from "@/components/sections/AIAgentsSection";
import AIWebApplications from "@/components/sections/AIWebApplications";
import CustomAISaaSDevelopment from "@/components/sections/CustomAISAASDev";
import AIStrategyAudit from "@/components/sections/AIStrategyAudit";
import AISystemsMaintenance from "@/components/sections/AISystemMainetnance";
export const metadata: Metadata = {
  title: "Our Services — AI Automation, Agents & Development | AxStudios",
  description:
    "Explore AxStudios' complete AI services: AI Automation, AI Agents, Web Applications, SaaS Development, Strategy & Audit, Consultancy, Integration, and Maintenance.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesSection />
      <div id="ai-automation" className="scroll-mt-24"><UseCases /></div>
      <div id="ai-agents" className="scroll-mt-24"><AIAgentsSection /></div>
      <div id="ai-web-applications" className="scroll-mt-24"><AIWebApplications /></div>
      <div id="custom-ai-saas-development" className="scroll-mt-24"><CustomAISaaSDevelopment /></div>
      <div id="ai-automation-audit" className="scroll-mt-24"><AIStrategyAudit /></div>
      <div id="ai-maintenance" className="scroll-mt-24"><AISystemsMaintenance /></div>
    </>
  );
}
