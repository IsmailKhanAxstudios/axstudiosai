// // components/sections/CustomAISaaSDevelopment.tsx
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Box,
//   Cpu,
//   Server,
//   Database,
//   Cloud,
//   Zap,
//   Shield,
//   Gauge,
//   Rocket,
//   Sparkles,
//   ArrowRight,
//   CheckCircle2,
//   Layers,
//   Terminal,
//   Code2,
//   Network,
//   Workflow,
//   Cog,
//   Brain,
//   Globe,
//   Lock,
//   RefreshCw,
//   Activity,
//   Star,
//   TrendingUp,
//   X,
//   ChevronRight,
//   Plug,
//   Webhook,
//   CloudLightning,
//   ServerCog,
//   CreditCard,
//   Briefcase,
//   Bot,
//   Container,
//   CircuitBoard,
//   Boxes,
//   Blocks,
//   Component,
//   FileCode,
//   GitBranch,
//   GitCommit,
//   GitPullRequest,
//   Package,
//   Puzzle,
//   Command,
//   Braces,
//   Binary,
//   Boxes as BoxesIcon,
// } from "lucide-react";

// const developmentCategories = [
//   {
//     id: "ai-saas",
//     name: "AI SaaS Products",
//     icon: Box,
//     color: "#8b5cf6",
//     tagline: "Scalable AI platforms from MVP to enterprise",
//     items: [
//       { name: "SaaS MVPs", icon: Rocket, desc: "Launch fast" },
//       { name: "AI Platforms", icon: Brain, desc: "Full-featured" },
//       { name: "Subscription Apps", icon: CreditCard, desc: "Revenue ready" },
//     ],
//   },
//   {
//     id: "custom-ai",
//     name: "Custom AI Software",
//     icon: Cpu,
//     color: "#06b6d4",
//     tagline: "Tailored AI solutions for unique needs",
//     items: [
//       { name: "Internal AI Tools", icon: Terminal, desc: "Team productivity" },
//       { name: "AI Copilots", icon: Bot, desc: "Smart assistance" },
//       { name: "Business Apps", icon: Briefcase, desc: "Process automation" },
//       { name: "Custom Systems", icon: Network, desc: "End-to-end AI" },
//     ],
//   },
//   {
//     id: "engineering",
//     name: "Engineering",
//     icon: Server,
//     color: "#10b981",
//     tagline: "Robust technical foundation",
//     items: [
//       { name: "API Development", icon: Plug, desc: "REST & GraphQL" },
//       {
//         name: "Database Architecture",
//         icon: Database,
//         desc: "Optimized storage",
//       },
//       { name: "Backend Systems", icon: ServerCog, desc: "Microservices" },
//       { name: "Background Processing", icon: RefreshCw, desc: "Async tasks" },
//       { name: "Integrations", icon: Webhook, desc: "Third-party" },
//       { name: "Infrastructure", icon: CloudLightning, desc: "Cloud-native" },
//     ],
//   },
// ];

// export default function CustomAISaaSDevelopment() {
//   const [activeCategory, setActiveCategory] = useState<string>("ai-saas");
//   const [hoveredItem, setHoveredItem] = useState<string | null>(null);

//   const selectedCategory =
//     developmentCategories.find((cat) => cat.id === activeCategory) ||
//     developmentCategories[0];

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
//             <Code2 className="w-4 h-4 text-purple-400" />
//             <span className="text-sm text-zinc-300">
//               CUSTOM AI & SAAS DEVELOPMENT
//             </span>
//           </motion.div>

//           <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
//             Engineering{" "}
//             <span className="gradient-text">intelligent software.</span>
//           </h2>
//         </motion.div>

//         {/* IDE-Inspired Container */}
//         <div className="glass rounded-2xl overflow-hidden">
//           {/* IDE Top Bar */}
//           <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
//             <div className="flex gap-1.5">
//               <div className="w-3 h-3 rounded-full bg-red-500" />
//               <div className="w-3 h-3 rounded-full bg-yellow-500" />
//               <div className="w-3 h-3 rounded-full bg-green-500" />
//             </div>
//             <div className="flex-1 text-center">
//               <span className="text-xs text-zinc-500 font-mono">
//                 axstudios-dev — {selectedCategory.id}.tsx
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <GitBranch className="w-4 h-4 text-zinc-500" />
//               <span className="text-xs text-zinc-500 font-mono">main</span>
//             </div>
//           </div>

