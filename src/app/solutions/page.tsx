import { pageMetadata } from "@/lib/seo";
import { connection } from "next/server";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import UseCases from "@/components/sections/UseCases";
import SolutionsVisualizer from "@/components/sections/SolutionsVisualizer";
import WorkflowBuilder from "@/components/sections/WorkflowBuilder";
import ROICalculator from "@/components/sections/ROICalculator";
import FAQ from "@/components/sections/FAQ";
import ProjectExamples from "@/components/sections/ProjectExamples";

export const metadata = pageMetadata(
  "/solutions",
  "AI Workflow Automation Solutions & ROI Calculator",
  "Explore AI automation for lead routing, customer support, and back-office operations. Try workflow demos and estimate savings with our ROI calculator.",
);

export default async function SolutionsPage() {
  await connection();
  return (
    <>
      <header className="relative mx-auto max-w-3xl px-4 pt-28 text-center sm:pt-32">
        <h1 className="text-3xl font-bold sm:text-5xl">AI Automation <span className="text-[rgb(var(--accent-text))]">Solutions</span></h1>
        <p className="mt-4 text-lg text-secondary-text">See how sales teams can route leads, support teams can triage tickets, and operations teams can automate repetitive handoffs. Try a workflow demo or estimate potential time and cost savings.</p>
      </header>
      <UseCases />
      <CaseStudiesSection />
      <ProjectExamples />
      <SolutionsVisualizer />
      <WorkflowBuilder />
      <ROICalculator />
      <FAQ />
    </>
  );
}
