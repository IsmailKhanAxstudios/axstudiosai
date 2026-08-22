// components/sections/AISystemsMaintenance.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Shield,
  TrendingUp,
  Wrench,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Zap,
  Brain,
  Eye,
  Gauge,
  Lightbulb,
  Rocket,
  Server,
  Monitor,
  HeartPulse,
  Bug,
  RefreshCw,
  Settings,
  LifeBuoy,
  FileText,
  Phone,
  MessageSquare,
  Bell,
  AlertTriangle,
  CheckCircle,
  Signal,
  Wifi,
  Cpu,
  Thermometer,
  Timer,
  Sparkles,
  ChevronRight,
  Plus,
  Minus,
  RotateCw,
  CircleDot,
  Waves,
  Orbit,
  Infinity as InfinityIcon,
  Hexagon,
  Circle,
  Triangle,
  Square,
  Diamond,
  Pentagon,
  Octagon,
} from "lucide-react";

const maintenanceCategories = [
  {
    id: "monitor",
    name: "Monitor",
    icon: Eye,
    color: "#8b5cf6",
    pulse: "72 BPM",
    description: "Real-time monitoring of your AI systems",
    items: ["Workflow Monitoring", "System Health", "Error Monitoring"],
  },
  {
    id: "maintain",
    name: "Maintain",
    icon: Wrench,
    color: "#06b6d4",
    pulse: "60 BPM",
    description: "Keep your systems running smoothly",
    items: ["Bug Fixes", "Integration Maintenance", "System Updates"],
  },
  {
    id: "optimize",
    name: "Optimize",
    icon: TrendingUp,
    color: "#10b981",
    pulse: "85 BPM",
    description: "Enhance performance and efficiency",
    items: [
      "AI Performance",
      "Prompt Optimization",
      "Workflow Optimization",
      "Cost Optimization",
    ],
  },
  {
    id: "improve",
    name: "Improve",
    icon: Rocket,
    color: "#f59e0b",
    pulse: "90 BPM",
    description: "Continuous enhancement of capabilities",
    items: [
      "New Automations",
      "New AI Capabilities",
      "Performance Enhancements",
    ],
  },
  {
    id: "support",
    name: "Support",
    icon: Headphones,
    color: "#ec4899",
    pulse: "75 BPM",
    description: "Dedicated support when you need it",
    items: [
      "Technical Support",
      "Troubleshooting",
      "Monthly Reporting",
      "Ongoing Consultation",
    ],
  },
];