//           {/* IDE Body */}
//           <div className="flex flex-col lg:flex-row">
//             {/* Sidebar - File Explorer */}
//             <div className="lg:w-56 border-b lg:border-b-0 lg:border-r border-white/10 p-3">
//               <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2 px-2">
//                 Explorer
//               </div>
//               <div className="space-y-1">
//                 {developmentCategories.map((category) => {
//                   const isActive = activeCategory === category.id;

//                   return (
//                     <motion.button
//                       key={category.id}
//                       whileHover={{ x: 2 }}
//                       whileTap={{ scale: 0.98 }}
//                       onClick={() => setActiveCategory(category.id)}
//                       className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-left transition-all ${
//                         isActive ? "bg-white/10" : "hover:bg-white/5"
//                       }`}
//                     >
//                       <ChevronRight
//                         className={`w-3 h-3 transition-transform ${
//                           isActive ? "rotate-90" : ""
//                         }`}
//                         style={{ color: isActive ? category.color : "#666" }}
//                       />
//                       <category.icon
//                         className="w-4 h-4"
//                         style={{ color: isActive ? category.color : "#888" }}
//                       />
//                       <span
//                         className={`text-xs font-medium ${
//                           isActive ? "text-white" : "text-zinc-400"
//                         }`}
//                       >
//                         {category.name}
//                       </span>
//                     </motion.button>
//                   );
//                 })}
//               </div>

//               {/* File Items */}
//               <div className="mt-4 pt-4 border-t border-white/10">
//                 <div className="text-[10px] uppercase tracking-wider text-zinc-500 mb-2 px-2">
//                   {selectedCategory.name}
//                 </div>
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={selectedCategory.id}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     className="space-y-1"
//                   >
//                     {selectedCategory.items.map((item) => (
//                       <motion.div
//                         key={item.name}
//                         onMouseEnter={() => setHoveredItem(item.name)}
//                         onMouseLeave={() => setHoveredItem(null)}
//                         className="flex items-center gap-2 px-3 py-1.5 rounded cursor-pointer transition-colors hover:bg-white/5"
//                       >
//                         <FileCode
//                           className="w-3.5 h-3.5"
//                           style={{ color: selectedCategory.color }}
//                         />
//                         <span className="text-xs text-zinc-400">
//                           {item.name.toLowerCase().replace(/\s+/g, "-")}.tsx
//                         </span>
//                       </motion.div>
//                     ))}
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </div>

//             {/* Main Content - Code View */}
//             <div className="flex-1 p-4 sm:p-6">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={selectedCategory.id}
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   {/* Code Header */}
//                   <div className="flex items-center gap-2 mb-4">
//                     <span
//                       className="text-xs font-mono"
//                       style={{ color: selectedCategory.color }}
//                     >
//                       // {selectedCategory.tagline}
//                     </span>
//                   </div>

//                   {/* Code Blocks */}
//                   <div className="space-y-3">
//                     {/* Import statement */}
//                     <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
//                       <span className="text-purple-400">import</span>
//                       <span className="text-zinc-300">{"{"}</span>
//                       <span style={{ color: selectedCategory.color }}>
//                         {selectedCategory.items
//                           .map((item) => item.name.replace(/\s+/g, ""))
//                           .join(", ")}
//                       </span>
//                       <span className="text-zinc-300">{"}"}</span>
//                       <span className="text-purple-400">from</span>
//                       <span className="text-green-400">"@axstudios/ai"</span>
//                     </div>

