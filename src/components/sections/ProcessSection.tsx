// components/sections/ProcessSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  PenTool,
  Hammer,
  TestTube,
  Rocket,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Zap,
  Brain,
  Code2,
  Shield,
  Play,
  RefreshCw,
  Star,
  Hexagon,
  Circle,
  Triangle,
  Cpu,
  Network,
  Activity,
  Gauge,
  Layers,
  Boxes,
  Command,
  Workflow,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We analyze your business and identify high-value automation opportunities.",
    duration: "Week 1",
    color: "#8b5cf6",
    gradient: "from-purple-500 to-purple-700",
    details: [
      "Business analysis",
      "Pain point identification",
      "Opportunity mapping",
      "ROI assessment",
    ],
    metrics: { efficiency: "30%", savings: "$10k+" },
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "We map workflows, systems, integrations, and AI capabilities.",
    duration: "Week 2",
    color: "#06b6d4",
    gradient: "from-cyan-500 to-blue-700",
    details: [
      "Workflow mapping",
      "System architecture",
      "AI model selection",
      "Integration planning",
    ],
    metrics: { efficiency: "50%", savings: "$25k+" },
  },
  {
    icon: Hammer,
    title: "Build",
    description: "We develop the automation system and connect your tools.",
    duration: "Weeks 3-4",
    color: "#10b981",
    gradient: "from-green-500 to-emerald-700",
    details: [
      "Custom development",
      "AI implementation",
      "Tool integration",
      "Testing environment",
    ],
    metrics: { efficiency: "70%", savings: "$50k+" },
  },
  {
    icon: TestTube,
    title: "Test",
    description: "We test workflows, edge cases, reliability, and performance.",
    duration: "Week 5",
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-700",
    details: [
      "Quality assurance",
      "Performance testing",
      "Security audit",
      "User acceptance",
    ],
    metrics: { efficiency: "85%", savings: "$75k+" },
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We deploy the system into your business.",
    duration: "Week 6",
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-700",
    details: [
      "Production deployment",
      "Team training",
      "Documentation",
      "Go-live support",
    ],
    metrics: { efficiency: "95%", savings: "$100k+" },
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description:
      "We monitor, improve, and expand your automation infrastructure.",
    duration: "Ongoing",
    color: "#6366f1",
    gradient: "from-indigo-500 to-blue-700",
    details: [
      "Performance monitoring",
      "Continuous improvement",
      "Feature expansion",
      "Scaling support",
    ],
    metrics: { efficiency: "100%", savings: "Unlimited" },
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #8b5cf6 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 6, repeat: Infinity }}
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
          >
            <Workflow className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-zinc-300">OUR PROCESS</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            From idea to{" "}
            <span className="gradient-text">intelligent system.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            A proven methodology for successful AI automation implementation.
          </p>
        </motion.div>

        {/* Interactive Process Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ transformOrigin: "top" }}
            />
          </div>

          <div className="space-y-8 lg:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center gap-4 lg:gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative rounded-2xl p-6 cursor-pointer"
                    style={{
                      background:
                        activeStep === index || hoveredStep === index
                          ? `linear-gradient(135deg, ${step.color}15, ${step.color}05)`
                          : "rgba(19, 19, 24, 0.7)",
                      border: `1px solid ${step.color}${activeStep === index || hoveredStep === index ? "88" : "33"}`,
                      boxShadow:
                        activeStep === index || hoveredStep === index
                          ? `0 0 30px ${step.color}33`
                          : "none",
                      backdropFilter: "blur(10px)",
                    }}
                    onClick={() =>
                      setActiveStep(activeStep === index ? null : index)
                    }
                  >
                    {/* Step Number */}
                    <div
                      className="absolute -top-3 -left-3 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold"
                      style={{
                        background: step.color,
                        color: "white",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Duration Badge */}
                    <div
                      className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: step.color,
                        color: "white",
                      }}
                    >
                      {step.duration}
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <motion.div
                        animate={activeStep === index ? { rotate: 360 } : {}}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="p-3 rounded-xl"
                        style={{ background: `${step.color}22` }}
                      >
                        <step.icon
                          className="w-6 h-6"
                          style={{ color: step.color }}
                        />
                      </motion.div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>

                    <p className="text-zinc-400 mb-3">{step.description}</p>

                    {/* Metrics */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Gauge
                          className="w-4 h-4"
                          style={{ color: step.color }}
                        />
                        <span className="text-sm text-zinc-300">
                          {step.metrics.efficiency} Efficiency
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp
                          className="w-4 h-4"
                          style={{ color: step.color }}
                        />
                        <span className="text-sm text-zinc-300">
                          {step.metrics.savings} Savings
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="relative z-10">
                  <motion.div
                    animate={
                      activeStep === index || hoveredStep === index
                        ? { scale: 1.5 }
                        : { scale: 1 }
                    }
                    transition={{ type: "spring", stiffness: 300 }}
                    className="w-5 h-5 rounded-full"
                    style={{
                      background: `linear-gradient(135deg, ${step.color}, ${step.color}88)`,
                      boxShadow:
                        activeStep === index || hoveredStep === index
                          ? `0 0 20px ${step.color}`
                          : `0 0 10px ${step.color}66`,
                    }}
                  />

                  {/* Connecting lines */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute top-5 left-1/2 transform -translate-x-1/2 w-px h-16 lg:h-20"
                      style={{
                        background: `linear-gradient(to bottom, ${step.color}, ${steps[index + 1].color})`,
                      }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    />
                  )}
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Expanded Details */}
        <AnimatePresence>
          {activeStep !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mt-8"
            >
              <div className="glass rounded-2xl p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {steps[activeStep].details.map((detail, idx) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-white/5"
                    >
                      <CheckCircle2
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: steps[activeStep].color }}
                      />
                      <span className="text-sm text-zinc-300">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.p
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-sm text-zinc-500 inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            Click any step to explore details
            <Sparkles className="w-4 h-4 text-purple-400" />
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
