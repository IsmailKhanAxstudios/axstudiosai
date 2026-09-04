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

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We analyze your business and identify high-value automation opportunities.",
    duration: "Week 1",
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
              backgroundImage: `radial-gradient(circle, ${PRIMARY_DARK} 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: PRIMARY_DARK }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(255, 255, 255, 0.03)" }}
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
            style={{ border: `1px solid ${PRIMARY_DARK}` }}
          >
            <Workflow className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-sm text-white/80">OUR PROCESS</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-white">From idea to </span>
            <span style={{ color: PRIMARY }}>intelligent system.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A proven methodology for successful AI automation implementation.
          </p>
        </motion.div>

        {/* Interactive Process Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px">
            <motion.div
              className="w-full h-full"
              style={{
                background: `linear-gradient(180deg, ${PRIMARY}, ${PRIMARY_LIGHT}, #ffffff, ${PRIMARY_LIGHT}, ${PRIMARY})`,
                transformOrigin: "top",
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
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
                          ? `linear-gradient(135deg, ${PRIMARY_DARK}, rgba(235, 106, 80, 0.1))`
                          : "rgba(19, 19, 24, 0.7)",
                      border: `1px solid ${
                        activeStep === index || hoveredStep === index
                          ? PRIMARY_LIGHT
                          : PRIMARY_DARK
                      }`,
                      boxShadow:
                        activeStep === index || hoveredStep === index
                          ? `0 0 30px ${PRIMARY_GLOW}`
                          : "none",
                      backdropFilter: "blur(10px)",
                    }}
                    onClick={() =>
                      setActiveStep(activeStep === index ? null : index)
                    }
                  >
                    {/* Step Number */}
                    <div
                      className="absolute -top-3 -left-3 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold text-white"
                      style={{ background: PRIMARY }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Duration Badge */}
                    <div
                      className="absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-medium text-white"
                      style={{ background: PRIMARY }}
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
                        style={{
                          background: PRIMARY_DARK,
                          border: `1px solid ${PRIMARY_LIGHT}`,
                        }}
                      >
                        <step.icon
                          className="w-6 h-6"
                          style={{ color: PRIMARY }}
                        />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-white">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-white/60 mb-3">{step.description}</p>

                    {/* Metrics */}
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4" style={{ color: PRIMARY }} />
                        <span className="text-sm text-white/60">
                          {step.metrics.efficiency} Efficiency
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp
                          className="w-4 h-4"
                          style={{ color: PRIMARY }}
                        />
                        <span className="text-sm text-white/60">
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
                      background: PRIMARY,
                      boxShadow:
                        activeStep === index || hoveredStep === index
                          ? `0 0 20px ${PRIMARY_GLOW}`
                          : `0 0 10px ${PRIMARY_DARK}`,
                    }}
                  />

                  {/* Connecting lines */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute top-5 left-1/2 transform -translate-x-1/2 w-px h-16 lg:h-20"
                      style={{
                        background: `linear-gradient(to bottom, ${PRIMARY}, ${PRIMARY_LIGHT})`,
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
              <div
                className="glass rounded-2xl p-8"
                style={{ border: `1px solid ${PRIMARY_DARK}` }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  {steps[activeStep].details.map((detail, idx) => (
                    <motion.div
                      key={detail}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-xl"
                      style={{ background: PRIMARY_DARK }}
                    >
                      <CheckCircle2
                        className="w-5 h-5 flex-shrink-0"
                        style={{ color: PRIMARY }}
                      />
                      <span className="text-sm text-white/70">{detail}</span>
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
            className="text-sm text-white/40 inline-flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" style={{ color: PRIMARY }} />
            Click any step to explore details
            <Sparkles className="w-4 h-4" style={{ color: PRIMARY }} />
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
