// components/sections/AIAgentsSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Headphones,
  Cog,
  BookOpen,
  Search,
  Network,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Brain,
  Cpu,
  Users,
  MessageSquare,
  Database,
  FileText,
  Globe,
  GitBranch,
  Layers,
  Workflow,
  Terminal,
  Shield,
  Activity,
  Gauge,
  TrendingUp,
  Star,
  ChevronRight,
  X,
  ArrowUpRight,
  Target,
  Mail,
  Calendar,
  BarChart3,
  Filter,
  ClipboardList,
} from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

const agentCategories = [
  {
    id: "sales",
    name: "Sales Agents",
    icon: Bot,
    description: "Intelligent agents that drive revenue and convert leads",
    agents: [
      {
        name: "Lead Engagement",
        icon: Target,
        description: "Proactive outreach",
      },
      {
        name: "Qualification",
        icon: Filter,
        description: "Smart lead scoring",
      },
      {
        name: "Conversation",
        icon: MessageSquare,
        description: "Personalized talks",
      },
      { name: "CRM Sync", icon: Database, description: "Automatic updates" },
      {
        name: "Scheduling",
        icon: Calendar,
        description: "Appointment booking",
      },
    ],
    metrics: [
      { label: "Conversion", value: "+35%" },
      { label: "Response", value: "< 1min" },
    ],
  },
  {
    id: "support",
    name: "Support Agents",
    icon: Headphones,
    description: "24/7 customer support that resolves issues instantly",
    agents: [
      {
        name: "Support Assistant",
        icon: MessageSquare,
        description: "24/7 assistance",
      },
      { name: "Knowledge", icon: BookOpen, description: "Instant retrieval" },
      { name: "Ticket Creation", icon: FileText, description: "Auto tickets" },
      { name: "Account Lookup", icon: Users, description: "Order access" },
      { name: "Escalation", icon: GitBranch, description: "Smart routing" },
    ],
    metrics: [
      { label: "Resolution", value: "+45%" },
      { label: "Response", value: "Instant" },
    ],
  },
  {
    id: "operations",
    name: "Operations Agents",
    icon: Cog,
    description: "Automate back-office tasks and workflows",
    agents: [
      {
        name: "Email Processing",
        icon: Mail,
        description: "Auto email handling",
      },
      {
        name: "Data Extraction",
        icon: FileText,
        description: "Smart extraction",
      },
      { name: "Task Creation", icon: CheckCircle2, description: "Auto tasks" },
      {
        name: "Database Updates",
        icon: Database,
        description: "Real-time sync",
      },
      {
        name: "Report Generation",
        icon: BarChart3,
        description: "Auto reports",
      },
    ],
    metrics: [
      { label: "Efficiency", value: "+60%" },
      { label: "Accuracy", value: "99.5%" },
    ],
  },
  {
    id: "knowledge",
    name: "Knowledge Agents",
    icon: BookOpen,
    description: "Make company information accessible",
    agents: [
      {
        name: "Knowledge Base",
        icon: Database,
        description: "Company knowledge",
      },
      { name: "Document Search", icon: FileText, description: "Smart search" },
      {
        name: "SOP Automation",
        icon: ClipboardList,
        description: "Procedures",
      },
      {
        name: "Policy Compliance",
        icon: Shield,
        description: "Policy enforcement",
      },
      { name: "RAG Search", icon: Search, description: "AI-powered search" },
    ],
    metrics: [
      { label: "Accuracy", value: "99%" },
      { label: "Speed", value: "< 2sec" },
    ],
  },
  {
    id: "research",
    name: "Research Agents",
    icon: Search,
    description: "Gather, analyze, and synthesize information",
    agents: [
      { name: "Web Research", icon: Globe, description: "Auto research" },
      {
        name: "Data Collection",
        icon: Database,
        description: "Multi-source data",
      },
      { name: "Analysis", icon: Brain, description: "AI analysis" },
      { name: "Report Creation", icon: FileText, description: "Auto reports" },
    ],
    metrics: [
      { label: "Speed", value: "10x" },
      { label: "Sources", value: "100+" },
    ],
  },
  {
    id: "multi-agent",
    name: "Multi-Agent Systems",
    icon: Network,
    description: "Orchestrated systems of agents",
    agents: [
      { name: "Orchestrator", icon: Cpu, description: "Agent coordination" },
      { name: "Tool Integration", icon: Terminal, description: "Tool usage" },
      { name: "Workflow", icon: Workflow, description: "Inter-agent flows" },
      { name: "Human-in-Loop", icon: Users, description: "Human oversight" },
    ],
    metrics: [
      { label: "Agents", value: "Unlimited" },
      { label: "Scale", value: "Enterprise" },
    ],
  },
];

