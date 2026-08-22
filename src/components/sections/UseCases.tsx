// // components/sections/UseCases.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Bot,
//   Headphones,
//   Target,
//   Mail,
//   BarChart3,
//   FileText,
//   Calendar,
//   Database,
//   BookOpen,
//   Search,
//   ShoppingCart,
//   Megaphone,
//   Sparkles,
//   ArrowUpRight,
//   Zap,
//   TrendingUp,
//   Clock,
//   CheckCircle2,
//   ChevronRight,
//   Gauge,
//   MessageSquare,
//   Users,
//   Globe,
//   Send,
//   Bell,
//   ClipboardList,
//   FileSpreadsheet,
//   Package,
//   Star,
//   RefreshCw,
//   Filter,
//   PieChart,
//   LineChart,
//   Inbox,
//   CalendarClock,
//   UserPlus,
//   GitBranch,
//   Layers,
//   Pause,
//   Play,
// } from "lucide-react";

// const useCases = [
//   // Sales & Lead Automation
//   {
//     icon: Target,
//     title: "Lead Capture",
//     description: "Automatically capture leads from multiple sources",
//     color: "#8b5cf6",
//     category: "Sales & Lead Automation",
//     metrics: { efficiency: "+50%", response: "Real-time" },
//     features: [
//       "Multi-channel capture",
//       "Form automation",
//       "Web scraping",
//       "API integration",
//     ],
//   },
//   {
//     icon: Filter,
//     title: "Lead Qualification",
//     description: "Smart lead scoring and qualification system",
//     color: "#a855f7",
//     category: "Sales & Lead Automation",
//     metrics: { efficiency: "+45%", response: "Instant" },
//     features: [
//       "Automated lead scoring",
//       "Intent detection",
//       "Priority routing",
//       "CRM updates",
//     ],
//   },
//   {
//     icon: Database,
//     title: "Lead Enrichment",
//     description: "Automatically enrich lead data with additional insights",
//     color: "#7c3aed",
//     category: "Sales & Lead Automation",
//     metrics: { efficiency: "+40%", response: "Automated" },
//     features: [
//       "Data enrichment",
//       "Company information",
//       "Social profiles",
//       "Behavior tracking",
//     ],
//   },
//   {
//     icon: Send,
//     title: "Follow-up Automation",
//     description: "Automated follow-up sequences and reminders",
//     color: "#6d28d9",
//     category: "Sales & Lead Automation",
//     metrics: { efficiency: "+55%", response: "Scheduled" },
//     features: [
//       "Email sequences",
//       "SMS follow-ups",
//       "Task reminders",
//       "Re-engagement campaigns",
//     ],
//   },
//   {
//     icon: Users,
//     title: "CRM Automation",
//     description: "Seamless CRM integration and automation",
//     color: "#5b21b6",
//     category: "Sales & Lead Automation",
//     metrics: { efficiency: "+50%", response: "Sync" },
//     features: [
//       "Contact management",
//       "Activity tracking",
//       "Pipeline automation",
//       "Data synchronization",
//     ],
//   },
//   {
//     icon: TrendingUp,
//     title: "Sales Pipeline Automation",
//     description: "Automated sales pipeline management and tracking",
//     color: "#4c1d95",
//     category: "Sales & Lead Automation",
//     metrics: { efficiency: "+60%", response: "Real-time" },
//     features: [
//       "Stage automation",
//       "Deal tracking",
//       "Forecasting",
//       "Performance analytics",
//     ],
//   },

//   // Marketing Automation
//   {
//     icon: Megaphone,
//     title: "Campaign Automation",
//     description: "Automated marketing campaigns across channels",
//     color: "#06b6d4",
//     category: "Marketing Automation",
//     metrics: { efficiency: "+55%", response: "Scheduled" },
//     features: [
//       "Multi-channel campaigns",
//       "Trigger-based automation",
//       "A/B testing",
//       "Performance tracking",
//     ],
//   },
//   {
//     icon: FileText,
//     title: "Content Workflows",
//     description: "Automated content creation and distribution",
//     color: "#0891b2",
//     category: "Marketing Automation",
//     metrics: { efficiency: "+45%", response: "Automated" },
//     features: [
//       "Content scheduling",
//       "Social media automation",
//       "Blog distribution",
//       "Content repurposing",
//     ],
//   },
//   {
//     icon: GitBranch,
//     title: "Customer Journeys",
//     description: "Automated customer journey mapping and execution",
//     color: "#0e7490",
//     category: "Marketing Automation",
//     metrics: { efficiency: "+50%", response: "Triggered" },
//     features: [
//       "Journey mapping",
//       "Behavioral triggers",
//       "Personalization",
//       "Lifecycle automation",
//     ],
//   },
//   {
//     icon: Mail,
//     title: "Email Campaigns",
//     description: "Automated email marketing campaigns",
//     color: "#155e75",
//     category: "Marketing Automation",
//     metrics: { efficiency: "+48%", response: "Scheduled" },
//     features: [
//       "Drip campaigns",
//       "Newsletter automation",
//       "Personalization",
//       "Analytics tracking",
//     ],
//   },
//   {
//     icon: BarChart3,
//     title: "Analytics & Reporting",
//     description: "Automated marketing analytics and reporting",
//     color: "#164e63",
//     category: "Marketing Automation",
//     metrics: { efficiency: "+65%", response: "Real-time" },
//     features: [
//       "Real-time dashboards",
//       "ROI tracking",
//       "Attribution modeling",
//       "Custom reports",
//     ],
//   },

