// components/sections/ProjectExamples.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Headphones,
  Cog,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
} from "lucide-react";
import Link from "next/link";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

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
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
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
          className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${PRIMARY_DARK} 0%, transparent 70%)`,
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
            style={{ border: `1px solid ${PRIMARY_DARK}` }}
          >
            <Sparkles className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-sm text-white/80">PROJECT EXAMPLES</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-white">What we </span>
            <span style={{ color: PRIMARY }}>can build</span>
          </h2>
          <p className="text-lg text-white/60">
            Conceptual examples of automation systems we can create for your
            business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const isHovered = hoveredProject === project.title;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative"
              >
                <motion.div
                  className="glass rounded-2xl p-8 transition-all duration-300"
                  style={{
                    background: isHovered
                      ? `linear-gradient(135deg, ${PRIMARY_DARK}, rgba(235, 106, 80, 0.1))`
                      : "rgba(19, 19, 24, 0.7)",
                    border: `1px solid ${isHovered ? PRIMARY_LIGHT : PRIMARY_DARK}`,
                    boxShadow: isHovered ? `0 0 30px ${PRIMARY_GLOW}` : "none",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* Icon */}
                  <motion.div
                    animate={isHovered ? { rotate: 360, scale: 1.1 } : {}}
                    transition={{ duration: 0.5 }}
                    className="p-4 rounded-2xl mb-6 inline-block"
                    style={{
                      background: PRIMARY_DARK,
                      border: `1px solid ${PRIMARY_LIGHT}`,
                    }}
                  >
                    <project.icon
                      className="w-10 h-10"
                      style={{ color: PRIMARY }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/60 mb-6">{project.description}</p>

                  {/* Features */}
                  <div className="space-y-2.5 mb-6">
                    {project.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="flex items-center gap-2.5 text-sm text-white/60"
                      >
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: PRIMARY }}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* Link */}
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 transition-colors"
                    style={{ color: PRIMARY }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#ffffff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = PRIMARY)
                    }
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 mb-4">
            Want to see what we can build for your business?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium transition-all hover:scale-105"
            style={{
              backgroundColor: PRIMARY,
              boxShadow: `0 10px 30px ${PRIMARY_GLOW}`,
            }}
          >
            <Zap className="w-5 h-5" />
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
