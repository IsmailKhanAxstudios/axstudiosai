// // components/sections/AIStrategyAudit.tsx
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Search,
//   BarChart3,
//   Target,
//   ListOrdered,
//   Map,
//   Flag,
//   Sparkles,
//   ArrowRight,
//   CheckCircle2,
//   Zap,
//   Brain,
//   Eye,
//   Filter,
//   TrendingUp,
//   Gauge,
//   Lightbulb,
//   Compass,
//   Route,
//   Trophy,
//   X,
//   ChevronRight,
//   Radar,
//   ScanSearch,
//   Microscope,
//   Focus,
//   Scale,
//   GitBranch,
//   Workflow,
//   FileSearch,
//   Telescope,
//   Crosshair,
//   ClipboardCheck,
//   MapPin,
//   Navigation,
//   Star,
//   Award,
//   Database,
//   Activity,
//   Shield,
//   Rocket,
// } from "lucide-react";

// const auditSteps = [
//   {
//     id: "discover",
//     step: "01",
//     name: "Discover",
//     icon: Telescope,
//     color: "#8b5cf6",
//     description: "Understand your business, systems, and workflows",
//     action: "Deep dive into your operations",
//     findings: [
//       "Current workflow mapping",
//       "System architecture review",
//       "Team interviews",
//       "Data flow analysis",
//     ],
//   },
//   {
//     id: "analyze",
//     step: "02",
//     name: "Analyze",
//     icon: Microscope,
//     color: "#06b6d4",
//     description: "Identify repetitive processes, bottlenecks, and inefficiencies",
//     action: "Forensic analysis of processes",
//     findings: [
//       "Process documentation",
//       "Bottleneck identification",
//       "Manual task inventory",
//       "Time-motion studies",
//     ],
//   },
//   {
//     id: "identify",
//     step: "03",
//     name: "Identify",
//     icon: Crosshair,
//     color: "#10b981",
//     description: "Find practical AI and automation opportunities",
//     action: "Spot automation potential",
//     findings: [
//       "AI opportunity mapping",
//       "Automation candidates",
//       "Quick wins identification",
//       "Long-term opportunities",
//     ],
//   },
//   {
//     id: "prioritize",
//     step: "04",
//     name: "Prioritize",
//     icon: Scale,
//     color: "#f59e0b",
//     description: "Rank opportunities based on impact, complexity, and ROI",
//     action: "Strategic ranking of opportunities",
//     findings: [
//       "Impact assessment",
//       "Complexity scoring",
//       "ROI calculation",
//       "Risk evaluation",
//     ],
//   },
//   {
//     id: "roadmap",
//     step: "05",
//     name: "Roadmap",
//     icon: Map,
//     color: "#ec4899",
//     description: "Create a clear implementation strategy",
//     action: "Build your automation roadmap",
//     findings: [
//       "Phased implementation plan",
//       "Timeline creation",
//       "Resource allocation",
//       "Milestone definition",
//     ],
//   },
//   {
//     id: "outcome",
//     step: "06",
//     name: "Outcome",
//     icon: Trophy,
//     color: "#6366f1",
//     description: "A practical plan showing where AI can create the most business value",
//     action: "Your AI advantage blueprint",
//     findings: [
//       "Executive summary",
//       "Priority recommendations",
//       "Financial projections",
//       "Implementation guide",
//     ],
//   },
// ];

// export default function AIStrategyAudit() {
//   const [activeStep, setActiveStep] = useState<string>("discover");
//   const [hoveredStep, setHoveredStep] = useState<string | null>(null);

//   const selectedStep =
//     auditSteps.find((step) => step.id === activeStep) || auditSteps[0];

//   return (
//     <section className="py-20 relative overflow-hidden">
//       {/* Background Effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 opacity-[0.03]">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
//               backgroundSize: "60px 60px",
//             }}
//           />
//         </div>
//         <motion.div
//           className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
//           }}
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
//           >
//             <Radar className="w-4 h-4 text-purple-400" />
//             <span className="text-sm text-zinc-300">AI STRATEGY & AUTOMATION AUDIT</span>
//           </motion.div>