//   // Customer Support Automation
//   {
//     icon: Headphones,
//     title: "Automated Responses",
//     description: "Intelligent automated customer support responses",
//     color: "#10b981",
//     category: "Customer Support Automation",
//     metrics: { efficiency: "+60%", response: "Instant" },
//     features: [
//       "AI-powered responses",
//       "Multi-language support",
//       "Context awareness",
//       "24/7 availability",
//     ],
//   },
//   {
//     icon: GitBranch,
//     title: "Ticket Routing",
//     description: "Smart ticket categorization and routing",
//     color: "#059669",
//     category: "Customer Support Automation",
//     metrics: { efficiency: "+55%", response: "Real-time" },
//     features: [
//       "Priority-based routing",
//       "Department assignment",
//       "SLA tracking",
//       "Escalation management",
//     ],
//   },
//   {
//     icon: BookOpen,
//     title: "FAQ Automation",
//     description: "Automated FAQ responses and knowledge base",
//     color: "#047857",
//     category: "Customer Support Automation",
//     metrics: { efficiency: "+50%", response: "Instant" },
//     features: [
//       "Smart FAQ matching",
//       "Knowledge base integration",
//       "Self-service portal",
//       "Continuous learning",
//     ],
//   },
//   {
//     icon: Database,
//     title: "Knowledge Base Integration",
//     description: "Integrated knowledge management system",
//     color: "#065f46",
//     category: "Customer Support Automation",
//     metrics: { efficiency: "+45%", response: "Sync" },
//     features: [
//       "Centralized knowledge",
//       "Document indexing",
//       "Search optimization",
//       "Content updates",
//     ],
//   },
//   {
//     icon: Bell,
//     title: "Customer Notifications",
//     description: "Automated customer notification system",
//     color: "#064e3b",
//     category: "Customer Support Automation",
//     metrics: { efficiency: "+40%", response: "Triggered" },
//     features: [
//       "Status updates",
//       "Appointment reminders",
//       "Ticket updates",
//       "Personalized alerts",
//     ],
//   },

//   // Communication Automation
//   {
//     icon: Mail,
//     title: "Email Automation",
//     description: "Intelligent email handling and automation",
//     color: "#f59e0b",
//     category: "Communication Automation",
//     metrics: { efficiency: "+45%", response: "< 5min" },
//     features: [
//       "Smart categorization",
//       "Automated responses",
//       "Follow-up scheduling",
//       "Spam filtering",
//     ],
//   },
//   {
//     icon: MessageSquare,
//     title: "WhatsApp Automation",
//     description: "Automated WhatsApp messaging and responses",
//     color: "#d97706",
//     category: "Communication Automation",
//     metrics: { efficiency: "+50%", response: "Instant" },
//     features: [
//       "Chatbot integration",
//       "Bulk messaging",
//       "Template automation",
//       "Rich media support",
//     ],
//   },
//   {
//     icon: Bell,
//     title: "Notifications",
//     description: "Automated notification system",
//     color: "#b45309",
//     category: "Communication Automation",
//     metrics: { efficiency: "+40%", response: "Real-time" },
//     features: [
//       "Push notifications",
//       "In-app alerts",
//       "Email notifications",
//       "SMS alerts",
//     ],
//   },
//   {
//     icon: CalendarClock,
//     title: "Appointment Reminders",
//     description: "Automated appointment reminder system",
//     color: "#92400e",
//     category: "Communication Automation",
//     metrics: { efficiency: "+55%", response: "Scheduled" },
//     features: [
//       "Multi-channel reminders",
//       "Custom scheduling",
//       "Rescheduling automation",
//       "No-show reduction",
//     ],
//   },
//   {
//     icon: RefreshCw,
//     title: "Follow-up Systems",
//     description: "Automated follow-up communication",
//     color: "#78350f",
//     category: "Communication Automation",
//     metrics: { efficiency: "+48%", response: "Sequential" },
//     features: [
//       "Sequence automation",
//       "Trigger-based follow-ups",
//       "Response tracking",
//       "Engagement scoring",
//     ],
//   },