//                     {/* Items */}
//                     <div className="space-y-2">
//                       {selectedCategory.items.map((item, index) => (
//                         <motion.div
//                           key={item.name}
//                           initial={{ opacity: 0, x: -10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ duration: 0.3, delay: index * 0.08 }}
//                           onMouseEnter={() => setHoveredItem(item.name)}
//                           onMouseLeave={() => setHoveredItem(null)}
//                           className="flex items-center gap-3 p-3 rounded-lg font-mono text-xs sm:text-sm cursor-pointer transition-all"
//                           style={{
//                             background:
//                               hoveredItem === item.name
//                                 ? `${selectedCategory.color}11`
//                                 : "transparent",
//                             border: `1px solid ${
//                               hoveredItem === item.name
//                                 ? selectedCategory.color
//                                 : "transparent"
//                             }`,
//                           }}
//                         >
//                           <span className="text-zinc-600">{index + 1}</span>
//                           <item.icon
//                             className="w-4 h-4 flex-shrink-0"
//                             style={{ color: selectedCategory.color }}
//                           />
//                           <span className="text-zinc-300">{item.name}:</span>
//                           <span className="text-green-400">"{item.desc}"</span>
//                           {hoveredItem === item.name && (
//                             <CheckCircle2
//                               className="w-4 h-4 ml-auto"
//                               style={{ color: selectedCategory.color }}
//                             />
//                           )}
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* Closing tag */}
//                     <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
//                       <span className="text-purple-400">export</span>
//                       <span className="text-purple-400">default</span>
//                       <span style={{ color: selectedCategory.color }}>
//                         {selectedCategory.name.replace(/\s+/g, "")}
//                       </span>
//                     </div>
//                   </div>

//                   {/* CTA */}
//                   <motion.a
//                     href="/contact"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.4 }}
//                     className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-all hover:scale-105"
//                     style={{
//                       background: `linear-gradient(135deg, ${selectedCategory.color}, ${selectedCategory.color}88)`,
//                     }}
//                   >
//                     <Terminal className="w-4 h-4" />
//                     Start Building
//                     <ArrowRight className="w-4 h-4" />
//                   </motion.a>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* IDE Status Bar */}
//           <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 bg-white/5">
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-1.5">
//                 <GitCommit className="w-3.5 h-3.5 text-zinc-500" />
//                 <span className="text-[10px] text-zinc-500 font-mono">
//                   main
//                 </span>
//               </div>
//               <div className="flex items-center gap-1.5">
//                 <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
//                 <span className="text-[10px] text-zinc-500 font-mono">
//                   0 errors
//                 </span>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <span className="text-[10px] text-zinc-500 font-mono">
//                 TypeScript
//               </span>
//               <span className="text-[10px] text-zinc-500 font-mono">UTF-8</span>
//               <span className="text-[10px] text-zinc-500 font-mono">LF</span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
//         >
//           {[
//             { icon: Rocket, label: "MVP in 4 Weeks", value: "Fast launch" },
//             {
//               icon: Shield,
//               label: "Enterprise Grade",
//               value: "Security first",
//             },
//             { icon: Gauge, label: "99.9% Uptime", value: "Reliable" },
//             { icon: TrendingUp, label: "Scalable", value: "Unlimited growth" },
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               whileHover={{ y: -3 }}
//               className="glass rounded-xl p-4 text-center"
//             >
//               <stat.icon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
//               <div className="text-sm sm:text-base font-bold mb-0.5">
//                 {stat.label}
//               </div>
//               <p className="text-[10px] sm:text-xs text-zinc-400">
//                 {stat.value}
//               </p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// components/sections/CustomAISaaSDevelopment.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Cpu,
  Server,
  Database,
  Cloud,
  Zap,
  Shield,
  Gauge,
  Rocket,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Terminal,
  Code2,
  Network,
  Workflow,
  Cog,
  Brain,
  Globe,
  Lock,
  RefreshCw,
  Activity,
  Star,
  TrendingUp,
  X,
  ChevronRight,
  Plug,
  Webhook,
  CloudLightning,
  ServerCog,
  CreditCard,
  Briefcase,
  Bot,
  Container,
  CircuitBoard,
  Boxes,
  Blocks,
  Component,
  FileCode,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Package,
  Puzzle,
  Command,
  Braces,
  Binary,
} from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

