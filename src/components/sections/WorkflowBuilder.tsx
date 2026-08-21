// components/sections/WorkflowBuilder.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Brain,
  GitBranch,
  Cog,
  Trophy,
  X,
  Activity,
  Shield,
  Cpu,
  Network,
  ChevronRight,
  ArrowDown,
  CheckCircle2,
  Radio,
  Gauge,
  Layers,
  Terminal,
} from "lucide-react";

interface WorkflowStep {
  id: string;
  number: string;
  label: string;
  shortLabel: string;
  icon: any;
  color: string;
  glowColor: string;
  status: string;
  description: string;
  details: string[];
  metrics: {
    label: string;
    value: string;
  }[];
}

const workflowSteps: WorkflowStep[] = [
  {
    id: "trigger",
    number: "01",
    label: "Trigger",
    shortLabel: "Event detected",
    icon: Zap,
    color: "#8b5cf6",
    glowColor: "rgba(139, 92, 246, 0.6)",
    status: "STANDBY",
    description:
      "An event enters the system and activates the automation sequence.",
    details: [
      "New lead captured",
      "Email received",
      "Form submitted",
      "Scheduled event",
      "API webhook",
    ],
    metrics: [
      { label: "Latency", value: "< 50ms" },
      { label: "Sources", value: "25+" },
    ],
  },
  {
    id: "ai-processing",
    number: "02",
    label: "AI Engine",
    shortLabel: "Analyze + understand",
    icon: Brain,
    color: "#06b6d4",
    glowColor: "rgba(6, 182, 212, 0.6)",
    status: "AI ACTIVE",
    description:
      "AI interprets incoming information, understands intent, extracts relevant data, and determines what matters.",
    details: [
      "Natural language understanding",
      "Intent classification",
      "Entity extraction",
      "Sentiment analysis",
      "Content generation",
    ],
    metrics: [
      { label: "Accuracy", value: "99.2%" },
      { label: "Models", value: "12+" },
    ],
  },
  {
    id: "decision",
    number: "03",
    label: "Decision",
    shortLabel: "Determine next action",
    icon: GitBranch,
    color: "#10b981",
    glowColor: "rgba(16, 185, 129, 0.6)",
    status: "PROCESSING",
    description:
      "The intelligence layer evaluates information and determines the optimal next action.",
    details: [
      "Conditional branching",
      "Priority routing",
      "Risk assessment",
      "Eligibility checking",
      "Approval workflows",
    ],
    metrics: [
      { label: "Decisions/s", value: "1,200" },
      { label: "Accuracy", value: "99.5%" },
    ],
  },
  {
    id: "automation",
    number: "04",
    label: "Execution",
    shortLabel: "Automate the task",
    icon: Cog,
    color: "#f59e0b",
    glowColor: "rgba(245, 158, 11, 0.6)",
    status: "EXECUTING",
    description:
      "The system executes the selected action across connected tools and infrastructure.",
    details: [
      "CRM updates",
      "Email delivery",
      "Task creation",
      "Database updates",
      "Webhook execution",
    ],
    metrics: [
      { label: "Actions/s", value: "800" },
      { label: "Success", value: "99.9%" },
    ],
  },
  {
    id: "result",
    number: "05",
    label: "Result",
    shortLabel: "Measure outcome",
    icon: Trophy,
    color: "#ec4899",
    glowColor: "rgba(236, 72, 153, 0.6)",
    status: "COMPLETED",
    description:
      "The outcome is recorded, measured, and delivered to the relevant stakeholders.",
    details: [
      "Analytics",
      "Notifications",
      "Reports",
      "Performance metrics",
      "Audit logs",
    ],
    metrics: [
      { label: "Reports", value: "Real-time" },
      { label: "Tracking", value: "100%" },
    ],
  },
];