//   // Operations Automation
//   {
//     icon: FileText,
//     title: "Document Processing",
//     description: "Automated document handling and extraction",
//     color: "#ec4899",
//     category: "Operations Automation",
//     metrics: { efficiency: "+65%", response: "Instant" },
//     features: [
//       "OCR extraction",
//       "Document classification",
//       "Data validation",
//       "Workflow automation",
//     ],
//   },
//   {
//     icon: FileSpreadsheet,
//     title: "Invoice & Data Extraction",
//     description: "Automated invoice and data extraction system",
//     color: "#db2777",
//     category: "Operations Automation",
//     metrics: { efficiency: "+70%", response: "Automated" },
//     features: [
//       "Invoice parsing",
//       "Data extraction",
//       "Validation rules",
//       "ERP integration",
//     ],
//   },
//   {
//     icon: UserPlus,
//     title: "Employee Onboarding",
//     description: "Automated employee onboarding workflows",
//     color: "#be185d",
//     category: "Operations Automation",
//     metrics: { efficiency: "+50%", response: "Workflow" },
//     features: [
//       "Document collection",
//       "Account provisioning",
//       "Training assignment",
//       "Checklist automation",
//     ],
//   },
//   {
//     icon: Layers,
//     title: "Internal Workflows",
//     description: "Automated internal process workflows",
//     color: "#9d174d",
//     category: "Operations Automation",
//     metrics: { efficiency: "+55%", response: "Automated" },
//     features: [
//       "Process automation",
//       "Task routing",
//       "Approval workflows",
//       "SLA management",
//     ],
//   },
//   {
//     icon: RefreshCw,
//     title: "Data Synchronization",
//     description: "Automated data sync across systems",
//     color: "#831843",
//     category: "Operations Automation",
//     metrics: { efficiency: "+60%", response: "Real-time" },
//     features: [
//       "Real-time sync",
//       "Conflict resolution",
//       "Error handling",
//       "Audit logging",
//     ],
//   },
//   {
//     icon: CheckCircle2,
//     title: "Approval Workflows",
//     description: "Automated approval and sign-off processes",
//     color: "#701a3f",
//     category: "Operations Automation",
//     metrics: { efficiency: "+45%", response: "Triggered" },
//     features: [
//       "Multi-level approvals",
//       "Conditional routing",
//       "Reminder automation",
//       "Compliance tracking",
//     ],
//   },

//   // Reporting & Data Automation
//   {
//     icon: BarChart3,
//     title: "Automated Reports",
//     description: "Automated report generation and distribution",
//     color: "#6366f1",
//     category: "Reporting & Data Automation",
//     metrics: { efficiency: "+70%", response: "Scheduled" },
//     features: [
//       "Custom report templates",
//       "Automated distribution",
//       "Scheduled generation",
//       "Multi-format export",
//     ],
//   },
//   {
//     icon: PieChart,
//     title: "Dashboard Updates",
//     description: "Real-time dashboard automation and updates",
//     color: "#4f46e5",
//     category: "Reporting & Data Automation",
//     metrics: { efficiency: "+65%", response: "Real-time" },
//     features: [
//       "Live data feeds",
//       "Visual automation",
//       "KPI tracking",
//       "Custom widgets",
//     ],
//   },
//   {
//     icon: Database,
//     title: "Data Collection",
//     description: "Automated data collection from multiple sources",
//     color: "#4338ca",
//     category: "Reporting & Data Automation",
//     metrics: { efficiency: "+60%", response: "Automated" },
//     features: [
//       "Multi-source collection",
//       "API integration",
//       "Web scraping",
//       "Data validation",
//     ],
//   },
//   {
//     icon: Zap,
//     title: "Data Processing",
//     description: "Automated data processing and transformation",
//     color: "#3730a3",
//     category: "Reporting & Data Automation",
//     metrics: { efficiency: "+55%", response: "Instant" },
//     features: [
//       "Data cleaning",
//       "Transformation",
//       "Enrichment",
//       "Normalization",
//     ],
//   },
//   {
//     icon: LineChart,
//     title: "Insight Generation",
//     description: "AI-powered insight generation and analysis",
//     color: "#312e81",
//     category: "Reporting & Data Automation",
//     metrics: { efficiency: "+75%", response: "AI-powered" },
//     features: [
//       "Pattern recognition",
//       "Trend analysis",
//       "Predictive insights",
//       "Recommendations",
//     ],
//   },

//   // E-commerce Automation
//   {
//     icon: Package,
//     title: "Order Processing",
//     description: "Automated order processing and fulfillment",
//     color: "#14b8a6",
//     category: "E-commerce Automation",
//     metrics: { efficiency: "+65%", response: "Instant" },
//     features: [
//       "Order validation",
//       "Payment processing",
//       "Fulfillment automation",
//       "Status updates",
//     ],
//   },
//   {
//     icon: RefreshCw,
//     title: "Inventory Synchronization",
//     description: "Real-time inventory management and sync",
//     color: "#0d9488",
//     category: "E-commerce Automation",
//     metrics: { efficiency: "+70%", response: "Real-time" },
//     features: [
//       "Stock tracking",
//       "Low-stock alerts",
//       "Multi-channel sync",
//       "Reorder automation",
//     ],
//   },
//   {
//     icon: Bell,
//     title: "Customer Notifications",
//     description: "Automated customer notification system",
//     color: "#0f766e",
//     category: "E-commerce Automation",
//     metrics: { efficiency: "+50%", response: "Triggered" },
//     features: [
//       "Order confirmations",
//       "Shipping updates",
//       "Delivery notifications",
//       "Personalized alerts",
//     ],
//   },
//   {
//     icon: Star,
//     title: "Review Management",
//     description: "Automated review collection and management",
//     color: "#115e59",
//     category: "E-commerce Automation",
//     metrics: { efficiency: "+45%", response: "Automated" },
//     features: [
//       "Review requests",
//       "Rating aggregation",
//       "Response automation",
//       "Sentiment analysis",
//     ],
//   },
// ];

// const categories = [
//   "All",
//   ...Array.from(new Set(useCases.map((uc) => uc.category))),
// ];

// export default function UseCases() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [selectedCase, setSelectedCase] = useState<string | null>(null);
//   const [isPaused, setIsPaused] = useState(false);

//   const filteredCases =
//     activeCategory === "All"
//       ? useCases
//       : useCases.filter((uc) => uc.category === activeCategory);

