import { pageMetadata } from "@/lib/seo";
// app/services/page.tsx
import { connection } from "next/server";
import { getPublicServices } from "@/lib/catalogStore";
import ServicesSection from "@/components/sections/ServicesSection";
import AIAgentsSection from "@/components/sections/AIAgentsSection";
import AIWebApplications from "@/components/sections/AIWebApplications";
import CustomAISaaSDevelopment from "@/components/sections/CustomAISAASDev";
import AIStrategyAudit from "@/components/sections/AIStrategyAudit";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
export const metadata = pageMetadata(
  "/services",
  "AI Automation, Cost Optimization & MVP Services",
  "Explore AxStudios AI agency services, including AI cost optimization, AI audits, AI automation, AI agents, SaaS and MVP development, and Chrome extensions.",
);

export default async function ServicesPage() {
  await connection();
  const services = await getPublicServices();
  const published = new Set(services.map((service) => service.id ?? service.href.split("/").at(-1)));
  return (
    <>
<<<<<<< HEAD
      <header className="relative mx-auto max-w-3xl px-4 pt-28 text-center sm:pt-32">
        <h1 className="text-3xl font-bold sm:text-5xl">AI Agency <span className="text-[rgb(var(--accent-text))]">Services</span></h1>
        <p className="mt-4 text-lg leading-relaxed text-secondary-text">
          Work with AxStudios for AI audits, workflow automation, AI cost optimization, and custom software or MVP development.
        </p>
      </header>
      <ServicesSection services={services} />
      <CaseStudiesSection related="services" />
      {published.has("ai-agents") && <AIAgentsSection />}
      {published.has("ai-web-applications") && <AIWebApplications />}
      {published.has("custom-ai-saas-development") && <CustomAISaaSDevelopment />}
      {published.has("ai-automation-audit") && <AIStrategyAudit />}
=======
      <ServicesSection />
      <div id="ai-automation" className="scroll-mt-24"><UseCases /></div>
      <div id="ai-agents" className="scroll-mt-24"><AIAgentsSection /></div>
      <div id="ai-web-applications" className="scroll-mt-24"><AIWebApplications /></div>
      <div id="custom-ai-saas-development" className="scroll-mt-24"><CustomAISaaSDevelopment /></div>
      <div id="ai-automation-audit" className="scroll-mt-24"><AIStrategyAudit /></div>
      <div id="ai-maintenance" className="scroll-mt-24"><AISystemsMaintenance /></div>
>>>>>>> ac30c2a607d97b3877acfbf927d7e1666aee63f1
    </>
  );
}