const developmentCategories = [
  {
    id: "ai-saas",
    name: "AI SaaS Products",
    icon: Box,
    tagline: "Scalable AI platforms from MVP to enterprise",
    items: [
      { name: "SaaS MVPs", icon: Rocket, desc: "Launch fast" },
      { name: "AI Platforms", icon: Brain, desc: "Full-featured" },
      { name: "Subscription Apps", icon: CreditCard, desc: "Revenue ready" },
    ],
  },
  {
    id: "custom-ai",
    name: "Custom AI Software",
    icon: Cpu,
    tagline: "Tailored AI solutions for unique needs",
    items: [
      { name: "Internal AI Tools", icon: Terminal, desc: "Team productivity" },
      { name: "AI Copilots", icon: Bot, desc: "Smart assistance" },
      { name: "Business Apps", icon: Briefcase, desc: "Process automation" },
      { name: "Custom Systems", icon: Network, desc: "End-to-end AI" },
    ],
  },
  {
    id: "engineering",
    name: "Engineering",
    icon: Server,
    tagline: "Robust technical foundation",
    items: [
      { name: "API Development", icon: Plug, desc: "REST & GraphQL" },
      {
        name: "Database Architecture",
        icon: Database,
        desc: "Optimized storage",
      },
      { name: "Backend Systems", icon: ServerCog, desc: "Microservices" },
      { name: "Background Processing", icon: RefreshCw, desc: "Async tasks" },
      { name: "Integrations", icon: Webhook, desc: "Third-party" },
      { name: "Infrastructure", icon: CloudLightning, desc: "Cloud-native" },
    ],
  },
];