//           <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
//             Discover your{" "}
//             <span className="gradient-text">automation potential.</span>
//           </h2>
//           <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
//             A systematic audit that reveals where AI can create the most value
//             for your business.
//           </p>
//         </motion.div>

//         {/* Investigation Board Layout */}
//         <div className="glass rounded-2xl overflow-hidden">
//           {/* Board Header */}
//           <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
//             <div className="flex items-center gap-2">
//               <FileSearch className="w-4 h-4 text-purple-400" />
//               <span className="text-sm font-medium text-zinc-300">
//                 Automation Audit Report
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="text-[10px] px-2 py-1 rounded-full bg-green-500/20 text-green-400">
//                 IN PROGRESS
//               </span>
//             </div>
//           </div>

//           <div className="flex flex-col lg:flex-row">
//             {/* Left Side - Step Timeline */}
//             <div className="lg:w-72 border-b lg:border-b-0 lg:border-r border-white/10 p-4">
//               <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-3 px-2">
//                 Investigation Steps
//               </div>
//               <div className="space-y-1.5">
//                 {auditSteps.map((step, index) => {
//                   const isActive = activeStep === step.id;
//                   const isHovered = hoveredStep === step.id;

//                   return (
//                     <motion.button
//                       key={step.id}
//                       whileHover={{ x: 3 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => setActiveStep(step.id)}
//                       onMouseEnter={() => setHoveredStep(step.id)}
//                       onMouseLeave={() => setHoveredStep(null)}
//                       className="relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-all"
//                       style={{
//                         background:
//                           isActive || isHovered
//                             ? `${step.color}11`
//                             : "transparent",
//                         border: `1px solid ${
//                           isActive ? step.color : "transparent"
//                         }`,
//                       }}
//                     >
//                       {/* Step Number */}
//                       <span
//                         className="text-xs font-mono font-bold"
//                         style={{ color: step.color }}
//                       >
//                         {step.step}
//                       </span>

//                       {/* Icon */}
//                       <motion.div
//                         animate={isActive ? { scale: 1.1 } : { scale: 1 }}
//                         className="p-1.5 rounded-lg flex-shrink-0"
//                         style={{ background: `${step.color}22` }}
//                       >
//                         <step.icon
//                           className="w-4 h-4"
//                           style={{ color: step.color }}
//                         />
//                       </motion.div>

//                       {/* Name */}
//                       <span
//                         className={`text-sm font-medium ${
//                           isActive ? "text-white" : "text-zinc-400"
//                         }`}
//                       >
//                         {step.name}
//                       </span>

//                       {/* Active Indicator */}
//                       {isActive && (
//                         <motion.div
//                           layoutId="activeAuditStep"
//                           className="absolute right-2 w-1.5 h-1.5 rounded-full"
//                           style={{ background: step.color }}
//                         />
//                       )}
//                     </motion.button>
//                   );
//                 })}
//               </div>

//               {/* Progress Indicator */}
//               <div className="mt-4 pt-4 border-t border-white/10">
//                 <div className="flex items-center justify-between text-xs mb-2">
//                   <span className="text-zinc-500">Progress</span>
//                   <span className="text-zinc-300 font-medium">
//                     {auditSteps.findIndex((s) => s.id === activeStep) + 1}/6
//                   </span>
//                 </div>
//                 <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
//                   <motion.div
//                     className="h-full rounded-full"
//                     style={{
//                       background: `linear-gradient(90deg, ${selectedStep.color}, ${selectedStep.color}88)`,
//                     }}
//                     animate={{
//                       width: `${
//                         ((auditSteps.findIndex((s) => s.id === activeStep) + 1) /
//                           6) *
//                         100
//                       }%`,
//                     }}
//                     transition={{ duration: 0.5 }}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Right Side - Detail View */}
//             <div className="flex-1 p-4 sm:p-6">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={selectedStep.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {/* Step Header */}
//                   <div className="flex items-center gap-3 mb-4">
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       transition={{ type: "spring", stiffness: 200 }}
//                       className="p-2.5 rounded-xl flex-shrink-0"
//                       style={{
//                         background: `${selectedStep.color}22`,
//                         border: `1px solid ${selectedStep.color}44`,
//                       }}
//                     >
//                       <selectedStep.icon
//                         className="w-7 h-7"
//                         style={{ color: selectedStep.color }}
//                       />
//                     </motion.div>
//                     <div>
//                       <div className="flex items-center gap-2">
//                         <span
//                           className="text-xs font-mono font-bold"
//                           style={{ color: selectedStep.color }}
//                         >
//                           {selectedStep.step}
//                         </span>
//                         <h3 className="text-lg font-bold">
//                           {selectedStep.name}
//                         </h3>
//                       </div>
//                       <p className="text-sm text-zinc-400">
//                         {selectedStep.action}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Description */}
//                   <p className="text-sm text-zinc-300 mb-5 leading-relaxed">
//                     {selectedStep.description}
//                   </p>