export default function WorkflowBuilder() {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const selectedDetails = workflowSteps.find(
    (step) => step.id === selectedStep,
  );

  const selectedIndex = workflowSteps.findIndex(
    (step) => step.id === selectedStep,
  );

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern */}
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

        {/* Ambient Glows */}
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, transparent 70%)",
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
          {/* Status Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass mb-6"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span className="text-xs font-medium tracking-wider text-zinc-300">
              AUTOMATION ENGINE ONLINE
            </span>
            <span className="text-xs text-zinc-600">|</span>
            <span className="text-xs text-zinc-500">5 ACTIVE NODES</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Your workflow.{" "}
            <span className="gradient-text">
              Re-engineered by intelligence.
            </span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            We don&apos;t just build automations. We engineer autonomous systems
            that understand, decide, and execute — in real time.
          </p>
        </motion.div>

        {/* Workflow Container */}
        <div className="relative">
          {/* Desktop Horizontal Layout */}
          <div className="hidden lg:block">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2 h-px">
              <motion.div
                className="w-full h-full"
                style={{
                  background:
                    "linear-gradient(90deg, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ec4899)",
                }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </div>

            {/* Animated Data Particles */}
            <div className="absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2">
              {[0, 1, 2, 3, 4].map((particle) => (
                <motion.div
                  key={particle}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: "#10b981",
                    boxShadow: "0 0 10px #10b981",
                  }}
                  animate={{
                    left: ["0%", "100%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: particle * 0.6,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Nodes */}
            <div className="relative flex justify-between items-center">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className="relative flex-1 flex justify-center"
                >
                  {/* Node Button */}
                  <motion.button
                    onClick={() =>
                      setSelectedStep(selectedStep === step.id ? null : step.id)
                    }
                    onMouseEnter={() => setHoveredStep(step.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`View ${step.label} details`}
                    className="relative group"
                  >
                    {/* Glow Effect */}
                    <motion.div
                      className="absolute -inset-4 rounded-2xl blur-xl"
                      style={{ background: step.glowColor }}
                      animate={{
                        opacity:
                          selectedStep === step.id || hoveredStep === step.id
                            ? 0.5
                            : 0.15,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Node Card */}
                    <div
                      className="relative w-40 p-5 rounded-2xl transition-all duration-300"
                      style={{
                        background:
                          selectedStep === step.id
                            ? `linear-gradient(135deg, ${step.color}22, ${step.color}08)`
                            : "rgba(10, 10, 15, 0.9)",
                        border: `1px solid ${step.color}${
                          selectedStep === step.id || hoveredStep === step.id
                            ? "88"
                            : "33"
                        }`,
                        boxShadow:
                          selectedStep === step.id || hoveredStep === step.id
                            ? `0 0 30px ${step.color}44`
                            : `0 0 10px ${step.color}11`,
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      {/* Step Number */}
                      <div
                        className="absolute -top-3 -left-2 text-xs font-mono px-2 py-1 rounded"
                        style={{
                          background: step.color,
                          color: "white",
                        }}
                      >
                        {step.number}
                      </div>

                      {/* Status Indicator */}
                      <div className="absolute -top-2 -right-2 flex items-center gap-1">
                        <span className="relative flex h-2 w-2">
                          <span
                            className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                            style={{ background: step.color }}
                          ></span>
                          <span
                            className="relative inline-flex rounded-full h-2 w-2"
                            style={{ background: step.color }}
                          ></span>
                        </span>
                      </div>

                      {/* Icon */}
                      <motion.div
                        animate={
                          selectedStep === step.id
                            ? { rotate: 360 }
                            : hoveredStep === step.id
                              ? { scale: 1.1 }
                              : {}
                        }
                        transition={
                          selectedStep === step.id
                            ? { duration: 2, repeat: Infinity, ease: "linear" }
                            : { duration: 0.3 }
                        }
                        className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-xl"
                        style={{ background: `${step.color}22` }}
                      >
                        <step.icon
                          className="w-6 h-6"
                          style={{ color: step.color }}
                        />
                      </motion.div>

                      {/* Label */}
                      <div className="text-center">
                        <p className="text-sm font-semibold text-white mb-1">
                          {step.label}
                        </p>
                        <p className="text-[10px] text-zinc-500 uppercase tracking-wider">
                          {step.status}
                        </p>
                      </div>
                    </div>
                  </motion.button>

                  {/* Arrow Connector */}
                  {index < workflowSteps.length - 1 && (
                    <motion.div
                      className="absolute top-1/2 -right-2 -translate-y-1/2 z-10"
                      animate={
                        selectedStep === step.id ||
                        selectedStep === workflowSteps[index + 1].id
                          ? { x: [0, 5, 0] }
                          : {}
                      }
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ChevronRight
                        className="w-5 h-5"
                        style={{ color: step.color }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Vertical Layout */}
          <div className="lg:hidden">
            <div className="relative pl-8">
              {/* Vertical Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px">
                <motion.div
                  className="w-full h-full"
                  style={{
                    background:
                      "linear-gradient(180deg, #8b5cf6, #06b6d4, #10b981, #f59e0b, #ec4899)",
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </div>

              {/* Animated Data Particles */}
              <div className="absolute left-4 top-0 bottom-0">
                {[0, 1, 2, 3].map((particle) => (
                  <motion.div
                    key={particle}
                    className="absolute w-1.5 h-1.5 rounded-full left-1/2 -translate-x-1/2"
                    style={{
                      background: "#10b981",
                      boxShadow: "0 0 8px #10b981",
                    }}
                    animate={{
                      top: ["0%", "100%"],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      delay: particle,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))}
              </div>

              {/* Nodes */}
              <div className="space-y-4">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Center Dot */}
                    <div
                      className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full"
                      style={{
                        background: step.color,
                        boxShadow: `0 0 10px ${step.color}`,
                      }}
                    />

                    <motion.button
                      onClick={() =>
                        setSelectedStep(
                          selectedStep === step.id ? null : step.id,
                        )
                      }
                      whileTap={{ scale: 0.98 }}
                      aria-label={`View ${step.label} details`}
                      className="w-full text-left"
                    >
                      <div
                        className="p-4 rounded-xl transition-all duration-300"
                        style={{
                          background:
                            selectedStep === step.id
                              ? `linear-gradient(135deg, ${step.color}22, ${step.color}08)`
                              : "rgba(10, 10, 15, 0.9)",
                          border: `1px solid ${step.color}${
                            selectedStep === step.id ? "88" : "33"
                          }`,
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="p-2 rounded-lg flex-shrink-0"
                            style={{ background: `${step.color}22` }}
                          >
                            <step.icon
                              className="w-5 h-5"
                              style={{ color: step.color }}
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span
                                className="text-xs font-mono"
                                style={{ color: step.color }}
                              >
                                {step.number}
                              </span>
                              <p className="text-sm font-semibold text-white">
                                {step.label}
                              </p>
                            </div>
                            <p className="text-[10px] text-zinc-500 uppercase tracking-wider mt-0.5">
                              {step.status}
                            </p>
                          </div>
                          <ChevronRight
                            className={`w-4 h-4 transition-transform ${
                              selectedStep === step.id ? "rotate-90" : ""
                            }`}
                            style={{ color: step.color }}
                          />
                        </div>
                      </div>
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          {selectedDetails && (
            <motion.div
              key={selectedDetails.id}
              initial={{ opacity: 0, y: 20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden mt-8"
            >
              <div
                className="relative rounded-2xl p-6 lg:p-8 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${selectedDetails.color}10, ${selectedDetails.color}03)`,
                  border: `1px solid ${selectedDetails.color}44`,
                  boxShadow: `0 0 40px ${selectedDetails.color}22`,
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, white 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                <div className="relative">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="p-3 rounded-xl"
                        style={{ background: `${selectedDetails.color}22` }}
                      >
                        <selectedDetails.icon
                          className="w-7 h-7"
                          style={{ color: selectedDetails.color }}
                        />
                      </motion.div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span
                            className="text-xs font-mono"
                            style={{ color: selectedDetails.color }}
                          >
                            {selectedDetails.number}
                          </span>
                          <h4 className="text-xl font-bold text-white">
                            {selectedDetails.label}
                          </h4>
                        </div>
                        <p className="text-xs text-zinc-500 uppercase tracking-wider mt-1">
                          {selectedDetails.status}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedStep(null)}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      aria-label="Close details"
                    >
                      <X className="w-5 h-5 text-zinc-400" />
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-300 mb-6 text-base leading-relaxed">
                    {selectedDetails.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {selectedDetails.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-4 rounded-lg bg-white/5"
                      >
                        <p className="text-xs text-zinc-500 mb-1">
                          {metric.label}
                        </p>
                        <p
                          className="text-lg font-bold"
                          style={{ color: selectedDetails.color }}
                        >
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Details Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {selectedDetails.details.map((detail, index) => (
                      <motion.div
                        key={detail}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-center gap-2.5 p-3 rounded-lg bg-white/5"
                      >
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: selectedDetails.color }}
                        />
                        <span className="text-sm text-zinc-300">{detail}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Status Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs text-zinc-500"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-green-400" />
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </div>
          <span className="text-zinc-700">•</span>
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-purple-400" />
            <span>REAL-TIME PROCESSING</span>
          </div>
          <span className="text-zinc-700">•</span>
          <div className="flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>AUTONOMOUS EXECUTION</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
