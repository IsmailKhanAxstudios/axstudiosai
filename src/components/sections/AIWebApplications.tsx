// // components/sections/AIWebApplications.tsx
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Globe,
//   Users,
//   Briefcase,
//   Sparkles,
//   ArrowRight,
//   CheckCircle2,
//   Bot,
//   MessageSquare,
//   Target,
//   User,
//   LayoutDashboard,
//   Lock,
//   Headphones,
//   Calendar,
//   ClipboardList,
//   Cog,
//   Zap,
//   Search,
//   TrendingUp,
//   Brain,
//   Database,
//   Workflow,
//   BarChart3,
//   X,
//   ChevronRight,
//   Monitor,
//   Smartphone,
//   Tablet,
//   Cloud,
//   Shield,
//   Gauge,
//   Star,
//   Rocket,
//   Layers,
//   Cpu,
//   Terminal,
//   Eye,
//   MousePointer,
//   Keyboard,
//   RefreshCw,
//   Command,
//   Box,
//   AppWindow,
//   PanelsTopLeft,
// } from "lucide-react";

// const webAppCategories = [
//   {
//     id: "ai-websites",
//     name: "AI Websites",
//     icon: Globe,
//     color: "#8b5cf6",
//     description: "Intelligent websites that engage visitors and convert leads",
//     features: [
//       {
//         name: "AI-Powered Business Websites",
//         icon: Monitor,
//         description: "Smart websites that adapt to visitors",
//       },
//       {
//         name: "Intelligent Chat Interfaces",
//         icon: MessageSquare,
//         description: "AI chat that engages visitors",
//       },
//       {
//         name: "Lead Capture",
//         icon: Target,
//         description: "Automated lead generation",
//       },
//       {
//         name: "Personalized Experiences",
//         icon: User,
//         description: "Tailored content per visitor",
//       },
//     ],
//   },
//   {
//     id: "portals",
//     name: "Customer Portals",
//     icon: Users,
//     color: "#06b6d4",
//     description: "Self-service portals that empower your customers",
//     features: [
//       {
//         name: "Customer Dashboards",
//         icon: LayoutDashboard,
//         description: "Real-time account overview",
//       },
//       {
//         name: "Client Portals",
//         icon: Lock,
//         description: "Secure client access",
//       },
//       {
//         name: "Self-Service Systems",
//         icon: Headphones,
//         description: "24/7 self-service",
//       },
//       {
//         name: "AI Assistance",
//         icon: Bot,
//         description: "Intelligent support built-in",
//       },
//     ],
//   },
//   {
//     id: "business-apps",
//     name: "Business Applications",
//     icon: Briefcase,
//     color: "#10b981",
//     description: "Custom applications that streamline operations",
//     features: [
//       {
//         name: "Internal Dashboards",
//         icon: BarChart3,
//         description: "KPI tracking and analytics",
//       },
//       {
//         name: "Workflow Applications",
//         icon: Workflow,
//         description: "Automated process management",
//       },
//       {
//         name: "Booking Platforms",
//         icon: Calendar,
//         description: "Smart scheduling systems",
//       },
//       {
//         name: "Business Management",
//         icon: ClipboardList,
//         description: "All-in-one management tools",
//       },
//     ],
//   },
//   {
//     id: "ai-enabled",
//     name: "AI-Enabled Apps",
//     icon: Sparkles,
//     color: "#f59e0b",
//     description: "Next-gen applications powered by AI",
//     features: [
//       {
//         name: "AI Copilots",
//         icon: Cpu,
//         description: "Intelligent assistants",
//       },
//       {
//         name: "AI Search",
//         icon: Search,
//         description: "Semantic search engine",
//       },
//       {
//         name: "AI Recommendations",
//         icon: TrendingUp,
//         description: "Smart suggestions",
//       },
//       {
//         name: "AI-Powered Workflows",
//         icon: Workflow,
//         description: "Intelligent automation",
//       },
//       {
//         name: "Intelligent Data Interfaces",
//         icon: Database,
//         description: "Smart data visualization",
//       },
//     ],
//   },
// ];

// export default function AIWebApplications() {
//   const [activeCategory, setActiveCategory] = useState<string>("ai-websites");
//   const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

