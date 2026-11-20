import type { Metadata } from "next";
import UseCases from "@/components/sections/UseCases";
import SolutionsVisualizer from "@/components/sections/SolutionsVisualizer";
import WorkflowBuilder from "@/components/sections/WorkflowBuilder";
import ROICalculator from "@/components/sections/ROICalculator";
import FAQ from "@/components/sections/FAQ";
import ProjectExamples from "@/components/sections/ProjectExamples";

export const metadata: Metadata = {
  title: "Solutions — AI Workflows, Demos & ROI Calculator | AxStudios",
  description:
    "Explore AI automation use cases, try interactive workflow demos, and estimate the potential time and cost savings for your team.",
};

export default function SolutionsPage() {
  return (
    <>
      <UseCases />
      <ProjectExamples />
      <SolutionsVisualizer />
      <WorkflowBuilder />
      <ROICalculator />
      <FAQ />
    </>
  );
}