//                   {/* Findings */}
//                   <div className="space-y-2">
//                     <h4 className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
//                       Key Findings
//                     </h4>
//                     <div className="grid sm:grid-cols-2 gap-2">
//                       {selectedStep.findings.map((finding, index) => (
//                         <motion.div
//                           key={finding}
//                           initial={{ opacity: 0, x: -10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ duration: 0.3, delay: index * 0.05 }}
//                           className="flex items-center gap-2 p-2.5 rounded-lg"
//                           style={{
//                             background: `${selectedStep.color}08`,
//                             border: `1px solid ${selectedStep.color}22`,
//                           }}
//                         >
//                           <CheckCircle2
//                             className="w-4 h-4 flex-shrink-0"
//                             style={{ color: selectedStep.color }}
//                           />
//                           <span className="text-xs text-zinc-300">
//                             {finding}
//                           </span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Navigation */}
//                   <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
//                     <button
//                       onClick={() => {
//                         const currentIndex = auditSteps.findIndex(
//                           (s) => s.id === activeStep,
//                         );
//                         if (currentIndex > 0) {
//                           setActiveStep(auditSteps[currentIndex - 1].id);
//                         }
//                       }}
//                       disabled={
//                         auditSteps.findIndex((s) => s.id === activeStep) === 0
//                       }
//                       className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
//                     >
//                       <ChevronRight className="w-4 h-4 rotate-180" />
//                       Previous
//                     </button>

//                     <button
//                       onClick={() => {
//                         const currentIndex = auditSteps.findIndex(
//                           (s) => s.id === activeStep,
//                         );
//                         if (currentIndex < auditSteps.length - 1) {
//                           setActiveStep(auditSteps[currentIndex + 1].id);
//                         }
//                       }}
//                       disabled={
//                         auditSteps.findIndex((s) => s.id === activeStep) ===
//                         auditSteps.length - 1
//                       }
//                       className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
//                     >
//                       Next
//                       <ChevronRight className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Board Footer */}
//           <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/10 bg-white/5">
//             <div className="flex items-center gap-2">
//               <Activity className="w-3.5 h-3.5 text-green-400" />
//               <span className="text-[10px] text-zinc-500">
//                 Audit in progress...
//               </span>
//             </div>
//             <div className="flex items-center gap-3">
//               {auditSteps.map((step) => (
//                 <div
//                   key={step.id}
//                   className="w-1.5 h-1.5 rounded-full"
//                   style={{
//                     background:
//                       auditSteps.findIndex((s) => s.id === activeStep) >=
//                       auditSteps.findIndex((s) => s.id === step.id)
//                         ? step.color
//                         : "#333",
//                   }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* CTA */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="mt-8 text-center"
//         >
//           <a
//             href="/contact"
//             className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium transition-all hover:scale-105"
//             style={{
//               background:
//                 "linear-gradient(135deg, #8b5cf6, #06b6d4)",
//             }}
//           >
//             <Search className="w-5 h-5" />
//             Get Your Free Audit
//             <ArrowRight className="w-5 h-5" />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// components/sections/AIStrategyAudit.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  BarChart3,
  Target,
  ListOrdered,
  Map,
  Flag,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  Brain,
  Eye,
  Filter,
  TrendingUp,
  Gauge,
  Lightbulb,
  Compass,
  Route,
  Trophy,
  X,
  ChevronRight,
  Radar,
  ScanSearch,
  Microscope,
  Focus,
  Scale,
  GitBranch,
  Workflow,
  FileSearch,
  Telescope,
  Crosshair,
  ClipboardCheck,
  MapPin,
  Navigation,
  Star,
  Award,
  Database,
  Activity,
  Shield,
  Rocket,
} from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