export default function AIAgentsSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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
            <span className="text-sm text-white/80">AI AGENT ECOSYSTEM</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Meet your </span>
            <span style={{ color: PRIMARY }}>AI workforce.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Hover over any agent category to explore its capabilities.
          </p>
        </motion.div>

        {/* Overlapping Folder Cards with Hover Flip */}
        <div className="hidden lg:flex justify-center items-start">
          {agentCategories.map((category, index) => {
            const isHovered = hoveredCard === category.id;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative"
                style={{
                  zIndex: isHovered ? 100 : 50 - index,
                  marginLeft: index !== 0 ? "-25px" : "0",
                  marginTop: index * 4,
                }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <motion.div
                  animate={{
                    scale: isHovered ? 1.1 : 1,
                    y: isHovered ? -15 : 0,
                    rotateY: isHovered ? 180 : 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    rotateY: { duration: 0.6, ease: "easeInOut" },
                  }}
                  className="relative cursor-pointer"
                  style={{
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front Face */}
                  <div
                    className="relative w-[200px] h-[320px] p-5 rounded-b-xl rounded-tr-xl overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      background: "rgba(15, 15, 22, 0.95)",
                      border: `1px solid ${isHovered ? PRIMARY_LIGHT : PRIMARY_DARK}`,
                      boxShadow: isHovered
                        ? `0 20px 60px ${PRIMARY_GLOW}`
                        : `0 10px 30px rgba(0, 0, 0, 0.3)`,
                    }}
                  >
                    {/* Folder Tab */}
                    <div
                      className="absolute top-0 left-5 w-20 h-3.5 rounded-b-lg"
                      style={{
                        background: PRIMARY,
                        opacity: isHovered ? 0.5 : 0.3,
                      }}
                    />

                    <div className="relative h-full flex flex-col items-center justify-center">
                      <motion.div
                        animate={isHovered ? { rotate: 360, scale: 1.1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-xl"
                        style={{
                          background: PRIMARY_DARK,
                          border: `1px solid ${PRIMARY_LIGHT}`,
                        }}
                      >
                        <category.icon
                          className="w-7 h-7"
                          style={{ color: PRIMARY }}
                        />
                      </motion.div>

                      <h3 className="text-center font-bold text-base mb-2 text-white">
                        {category.name}
                      </h3>
                      <p className="text-center text-[11px] text-white/60 mb-4 leading-relaxed">
                        {category.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-4 w-full">
                        {category.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="text-center p-2 rounded-lg"
                            style={{ background: PRIMARY_DARK }}
                          >
                            <p
                              className="text-sm font-bold"
                              style={{ color: PRIMARY }}
                            >
                              {metric.value}
                            </p>
                            <p className="text-[9px] text-white/50">
                              {metric.label}
                            </p>
                          </div>
                        ))}
                      </div>

                      <span
                        className="text-[10px] uppercase tracking-wider"
                        style={{ color: PRIMARY }}
                      >
                        {category.agents.length} Agents
                      </span>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div
                    className="absolute inset-0 w-[200px] h-[320px] p-4 rounded-b-xl rounded-tr-xl overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      WebkitBackfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: `linear-gradient(135deg, ${PRIMARY_DARK}, rgba(10, 10, 15, 0.95))`,
                      border: `1px solid ${PRIMARY_LIGHT}`,
                      boxShadow: `0 0 30px ${PRIMARY_GLOW}`,
                    }}
                  >
                    {/* Folder Tab */}
                    <div
                      className="absolute top-0 left-5 w-20 h-3.5 rounded-b-lg"
                      style={{ background: PRIMARY, opacity: 0.5 }}
                    />

                    <div className="relative h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-center gap-2 mb-3">
                        <div
                          className="p-1.5 rounded-lg flex-shrink-0"
                          style={{
                            background: PRIMARY_DARK,
                            border: `1px solid ${PRIMARY_LIGHT}`,
                          }}
                        >
                          <category.icon
                            className="w-4 h-4"
                            style={{ color: PRIMARY }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-sm text-white">
                            {category.name}
                          </h3>
                        </div>
                      </div>

                      {/* Agents List */}
                      <div className="flex-1 space-y-1.5">
                        {category.agents.map((agent, agentIndex) => (
                          <motion.div
                            key={agent.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 0.2 + agentIndex * 0.05,
                            }}
                            className="flex items-center gap-2 p-2 rounded-lg"
                            style={{
                              background: PRIMARY_DARK,
                              border: `1px solid ${PRIMARY_LIGHT}`,
                            }}
                          >
                            <agent.icon
                              className="w-3.5 h-3.5 flex-shrink-0"
                              style={{ color: PRIMARY }}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-[11px] font-semibold text-white truncate">
                                {agent.name}
                              </p>
                              <p className="text-[9px] text-white/50 truncate">
                                {agent.description}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* CTA */}
                      <motion.a
                        href="/contact"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-2 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-white text-[10px] font-medium transition-all hover:scale-105"
                        style={{
                          backgroundColor: PRIMARY,
                          boxShadow: `0 5px 15px ${PRIMARY_GLOW}`,
                        }}
                      >
                        Deploy
                        <ArrowRight className="w-3 h-3" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-4">
          {agentCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                animate={{ rotateY: hoveredCard === category.id ? 180 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-full h-[320px] cursor-pointer"
                style={{ transformStyle: "preserve-3d" }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() =>
                  setHoveredCard(
                    hoveredCard === category.id ? null : category.id,
                  )
                }
              >
                {/* Front Face */}
                <div
                  className="absolute inset-0 rounded-2xl p-5"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    background: "rgba(15, 15, 22, 0.95)",
                    border: `1px solid ${PRIMARY_DARK}`,
                  }}
                >
                  <div className="h-full flex flex-col items-center justify-center">
                    <div
                      className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-xl"
                      style={{
                        background: PRIMARY_DARK,
                        border: `1px solid ${PRIMARY_LIGHT}`,
                      }}
                    >
                      <category.icon
                        className="w-7 h-7"
                        style={{ color: PRIMARY }}
                      />
                    </div>
                    <h3 className="text-center font-bold text-base mb-2 text-white">
                      {category.name}
                    </h3>
                    <p className="text-center text-[11px] text-white/60 mb-4">
                      {category.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-4 w-full max-w-[200px]">
                      {category.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="text-center p-2 rounded-lg"
                          style={{ background: PRIMARY_DARK }}
                        >
                          <p
                            className="text-sm font-bold"
                            style={{ color: PRIMARY }}
                          >
                            {metric.value}
                          </p>
                          <p className="text-[9px] text-white/50">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <span
                      className="text-[10px] uppercase tracking-wider"
                      style={{ color: PRIMARY }}
                    >
                      {category.agents.length} Agents
                    </span>
                  </div>
                </div>

                {/* Back Face */}
                <div
                  className="absolute inset-0 rounded-2xl p-4"
                  style={{
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    background: `linear-gradient(135deg, ${PRIMARY_DARK}, rgba(10, 10, 15, 0.95))`,
                    border: `1px solid ${PRIMARY_LIGHT}`,
                  }}
                >
                  <div className="h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="p-1.5 rounded-lg"
                        style={{ background: PRIMARY_DARK }}
                      >
                        <category.icon
                          className="w-4 h-4"
                          style={{ color: PRIMARY }}
                        />
                      </div>
                      <h3 className="font-bold text-sm text-white">
                        {category.name}
                      </h3>
                    </div>
                    <div className="flex-1 space-y-1.5">
                      {category.agents.map((agent) => (
                        <div
                          key={agent.name}
                          className="flex items-center gap-2 p-2 rounded-lg"
                          style={{
                            background: PRIMARY_DARK,
                            border: `1px solid ${PRIMARY_LIGHT}`,
                          }}
                        >
                          <agent.icon
                            className="w-3.5 h-3.5 flex-shrink-0"
                            style={{ color: PRIMARY }}
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] font-semibold text-white truncate">
                              {agent.name}
                            </p>
                            <p className="text-[9px] text-white/50 truncate">
                              {agent.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs"
        >
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-white/60">ALL AGENTS OPERATIONAL</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-2">
            <Workflow className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-white/60">MULTI-AGENT ORCHESTRATION</span>
          </div>
          <span className="text-white/20">•</span>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-white/60">ENTERPRISE SECURITY</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
