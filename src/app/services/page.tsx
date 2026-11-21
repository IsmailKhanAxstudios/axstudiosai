import { pageMetadata } from "@/lib/seo";
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
  "AI Automation, Cost Optimization & MVP Services",
  "Explore AxStudios AI agency services, including AI cost optimization, AI audits, AI automation, AI agents, SaaS and MVP development, and Chrome extensions.",
);

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
