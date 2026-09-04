// components/sections/ServicesSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Bot,
  Code,
  TrendingUp,
  Settings,
  Globe,
  ArrowRight,
  SearchCheck,
  Users,
  Network,
  Sparkles,
  CheckCircle2,
  Cpu,
  Shield,
  Gauge,
} from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

const services = [
  {
    number: "01",
    icon: Zap,
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
    number: "02",
    icon: Bot,
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
    number: "03",
    icon: Globe,
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
    number: "04",
    icon: Code,
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
    number: "05",
    icon: SearchCheck,
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
    number: "06",
    icon: Users,
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
    number: "07",
    icon: Network,
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
    number: "08",
    icon: Settings,
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
];

export default function ServicesSection() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${PRIMARY_DARK} 0%, transparent 70%)`,
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            style={{ border: `1px solid ${PRIMARY_DARK}` }}
          >
            <Sparkles className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-sm text-white/80">CORE SERVICES</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">AI systems built </span>
            <span style={{ color: PRIMARY }}>around your business.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From single workflows to complete automation infrastructure, we
            build systems that scale.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const isHovered = hoveredService === service.title;
            const isSelected = selectedService === service.title;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredService(service.title)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() =>
                  setSelectedService(
                    selectedService === service.title ? null : service.title,
                  )
                }
                className="relative group cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative rounded-2xl p-5 transition-all duration-300 h-full"
                  style={{
                    background:
                      isHovered || isSelected
                        ? `linear-gradient(135deg, ${PRIMARY_DARK}, rgba(235, 106, 80, 0.1))`
                        : "rgba(19, 19, 24, 0.7)",
                    border: `1px solid ${
                      isHovered || isSelected ? PRIMARY_LIGHT : PRIMARY_DARK
                    }`,
                    boxShadow:
                      isHovered || isSelected
                        ? `0 0 25px ${PRIMARY_GLOW}`
                        : "none",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-mono"
                      style={{ color: PRIMARY }}
                    >
                      {service.number}
                    </span>
                    <motion.div
                      animate={
                        isHovered || isSelected
                          ? { rotate: 360, scale: 1.1 }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                      className="p-2.5 rounded-xl"
                      style={{
                        background: PRIMARY_DARK,
                        border: `1px solid ${PRIMARY_LIGHT}`,
                      }}
                    >
                      <service.icon
                        className="w-6 h-6"
                        style={{ color: PRIMARY }}
                      />
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <span
                    className="inline-block text-[9px] uppercase tracking-wider px-2 py-1 rounded-full mb-2"
                    style={{
                      background: PRIMARY_DARK,
                      color: PRIMARY,
                    }}
                  >
                    {service.category}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-base font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-white/60 mb-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Expandable Features */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-white/10 space-y-1.5">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: idx * 0.05 }}
                              className="flex items-center gap-2 text-[11px] text-white/60"
                            >
                              <CheckCircle2
                                className="w-3 h-3 flex-shrink-0"
                                style={{ color: PRIMARY }}
                              />
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
                    style={{ color: PRIMARY }}
                  >
                    Explore Service
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Cpu, label: "8 Core Services", value: "End-to-end AI" },
            {
              icon: Network,
              label: "50+ Integrations",
              value: "Connected systems",
            },
            {
              icon: Shield,
              label: "Enterprise Grade",
              value: "Security & compliance",
            },
            { icon: Gauge, label: "3x Faster", value: "Time to deployment" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center"
              style={{ border: `1px solid ${PRIMARY_DARK}` }}
            >
              <stat.icon
                className="w-8 h-8 mx-auto mb-3"
                style={{ color: PRIMARY }}
              />
              <div className="text-xl font-bold text-white mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-white/60">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