//   const selectedCategory =
//     webAppCategories.find((cat) => cat.id === activeCategory) ||
//     webAppCategories[0];

//   return (
//     <section className="py-24 relative overflow-hidden">
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
//           className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full"
//           style={{
//             background:
//               "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
//           }}
//           animate={{ opacity: [0.5, 1, 0.5] }}
//           transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
//           >
//             <Monitor className="w-4 h-4 text-purple-400" />
//             <span className="text-sm text-zinc-300">AI WEB APPLICATIONS</span>
//           </motion.div>

//           <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
//             Intelligent applications for{" "}
//             <span className="gradient-text">modern business.</span>
//           </h2>
//           <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
//             We build AI-powered web applications that transform how your
//             business interacts with customers and manages operations.
//           </p>
//         </motion.div>

//         {/* Main Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
//           {/* Left Side - 2 per row horizontal cards */}
//           <div className="order-2 lg:order-1">
//             {/* Label */}
//             <div className="flex items-center gap-2 mb-4">
//               <Command className="w-4 h-4 text-purple-400" />
//               <span className="text-sm font-medium text-zinc-400">
//                 Select Application Type
//               </span>
//             </div>

//             {/* Horizontal Cards - 2 per row */}
//             <div className="space-y-3">
//               {webAppCategories.map((category, index) => {
//                 const isActive = activeCategory === category.id;

//                 return (
//                   <motion.button
//                     key={category.id}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.06 }}
//                     whileHover={{ x: 5 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => setActiveCategory(category.id)}
//                     className="relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 text-left w-full"
//                     style={{
//                       background: isActive
//                         ? `linear-gradient(135deg, ${category.color}22, ${category.color}08)`
//                         : "rgba(15, 15, 22, 0.95)",
//                       border: `1px solid ${category.color}${
//                         isActive ? "88" : "33"
//                       }`,
//                       boxShadow: isActive
//                         ? `0 0 20px ${category.color}33`
//                         : "none",
//                     }}
//                   >
//                     {/* Active Indicator Bar */}
//                     {isActive && (
//                       <motion.div
//                         layoutId="activeCategoryIndicator"
//                         className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
//                         style={{ background: category.color }}
//                         transition={{
//                           type: "spring",
//                           stiffness: 300,
//                           damping: 30,
//                         }}
//                       />
//                     )}

//                     {/* Icon */}
//                     <motion.div
//                       animate={isActive ? { scale: 1.1 } : { scale: 1 }}
//                       transition={{ type: "spring", stiffness: 300 }}
//                       className="p-2.5 rounded-lg flex-shrink-0"
//                       style={{
//                         background: isActive
//                           ? `${category.color}33`
//                           : `${category.color}11`,
//                         border: `1px solid ${category.color}44`,
//                       }}
//                     >
//                       <category.icon
//                         className="w-5 h-5"
//                         style={{ color: category.color }}
//                       />
//                     </motion.div>

//                     {/* Name and Description */}
//                     <div className="flex-1 min-w-0">
//                       <span
//                         className={`block text-sm font-bold transition-colors ${
//                           isActive ? "text-white" : "text-zinc-300"
//                         }`}
//                       >
//                         {category.name}
//                       </span>
//                       <span className="block text-[10px] text-zinc-500 truncate">
//                         {category.description.split(" ").slice(0, 5).join(" ")}
//                         ...
//                       </span>
//                     </div>

//                     {/* Arrow */}
//                     <ChevronRight
//                       className={`w-4 h-4 flex-shrink-0 transition-transform ${
//                         isActive
//                           ? "translate-x-0 opacity-100"
//                           : "-translate-x-2 opacity-0"
//                       }`}
//                       style={{ color: category.color }}
//                     />
//                   </motion.button>
//                 );
//               })}
//             </div>

//             {/* Quick Hint */}
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.5 }}
//               className="mt-4 flex items-center gap-2 text-xs text-zinc-600"
//             >
//               <MousePointer className="w-3.5 h-3.5" />
//               <span>Click to preview in browser</span>
//             </motion.div>
//           </div>

