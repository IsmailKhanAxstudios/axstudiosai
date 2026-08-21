// components/sections/UseCases.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Headphones,
  Target,
  Mail,
  BarChart3,
  FileText,
  Calendar,
  Database,
  BookOpen,
  Search,
  ShoppingCart,
  Megaphone,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  Zap,
  Brain,
  Cpu,
  Network,
  Shield,
  Star,
  TrendingUp,
  Clock,
  CheckCircle2,
  ChevronRight,
  Plus,
  X,
  Layers,
  Activity,
  Gauge,
  Rocket,
  Award,
  Lightbulb,
  Workflow,
  GitBranch,
  Terminal,
  Code2,
  Globe,
  Users,
  MessageSquare,
  ThumbsUp,
  LineChart,
  PieChart,
  Boxes,
  Command,
} from "lucide-react";

const useCases = [
  {
    icon: Bot,
    title: "AI Sales Agent",
    description: "Automated sales representative that engages leads 24/7",
    color: "#8b5cf6",
    gradient: "from-purple-500/20 to-purple-500/5",
    category: "Sales",
    metrics: { efficiency: "+40%", response: "< 1min" },
    features: [
      "Automated lead engagement",
      "Personalized conversations",
      "Meeting scheduling",
      "CRM integration",
    ],
  },
  {
    icon: Headphones,
    title: "AI Customer Support",
    description: "Intelligent support system operating around the clock",
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    category: "Support",
    metrics: { efficiency: "+60%", response: "Instant" },
    features: [
      "24/7 automated responses",
      "Multi-language support",
      "Ticket routing",
      "Knowledge base integration",
    ],
  },
  {
    icon: Target,
    title: "Lead Qualification",
    description: "Smart lead scoring and qualification system",
    color: "#10b981",
    gradient: "from-green-500/20 to-green-500/5",
    category: "Sales",
    metrics: { efficiency: "+50%", response: "Real-time" },
    features: [
      "Automated lead scoring",
      "Intent detection",
      "Priority routing",
      "CRM updates",
    ],
  },
  {
    icon: Mail,
    title: "AI Email Assistant",
    description: "Intelligent email handling and response system",
    color: "#f59e0b",
    gradient: "from-amber-500/20 to-amber-500/5",
    category: "Communication",
    metrics: { efficiency: "+45%", response: "< 5min" },
    features: [
      "Smart email categorization",
      "Automated responses",
      "Follow-up scheduling",
      "Spam filtering",
    ],
  },
  {
    icon: BarChart3,
    title: "Automated Reporting",
    description: "Real-time analytics and report generation",
    color: "#ec4899",
    gradient: "from-pink-500/20 to-pink-500/5",
    category: "Analytics",
    metrics: { efficiency: "+70%", response: "Automated" },
    features: [
      "Real-time dashboards",
      "Automated report generation",
      "Data visualization",
      "Insight extraction",
    ],
  },
  {
    icon: FileText,
    title: "Document Processing",
    description: "Automated document handling and extraction",
    color: "#6366f1",
    gradient: "from-indigo-500/20 to-indigo-500/5",
    category: "Operations",
    metrics: { efficiency: "+65%", response: "Instant" },
    features: [
      "OCR extraction",
      "Document classification",
      "Data validation",
      "Workflow automation",
    ],
  },
  {
    icon: Calendar,
    title: "Appointment Automation",
    description: "Smart scheduling and calendar management",
    color: "#14b8a6",
    gradient: "from-teal-500/20 to-teal-500/5",
    category: "Operations",
    metrics: { efficiency: "+55%", response: "24/7" },
    features: [
      "Automated scheduling",
      "Calendar sync",
      "Reminder system",
      "Rescheduling",
    ],
  },
  {
    icon: Database,
    title: "CRM Automation",
    description: "Seamless CRM integration and automation",
    color: "#f97316",
    gradient: "from-orange-500/20 to-orange-500/5",
    category: "Sales",
    metrics: { efficiency: "+50%", response: "Sync" },
    features: [
      "Contact management",
      "Activity tracking",
      "Pipeline automation",
      "Data enrichment",
    ],
  },
  {
    icon: BookOpen,
    title: "Knowledge Assistant",
    description: "Smart internal knowledge base and assistant",
    color: "#a855f7",
    gradient: "from-purple-500/20 to-purple-500/5",
    category: "Internal",
    metrics: { efficiency: "+45%", response: "Instant" },
    features: [
      "Smart search",
      "Context awareness",
      "Document indexing",
      "Team collaboration",
    ],
  },
  {
    icon: Search,
    title: "AI Research Agent",
    description: "Automated research and data collection",
    color: "#06b6d4",
    gradient: "from-cyan-500/20 to-cyan-500/5",
    category: "Research",
    metrics: { efficiency: "+75%", response: "Automated" },
    features: [
      "Web scraping",
      "Data aggregation",
      "Pattern recognition",
      "Report generation",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Automation",
    description: "Streamlined e-commerce operations",
    color: "#10b981",
    gradient: "from-green-500/20 to-green-500/5",
    category: "E-commerce",
    metrics: { efficiency: "+60%", response: "Automated" },
    features: [
      "Order processing",
      "Inventory sync",
      "Customer notifications",
      "Review management",
    ],
  },
  {
    icon: Megaphone,
    title: "Marketing Automation",
    description: "Automated marketing campaigns and workflows",
    color: "#ec4899",
    gradient: "from-pink-500/20 to-pink-500/5",
    category: "Marketing",
    metrics: { efficiency: "+55%", response: "Scheduled" },
    features: [
      "Campaign automation",
      "Content scheduling",
      "A/B testing",
      "Analytics tracking",
    ],
  },
];

const categories = [
  "All",
  ...Array.from(new Set(useCases.map((uc) => uc.category))),
];

export default function UseCases() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCase, setSelectedCase] = useState<number | null>(null);
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  const filteredCases =
    activeCategory === "All"
      ? useCases
      : useCases.filter((uc) => uc.category === activeCategory);

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
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-zinc-300">USE CASES</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Endless{" "}
            <span className="gradient-text">automation possibilities</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Explore how AI automation transforms different aspects of your
            business.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/25"
                  : "glass text-zinc-400 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Use Cases Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredCase(index)}
                onMouseLeave={() => setHoveredCase(null)}
                onClick={() =>
                  setSelectedCase(selectedCase === index ? null : index)
                }
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass rounded-2xl p-6 cursor-pointer transition-all duration-300"
                  style={{
                    background:
                      selectedCase === index || hoveredCase === index
                        ? `linear-gradient(135deg, ${useCase.color}15, ${useCase.color}05)`
                        : "rgba(19, 19, 24, 0.7)",
                    border: `1px solid ${useCase.color}${selectedCase === index || hoveredCase === index ? "66" : "33"}`,
                    boxShadow:
                      selectedCase === index || hoveredCase === index
                        ? `0 0 30px ${useCase.color}33`
                        : "none",
                  }}
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      animate={selectedCase === index ? { rotate: 360 } : {}}
                      transition={{ duration: 0.5 }}
                      className="p-3 rounded-xl"
                      style={{ background: `${useCase.color}22` }}
                    >
                      <useCase.icon
                        className="w-7 h-7"
                        style={{ color: useCase.color }}
                      />
                    </motion.div>
                    <ArrowUpRight className="w-5 h-5 text-zinc-600 group-hover:text-white transition-colors" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-zinc-400 mb-4">
                    {useCase.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp
                        className="w-4 h-4"
                        style={{ color: useCase.color }}
                      />
                      <span className="text-xs text-zinc-300">
                        {useCase.metrics.efficiency}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock
                        className="w-4 h-4"
                        style={{ color: useCase.color }}
                      />
                      <span className="text-xs text-zinc-300">
                        {useCase.metrics.response}
                      </span>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: `${useCase.color}22`,
                        color: useCase.color,
                      }}
                    >
                      {useCase.category}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${selectedCase === index ? "rotate-90" : ""}`}
                      style={{ color: useCase.color }}
                    />
                  </div>

                  {/* Expanded Features */}
                  <AnimatePresence>
                    {selectedCase === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 mt-4 border-t border-white/10">
                          <div className="space-y-2">
                            {useCase.features.map((feature, idx) => (
                              <motion.div
                                key={feature}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.2,
                                  delay: idx * 0.05,
                                }}
                                className="flex items-center gap-2 text-xs text-zinc-400"
                              >
                                <CheckCircle2
                                  className="w-3.5 h-3.5 flex-shrink-0"
                                  style={{ color: useCase.color }}
                                />
                                {feature}
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Zap, label: "12+ Use Cases", value: "Ready to deploy" },
            {
              icon: Gauge,
              label: "70% Efficiency",
              value: "Average improvement",
            },
            {
              icon: Clock,
              label: "24/7 Operation",
              value: "Non-stop automation",
            },
            { icon: TrendingUp, label: "3x ROI", value: "Typical return" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
              <div className="text-2xl font-bold mb-1">{stat.label}</div>
              <p className="text-sm text-zinc-400">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