const auditSteps = [
  {
    id: "discover",
    step: "01",
    name: "Discover",
    icon: Telescope,
    description: "Understand your business, systems, and workflows",
    action: "Deep dive into your operations",
    findings: [
      "Current workflow mapping",
      "System architecture review",
      "Team interviews",
      "Data flow analysis",
    ],
  },
  {
    id: "analyze",
    step: "02",
    name: "Analyze",
    icon: Microscope,
    description:
      "Identify repetitive processes, bottlenecks, and inefficiencies",
    action: "Forensic analysis of processes",
    findings: [
      "Process documentation",
      "Bottleneck identification",
      "Manual task inventory",
      "Time-motion studies",
    ],
  },
  {
    id: "identify",
    step: "03",
    name: "Identify",
    icon: Crosshair,
    description: "Find practical AI and automation opportunities",
    action: "Spot automation potential",
    findings: [
      "AI opportunity mapping",
      "Automation candidates",
      "Quick wins identification",
      "Long-term opportunities",
    ],
  },
  {
    id: "prioritize",
    step: "04",
    name: "Prioritize",
    icon: Scale,
    description: "Rank opportunities based on impact, complexity, and ROI",
    action: "Strategic ranking of opportunities",
    findings: [
      "Impact assessment",
      "Complexity scoring",
      "ROI calculation",
      "Risk evaluation",
    ],
  },
  {
    id: "roadmap",
    step: "05",
    name: "Roadmap",
    icon: Map,
    description: "Create a clear implementation strategy",
    action: "Build your automation roadmap",
    findings: [
      "Phased implementation plan",
      "Timeline creation",
      "Resource allocation",
      "Milestone definition",
    ],
  },
  {
    id: "outcome",
    step: "06",
    name: "Outcome",
    icon: Trophy,
    description:
      "A practical plan showing where AI can create the most business value",
    action: "Your AI advantage blueprint",
    findings: [
      "Executive summary",
      "Priority recommendations",
      "Financial projections",
      "Implementation guide",
    ],
  },
];

