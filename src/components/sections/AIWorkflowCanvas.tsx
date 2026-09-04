// components/sections/AIWorkflowCanvas.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Brain,
  Database,
  Mail,
  FileText,
  Globe,
  Cpu,
  Play,
  X,
  Sparkles,
  CheckCircle2,
  Filter,
  Users,
  BarChart3,
  Webhook,
  Bot,
  Target,
  type LucideIcon,
} from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

interface WorkflowNode {
  id: string;
  type:
    | "trigger"
    | "ai-agent"
    | "ai-process"
    | "data"
    | "action"
    | "logic"
    | "output";
  label: string;
  icon: LucideIcon;
  x: number;
  y: number;
  status: "idle" | "processing" | "completed";
  connections: string[];
  description: string;
  metrics?: {
    speed?: string;
    accuracy?: string;
  };
}

const initialNodes: WorkflowNode[] = [
  // Row 1 - Triggers
  {
    id: "webhook",
    type: "trigger",
    label: "Webhook",
    icon: Webhook,
    x: 100,
    y: 80,
    status: "idle",
    connections: ["ai-agent-1"],
    description: "Receives real-time data from external sources",
    metrics: { speed: "Instant", accuracy: "100%" },
  },
  {
    id: "email-trigger",
    type: "trigger",
    label: "Email",
    icon: Mail,
    x: 100,
    y: 220,
    status: "idle",
    connections: ["ai-agent-1"],
    description: "Triggers workflow from incoming emails",
    metrics: { speed: "Real-time", accuracy: "100%" },
  },
  {
    id: "form-trigger",
    type: "trigger",
    label: "Form",
    icon: FileText,
    x: 100,
    y: 360,
    status: "idle",
    connections: ["ai-agent-1"],
    description: "Triggers from form submissions",
    metrics: { speed: "Instant", accuracy: "100%" },
  },
  {
    id: "api-trigger",
    type: "trigger",
    label: "API Call",
    icon: Globe,
    x: 100,
    y: 500,
    status: "idle",
    connections: ["ai-agent-1"],
    description: "Triggers from external API calls",
    metrics: { speed: "Instant", accuracy: "100%" },
  },

  // Row 2 - AI Agents
  {
    id: "ai-agent-1",
    type: "ai-agent",
    label: "Primary AI Agent",
    icon: Bot,
    x: 400,
    y: 150,
    status: "idle",
    connections: ["ai-process", "database", "classification"],
    description:
      "Autonomous AI agent that analyzes and routes tasks intelligently",
    metrics: { speed: "< 50ms", accuracy: "99.9%" },
  },
  {
    id: "classification",
    type: "ai-process",
    label: "Classifier",
    icon: Target,
    x: 400,
    y: 350,
    status: "idle",
    connections: ["filter"],
    description: "Classifies and categorizes incoming requests",
    metrics: { speed: "Real-time", accuracy: "98.5%" },
  },

  // Row 3 - Processing
  {
    id: "ai-process",
    type: "ai-process",
    label: "NLP Analysis",
    icon: Brain,
    x: 700,
    y: 80,
    status: "idle",
    connections: ["filter"],
    description: "Natural language processing for intent analysis",
    metrics: { speed: "Real-time", accuracy: "98.5%" },
  },
  {
    id: "database",
    type: "data",
    label: "Vector DB",
    icon: Database,
    x: 700,
    y: 220,
    status: "idle",
    connections: ["ai-agent-2"],
    description: "Stores and retrieves embeddings",
    metrics: { speed: "10ms", accuracy: "100%" },
  },
  {
    id: "filter",
    type: "logic",
    label: "Smart Filter",
    icon: Filter,
    x: 700,
    y: 360,
    status: "idle",
    connections: ["ai-agent-2"],
    description: "Routes requests based on priority",
    metrics: { speed: "< 5ms", accuracy: "99.99%" },
  },

  // Row 4 - Actions
  {
    id: "ai-agent-2",
    type: "ai-agent",
    label: "Agent Orchestrator",
    icon: Cpu,
    x: 1000,
    y: 150,
    status: "idle",
    connections: ["email-action", "notification", "analytics"],
    description: "Coordinates multiple AI agents",
    metrics: { speed: "Parallel", accuracy: "99.99%" },
  },
  {
    id: "email-action",
    type: "action",
    label: "Auto Email",
    icon: Mail,
    x: 1000,
    y: 320,
    status: "idle",
    connections: ["analytics"],
    description: "Generates personalized emails",
    metrics: { speed: "< 1s", accuracy: "99.5%" },
  },
  {
    id: "notification",
    type: "action",
    label: "Team Alert",
    icon: Users,
    x: 1000,
    y: 460,
    status: "idle",
    connections: ["analytics"],
    description: "Notifies team members",
    metrics: { speed: "Instant", accuracy: "100%" },
  },

  // Row 5 - Output
  {
    id: "analytics",
    type: "output",
    label: "Analytics Hub",
    icon: BarChart3,
    x: 1300,
    y: 250,
    status: "idle",
    connections: [],
    description: "Collects metrics and insights",
    metrics: { speed: "Real-time", accuracy: "100%" },
  },
];

