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
  ArrowRight,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Zap,
    title: "AI Automation",
    description:
      "Automate repetitive business operations using intelligent workflows.",
    href: "/services/ai-automation",
  },
  {
    number: "02",
    icon: Bot,
    title: "AI Agents",
    description:
      "Build AI agents capable of handling research, support, sales, operations, and internal workflows.",
    href: "/services/ai-agents",
  },
  {
    number: "03",
    icon: Cog,
    title: "Business Process Automation",
    description: "Connect your existing systems and remove manual processes.",
    href: "/services/ai-automation",
  },
  {
    number: "04",
    icon: Code,
    title: "AI SaaS Development",
    description: "Build custom AI-powered software products.",
    href: "/services/ai-saas-development",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Sales & Lead Automation",
    description:
      "Automatically capture, qualify, enrich, and follow up with leads.",
    href: "/services/sales-automation",
  },
  {
    number: "06",
    icon: Headphones,
    title: "Customer Support Automation",
    description:
      "Deploy intelligent support systems that operate around the clock.",
    href: "/services/customer-support-automation",
  },
  {
    number: "07",
    icon: Megaphone,
    title: "Marketing Automation",
    description:
      "Automate content workflows, campaigns, reporting, and customer journeys.",
    href: "/services/marketing-automation",
  },
  {
    number: "08",
    icon: Settings,
    title: "Custom AI Solutions",
    description:
      "Build bespoke AI systems around unique business requirements.",
    href: "/services/custom-ai-solutions",
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