//   // Split filtered cases into two rows
//   const midpoint = Math.ceil(filteredCases.length / 2);
//   const firstRow = filteredCases.slice(0, midpoint);
//   const secondRow = filteredCases.slice(midpoint);

//   return (
//     <section className="py-24 relative overflow-hidden">
//       {/* Background effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 opacity-20">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle, #8b5cf6 1px, transparent 1px)",
//               backgroundSize: "30px 30px",
//             }}
//           />
//         </div>
//         <motion.div
//           className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 5, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
//           animate={{ scale: [1.2, 1, 1.2] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />
//       </div>

//       <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
//           >
//             <Sparkles className="w-4 h-4 text-purple-400" />
//             <span className="text-sm text-zinc-300">AUTOMATION SOLUTIONS</span>
//           </motion.div>

//           <h2 className="text-3xl lg:text-5xl font-bold mb-4">
//             Complete <span className="gradient-text">automation solutions</span>
//           </h2>
//           <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
//             Explore how AI automation transforms every aspect of your business
//             operations.
//           </p>
//         </motion.div>

//         {/* Category Filter */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <motion.button
//               key={category}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={() => {
//                 setActiveCategory(category);
//                 setSelectedCase(null);
//               }}
//               className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
//                 activeCategory === category
//                   ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-500/25"
//                   : "glass text-zinc-400 hover:text-white"
//               }`}
//             >
//               {category}
//             </motion.button>
//           ))}
//         </div>

//         {/* Moving Slider Rows */}
//         <div className="space-y-6">
//           {/* Row 1 - Left to Right */}
//           <div
//             className="relative overflow-hidden"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             <motion.div
//               className="flex gap-5"
//               animate={{
//                 x: isPaused ? 0 : ["0%", "-50%"],
//               }}
//               transition={{
//                 x: {
//                   duration: 30,
//                   repeat: Infinity,
//                   ease: "linear",
//                   repeatType: "loop",
//                 },
//               }}
//             >
//               {/* Double the content for seamless loop */}
//               {[...firstRow, ...firstRow].map((useCase, index) => (
//                 <UseCaseCard
//                   key={`${useCase.title}-${index}`}
//                   useCase={useCase}
//                   isSelected={selectedCase === useCase.title}
//                   onClick={() =>
//                     setSelectedCase(
//                       selectedCase === useCase.title ? null : useCase.title,
//                     )
//                   }
//                 />
//               ))}
//             </motion.div>
//           </div>

//           {/* Row 2 - Right to Left */}
//           <div
//             className="relative overflow-hidden"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             <motion.div
//               className="flex gap-5"
//               animate={{
//                 x: isPaused ? 0 : ["-50%", "0%"],
//               }}
//               transition={{
//                 x: {
//                   duration: 30,
//                   repeat: Infinity,
//                   ease: "linear",
//                   repeatType: "loop",
//                 },
//               }}
//             >
//               {/* Double the content for seamless loop */}
//               {[...secondRow, ...secondRow].map((useCase, index) => (
//                 <UseCaseCard
//                   key={`${useCase.title}-${index}`}
//                   useCase={useCase}
//                   isSelected={selectedCase === useCase.title}
//                   onClick={() =>
//                     setSelectedCase(
//                       selectedCase === useCase.title ? null : useCase.title,
//                     )
//                   }
//                 />
//               ))}
//             </motion.div>
//           </div>
//         </div>

//         {/* Selected Case Details */}
//         <AnimatePresence>
//           {selectedCase && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="mt-8"
//             >
//               {(() => {
//                 const caseData = useCases.find(
//                   (uc) => uc.title === selectedCase,
//                 );
//                 if (!caseData) return null;

//                 return (
//                   <div
//                     className="glass rounded-2xl p-6 lg:p-8"
//                     style={{
//                       border: `1px solid ${caseData.color}44`,
//                       boxShadow: `0 0 30px ${caseData.color}22`,
//                     }}
//                   >
//                     <div className="flex items-center gap-4 mb-4">
//                       <div
//                         className="p-3 rounded-xl"
//                         style={{ background: `${caseData.color}22` }}
//                       >
//                         <caseData.icon
//                           className="w-7 h-7"
//                           style={{ color: caseData.color }}
//                         />
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold">{caseData.title}</h3>
//                         <p className="text-sm text-zinc-400">
//                           {caseData.description}
//                         </p>
//                       </div>
//                     </div>
//                     <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
//                       {caseData.features.map((feature) => (
//                         <div
//                           key={feature}
//                           className="flex items-center gap-2 text-sm text-zinc-300 p-3 rounded-lg bg-white/5"
//                         >
//                           <CheckCircle2
//                             className="w-4 h-4 flex-shrink-0"
//                             style={{ color: caseData.color }}
//                           />
//                           {feature}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 );
//               })()}
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Bottom Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
//         >
//           {[
//             { icon: Zap, label: "35+ Use Cases", value: "Ready to deploy" },
//             {
//               icon: Gauge,
//               label: "70% Efficiency",
//               value: "Average improvement",
//             },
//             {
//               icon: Clock,
//               label: "24/7 Operation",
//               value: "Non-stop automation",
//             },
//             { icon: TrendingUp, label: "3x ROI", value: "Typical return" },
//           ].map((stat, index) => (
//             <motion.div
//               key={stat.label}
//               whileHover={{ y: -5 }}
//               className="glass rounded-2xl p-6 text-center"
//             >
//               <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400" />
//               <div className="text-2xl font-bold mb-1">{stat.label}</div>
//               <p className="text-sm text-zinc-400">{stat.value}</p>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// // Reusable UseCaseCard Component
// function UseCaseCard({
//   useCase,
//   isSelected,
//   onClick,
// }: {
//   useCase: any;
//   isSelected: boolean;
//   onClick: () => void;
// }) {
//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       onClick={onClick}
//       className="relative group flex-shrink-0 w-[280px] sm:w-[300px] cursor-pointer"
//     >
//       <div
//         className="glass rounded-2xl p-5 transition-all duration-300"
//         style={{
//           background: isSelected
//             ? `linear-gradient(135deg, ${useCase.color}15, ${useCase.color}05)`
//             : "rgba(19, 19, 24, 0.7)",
//           border: `1px solid ${useCase.color}${isSelected ? "66" : "33"}`,
//           boxShadow: isSelected ? `0 0 30px ${useCase.color}33` : "none",
//         }}
//       >
//         {/* Top Bar */}
//         <div className="flex items-center justify-between mb-3">
//           <div
//             className="p-2.5 rounded-xl"
//             style={{ background: `${useCase.color}22` }}
//           >
//             <useCase.icon
//               className="w-6 h-6"
//               style={{ color: useCase.color }}
//             />
//           </div>
//           <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
//         </div>

