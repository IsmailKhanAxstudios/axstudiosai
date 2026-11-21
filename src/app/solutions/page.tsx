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
  "AI Automation Solutions, Use Cases & ROI",
  "Explore AI workflow demos, business automation use cases, and case studies. Estimate time and cost savings with the AI automation ROI calculator.",
);

export default async function SolutionsPage() {
  await connection();
  return (
    <>
      <header className="relative mx-auto max-w-3xl px-4 pt-28 text-center sm:pt-32">
        <h1 className="text-3xl font-bold sm:text-5xl">AI Automation <span className="text-[rgb(var(--accent-text))]">Solutions</span></h1>
        <p className="mt-4 text-lg text-secondary-text">Explore use cases for sales, support, and operations, then estimate the value of automating a workflow.</p>
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
