import { pageMetadata } from "@/lib/seo";
import { connection } from "next/server";
import { getPublicServices } from "@/lib/catalogStore";
// app/services/page.tsx
import ServicesSection from "@/components/sections/ServicesSection";
import AIAgentsSection from "@/components/sections/AIAgentsSection";
import AIWebApplications from "@/components/sections/AIWebApplications";
import CustomAISaaSDevelopment from "@/components/sections/CustomAISAASDev";
import AIStrategyAudit from "@/components/sections/AIStrategyAudit";
import UseCases from "@/components/sections/UseCases";
import AISystemsMaintenance from "@/components/sections/AISystemMainetnance";
export const metadata = pageMetadata(
  "/services",
  "AI Automation & Custom Software Services",
  "Explore AxStudios services in Dubai, from workflow automation, AI agent development, and AI audits to LLM cost optimization, custom SaaS, and MVP builds.",
);

export default async function ServicesPage() {
  await connection();
  const services = await getPublicServices();
  return (
    <>
      <ServicesSection services={services} directory />
      <div id="ai-automation" className="scroll-mt-24"><UseCases /></div>
      <div id="ai-agents" className="scroll-mt-24"><AIAgentsSection /></div>
      <div id="ai-web-applications" className="scroll-mt-24"><AIWebApplications /></div>
      <div id="custom-ai-saas-development" className="scroll-mt-24"><CustomAISaaSDevelopment /></div>
      <div id="ai-automation-audit" className="scroll-mt-24"><AIStrategyAudit /></div>
      <div id="ai-maintenance" className="scroll-mt-24"><AISystemsMaintenance /></div>
    </>
  );
}