export default function CustomAISaaSDevelopment() {
  const [activeCategory, setActiveCategory] = useState<string>("ai-saas");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const selectedCategory =
    developmentCategories.find((cat) => cat.id === activeCategory) ||
    developmentCategories[0];

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
            <Code2 className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-sm text-white/80">
              CUSTOM AI & SAAS DEVELOPMENT
            </span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
            <span className="text-white">Engineering </span>
            <span style={{ color: PRIMARY }}>intelligent software.</span>
          </h2>
        </motion.div>

        {/* IDE-Inspired Container */}
        <div
          className="glass rounded-2xl overflow-hidden"
          style={{ border: `1px solid ${PRIMARY_DARK}` }}
        >
          {/* IDE Top Bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-center">
              <span className="text-xs text-white/40 font-mono">
                axstudios-dev — {selectedCategory.id}.tsx
              </span>
            </div>
            <div className="flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-white/40" />
              <span className="text-xs text-white/40 font-mono">main</span>
            </div>
          </div>

          {/* IDE Body */}
          <div className="flex flex-col lg:flex-row">
            {/* Sidebar - File Explorer */}
            <div className="lg:w-56 border-b lg:border-b-0 lg:border-r border-white/10 p-3">
              <div className="text-[10px] uppercase tracking-wider text-white/40 mb-2 px-2">
                Explorer
              </div>
              <div className="space-y-1">
                {developmentCategories.map((category) => {
                  const isActive = activeCategory === category.id;

                  return (
                    <motion.button
                      key={category.id}
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center gap-2 w-full px-3 py-2 rounded-lg text-left transition-all ${
                        isActive ? "bg-white/10" : "hover:bg-white/5"
                      }`}
                    >
                      <ChevronRight
                        className={`w-3 h-3 transition-transform ${
                          isActive ? "rotate-90" : ""
                        }`}
                        style={{ color: isActive ? PRIMARY : "#666" }}
                      />
                      <category.icon
                        className="w-4 h-4"
                        style={{ color: isActive ? PRIMARY : "#888" }}
                      />
                      <span
                        className={`text-xs font-medium ${
                          isActive ? "text-white" : "text-white/60"
                        }`}
                      >
                        {category.name}
                      </span>
                    </motion.button>
                  );
                })}
              </div>

              {/* File Items */}
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="text-[10px] uppercase tracking-wider text-white/40 mb-2 px-2">
                  {selectedCategory.name}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCategory.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-1"
                  >
                    {selectedCategory.items.map((item) => (
                      <motion.div
                        key={item.name}
                        onMouseEnter={() => setHoveredItem(item.name)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="flex items-center gap-2 px-3 py-1.5 rounded cursor-pointer transition-colors hover:bg-white/5"
                      >
                        <FileCode
                          className="w-3.5 h-3.5"
                          style={{ color: PRIMARY }}
                        />
                        <span className="text-xs text-white/60">
                          {item.name.toLowerCase().replace(/\s+/g, "-")}.tsx
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Main Content - Code View */}
            <div className="flex-1 p-4 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Code Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className="text-xs font-mono"
                      style={{ color: PRIMARY }}
                    >
                      // {selectedCategory.tagline}
                    </span>
                  </div>

                  {/* Code Blocks */}
                  <div className="space-y-3">
                    {/* Import statement */}
                    <div className="flex items-center gap-2 font-mono text-xs sm:text-sm flex-wrap">
                      <span style={{ color: PRIMARY }}>import</span>
                      <span className="text-white/60">{"{"}</span>
                      <span style={{ color: PRIMARY }}>
                        {selectedCategory.items
                          .map((item) => item.name.replace(/\s+/g, ""))
                          .join(", ")}
                      </span>
                      <span className="text-white/60">{"}"}</span>
                      <span style={{ color: PRIMARY }}>from</span>
                      <span className="text-white/60">"@axstudios/ai"</span>
                    </div>

                    {/* Items */}
                    <div className="space-y-2">
                      {selectedCategory.items.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.08 }}
                          onMouseEnter={() => setHoveredItem(item.name)}
                          onMouseLeave={() => setHoveredItem(null)}
                          className="flex items-center gap-3 p-3 rounded-lg font-mono text-xs sm:text-sm cursor-pointer transition-all"
                          style={{
                            background:
                              hoveredItem === item.name
                                ? PRIMARY_DARK
                                : "transparent",
                            border: `1px solid ${
                              hoveredItem === item.name
                                ? PRIMARY_LIGHT
                                : "transparent"
                            }`,
                          }}
                        >
                          <span className="text-white/30">{index + 1}</span>
                          <item.icon
                            className="w-4 h-4 flex-shrink-0"
                            style={{ color: PRIMARY }}
                          />
                          <span className="text-white/70">{item.name}:</span>
                          <span style={{ color: PRIMARY }}>"{item.desc}"</span>
                          {hoveredItem === item.name && (
                            <CheckCircle2
                              className="w-4 h-4 ml-auto"
                              style={{ color: PRIMARY }}
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>

                    {/* Closing tag */}
                    <div className="flex items-center gap-2 font-mono text-xs sm:text-sm">
                      <span style={{ color: PRIMARY }}>export</span>
                      <span style={{ color: PRIMARY }}>default</span>
                      <span style={{ color: PRIMARY }}>
                        {selectedCategory.name.replace(/\s+/g, "")}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="/contact"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-all hover:scale-105"
                    style={{
                      backgroundColor: PRIMARY,
                      boxShadow: `0 10px 30px ${PRIMARY_GLOW}`,
                    }}
                  >
                    <Terminal className="w-4 h-4" />
                    Start Building
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* IDE Status Bar */}
          <div className="flex items-center justify-between px-4 py-2 border-t border-white/10 bg-white/5">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <GitCommit className="w-3.5 h-3.5 text-white/40" />
                <span className="text-[10px] text-white/40 font-mono">
                  main
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2
                  className="w-3.5 h-3.5"
                  style={{ color: PRIMARY }}
                />
                <span className="text-[10px] text-white/40 font-mono">
                  0 errors
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[10px] text-white/40 font-mono">
                TypeScript
              </span>
              <span className="text-[10px] text-white/40 font-mono">UTF-8</span>
              <span className="text-[10px] text-white/40 font-mono">LF</span>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
        >
          {[
            { icon: Rocket, label: "MVP in 4 Weeks", value: "Fast launch" },
            {
              icon: Shield,
              label: "Enterprise Grade",
              value: "Security first",
            },
            { icon: Gauge, label: "99.9% Uptime", value: "Reliable" },
            { icon: TrendingUp, label: "Scalable", value: "Unlimited growth" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -3 }}
              className="glass rounded-xl p-4 text-center"
              style={{ border: `1px solid ${PRIMARY_DARK}` }}
            >
              <stat.icon
                className="w-6 h-6 mx-auto mb-2"
                style={{ color: PRIMARY }}
              />
              <div className="text-sm sm:text-base font-bold text-white mb-0.5">
                {stat.label}
              </div>
              <p className="text-[10px] sm:text-xs text-white/60">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