export default function AISystemsMaintenance() {
  const [activeCategory, setActiveCategory] = useState<string>("monitor");
  const [hoveredShape, setHoveredShape] = useState<string | null>(null);

  const selectedCategory =
    maintenanceCategories.find((cat) => cat.id === activeCategory) ||
    maintenanceCategories[0];

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
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
          >
            <HeartPulse className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-zinc-300">
              AI SYSTEMS MAINTENANCE
            </span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
            Keeping your AI{" "}
            <span className="gradient-text">alive and thriving.</span>
          </h2>
        </motion.div>

        {/* Living System Visualization */}
        <div className="relative">
          {/* Central Pulse Ring */}
          <div className="relative flex items-center justify-center mb-12">
            {/* Expanding pulse rings */}
            {[0, 1, 2].map((ring) => (
              <motion.div
                key={ring}
                className="absolute w-40 h-40 rounded-full border"
                style={{
                  borderColor: `${selectedCategory.color}33`,
                  animation: `pulse-ring ${3 + ring}s ease-out infinite`,
                  animationDelay: `${ring}s`,
                }}
              />
            ))}

            {/* Central Core */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                background: `conic-gradient(from 0deg, ${selectedCategory.color}, transparent, ${selectedCategory.color})`,
                boxShadow: `0 0 30px ${selectedCategory.color}44`,
              }}
            >
              <div className="w-20 h-20 rounded-full bg-[#0a0a0f] flex items-center justify-center">
                <selectedCategory.icon
                  className="w-8 h-8"
                  style={{ color: selectedCategory.color }}
                />
              </div>
            </motion.div>

            {/* Orbital shapes */}
            {maintenanceCategories.map((category, index) => {
              const angle = (index * 360) / maintenanceCategories.length;
              const radians = (angle * Math.PI) / 180;
              const x = 50 + 42 * Math.cos(radians);
              const y = 50 + 42 * Math.sin(radians);
              const isActive = activeCategory === category.id;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  onMouseEnter={() => setHoveredShape(category.id)}
                  onMouseLeave={() => setHoveredShape(null)}
                  className="absolute z-20"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    scale: isActive
                      ? 1.3
                      : hoveredShape === category.id
                        ? 1.15
                        : 1,
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {/* Orbiting dot */}
                  <motion.div
                    className="w-3 h-3 rounded-full"
                    style={{
                      background: category.color,
                      boxShadow: `0 0 10px ${category.color}`,
                    }}
                    animate={{
                      scale: isActive ? [1, 1.5, 1] : 1,
                    }}
                    transition={{
                      duration: 1,
                      repeat: isActive ? Infinity : 0,
                    }}
                  />
                </motion.button>
              );
            })}
          </div>

          {/* Category Cards - Overlapping Hexagons */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-2">
            {maintenanceCategories.map((category, index) => {
              const isActive = activeCategory === category.id;
              const isHovered = hoveredShape === category.id;

              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category.id)}
                  onMouseEnter={() => setHoveredShape(category.id)}
                  onMouseLeave={() => setHoveredShape(null)}
                  className="relative flex-1 min-w-[140px] max-w-[200px]"
                  style={{
                    transform: isActive
                      ? `rotate(0deg) scale(1.05)`
                      : "rotate(0deg)",
                  }}
                >
                  {/* Card */}
                  <div
                    className="relative p-4 rounded-2xl transition-all duration-300"
                    style={{
                      background:
                        isActive || isHovered
                          ? `linear-gradient(135deg, ${category.color}15, ${category.color}05)`
                          : "rgba(15, 15, 22, 0.95)",
                      border: `1px solid ${category.color}${
                        isActive ? "88" : isHovered ? "44" : "22"
                      }`,
                      boxShadow:
                        isActive || isHovered
                          ? `0 0 20px ${category.color}33`
                          : "none",
                    }}
                  >
                    {/* Pulse indicator */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <motion.div
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: category.color }}
                          animate={{
                            scale: isActive ? [1, 1.5, 1] : 1,
                            opacity: isActive ? [1, 0.5, 1] : 0.5,
                          }}
                          transition={{
                            duration: 1,
                            repeat: isActive ? Infinity : 0,
                          }}
                        />
                        <span className="text-[9px] text-zinc-500">
                          {category.pulse}
                        </span>
                      </div>
                      <category.icon
                        className="w-4 h-4"
                        style={{ color: category.color }}
                      />
                    </div>

                    {/* Name */}
                    <h3 className="text-sm font-bold text-center mb-2">
                      {category.name}
                    </h3>

                    {/* Items count */}
                    <p className="text-[10px] text-zinc-500 text-center">
                      {category.items.length} services
                    </p>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Detail Panel - Expanding */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              <div
                className="relative rounded-2xl p-5 sm:p-6 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${selectedCategory.color}10, ${selectedCategory.color}03)`,
                  border: `1px solid ${selectedCategory.color}44`,
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="p-2.5 rounded-xl"
                    style={{
                      background: `${selectedCategory.color}22`,
                      border: `1px solid ${selectedCategory.color}44`,
                    }}
                  >
                    <selectedCategory.icon
                      className="w-6 h-6"
                      style={{ color: selectedCategory.color }}
                    />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-base">
                      {selectedCategory.name}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {selectedCategory.description}
                    </p>
                  </div>
                </div>

                {/* Items Flow */}
                <div className="flex flex-wrap gap-2">
                  {selectedCategory.items.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.06 }}
                      className="flex items-center gap-2 px-3 py-2 rounded-full text-xs"
                      style={{
                        background: `${selectedCategory.color}11`,
                        border: `1px solid ${selectedCategory.color}33`,
                      }}
                    >
                      <CheckCircle2
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={{ color: selectedCategory.color }}
                      />
                      <span className="text-zinc-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
            }}
          >
            <HeartPulse className="w-5 h-5" />
            Keep Your AI Healthy
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Pulse Ring Animation */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