export default function AIStrategyAudit() {
  const [activeStep, setActiveStep] = useState<string>("discover");
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const selectedStep =
    auditSteps.find((step) => step.id === activeStep) || auditSteps[0];

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
            style={{ border: `1px solid ${PRIMARY_DARK}` }}
          >
            <Radar className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-sm text-white/80">
              AI STRATEGY & AUTOMATION AUDIT
            </span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="text-white">Discover your </span>
            <span style={{ color: PRIMARY }}>automation potential.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            A systematic audit that reveals where AI can create the most value
            for your business.
          </p>
        </motion.div>

        {/* Investigation Board Layout */}
        <div
          className="glass rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${PRIMARY_DARK}` }}
        >
          {/* Board Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <FileSearch className="w-4 h-4" style={{ color: PRIMARY }} />
              <span className="text-sm font-medium text-white/80">
                Automation Audit Report
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="text-[10px] px-2 py-1 rounded-full"
                style={{ background: PRIMARY_DARK, color: PRIMARY }}
              >
                IN PROGRESS
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Left Side - Step Timeline */}
            <div className="lg:w-72 border-b lg:border-b-0 lg:border-r border-white/10 p-4">
              <div className="text-[10px] uppercase tracking-wider text-white/40 mb-3 px-2">
                Investigation Steps
              </div>
              <div className="space-y-1.5">
                {auditSteps.map((step, index) => {
                  const isActive = activeStep === step.id;
                  const isHovered = hoveredStep === step.id;

                  return (
                    <motion.button
                      key={step.id}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveStep(step.id)}
                      onMouseEnter={() => setHoveredStep(step.id)}
                      onMouseLeave={() => setHoveredStep(null)}
                      className="relative flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-all"
                      style={{
                        background:
                          isActive || isHovered ? PRIMARY_DARK : "transparent",
                        border: `1px solid ${
                          isActive ? PRIMARY_LIGHT : "transparent"
                        }`,
                      }}
                    >
                      {/* Step Number */}
                      <span
                        className="text-xs font-mono font-bold"
                        style={{ color: PRIMARY }}
                      >
                        {step.step}
                      </span>

                      {/* Icon */}
                      <motion.div
                        animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                        className="p-1.5 rounded-lg flex-shrink-0"
                        style={{ background: PRIMARY_DARK }}
                      >
                        <step.icon
                          className="w-4 h-4"
                          style={{ color: PRIMARY }}
                        />
                      </motion.div>

                      {/* Name */}
                      <span
                        className={`text-sm font-medium ${
                          isActive ? "text-white" : "text-white/60"
                        }`}
                      >
                        {step.name}
                      </span>

                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="activeAuditStep"
                          className="absolute right-2 w-1.5 h-1.5 rounded-full"
                          style={{ background: PRIMARY }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* Progress Indicator */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-white/40">Progress</span>
                  <span className="text-white/80 font-medium">
                    {auditSteps.findIndex((s) => s.id === activeStep) + 1}/6
                  </span>
                </div>
                <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: PRIMARY }}
                    animate={{
                      width: `${
                        ((auditSteps.findIndex((s) => s.id === activeStep) +
                          1) /
                          6) *
                        100
                      }%`,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Detail View */}
            <div className="flex-1 p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedStep.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="p-2.5 rounded-xl flex-shrink-0"
                      style={{
                        background: PRIMARY_DARK,
                        border: `1px solid ${PRIMARY_LIGHT}`,
                      }}
                    >
                      <selectedStep.icon
                        className="w-7 h-7"
                        style={{ color: PRIMARY }}
                      />
                    </motion.div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className="text-xs font-mono font-bold"
                          style={{ color: PRIMARY }}
                        >
                          {selectedStep.step}
                        </span>
                        <h3 className="text-lg font-bold text-white">
                          {selectedStep.name}
                        </h3>
                      </div>
                      <p className="text-sm text-white/60">
                        {selectedStep.action}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-white/70 mb-5 leading-relaxed">
                    {selectedStep.description}
                  </p>

                  {/* Findings */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider">
                      Key Findings
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {selectedStep.findings.map((finding, index) => (
                        <motion.div
                          key={finding}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="flex items-center gap-2 p-2.5 rounded-lg"
                          style={{
                            background: PRIMARY_DARK,
                            border: `1px solid ${PRIMARY_LIGHT}`,
                          }}
                        >
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0"
                            style={{ color: PRIMARY }}
                          />
                          <span className="text-xs text-white/70">
                            {finding}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/10">
                    <button
                      onClick={() => {
                        const currentIndex = auditSteps.findIndex(
                          (s) => s.id === activeStep,
                        );
                        if (currentIndex > 0) {
                          setActiveStep(auditSteps[currentIndex - 1].id);
                        }
                      }}
                      disabled={
                        auditSteps.findIndex((s) => s.id === activeStep) === 0
                      }
                      className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-4 h-4 rotate-180" />
                      Previous
                    </button>

                    <button
                      onClick={() => {
                        const currentIndex = auditSteps.findIndex(
                          (s) => s.id === activeStep,
                        );
                        if (currentIndex < auditSteps.length - 1) {
                          setActiveStep(auditSteps[currentIndex + 1].id);
                        }
                      }}
                      disabled={
                        auditSteps.findIndex((s) => s.id === activeStep) ===
                        auditSteps.length - 1
                      }
                      className="flex items-center gap-1.5 text-xs text-white/60 hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      Next
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Board Footer */}
          <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/10 bg-white/5">
            <div className="flex items-center gap-2">
              <Activity className="w-3.5 h-3.5" style={{ color: PRIMARY }} />
              <span className="text-[10px] text-white/40">
                Audit in progress...
              </span>
            </div>
            <div className="flex items-center gap-3">
              {auditSteps.map((step) => (
                <div
                  key={step.id}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background:
                      auditSteps.findIndex((s) => s.id === activeStep) >=
                      auditSteps.findIndex((s) => s.id === step.id)
                        ? PRIMARY
                        : "#333",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-white font-medium transition-all hover:scale-105"
            style={{
              backgroundColor: PRIMARY,
              boxShadow: `0 10px 30px ${PRIMARY_GLOW}`,
            }}
          >
            <Search className="w-5 h-5" />
            Get Your Free Audit
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