//         {/* Title & Description */}
//         <h3 className="font-semibold text-sm mb-2">{useCase.title}</h3>
//         <p className="text-xs text-zinc-400 mb-3">{useCase.description}</p>

//         {/* Metrics */}
//         <div className="flex items-center gap-3 mb-3">
//           <div className="flex items-center gap-1.5">
//             <TrendingUp
//               className="w-3.5 h-3.5"
//               style={{ color: useCase.color }}
//             />
//             <span className="text-xs text-zinc-300">
//               {useCase.metrics.efficiency}
//             </span>
//           </div>
//           <div className="flex items-center gap-1.5">
//             <Clock className="w-3.5 h-3.5" style={{ color: useCase.color }} />
//             <span className="text-xs text-zinc-300">
//               {useCase.metrics.response}
//             </span>
//           </div>
//         </div>

//         {/* Category Badge */}
//         <div className="flex items-center justify-between">
//           <span
//             className="text-[10px] px-2 py-1 rounded-full"
//             style={{
//               background: `${useCase.color}22`,
//               color: useCase.color,
//             }}
//           >
//             {useCase.category}
//           </span>
//           <ChevronRight
//             className={`w-4 h-4 transition-transform ${
//               isSelected ? "rotate-90" : ""
//             }`}
//             style={{ color: useCase.color }}
//           />
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// components/sections/UseCases.tsx
"use client";

import { useState, useEffect } from "react";
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
  ArrowUpRight,
  Zap,
  TrendingUp,
  Clock,
  CheckCircle2,
  ChevronRight,
  Gauge,
  MessageSquare,
  Users,
  Globe,
  Send,
  Bell,
  ClipboardList,
  FileSpreadsheet,
  Package,
  Star,
  RefreshCw,
  Filter,
  PieChart,
  LineChart,
  Inbox,
  CalendarClock,
  UserPlus,
  GitBranch,
  Layers,
  Pause,
  Play,
} from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

