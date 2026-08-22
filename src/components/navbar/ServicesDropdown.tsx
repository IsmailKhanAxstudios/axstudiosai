// components/navbar/ServicesDropdown.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Bot,
  Zap,
  Code,
  Globe,
  SearchCheck,
  Settings,
  ArrowRight,
  Sparkles,
  Cpu,
  Workflow,
  Shield,
  TrendingUp,
  Layers,
  Terminal,
} from "lucide-react";

const servicesData = [
  {
    title: "AI Automation",
    icon: Zap,
    color: "#8b5cf6",
    items: [
      {
        label: "Workflow Automation",
        href: "/services/ai-automation",
        icon: Workflow,
      },
      {
        label: "Business Process Automation",
        href: "/services/ai-automation",
        icon: Layers,
      },
      {
        label: "Intelligent Workflows",
        href: "/services/ai-automation",
        icon: Sparkles,
      },
    ],
  },
  {
    title: "AI Agents",
    icon: Bot,
    color: "#06b6d4",
    items: [
      { label: "Sales Agents", href: "/services/ai-agents", icon: TrendingUp },
      { label: "Support Agents", href: "/services/ai-agents", icon: Bot },
      { label: "Multi-Agent Systems", href: "/services/ai-agents", icon: Cpu },
    ],
  },
  {
    title: "Development",
    icon: Code,
    color: "#10b981",
    items: [
      {
        label: "AI-Powered Web Apps",
        href: "/services/ai-web-applications",
        icon: Globe,
      },
      {
        label: "Custom AI & SaaS",
        href: "/services/custom-ai-saas-development",
        icon: Code,
      },
      {
        label: "Engineering & Infrastructure",
        href: "/services/custom-ai-saas-development",
        icon: Terminal,
      },
    ],
  },
  {
    title: "Strategy & Support",
    icon: SearchCheck,
    color: "#f59e0b",
    items: [
      {
        label: "AI Strategy & Audit",
        href: "/services/ai-automation-audit",
        icon: SearchCheck,
      },
      {
        label: "Systems Maintenance",
        href: "/services/ai-maintenance",
        icon: Settings,
      },
      {
        label: "Ongoing Optimization",
        href: "/services/ai-maintenance",
        icon: Shield,
      },
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
      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] glass rounded-2xl p-8 shadow-2xl"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-4 gap-8">
        {servicesData.map((section) => (
          <div key={section.title}>
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-1.5 rounded-lg"
                style={{ background: `${section.color}22` }}
              >
                <section.icon
                  className="w-4 h-4"
                  style={{ color: section.color }}
                />
              </motion.div>
              <h3 className="text-sm font-semibold text-white">
                {section.title}
              </h3>
            </div>
            <div className="space-y-1">
              {section.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors py-1.5 px-2 rounded-lg hover:bg-white/5 group"
                >
                  <item.icon
                    className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: section.color }}
                  />
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Promotional Card */}
      <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-white mb-1">
            Not sure where to start?
          </p>
          <p className="text-sm text-zinc-400">
            Get a free AI automation audit for your business.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
}
