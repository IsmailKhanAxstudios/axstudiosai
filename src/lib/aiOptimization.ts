export const aiOptimization = {
  title: "AI Cost & Performance Optimization",
  description: "Reduce token spend and latency while measuring the quality and reliability of your AI workflows.",
  sections: [
    {
      title: "Cost & Performance Optimization",
      capabilities: [
        {
          title: "Intelligent model routing",
          description: "Route routine tasks to smaller, faster models and escalate complex work to more capable models when the task or evaluation results call for it.",
        },
        {
          title: "Semantic and prompt caching",
          description: "Reuse stable prompt context where supported, and cache eligible repeated answers with access controls and expiry rules.",
        },
        {
          title: "Small language model fine-tuning",
          description: "Fine-tune smaller models for well-defined tasks, then benchmark their quality, latency, and total operating cost against the current model.",
        },
        {
          title: "Retrieval and context pruning",
          description: "Improve retrieval in RAG systems and pass only the most relevant passages to the model, reducing unnecessary context and token use.",
        },
      ],
    },
    {
      title: "Reliability, Quality & Safety",
      capabilities: [
        {
          title: "Automated AI evaluations",
          description: "Build repeatable tests to compare changes in prompts, models, and retrieval against representative tasks and quality thresholds.",
        },
        {
          title: "Guardrails and hallucination controls",
          description: "Validate inputs and outputs, check important claims against trusted sources, and route sensitive or uncertain cases for review.",
        },
        {
          title: "AI observability and FinOps dashboards",
          description: "Track token spend, latency, and errors by feature, team, or user so you can see which workflows drive cost and where reliability drops.",
        },
      ],
    },
    {
      title: "Production & Enterprise Readiness",
      capabilities: [
        {
          title: "Agentic workflow engineering",
          description: "Set step and spending limits, define fallback paths, and require human approval for consequential actions.",
        },
        {
          title: "Private cloud and on-premises AI",
          description: "Evaluate deployment in your private cloud or infrastructure against your data handling, operational, and cost requirements.",
        },
        {
          title: "Legacy systems and API integration",
          description: "Connect AI workflows to ERPs, CRMs, and internal databases through scoped APIs and structured tool calling, including MCP where appropriate.",
        },
      ],
    },
  ],
} as const;