const useCases = [
  // Sales & Lead Automation
  {
    icon: Target,
    title: "Lead Capture",
    description: "Automatically capture leads from multiple sources",
    category: "Sales & Lead Automation",
    metrics: { efficiency: "+50%", response: "Real-time" },
    features: [
      "Multi-channel capture",
      "Form automation",
      "Web scraping",
      "API integration",
    ],
  },
  {
    icon: Filter,
    title: "Lead Qualification",
    description: "Smart lead scoring and qualification system",
    category: "Sales & Lead Automation",
    metrics: { efficiency: "+45%", response: "Instant" },
    features: [
      "Automated lead scoring",
      "Intent detection",
      "Priority routing",
      "CRM updates",
    ],
  },
  {
    icon: Database,
    title: "Lead Enrichment",
    description: "Automatically enrich lead data with additional insights",
    category: "Sales & Lead Automation",
    metrics: { efficiency: "+40%", response: "Automated" },
    features: [
      "Data enrichment",
      "Company information",
      "Social profiles",
      "Behavior tracking",
    ],
  },
  {
    icon: Send,
    title: "Follow-up Automation",
    description: "Automated follow-up sequences and reminders",
    category: "Sales & Lead Automation",
    metrics: { efficiency: "+55%", response: "Scheduled" },
    features: [
      "Email sequences",
      "SMS follow-ups",
      "Task reminders",
      "Re-engagement campaigns",
    ],
  },
  {
    icon: Users,
    title: "CRM Automation",
    description: "Seamless CRM integration and automation",
    category: "Sales & Lead Automation",
    metrics: { efficiency: "+50%", response: "Sync" },
    features: [
      "Contact management",
      "Activity tracking",
      "Pipeline automation",
      "Data synchronization",
    ],
  },
  {
    icon: TrendingUp,
    title: "Sales Pipeline Automation",
    description: "Automated sales pipeline management and tracking",
    category: "Sales & Lead Automation",
    metrics: { efficiency: "+60%", response: "Real-time" },
    features: [
      "Stage automation",
      "Deal tracking",
      "Forecasting",
      "Performance analytics",
    ],
  },

  // Marketing Automation
  {
    icon: Megaphone,
    title: "Campaign Automation",
    description: "Automated marketing campaigns across channels",
    category: "Marketing Automation",
    metrics: { efficiency: "+55%", response: "Scheduled" },
    features: [
      "Multi-channel campaigns",
      "Trigger-based automation",
      "A/B testing",
      "Performance tracking",
    ],
  },
  {
    icon: FileText,
    title: "Content Workflows",
    description: "Automated content creation and distribution",
    category: "Marketing Automation",
    metrics: { efficiency: "+45%", response: "Automated" },
    features: [
      "Content scheduling",
      "Social media automation",
      "Blog distribution",
      "Content repurposing",
    ],
  },
  {
    icon: GitBranch,
    title: "Customer Journeys",
    description: "Automated customer journey mapping and execution",
    category: "Marketing Automation",
    metrics: { efficiency: "+50%", response: "Triggered" },
    features: [
      "Journey mapping",
      "Behavioral triggers",
      "Personalization",
      "Lifecycle automation",
    ],
  },
  {
    icon: Mail,
    title: "Email Campaigns",
    description: "Automated email marketing campaigns",
    category: "Marketing Automation",
    metrics: { efficiency: "+48%", response: "Scheduled" },
    features: [
      "Drip campaigns",
      "Newsletter automation",
      "Personalization",
      "Analytics tracking",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Automated marketing analytics and reporting",
    category: "Marketing Automation",
    metrics: { efficiency: "+65%", response: "Real-time" },
    features: [
      "Real-time dashboards",
      "ROI tracking",
      "Attribution modeling",
      "Custom reports",
    ],
  },

  // Customer Support Automation
  {
    icon: Headphones,
    title: "Automated Responses",
    description: "Intelligent automated customer support responses",
    category: "Customer Support Automation",
    metrics: { efficiency: "+60%", response: "Instant" },
    features: [
      "AI-powered responses",
      "Multi-language support",
      "Context awareness",
      "24/7 availability",
    ],
  },
  {
    icon: GitBranch,
    title: "Ticket Routing",
    description: "Smart ticket categorization and routing",
    category: "Customer Support Automation",
    metrics: { efficiency: "+55%", response: "Real-time" },
    features: [
      "Priority-based routing",
      "Department assignment",
      "SLA tracking",
      "Escalation management",
    ],
  },
  {
    icon: BookOpen,
    title: "FAQ Automation",
    description: "Automated FAQ responses and knowledge base",
    category: "Customer Support Automation",
    metrics: { efficiency: "+50%", response: "Instant" },
    features: [
      "Smart FAQ matching",
      "Knowledge base integration",
      "Self-service portal",
      "Continuous learning",
    ],
  },
  {
    icon: Database,
    title: "Knowledge Base Integration",
    description: "Integrated knowledge management system",
    category: "Customer Support Automation",
    metrics: { efficiency: "+45%", response: "Sync" },
    features: [
      "Centralized knowledge",
      "Document indexing",
      "Search optimization",
      "Content updates",
    ],
  },
  {
    icon: Bell,
    title: "Customer Notifications",
    description: "Automated customer notification system",
    category: "Customer Support Automation",
    metrics: { efficiency: "+40%", response: "Triggered" },
    features: [
      "Status updates",
      "Appointment reminders",
      "Ticket updates",
      "Personalized alerts",
    ],
  },

  // Communication Automation
  {
    icon: Mail,
    title: "Email Automation",
    description: "Intelligent email handling and automation",
    category: "Communication Automation",
    metrics: { efficiency: "+45%", response: "< 5min" },
    features: [
      "Smart categorization",
      "Automated responses",
      "Follow-up scheduling",
      "Spam filtering",
    ],
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Automated WhatsApp messaging and responses",
    category: "Communication Automation",
    metrics: { efficiency: "+50%", response: "Instant" },
    features: [
      "Chatbot integration",
      "Bulk messaging",
      "Template automation",
      "Rich media support",
    ],
  },
  {
    icon: Bell,
    title: "Notifications",
    description: "Automated notification system",
    category: "Communication Automation",
    metrics: { efficiency: "+40%", response: "Real-time" },
    features: [
      "Push notifications",
      "In-app alerts",
      "Email notifications",
      "SMS alerts",
    ],
  },
  {
    icon: CalendarClock,
    title: "Appointment Reminders",
    description: "Automated appointment reminder system",
    category: "Communication Automation",
    metrics: { efficiency: "+55%", response: "Scheduled" },
    features: [
      "Multi-channel reminders",
      "Custom scheduling",
      "Rescheduling automation",
      "No-show reduction",
    ],
  },
  {
    icon: RefreshCw,
    title: "Follow-up Systems",
    description: "Automated follow-up communication",
    category: "Communication Automation",
    metrics: { efficiency: "+48%", response: "Sequential" },
    features: [
      "Sequence automation",
      "Trigger-based follow-ups",
      "Response tracking",
      "Engagement scoring",
    ],
  },

  // Operations Automation
  {
    icon: FileText,
    title: "Document Processing",
    description: "Automated document handling and extraction",
    category: "Operations Automation",
    metrics: { efficiency: "+65%", response: "Instant" },
    features: [
      "OCR extraction",
      "Document classification",
      "Data validation",
      "Workflow automation",
    ],
  },
  {
    icon: FileSpreadsheet,
    title: "Invoice & Data Extraction",
    description: "Automated invoice and data extraction system",
    category: "Operations Automation",
    metrics: { efficiency: "+70%", response: "Automated" },
    features: [
      "Invoice parsing",
      "Data extraction",
      "Validation rules",
      "ERP integration",
    ],
  },
  {
    icon: UserPlus,
    title: "Employee Onboarding",
    description: "Automated employee onboarding workflows",
    category: "Operations Automation",
    metrics: { efficiency: "+50%", response: "Workflow" },
    features: [
      "Document collection",
      "Account provisioning",
      "Training assignment",
      "Checklist automation",
    ],
  },
  {
    icon: Layers,
    title: "Internal Workflows",
    description: "Automated internal process workflows",
    category: "Operations Automation",
    metrics: { efficiency: "+55%", response: "Automated" },
    features: [
      "Process automation",
      "Task routing",
      "Approval workflows",
      "SLA management",
    ],
  },
  {
    icon: RefreshCw,
    title: "Data Synchronization",
    description: "Automated data sync across systems",
    category: "Operations Automation",
    metrics: { efficiency: "+60%", response: "Real-time" },
    features: [
      "Real-time sync",
      "Conflict resolution",
      "Error handling",
      "Audit logging",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Approval Workflows",
    description: "Automated approval and sign-off processes",
    category: "Operations Automation",
    metrics: { efficiency: "+45%", response: "Triggered" },
    features: [
      "Multi-level approvals",
      "Conditional routing",
      "Reminder automation",
      "Compliance tracking",
    ],
  },

  // Reporting & Data Automation
  {
    icon: BarChart3,
    title: "Automated Reports",
    description: "Automated report generation and distribution",
    category: "Reporting & Data Automation",
    metrics: { efficiency: "+70%", response: "Scheduled" },
    features: [
      "Custom report templates",
      "Automated distribution",
      "Scheduled generation",
      "Multi-format export",
    ],
  },
  {
    icon: PieChart,
    title: "Dashboard Updates",
    description: "Real-time dashboard automation and updates",
    category: "Reporting & Data Automation",
    metrics: { efficiency: "+65%", response: "Real-time" },
    features: [
      "Live data feeds",
      "Visual automation",
      "KPI tracking",
      "Custom widgets",
    ],
  },
  {
    icon: Database,
    title: "Data Collection",
    description: "Automated data collection from multiple sources",
    category: "Reporting & Data Automation",
    metrics: { efficiency: "+60%", response: "Automated" },
    features: [
      "Multi-source collection",
      "API integration",
      "Web scraping",
      "Data validation",
    ],
  },
  {
    icon: Zap,
    title: "Data Processing",
    description: "Automated data processing and transformation",
    category: "Reporting & Data Automation",
    metrics: { efficiency: "+55%", response: "Instant" },
    features: [
      "Data cleaning",
      "Transformation",
      "Enrichment",
      "Normalization",
    ],
  },
  {
    icon: LineChart,
    title: "Insight Generation",
    description: "AI-powered insight generation and analysis",
    category: "Reporting & Data Automation",
    metrics: { efficiency: "+75%", response: "AI-powered" },
    features: [
      "Pattern recognition",
      "Trend analysis",
      "Predictive insights",
      "Recommendations",
    ],
  },

  // E-commerce Automation
  {
    icon: Package,
    title: "Order Processing",
    description: "Automated order processing and fulfillment",
    category: "E-commerce Automation",
    metrics: { efficiency: "+65%", response: "Instant" },
    features: [
      "Order validation",
      "Payment processing",
      "Fulfillment automation",
      "Status updates",
    ],
  },
  {
    icon: RefreshCw,
    title: "Inventory Synchronization",
    description: "Real-time inventory management and sync",
    category: "E-commerce Automation",
    metrics: { efficiency: "+70%", response: "Real-time" },
    features: [
      "Stock tracking",
      "Low-stock alerts",
      "Multi-channel sync",
      "Reorder automation",
    ],
  },
  {
    icon: Bell,
    title: "Customer Notifications",
    description: "Automated customer notification system",
    category: "E-commerce Automation",
    metrics: { efficiency: "+50%", response: "Triggered" },
    features: [
      "Order confirmations",
      "Shipping updates",
      "Delivery notifications",
      "Personalized alerts",
    ],
  },
  {
    icon: Star,
    title: "Review Management",
    description: "Automated review collection and management",
    category: "E-commerce Automation",
    metrics: { efficiency: "+45%", response: "Automated" },
    features: [
      "Review requests",
      "Rating aggregation",
      "Response automation",
      "Sentiment analysis",
    ],
  },
];

const categories = [
  "All",
  ...Array.from(new Set(useCases.map((uc) => uc.category))),
];

export default function UseCases() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCase, setSelectedCase] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const filteredCases =
    activeCategory === "All"
      ? useCases
      : useCases.filter((uc) => uc.category === activeCategory);

  const midpoint = Math.ceil(filteredCases.length / 2);
  const firstRow = filteredCases.slice(0, midpoint);
  const secondRow = filteredCases.slice(midpoint);

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

      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <Sparkles className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-sm text-white/80">AUTOMATION SOLUTIONS</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-white">Complete </span>
            <span style={{ color: PRIMARY }}>automation solutions</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Explore how AI automation transforms every aspect of your business
            operations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveCategory(category);
                setSelectedCase(null);
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "text-white"
                  : "glass text-white/60 hover:text-white"
              }`}
              style={
                activeCategory === category
                  ? {
                      backgroundColor: PRIMARY,
                      boxShadow: `0 10px 30px ${PRIMARY_GLOW}`,
                    }
                  : { border: `1px solid ${PRIMARY_DARK}` }
              }
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Moving Slider Rows */}
        <div className="space-y-6">
          {/* Row 1 - Left to Right */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-5"
              animate={{
                x: isPaused ? 0 : ["0%", "-50%"],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
            >
              {[...firstRow, ...firstRow].map((useCase, index) => (
                <UseCaseCard
                  key={`${useCase.title}-${index}`}
                  useCase={useCase}
                  isSelected={selectedCase === useCase.title}
                  onClick={() =>
                    setSelectedCase(
                      selectedCase === useCase.title ? null : useCase.title,
                    )
                  }
                />
              ))}
            </motion.div>
          </div>

          {/* Row 2 - Right to Left */}
          <div
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <motion.div
              className="flex gap-5"
              animate={{
                x: isPaused ? 0 : ["-50%", "0%"],
              }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                },
              }}
            >
              {[...secondRow, ...secondRow].map((useCase, index) => (
                <UseCaseCard
                  key={`${useCase.title}-${index}`}
                  useCase={useCase}
                  isSelected={selectedCase === useCase.title}
                  onClick={() =>
                    setSelectedCase(
                      selectedCase === useCase.title ? null : useCase.title,
                    )
                  }
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Selected Case Details */}
        <AnimatePresence>
          {selectedCase && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8"
            >
              {(() => {
                const caseData = useCases.find(
                  (uc) => uc.title === selectedCase,
                );
                if (!caseData) return null;

                return (
                  <div
                    className="glass rounded-2xl p-6 lg:p-8"
                    style={{
                      border: `1px solid ${PRIMARY_LIGHT}`,
                      boxShadow: `0 0 30px ${PRIMARY_GLOW}`,
                    }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className="p-3 rounded-xl"
                        style={{ background: PRIMARY_DARK }}
                      >
                        <caseData.icon
                          className="w-7 h-7"
                          style={{ color: PRIMARY }}
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {caseData.title}
                        </h3>
                        <p className="text-sm text-white/60">
                          {caseData.description}
                        </p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {caseData.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-sm text-white/60 p-3 rounded-lg bg-white/5"
                        >
                          <CheckCircle2
                            className="w-4 h-4 flex-shrink-0"
                            style={{ color: PRIMARY }}
                          />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Zap, label: "35+ Use Cases", value: "Ready to deploy" },
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
              style={{ border: `1px solid ${PRIMARY_DARK}` }}
            >
              <stat.icon
                className="w-8 h-8 mx-auto mb-3"
                style={{ color: PRIMARY }}
              />
              <div className="text-2xl font-bold text-white mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-white/60">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Reusable UseCaseCard Component
function UseCaseCard({
  useCase,
  isSelected,
  onClick,
}: {
  useCase: any;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
      className="relative group flex-shrink-0 w-[280px] sm:w-[300px] cursor-pointer"
    >
      <div
        className="glass rounded-2xl p-5 transition-all duration-300"
        style={{
          background: isSelected
            ? `linear-gradient(135deg, ${PRIMARY_DARK}, rgba(235, 106, 80, 0.1))`
            : "rgba(19, 19, 24, 0.7)",
          border: `1px solid ${isSelected ? PRIMARY_LIGHT : PRIMARY_DARK}`,
          boxShadow: isSelected ? `0 0 30px ${PRIMARY_GLOW}` : "none",
        }}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-3">
          <div
            className="p-2.5 rounded-xl"
            style={{
              background: PRIMARY_DARK,
              border: `1px solid ${PRIMARY_LIGHT}`,
            }}
          >
            <useCase.icon className="w-6 h-6" style={{ color: PRIMARY }} />
          </div>
          <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
        </div>

        {/* Title & Description */}
        <h3 className="font-semibold text-sm mb-2 text-white">
          {useCase.title}
        </h3>
        <p className="text-xs text-white/60 mb-3">{useCase.description}</p>

        {/* Metrics */}
        <div className="flex items-center gap-3 mb-3">
          <div className="flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" style={{ color: PRIMARY }} />
            <span className="text-xs text-white/60">
              {useCase.metrics.efficiency}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" style={{ color: PRIMARY }} />
            <span className="text-xs text-white/60">
              {useCase.metrics.response}
            </span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span
            className="text-[10px] px-2 py-1 rounded-full"
            style={{
              background: PRIMARY_DARK,
              color: PRIMARY,
            }}
          >
            {useCase.category}
          </span>
          <ChevronRight
            className={`w-4 h-4 transition-transform ${
              isSelected ? "rotate-90" : ""
            }`}
            style={{ color: PRIMARY }}
          />
        </div>
      </div>
    </motion.div>
  );
}
