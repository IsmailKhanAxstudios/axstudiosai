export const serviceDetails: Record<string, { fit: string; deliverables: string[] }> = {
  "ai-automation": { fit: "Teams copying data, triaging requests, or coordinating approvals across several tools.", deliverables: ["Map triggers, decision points, and exceptions in a high-volume workflow.", "Connect the systems involved and test the handoff with representative requests.", "Set up failure alerts and document how your team can review and run the workflow."] },
  "ai-agents": { fit: "Teams that need AI to interpret requests, use knowledge sources, or take carefully scoped actions.", deliverables: ["Define the agent’s instructions, data access, and tool permissions.", "Set escalation rules and human approvals for consequential actions.", "Test with realistic examples and measure output quality, cost, and reliability."] },
  "ai-web-applications": { fit: "Businesses building customer portals, internal applications, and dashboards with AI-assisted tasks.", deliverables: ["Design the user interface and the workflow around the AI feature.", "Implement the application, its data connections, and its permissions.", "Test the AI behavior, deploy the app, and document the handover."] },
  "custom-ai-saas-development": { fit: "Founders and teams building a subscription product, an internal platform, or custom business software.", deliverables: ["Define the product requirements, core data model, and account roles.", "Build the frontend, backend, and APIs in reviewable increments.", "Prepare the production release and the documentation needed to operate it."] },
  "ai-automation-audit": { fit: "Businesses deciding where automation or AI could save the most time or reduce the most manual work.", deliverables: ["Review existing workflows, systems, bottlenecks, and data availability.", "Compare opportunities by expected impact, cost, and delivery risk.", "Deliver a prioritized AI audit and implementation roadmap."] },
  "ai-consultancy": { fit: "Teams evaluating AI vendors, model options, or whether to build or buy a solution.", deliverables: ["Clarify the business goal, constraints, and decision criteria.", "Compare viable tools or architecture choices against those criteria.", "Recommend next steps and a pilot that can test the key assumptions."] },
  "ai-integration": { fit: "Businesses adding AI capabilities to existing CRMs, ERPs, internal software, or workflows.", deliverables: ["Map API access, data flows, and ownership across systems.", "Implement the integration with scoped permissions and failure handling.", "Validate data mappings and workflows before deployment."] },
  "ai-maintenance": { fit: "Teams with deployed AI systems that need help monitoring and improving them over time.", deliverables: ["Review system health, error trends, model quality, and usage patterns.", "Maintain integrations and apply agreed fixes and updates.", "Prioritize improvements using operational feedback and measured performance."] },
  "chrome-extensions": { fit: "Businesses that want to add a workflow or custom interface directly to the Chrome browser.", deliverables: ["Design the extension interface and define the browser permissions it needs.", "Connect APIs and implement browser workflows with clear user controls.", "Test the extension and prepare it for Chrome Web Store submission where applicable."] },
  "mvp-development": { fit: "Founders and teams who want to validate a product idea with real users.", deliverables: ["Identify the core user journey, release scope, and acceptance criteria.", "Design and implement the first working version of the product.", "Deploy the MVP and prepare a feedback and iteration plan."] },
};

export const serviceSearchContent: Record<string, { title: string; example: string }> = {
  "ai-automation": {
    title: "Business Workflow Automation Services",
    example: "Route website inquiries into your CRM, assign an owner, and create a follow-up task when a lead is still waiting for a response.",
  },
  "ai-agents": {
    title: "Custom AI Agent Development",
    example: "Build a support agent that searches your knowledge base, drafts an answer, and hands uncertain requests to a person.",
  },
  "ai-web-applications": {
    title: "AI Web Application Development",
    example: "Build a customer portal that summarizes uploaded documents or an internal dashboard that helps staff search business records.",
  },
  "custom-ai-saas-development": {
    title: "Custom AI SaaS Development Services",
    example: "Build a SaaS application with account sign-up, workspace permissions, and an AI-assisted workflow users can complete inside the product.",
  },
  "ai-automation-audit": {
    title: "AI Automation Audit & Strategy",
    example: "Review a manual approval or data-entry process, estimate the work involved, and prioritize automation opportunities by expected savings and implementation effort.",
  },
  "ai-consultancy": {
    title: "AI Consulting Services in Dubai",
    example: "Compare AI vendors or language models for a specific business task, then design a pilot that measures accuracy, latency, and operating cost.",
  },
  "ai-integration": {
    title: "AI Integration for CRMs, ERPs & Business APIs",
    example: "Connect an AI workflow to your CRM or ERP so it can look up an account or update an approved record through an existing API.",
  },
  "ai-maintenance": {
    title: "AI System Monitoring & Maintenance",
    example: "Investigate failed workflow runs, track model costs and latency, and retest prompts or integrations when a provider changes.",
  },
  "chrome-extensions": {
    title: "Custom Chrome Extension Development",
    example: "Build a browser extension that captures information from a page and sends it to an internal tool through your API.",
  },
  "mvp-development": {
    title: "MVP Development for Startups",
    example: "Launch a first version of a SaaS product with sign-up and one complete user workflow, then test it with early customers.",
  },
};
