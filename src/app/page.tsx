// app/page.tsx
import Hero from "@/components/hero/Hero";
import TrustBar from "@/components/sections/TrustBar";
import ProblemSection from "@/components/sections/ProblemSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SolutionsVisualizer from "@/components/sections/SolutionsVisualizer";
import WorkflowBuilder from "@/components/sections/WorkflowBuilder";
// import WhyAxStudios from "@/components/sections/WhyAxStudios";
import ProcessSection from "@/components/sections/ProcessSection";
import ROICalculator from "@/components/sections/ROICalculator";
import UseCases from "@/components/sections/UseCases";
// import TechnologySection from "@/components/sections/TechnologySection";
import ProjectExamples from "@/components/sections/ProjectExamples";
import FAQ from "@/components/sections/FAQ";
import CTASection from "@/components/sections/CTASection";
import AIWorkflowCanvas from "@/components/sections/AIWorkflowCanvas";
import AIAgentsSection from "@/components/sections/AIAgentsSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSection />
      <ServicesSection />

      {/* AI AUTOMATION SERVICES */}
      <UseCases />
      {/* AI AGENTS SERVICES  */}
      <AIAgentsSection />
      {/* AI WEBSITE SERVICES  */}
      <SolutionsVisualizer />
      <WorkflowBuilder />
      <AIWorkflowCanvas />
      <ProcessSection />
      <ROICalculator />

      <ProjectExamples />
      <FAQ />
      <CTASection />
    </>
  );
}