//           {/* Right Side - Mac Browser Mockup */}
//           <div className="order-1 lg:order-2 lg:sticky lg:top-24">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="glass rounded-2xl overflow-hidden"
//               style={{
//                 border: `1px solid ${selectedCategory.color}44`,
//                 boxShadow: `0 20px 60px ${selectedCategory.color}22`,
//               }}
//             >
//               {/* Mac Browser Chrome */}
//               <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
//                 <div className="flex gap-1.5">
//                   <div className="w-3 h-3 rounded-full bg-red-500" />
//                   <div className="w-3 h-3 rounded-full bg-yellow-500" />
//                   <div className="w-3 h-3 rounded-full bg-green-500" />
//                 </div>
//                 <div className="flex-1 mx-4">
//                   <div className="bg-white/10 rounded-lg px-3 py-1.5 text-xs text-zinc-400 text-center flex items-center justify-center gap-2">
//                     <Lock className="w-3 h-3" />
//                     app.axstudios.tech/{selectedCategory.id}
//                   </div>
//                 </div>
//                 <RefreshCw className="w-4 h-4 text-zinc-500" />
//               </div>

//               {/* Browser Content */}
//               <div className="p-5 lg:p-6">
//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={selectedCategory.id}
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     exit={{ opacity: 0, y: -10 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {/* Category Header */}
//                     <div className="flex items-center gap-3 mb-5">
//                       <motion.div
//                         initial={{ scale: 0 }}
//                         animate={{ scale: 1 }}
//                         transition={{ type: "spring", stiffness: 200 }}
//                         className="p-2.5 rounded-xl flex-shrink-0"
//                         style={{
//                           background: `${selectedCategory.color}22`,
//                           border: `1px solid ${selectedCategory.color}44`,
//                         }}
//                       >
//                         <selectedCategory.icon
//                           className="w-7 h-7"
//                           style={{ color: selectedCategory.color }}
//                         />
//                       </motion.div>
//                       <div>
//                         <h3 className="text-lg font-bold">
//                           {selectedCategory.name}
//                         </h3>
//                         <p className="text-xs text-zinc-400">
//                           {selectedCategory.description}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Features Grid */}
//                     <div className="space-y-2.5">
//                       {selectedCategory.features.map((feature, index) => (
//                         <motion.div
//                           key={feature.name}
//                           initial={{ opacity: 0, x: -10 }}
//                           animate={{ opacity: 1, x: 0 }}
//                           transition={{ duration: 0.3, delay: index * 0.05 }}
//                           onMouseEnter={() => setHoveredFeature(feature.name)}
//                           onMouseLeave={() => setHoveredFeature(null)}
//                           className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200"
//                           style={{
//                             background:
//                               hoveredFeature === feature.name
//                                 ? `${selectedCategory.color}15`
//                                 : "rgba(255, 255, 255, 0.03)",
//                             border: `1px solid ${
//                               hoveredFeature === feature.name
//                                 ? selectedCategory.color
//                                 : "rgba(255, 255, 255, 0.1)"
//                             }`,
//                           }}
//                         >
//                           <div
//                             className="p-2 rounded-lg flex-shrink-0"
//                             style={{
//                               background: `${selectedCategory.color}22`,
//                             }}
//                           >
//                             <feature.icon
//                               className="w-4 h-4"
//                               style={{ color: selectedCategory.color }}
//                             />
//                           </div>
//                           <div className="flex-1 min-w-0">
//                             <p className="text-sm font-semibold text-white">
//                               {feature.name}
//                             </p>
//                             <p className="text-xs text-zinc-400">
//                               {feature.description}
//                             </p>
//                           </div>
//                           <CheckCircle2
//                             className="w-4 h-4 flex-shrink-0"
//                             style={{ color: selectedCategory.color }}
//                           />
//                         </motion.div>
//                       ))}
//                     </div>

//                     {/* CTA */}
//                     <motion.a
//                       href="/contact"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.3 }}
//                       className="mt-5 flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-medium transition-all hover:scale-105"
//                       style={{
//                         background: `linear-gradient(135deg, ${selectedCategory.color}, ${selectedCategory.color}88)`,
//                       }}
//                     >
//                       Build This Application
//                       <ArrowRight className="w-4 h-4" />
//                     </motion.a>
//                   </motion.div>
//                 </AnimatePresence>
//               </div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Bottom Stats */}
//       </div>
//     </section>
//   );
// }

// components/sections/AIWebApplications.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  Users,
  Briefcase,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Bot,
  MessageSquare,
  Target,
  User,
  LayoutDashboard,
  Lock,
  Headphones,
  Calendar,
  ClipboardList,
  Cog,
  Zap,
  Search,
  TrendingUp,
  Brain,
  Database,
  Workflow,
  BarChart3,
  X,
  ChevronRight,
  Monitor,
  Smartphone,
  Tablet,
  Cloud,
  Shield,
  Gauge,
  Star,
  Rocket,
  Layers,
  Cpu,
  Terminal,
  Eye,
  MousePointer,
  Keyboard,
  RefreshCw,
  Command,
  Box,
  AppWindow,
  PanelsTopLeft,
} from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

const webAppCategories = [
  {
    id: "ai-websites",
    name: "AI Websites",
    icon: Globe,
    description: "Intelligent websites that engage visitors and convert leads",
    features: [
      {
        name: "AI-Powered Business Websites",
        icon: Monitor,
        description: "Smart websites that adapt to visitors",
      },
      {
        name: "Intelligent Chat Interfaces",
        icon: MessageSquare,
        description: "AI chat that engages visitors",
      },
      {
        name: "Lead Capture",
        icon: Target,
        description: "Automated lead generation",
      },
      {
        name: "Personalized Experiences",
        icon: User,
        description: "Tailored content per visitor",
      },
    ],
  },
  {
    id: "portals",
    name: "Customer Portals",
    icon: Users,
    description: "Self-service portals that empower your customers",
    features: [
      {
        name: "Customer Dashboards",
        icon: LayoutDashboard,
        description: "Real-time account overview",
      },
      {
        name: "Client Portals",
        icon: Lock,
        description: "Secure client access",
      },
      {
        name: "Self-Service Systems",
        icon: Headphones,
        description: "24/7 self-service",
      },
      {
        name: "AI Assistance",
        icon: Bot,
        description: "Intelligent support built-in",
      },
    ],
  },
  {
    id: "business-apps",
    name: "Business Applications",
    icon: Briefcase,
    description: "Custom applications that streamline operations",
    features: [
      {
        name: "Internal Dashboards",
        icon: BarChart3,
        description: "KPI tracking and analytics",
      },
      {
        name: "Workflow Applications",
        icon: Workflow,
        description: "Automated process management",
      },
      {
        name: "Booking Platforms",
        icon: Calendar,
        description: "Smart scheduling systems",
      },
      {
        name: "Business Management",
        icon: ClipboardList,
        description: "All-in-one management tools",
      },
    ],
  },
  {
    id: "ai-enabled",
    name: "AI-Enabled Apps",
    icon: Sparkles,
    description: "Next-gen applications powered by AI",
    features: [
      {
        name: "AI Copilots",
        icon: Cpu,
        description: "Intelligent assistants",
      },
      {
        name: "AI Search",
        icon: Search,
        description: "Semantic search engine",
      },
      {
        name: "AI Recommendations",
        icon: TrendingUp,
        description: "Smart suggestions",
      },
      {
        name: "AI-Powered Workflows",
        icon: Workflow,
        description: "Intelligent automation",
      },
      {
        name: "Intelligent Data Interfaces",
        icon: Database,
        description: "Smart data visualization",
      },
    ],
  },
];

export default function AIWebApplications() {
  const [activeCategory, setActiveCategory] = useState<string>("ai-websites");
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const selectedCategory =
    webAppCategories.find((cat) => cat.id === activeCategory) ||
    webAppCategories[0];

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
            <Monitor className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-sm text-white/80">AI WEB APPLICATIONS</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Intelligent applications for </span>
            <span style={{ color: PRIMARY }}>modern business.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We build AI-powered web applications that transform how your
            business interacts with customers and manages operations.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Category Selector */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2 mb-4">
              <Command className="w-4 h-4" style={{ color: PRIMARY }} />
              <span className="text-sm font-medium text-white/60">
                Select Application Type
              </span>
            </div>

            <div className="space-y-3">
              {webAppCategories.map((category, index) => {
                const isActive = activeCategory === category.id;

                return (
                  <motion.button
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.06 }}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveCategory(category.id)}
                    className="relative flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 text-left w-full"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${PRIMARY_DARK}, rgba(235, 106, 80, 0.1))`
                        : "rgba(15, 15, 22, 0.95)",
                      border: `1px solid ${
                        isActive ? PRIMARY_LIGHT : PRIMARY_DARK
                      }`,
                      boxShadow: isActive ? `0 0 20px ${PRIMARY_GLOW}` : "none",
                    }}
                  >
                    {/* Active Indicator Bar */}
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryIndicator"
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 rounded-r-full"
                        style={{ background: PRIMARY }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Icon */}
                    <motion.div
                      animate={isActive ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="p-2.5 rounded-lg flex-shrink-0"
                      style={{
                        background: isActive
                          ? PRIMARY_DARK
                          : "rgba(235, 106, 80, 0.1)",
                        border: `1px solid ${PRIMARY_LIGHT}`,
                      }}
                    >
                      <category.icon
                        className="w-5 h-5"
                        style={{ color: PRIMARY }}
                      />
                    </motion.div>

                    {/* Name and Description */}
                    <div className="flex-1 min-w-0">
                      <span
                        className={`block text-sm font-bold transition-colors ${
                          isActive ? "text-white" : "text-white/70"
                        }`}
                      >
                        {category.name}
                      </span>
                      <span className="block text-[10px] text-white/40 truncate">
                        {category.description.split(" ").slice(0, 5).join(" ")}
                        ...
                      </span>
                    </div>

                    {/* Arrow */}
                    <ChevronRight
                      className={`w-4 h-4 flex-shrink-0 transition-transform ${
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-2 opacity-0"
                      }`}
                      style={{ color: PRIMARY }}
                    />
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 flex items-center gap-2 text-xs text-white/40"
            >
              <MousePointer className="w-3.5 h-3.5" />
              <span>Click to preview in browser</span>
            </motion.div>
          </div>

          {/* Right Side - Mac Browser Mockup */}
          <div className="order-1 lg:order-2 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass rounded-2xl overflow-hidden"
              style={{
                border: `1px solid ${PRIMARY_LIGHT}`,
                boxShadow: `0 20px 60px ${PRIMARY_GLOW}`,
              }}
            >
              {/* Mac Browser Chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white/10 rounded-lg px-3 py-1.5 text-xs text-white/60 text-center flex items-center justify-center gap-2">
                    <Lock className="w-3 h-3" />
                    app.axstudios.tech/{selectedCategory.id}
                  </div>
                </div>
                <RefreshCw className="w-4 h-4 text-white/40" />
              </div>

              {/* Browser Content */}
              <div className="p-5 lg:p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedCategory.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-3 mb-5">
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
                        <selectedCategory.icon
                          className="w-7 h-7"
                          style={{ color: PRIMARY }}
                        />
                      </motion.div>
                      <div>
                        <h3 className="text-lg font-bold text-white">
                          {selectedCategory.name}
                        </h3>
                        <p className="text-xs text-white/60">
                          {selectedCategory.description}
                        </p>
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div className="space-y-2.5">
                      {selectedCategory.features.map((feature, index) => (
                        <motion.div
                          key={feature.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          onMouseEnter={() => setHoveredFeature(feature.name)}
                          onMouseLeave={() => setHoveredFeature(null)}
                          className="flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200"
                          style={{
                            background:
                              hoveredFeature === feature.name
                                ? PRIMARY_DARK
                                : "rgba(255, 255, 255, 0.03)",
                            border: `1px solid ${
                              hoveredFeature === feature.name
                                ? PRIMARY_LIGHT
                                : "rgba(255, 255, 255, 0.1)"
                            }`,
                          }}
                        >
                          <div
                            className="p-2 rounded-lg flex-shrink-0"
                            style={{ background: PRIMARY_DARK }}
                          >
                            <feature.icon
                              className="w-4 h-4"
                              style={{ color: PRIMARY }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-white">
                              {feature.name}
                            </p>
                            <p className="text-xs text-white/60">
                              {feature.description}
                            </p>
                          </div>
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0"
                            style={{ color: PRIMARY }}
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.a
                      href="/contact"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-5 flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-medium transition-all hover:scale-105"
                      style={{
                        backgroundColor: PRIMARY,
                        boxShadow: `0 10px 30px ${PRIMARY_GLOW}`,
                      }}
                    >
                      Build This Application
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
