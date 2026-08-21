// components/navbar/ServicesDropdown.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Zap,
  Cog,
  Code,
  Globe,
  Plug,
  Target,
  TrendingUp,
  Users,
  Headphones,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const servicesData = [
  {
    title: "AI Automation",
    icon: Zap,
    items: [
      { label: "Workflow Automation", href: "/services/ai-automation" },
      { label: "AI Agents", href: "/services/ai-agents" },
      { label: "Business Automation", href: "/services/ai-automation" },
    ],
  },
  {
    title: "Development",
    icon: Code,
    items: [
      { label: "AI SaaS", href: "/services/ai-saas-development" },
      { label: "Web Apps", href: "/services/ai-saas-development" },
      { label: "APIs & Integrations", href: "/services/ai-automation" },
    ],
  },
  {
    title: "Growth",
    icon: TrendingUp,
    items: [
      { label: "Lead Generation", href: "/services/sales-automation" },
      { label: "Sales Automation", href: "/services/sales-automation" },
      { label: "Marketing Automation", href: "/services/marketing-automation" },
    ],
  },
  {
    title: "Operations",
    icon: Cog,
    items: [
      {
        label: "Support Automation",
        href: "/services/customer-support-automation",
      },
      { label: "Internal Tools", href: "/services/custom-ai-solutions" },
      { label: "Data Automation", href: "/services/ai-automation" },
    ],
  },
];

export default function ServicesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[800px] glass rounded-2xl p-8 shadow-2xl"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-4 gap-8">
        {servicesData.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-2 mb-4">
              <section.icon className="w-4 h-4 text-purple-400" />
              <h3 className="text-sm font-semibold text-white">
                {section.title}
              </h3>
            </div>
            <div className="space-y-2">
              {section.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-zinc-400 hover:text-white transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Promotional Card */}
      <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
        <p className="text-sm font-medium text-white mb-1">
          Have a complex workflow?
        </p>
        <p className="text-sm text-zinc-400 mb-3">
          Let's turn it into an automated system.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
        >
          Talk to AxStudios
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
