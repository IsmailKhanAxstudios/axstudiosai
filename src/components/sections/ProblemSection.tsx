// components/sections/ProblemSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertCircle,
  Clock,
  Database,
  Unlink,
  Users,
  Settings,
  Layers,
  TrendingDown,
  ArrowRight,
  Zap,
  AlertTriangle,
  XCircle,
  Gauge,
  DollarSign,
  Timer,
  ShieldAlert,
} from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

const problems = [
  {
    icon: Clock,
    title: "Repetitive Admin Tasks",
    description:
      "Your team wastes hours on manual data entry and repetitive tasks that could be automated instantly.",
    impact: "20+ hrs/week wasted",
    metric: "-30% Productivity",
  },
  {
    icon: TrendingDown,
    title: "Slow Lead Follow-up",
    description:
      "Leads go cold because responses take hours instead of seconds, losing potential revenue.",
    impact: "78% leads lost",
    metric: "-25% Revenue",
  },
  {
    icon: Database,
    title: "Manual Data Entry",
    description:
      "Information is copied between systems by hand, creating errors and inconsistencies.",
    impact: "1 in 10 entries wrong",
    metric: "12% Error Rate",
  },
  {
    icon: Unlink,
    title: "Disconnected Software",
    description:
      "Your tools don't talk to each other, creating silos and information gaps.",
    impact: "5+ tools disconnected",
    metric: "40% Data Silos",
  },
  {
    icon: Users,
    title: "Support Overload",
    description:
      "Customer support teams are overwhelmed with repetitive questions and requests.",
    impact: "3x ticket volume",
    metric: "-20% CSAT",
  },
  {
    icon: Settings,
    title: "Inefficient Processes",
    description:
      "Internal workflows are slow, unclear, and depend on manual handoffs.",
    impact: "2x longer cycles",
    metric: "50% Delays",
  },
  {
    icon: Layers,
    title: "Too Many Tools",
    description:
      "You're paying for multiple tools that don't integrate, creating complexity.",
    impact: "$5k+/month wasted",
    metric: "35% Tool Overlap",
  },
  {
    icon: AlertCircle,
    title: "Lost Opportunities",
    description:
      "Valuable opportunities slip through the cracks due to slow response times.",
    impact: "25% opportunities missed",
    metric: "-15% Growth",
  },
];

export default function ProblemSection() {
  const [hoveredProblem, setHoveredProblem] = useState<string | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<string | null>(null);

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
          className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${PRIMARY_DARK} 0%, transparent 70%)`,
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, rgba(255, 255, 255, 0.03) 0%, transparent 70%)`,
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
            <AlertTriangle className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-sm text-white/80">THE PROBLEM</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Manual work is </span>
            <span style={{ color: PRIMARY }}>costing you.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Every hour spent on repetitive tasks is an hour not spent growing
            your business. Here&apos;s what&apos;s holding you back.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((problem, index) => {
            const isHovered = hoveredProblem === problem.title;
            const isSelected = selectedProblem === problem.title;

            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredProblem(problem.title)}
                onMouseLeave={() => setHoveredProblem(null)}
                onClick={() =>
                  setSelectedProblem(
                    selectedProblem === problem.title ? null : problem.title,
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
                  {/* Icon */}
                  <motion.div
                    animate={
                      isHovered || isSelected ? { rotate: 360, scale: 1.1 } : {}
                    }
                    transition={{ duration: 0.5 }}
                    className="p-3 rounded-xl mb-3 inline-block"
                    style={{
                      background: PRIMARY_DARK,
                      border: `1px solid ${PRIMARY_LIGHT}`,
                    }}
                  >
                    <problem.icon
                      className="w-6 h-6"
                      style={{ color: PRIMARY }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-semibold text-sm mb-2 text-white">
                    {problem.title}
                  </h3>

                  {/* Impact Metric */}
                  <div
                    className="flex items-center gap-1.5 mb-2"
                    style={{ color: PRIMARY }}
                  >
                    <Gauge className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold">{problem.impact}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-white/60 leading-relaxed mb-3">
                    {problem.description}
                  </p>

                  {/* Bottom Metric */}
                  <div
                    className="flex items-center justify-between pt-3 border-t"
                    style={{ borderColor: PRIMARY_DARK }}
                  >
                    <span
                      className="text-[10px] font-bold"
                      style={{ color: PRIMARY }}
                    >
                      {problem.metric}
                    </span>
                    <ArrowRight
                      className={`w-3.5 h-3.5 transition-transform ${
                        isSelected ? "rotate-90" : ""
                      }`}
                      style={{ color: PRIMARY }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Impact Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            {
              icon: Timer,
              label: "Hours Lost",
              value: "20+ hrs/week",
            },
            {
              icon: DollarSign,
              label: "Revenue Lost",
              value: "$50k+/year",
            },
            {
              icon: ShieldAlert,
              label: "Error Rate",
              value: "12% Average",
            },
            {
              icon: XCircle,
              label: "Opportunities Missed",
              value: "25% Annual",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-4 text-center"
              style={{
                border: `1px solid ${PRIMARY_DARK}`,
              }}
            >
              <stat.icon
                className="w-6 h-6 mx-auto mb-2"
                style={{ color: PRIMARY }}
              />
              <div className="text-lg font-bold text-white mb-0.5">
                {stat.value}
              </div>
              <p className="text-[11px] text-white/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-white/60 mb-4">
            Ready to eliminate these problems from your business?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium transition-all hover:scale-105"
            style={{
              backgroundColor: PRIMARY,
              boxShadow: `0 10px 30px ${PRIMARY_GLOW}`,
            }}
          >
            <Zap className="w-5 h-5" />
            Fix This Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
