// components/sections/ProjectExamples.tsx
"use client";

import { motion } from "framer-motion";
import { TrendingUp, Headphones, Cog, ArrowRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    icon: TrendingUp,
    title: "AI Sales Engine",
    description:
      "Lead capture → qualification → enrichment → personalized outreach → CRM.",
    features: [
      "Automated lead scoring",
      "Email personalization",
      "CRM integration",
      "Meeting scheduling",
    ],
  },
  {
    icon: Headphones,
    title: "Support Copilot",
    description:
      "Customer question → AI analysis → knowledge retrieval → response → escalation.",
    features: [
      "24/7 response",
      "Multi-language",
      "Knowledge base",
      "Smart escalation",
    ],
  },
  {
    icon: Cog,
    title: "Operations OS",
    description:
      "Forms → database → AI processing → notifications → reporting.",
    features: [
      "Workflow automation",
      "Data processing",
      "Real-time alerts",
      "Analytics dashboard",
    ],
  },
];

export default function ProjectExamples() {
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
            What we can build
          </h2>
          <p className="text-lg text-zinc-400">
            Conceptual examples of automation systems we can create for your
            business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 gradient-border hover:bg-zinc-900/50 transition-all"
            >
              <project.icon className="w-12 h-12 mb-6 text-purple-400" />
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-zinc-400 mb-6">{project.description}</p>

              <div className="space-y-2 mb-6">
                {project.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-zinc-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    {feature}
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
