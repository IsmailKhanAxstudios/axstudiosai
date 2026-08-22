// components/sections/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Bot,
  Cog,
  Code,
  TrendingUp,
  Headphones,
  Megaphone,
  Settings,
  Globe,
  ArrowRight,
  SearchCheck,
  Users,
  Network,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Zap,
    title: "AI Automation",
    description:
      "Automate repetitive business processes using AI, intelligent workflows, and connected systems.",
    href: "/services/ai-automation",
    color: "#8b5cf6",
    category: "Core Systems",
    features: [
      "Workflow automation",
      "Process optimization",
      "Tool integration",
      "Scalable systems",
    ],
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Agents",
    description:
      "Build intelligent AI agents that understand context, use tools, and perform business tasks.",
    href: "/services/ai-agents",
    color: "#06b6d4",
    category: "Intelligence",
    features: [
      "Context-aware reasoning",
      "Tool usage",
      "Autonomous operation",
      "Multi-agent systems",
    ],
  },
  {
    number: "03",
    icon: Globe,
    title: "AI-Powered Web Applications",
    description:
      "Build intelligent websites, portals, dashboards, and custom web applications powered by AI.",
    href: "/services/ai-web-applications",
    color: "#10b981",
    category: "Development",
    features: [
      "AI websites",
      "Customer portals",
      "Business apps",
      "Intelligent dashboards",
    ],
  },
  {
    number: "04",
    icon: Code,
    title: "Custom AI & SaaS Development",
    description:
      "Design and build scalable AI-powered software, SaaS platforms, internal tools, and custom systems.",
    href: "/services/custom-ai-saas-development",
    color: "#f59e0b",
    category: "Engineering",
    features: [
      "SaaS platforms",
      "Custom software",
      "API development",
      "Infrastructure",
    ],
  },
  {
    number: "05",
    icon: SearchCheck,
    title: "AI Strategy & Automation Audit",
    description:
      "Identify high-impact AI opportunities, eliminate bottlenecks, and create a practical implementation roadmap.",
    href: "/services/ai-automation-audit",
    color: "#ec4899",
    category: "Strategy",
    features: [
      "Opportunity mapping",
      "Process analysis",
      "ROI assessment",
      "Roadmap creation",
    ],
  },
  {
    number: "06",
    icon: Users,
    title: "AI Consultancy",
    description:
      "Expert guidance on AI adoption, strategy, technology selection, and implementation best practices.",
    href: "/services/ai-consultancy",
    color: "#6366f1",
    category: "Advisory",
    features: [
      "Technology selection",
      "AI adoption strategy",
      "Best practices",
      "Vendor evaluation",
    ],
  },
  {
    number: "07",
    icon: Network,
    title: "AI Integration",
    description:
      "Seamlessly integrate AI capabilities into your existing systems, tools, and business workflows.",
    href: "/services/ai-integration",
    color: "#14b8a6",
    category: "Integration",
    features: [
      "API integration",
      "System connectivity",
      "Data pipelines",
      "Workflow embedding",
    ],
  },
  {
    number: "08",
    icon: Settings,
    title: "AI Systems Maintenance",
    description:
      "Monitor, maintain, optimize, and continuously improve AI systems and automations.",
    href: "/services/ai-maintenance",
    color: "#f97316",
    category: "Operations",
    features: [
      "24/7 monitoring",
      "Performance tuning",
      "Continuous updates",
      "Technical support",
    ],
  },
];
export default function ServicesSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            AI systems built around your business.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            From single workflows to complete automation infrastructure, we
            build systems that scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group glass rounded-2xl p-6 gradient-border hover:bg-zinc-900/50 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-zinc-500 font-mono">
                  {service.number}
                </span>
                <service.icon className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-zinc-400 mb-4">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                Explore Service
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
