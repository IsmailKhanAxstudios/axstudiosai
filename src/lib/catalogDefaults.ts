import { aiOptimization } from "@/lib/aiOptimization";

export const defaultServices = [
  {
    id: "ai-cost-optimization",
    icon: "Gauge",
    title: aiOptimization.title,
    description: aiOptimization.description,
    href: "/services/ai-cost-optimization",
    category: "AI FinOps",
    features: aiOptimization.sections.map(({ title }) => title),
  },
  {
    icon: "Zap",
    title: "AI Automation",
    description:
      "Automate repetitive business processes using AI, intelligent workflows, and connected systems.",
    href: "/services/ai-automation",
    category: "Core Systems",
    features: [
      "Workflow automation",
      "Process optimization",
      "Tool integration",
      "Scalable systems",
    ],
  },
  {
    icon: "Bot",
    title: "AI Agents",
    description:
      "Build intelligent AI agents that understand context, use tools, and perform business tasks.",
    href: "/services/ai-agents",
    category: "Intelligence",
    features: [
      "Context-aware reasoning",
      "Tool usage",
      "Autonomous operation",
      "Multi-agent systems",
    ],
  },
  {
    icon: "Globe",
    title: "AI-Powered Web Applications",
    description:
      "Build intelligent websites, portals, dashboards, and custom web applications powered by AI.",
    href: "/services/ai-web-applications",
    category: "Development",
    features: [
      "AI websites",
      "Customer portals",
      "Business apps",
      "Intelligent dashboards",
    ],
  },
  {
    icon: "Code",
    title: "Custom AI & SaaS Development",
    description:
      "Design and build scalable AI-powered software, SaaS platforms, internal tools, and custom systems.",
    href: "/services/custom-ai-saas-development",
    category: "Engineering",
    features: [
      "SaaS platforms",
      "Custom software",
      "API development",
      "Infrastructure",
    ],
  },
  {
    icon: "SearchCheck",
    title: "AI Strategy & Automation Audit",
    description:
      "Identify high-impact AI opportunities, eliminate bottlenecks, and create a practical implementation roadmap.",
    href: "/services/ai-automation-audit",
    category: "Strategy",
    features: [
      "Opportunity mapping",
      "Process analysis",
      "ROI assessment",
      "Roadmap creation",
    ],
  },
  {
    icon: "Users",
    title: "AI Consultancy",
    description:
      "Expert guidance on AI adoption, strategy, technology selection, and implementation best practices.",
    href: "/services/ai-consultancy",
    category: "Advisory",
    features: [
      "Technology selection",
      "AI adoption strategy",
      "Best practices",
      "Vendor evaluation",
    ],
  },
  {
    icon: "Network",
    title: "AI Integration",
    description:
      "Seamlessly integrate AI capabilities into your existing systems, tools, and business workflows.",
    href: "/services/ai-integration",
    category: "Integration",
    features: [
      "API integration",
      "System connectivity",
      "Data pipelines",
      "Workflow embedding",
    ],
  },
  {
    icon: "Settings",
    title: "AI Systems Maintenance",
    description:
      "Monitor, maintain, optimize, and continuously improve AI systems and automations.",
    href: "/services/ai-maintenance",
    category: "Operations",
    features: [
      "24/7 monitoring",
      "Performance tuning",
      "Continuous updates",
      "Technical support",
    ],
  },
  {
    id: "chrome-extensions",
    icon: "Puzzle",
    title: "Chrome Extensions",
    description:
      "Build custom Chrome extensions that automate browser workflows and connect with the tools your team uses.",
    href: "/contact",
    linkLabel: "Discuss Your Extension",
    category: "Development",
    features: [
      "Browser workflow automation",
      "Custom extension interfaces",
      "API integrations",
      "Chrome Web Store submission support",
    ],
  },
  {
    id: "mvp-development",
    icon: "Rocket",
    title: "MVP Development",
    description:
      "Hire us to turn your idea into a working product you can launch, test with early users, and improve with feedback.",
    href: "/contact",
    linkLabel: "Discuss Your MVP",
    category: "Development",
    features: [
      "Product scoping",
      "Core feature design and development",
      "Launch support",
      "Iteration based on user feedback",
    ],
  },
] as const;

export const defaultProducts = [
  { name: "DomiumPro", image: "/products/domiumpro.png", imageAlt: "DomiumPro property management sign-in screen" },
  { name: "FlowDesk", image: "/products/flowdesk.webp", description: "A workspace for team requests and approvals.", sample: true },
  { name: "BriefBoard", image: "/products/briefboard.webp", description: "A space to organise project ideas, requirements, and decisions.", sample: true },
  { name: "LaunchMeter", image: "/products/launchmeter.webp", description: "A dashboard for tracking adoption and feedback after launch.", sample: true },
];