// Define all paths in the workflow
const workflowPaths = [
  [
    "webhook",
    "ai-agent-1",
    "ai-process",
    "filter",
    "ai-agent-2",
    "email-action",
    "analytics",
  ],
  [
    "email-trigger",
    "ai-agent-1",
    "database",
    "ai-agent-2",
    "notification",
    "analytics",
  ],
  [
    "form-trigger",
    "ai-agent-1",
    "classification",
    "filter",
    "ai-agent-2",
    "email-action",
    "analytics",
  ],
  [
    "api-trigger",
    "ai-agent-1",
    "ai-process",
    "filter",
    "ai-agent-2",
    "notification",
    "analytics",
  ],
];

export default function AIWorkflowCanvas() {
  const [nodes, setNodes] = useState<WorkflowNode[]>(initialNodes);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [activePathIndex, setActivePathIndex] = useState(0);
  const [flowProgress, setFlowProgress] = useState(0);
  const [activeNodes, setActiveNodes] = useState<string[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);

  // Animate continuous flow
  useEffect(() => {
    const currentPath = workflowPaths[activePathIndex];
    let currentNodeIndex = 0;

    const interval = setInterval(() => {
      if (currentNodeIndex >= currentPath.length) {
        setActivePathIndex((prev) => (prev + 1) % workflowPaths.length);
        currentNodeIndex = 0;
        setNodes((prev) => prev.map((n) => ({ ...n, status: "idle" })));
        setActiveNodes([]);
        setFlowProgress(0);
        return;
      }

      const currentNodeId = currentPath[currentNodeIndex];

      setNodes((prev) =>
        prev.map((n) => {
          if (n.id === currentNodeId) {
            return { ...n, status: "processing" };
          }
          if (
            currentNodeIndex > 0 &&
            n.id === currentPath[currentNodeIndex - 1]
          ) {
            return { ...n, status: "completed" };
          }
          return n;
        }),
      );

      setActiveNodes(currentPath.slice(0, currentNodeIndex + 1));
      setFlowProgress(((currentNodeIndex + 1) / currentPath.length) * 100);
      currentNodeIndex++;
    }, 800);

    return () => clearInterval(interval);
  }, [activePathIndex]);

  const getNodePosition = (nodeId: string) => {
    const node = nodes.find((n) => n.id === nodeId);
    return node ? { x: node.x, y: node.y } : null;
  };

  const isConnectionActive = (fromId: string, toId: string) => {
    const fromIndex = activeNodes.indexOf(fromId);
    const toIndex = activeNodes.indexOf(toId);
    return fromIndex !== -1 && toIndex !== -1 && toIndex === fromIndex + 1;
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, ${PRIMARY_DARK} 1px, transparent 1px)`,
              backgroundSize: "20px 20px",
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

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            style={{ border: `1px solid ${PRIMARY_DARK}` }}
          >
            <Bot className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-sm text-white/80">AI AGENT ORCHESTRATOR</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Intelligent </span>
            <span style={{ color: PRIMARY }}>Agent Workflow</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Watch AI agents collaborate and automate complex business processes
            in real-time.
          </p>
        </motion.div>

        {/* Workflow Canvas */}
        <div
          ref={canvasRef}
          className="relative glass rounded-3xl overflow-hidden"
          style={{ height: "700px", border: `1px solid ${PRIMARY_DARK}` }}
        >
          {/* Canvas Grid */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient
                id="coralFlowGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor={PRIMARY} stopOpacity="0.3" />
                <stop offset="50%" stopColor={PRIMARY} stopOpacity="1" />
                <stop offset="100%" stopColor={PRIMARY} stopOpacity="0.3" />
              </linearGradient>
              <filter id="coralGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {nodes.map((node) =>
              node.connections.map((targetId) => {
                const target = getNodePosition(targetId);
                if (!target) return null;

                const startX = node.x + 80;
                const startY = node.y + 40;
                const endX = target.x;
                const endY = target.y + 40;

                const controlX1 = startX + (endX - startX) * 0.5;
                const controlY1 = startY;
                const controlX2 = endX - (endX - startX) * 0.5;
                const controlY2 = endY;

                const path = `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`;
                const isActive = isConnectionActive(node.id, targetId);

                return (
                  <g key={`${node.id}-${targetId}`}>
                    {/* Base line */}
                    <path
                      d={path}
                      fill="none"
                      stroke={PRIMARY}
                      strokeWidth="2"
                      strokeOpacity="0.2"
                    />

                    {/* Active line */}
                    {isActive && (
                      <>
                        <motion.path
                          d={path}
                          fill="none"
                          stroke="url(#coralFlowGradient)"
                          strokeWidth="3"
                          filter="url(#coralGlow)"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                        />

                        {/* Flowing coral dots */}
                        {[0, 1, 2, 3].map((dotIndex) => (
                          <motion.circle
                            key={dotIndex}
                            r="5"
                            fill={PRIMARY}
                            filter="url(#coralGlow)"
                            initial={{ opacity: 0 }}
                            animate={{
                              opacity: [0, 1, 1, 0],
                            }}
                            transition={{
                              duration: 0.8,
                              repeat: Infinity,
                              ease: "linear",
                              delay: dotIndex * 0.2,
                            }}
                            style={{
                              offsetPath: `path('${path}')`,
                            }}
                          />
                        ))}
                      </>
                    )}
                  </g>
                );
              }),
            )}
          </svg>

          {/* Workflow Nodes */}
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              className="absolute cursor-pointer"
              style={{ left: node.x, top: node.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedNode(node.id)}
            >
              <div
                className="relative p-4 rounded-xl min-w-[160px]"
                style={{
                  background:
                    node.status === "processing"
                      ? PRIMARY_DARK
                      : "rgba(10,10,15,0.9)",
                  border: `2px solid ${PRIMARY_LIGHT}`,
                  boxShadow:
                    node.status === "processing"
                      ? `0 0 30px ${PRIMARY_GLOW}`
                      : `0 0 15px ${PRIMARY_DARK}`,
                  backdropFilter: "blur(10px)",
                }}
              >
                {/* Node Header */}
                <div className="flex items-center gap-3 mb-3">
                  <motion.div
                    animate={
                      node.status === "processing" ? { rotate: 360 } : {}
                    }
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="p-2 rounded-lg"
                    style={{
                      background: PRIMARY_DARK,
                      border: `1px solid ${PRIMARY_LIGHT}`,
                    }}
                  >
                    <node.icon className="w-6 h-6" style={{ color: PRIMARY }} />
                  </motion.div>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-white block">
                      {node.label}
                    </span>
                    <span className="text-xs text-white/40">{node.type}</span>
                  </div>
                </div>

                {/* Node Status Indicator */}
                <div className="flex items-center gap-2">
                  <motion.div
                    className="w-2 h-2 rounded-full"
                    style={{
                      background:
                        node.status === "processing"
                          ? PRIMARY
                          : node.status === "completed"
                            ? PRIMARY_LIGHT
                            : "#666",
                    }}
                    animate={
                      node.status === "processing" ? { scale: [1, 1.5, 1] } : {}
                    }
                    transition={{
                      duration: 0.5,
                      repeat: node.status === "processing" ? Infinity : 0,
                    }}
                  />
                  <span className="text-xs text-white/60">
                    {node.status === "processing"
                      ? "Processing..."
                      : node.status === "completed"
                        ? "Complete"
                        : "Ready"}
                  </span>
                </div>

                {/* AI Agent Badge */}
                {node.type === "ai-agent" && (
                  <div className="absolute -top-2 -right-2">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="p-1 rounded-full"
                      style={{ background: PRIMARY }}
                    >
                      <Sparkles className="w-3 h-3 text-white" />
                    </motion.div>
                  </div>
                )}

                {/* Connection Points */}
                <div
                  className="absolute -right-1.5 top-1/2 w-3 h-3 rounded-full border-2"
                  style={{ background: PRIMARY, borderColor: "#0a0a0f" }}
                />
                <div
                  className="absolute -left-1.5 top-1/2 w-3 h-3 rounded-full border-2"
                  style={{ background: PRIMARY, borderColor: "#0a0a0f" }}
                />
              </div>
            </motion.div>
          ))}

          {/* Selected Node Info */}
          <AnimatePresence>
            {selectedNode && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-4 right-4 z-20"
              >
                <div
                  className="glass rounded-xl p-6 max-w-sm"
                  style={{ border: `1px solid ${PRIMARY_DARK}` }}
                >
                  {(() => {
                    const node = nodes.find((n) => n.id === selectedNode);
                    if (!node) return null;

                    return (
                      <>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <motion.div
                              className="p-2 rounded-lg"
                              style={{
                                background: PRIMARY_DARK,
                                border: `1px solid ${PRIMARY_LIGHT}`,
                              }}
                            >
                              <node.icon
                                className="w-6 h-6"
                                style={{ color: PRIMARY }}
                              />
                            </motion.div>
                            <div>
                              <h4 className="font-semibold text-white">
                                {node.label}
                              </h4>
                              <p className="text-xs text-white/40">
                                {node.type}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => setSelectedNode(null)}
                            className="text-white/40 hover:text-white"
                          >
                            <X className="w-5 h-5" />
                          </button>
                        </div>

                        <p className="text-sm text-white/60 mb-4">
                          {node.description}
                        </p>

                        {node.metrics && (
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-white/40">Speed</span>
                              <span className="text-white font-medium">
                                {node.metrics.speed}
                              </span>
                            </div>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-white/40">Accuracy</span>
                              <span className="text-white font-medium">
                                {node.metrics.accuracy}
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="flex items-center gap-2 text-sm text-white/40">
                          <span>Connections:</span>
                          <span className="text-white font-medium">
                            {node.connections.length}
                          </span>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
