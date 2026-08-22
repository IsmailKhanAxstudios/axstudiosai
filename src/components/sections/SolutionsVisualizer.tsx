// // components/sections/SolutionsVisualizer.tsx
// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   TrendingUp,
//   Megaphone,
//   Cog,
//   Headphones,
//   DollarSign,
//   Users,
//   Database,
//   ShoppingCart,
//   ArrowRight,
//   CheckCircle,
// } from "lucide-react";

// const categories = [
//   { id: "sales", label: "Sales", icon: TrendingUp },
//   { id: "marketing", label: "Marketing", icon: Megaphone },
//   { id: "operations", label: "Operations", icon: Cog },
//   { id: "support", label: "Customer Support", icon: Headphones },
//   { id: "finance", label: "Finance", icon: DollarSign },
//   { id: "hr", label: "HR", icon: Users },
//   { id: "data", label: "Data", icon: Database },
//   { id: "ecommerce", label: "E-commerce", icon: ShoppingCart },
// ];

// const workflows = {
//   sales: {
//     title: "Sales Automation",
//     steps: [
//       { label: "New Lead", description: "Lead captured from website or form" },
//       {
//         label: "Enrichment",
//         description: "AI enriches lead data automatically",
//       },
//       { label: "AI Qualification", description: "Lead scored and qualified" },
//       { label: "CRM", description: "Automatically added to CRM" },
//       { label: "Follow-up", description: "Personalized outreach sent" },
//       { label: "Meeting", description: "Meeting scheduled automatically" },
//     ],
//   },
//   marketing: {
//     title: "Marketing Automation",
//     steps: [
//       { label: "Content", description: "Content generated and scheduled" },
//       { label: "Campaign", description: "Campaign launched automatically" },
//       { label: "Distribution", description: "Multi-channel distribution" },
//       { label: "Analytics", description: "Performance tracked" },
//       { label: "Optimization", description: "AI optimizes campaigns" },
//     ],
//   },
//   operations: {
//     title: "Operations Automation",
//     steps: [
//       { label: "Request", description: "Request received" },
//       { label: "Classification", description: "AI classifies request" },
//       { label: "Assignment", description: "Routed to correct team" },
//       { label: "Execution", description: "Task executed" },
//       { label: "Notification", description: "Stakeholders notified" },
//       { label: "Report", description: "Report generated" },
//     ],
//   },
//   support: {
//     title: "Support Automation",
//     steps: [
//       { label: "Ticket", description: "Customer submits request" },
//       { label: "AI Analysis", description: "AI analyzes and categorizes" },
//       { label: "Resolution", description: "Auto-resolved or escalated" },
//       { label: "Response", description: "Customer notified" },
//       { label: "Follow-up", description: "Satisfaction survey sent" },
//     ],
//   },
//   finance: {
//     title: "Finance Automation",
//     steps: [
//       { label: "Invoice", description: "Invoice received" },
//       { label: "Extraction", description: "Data extracted by AI" },
//       { label: "Verification", description: "Data verified" },
//       { label: "Approval", description: "Routed for approval" },
//       { label: "Payment", description: "Payment processed" },
//       { label: "Reconciliation", description: "Accounts updated" },
//     ],
//   },
//   hr: {
//     title: "HR Automation",
//     steps: [
//       { label: "Application", description: "Application received" },
//       { label: "Screening", description: "AI screens candidates" },
//       { label: "Scheduling", description: "Interviews scheduled" },
//       { label: "Onboarding", description: "Onboarding triggered" },
//       { label: "Training", description: "Training assigned" },
//     ],
//   },
//   data: {
//     title: "Data Automation",
//     steps: [
//       { label: "Collection", description: "Data collected" },
//       { label: "Processing", description: "Data processed" },
//       { label: "Analysis", description: "AI analyzes data" },
//       { label: "Insights", description: "Insights generated" },
//       { label: "Reporting", description: "Reports created" },
//       { label: "Action", description: "Actions triggered" },
//     ],
//   },
//   ecommerce: {
//     title: "E-commerce Automation",
//     steps: [
//       { label: "Order", description: "Order received" },
//       { label: "Processing", description: "Order processed" },
//       { label: "Inventory", description: "Inventory updated" },
//       { label: "Shipping", description: "Shipping arranged" },
//       { label: "Tracking", description: "Customer notified" },
//       { label: "Review", description: "Review requested" },
//     ],
//   },
// };

// export default function SolutionsVisualizer() {
//   const [activeCategory, setActiveCategory] = useState("sales");
//   const workflow = workflows[activeCategory as keyof typeof workflows];

//   return (
//     <section className="py-20 relative">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl lg:text-5xl font-bold mb-4">
//             What can we automate?
//           </h2>
//           <p className="text-lg text-zinc-400">
//             Explore automation possibilities across your entire business.
//           </p>
//         </motion.div>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               onClick={() => setActiveCategory(category.id)}
//               className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
//                 activeCategory === category.id
//                   ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
//                   : "glass text-zinc-400 hover:text-white"
//               }`}
//             >
//               <category.icon className="w-4 h-4" />
//               <span className="text-sm">{category.label}</span>
//             </button>
//           ))}
//         </div>

//         {/* Workflow Display */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={activeCategory}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="glass rounded-3xl p-8 lg:p-12"
//           >
//             <h3 className="text-2xl font-bold mb-8 text-center">
//               {workflow.title}
//             </h3>

//             <div className="flex flex-wrap justify-center gap-4">
//               {workflow.steps.map((step, index) => (
//                 <motion.div
//                   key={step.label}
//                   initial={{ opacity: 0, x: -20 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   className="flex items-center gap-4"
//                 >
//                   <div className="glass rounded-xl p-4 text-center min-w-[120px] hover:scale-105 transition-transform">
//                     <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-400" />
//                     <p className="font-semibold text-sm mb-1">{step.label}</p>
//                     <p className="text-xs text-zinc-400">{step.description}</p>
//                   </div>
//                   {index < workflow.steps.length - 1 && (
//                     <ArrowRight className="w-6 h-6 text-zinc-600" />
//                   )}
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>
//         </AnimatePresence>
//       </div>
//     </section>
//   );
// }
// components/sections/SolutionsVisualizer.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Megaphone,
  Cog,
  Headphones,
  DollarSign,
  Users,
  Database,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
} from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

const categories = [
  { id: "sales", label: "Sales", icon: TrendingUp },
  { id: "marketing", label: "Marketing", icon: Megaphone },
  { id: "operations", label: "Operations", icon: Cog },
  { id: "support", label: "Customer Support", icon: Headphones },
  { id: "finance", label: "Finance", icon: DollarSign },
  { id: "hr", label: "HR", icon: Users },
  { id: "data", label: "Data", icon: Database },
  { id: "ecommerce", label: "E-commerce", icon: ShoppingCart },
];

const workflows = {
  sales: {
    title: "Sales Automation",
    steps: [
      { label: "New Lead", description: "Lead captured from website or form" },
      {
        label: "Enrichment",
        description: "AI enriches lead data automatically",
      },
      { label: "AI Qualification", description: "Lead scored and qualified" },
      { label: "CRM", description: "Automatically added to CRM" },
      { label: "Follow-up", description: "Personalized outreach sent" },
      { label: "Meeting", description: "Meeting scheduled automatically" },
    ],
  },
  marketing: {
    title: "Marketing Automation",
    steps: [
      { label: "Content", description: "Content generated and scheduled" },
      { label: "Campaign", description: "Campaign launched automatically" },
      { label: "Distribution", description: "Multi-channel distribution" },
      { label: "Analytics", description: "Performance tracked" },
      { label: "Optimization", description: "AI optimizes campaigns" },
    ],
  },
  operations: {
    title: "Operations Automation",
    steps: [
      { label: "Request", description: "Request received" },
      { label: "Classification", description: "AI classifies request" },
      { label: "Assignment", description: "Routed to correct team" },
      { label: "Execution", description: "Task executed" },
      { label: "Notification", description: "Stakeholders notified" },
      { label: "Report", description: "Report generated" },
    ],
  },
  support: {
    title: "Support Automation",
    steps: [
      { label: "Ticket", description: "Customer submits request" },
      { label: "AI Analysis", description: "AI analyzes and categorizes" },
      { label: "Resolution", description: "Auto-resolved or escalated" },
      { label: "Response", description: "Customer notified" },
      { label: "Follow-up", description: "Satisfaction survey sent" },
    ],
  },
  finance: {
    title: "Finance Automation",
    steps: [
      { label: "Invoice", description: "Invoice received" },
      { label: "Extraction", description: "Data extracted by AI" },
      { label: "Verification", description: "Data verified" },
      { label: "Approval", description: "Routed for approval" },
      { label: "Payment", description: "Payment processed" },
      { label: "Reconciliation", description: "Accounts updated" },
    ],
  },
  hr: {
    title: "HR Automation",
    steps: [
      { label: "Application", description: "Application received" },
      { label: "Screening", description: "AI screens candidates" },
      { label: "Scheduling", description: "Interviews scheduled" },
      { label: "Onboarding", description: "Onboarding triggered" },
      { label: "Training", description: "Training assigned" },
    ],
  },
  data: {
    title: "Data Automation",
    steps: [
      { label: "Collection", description: "Data collected" },
      { label: "Processing", description: "Data processed" },
      { label: "Analysis", description: "AI analyzes data" },
      { label: "Insights", description: "Insights generated" },
      { label: "Reporting", description: "Reports created" },
      { label: "Action", description: "Actions triggered" },
    ],
  },
  ecommerce: {
    title: "E-commerce Automation",
    steps: [
      { label: "Order", description: "Order received" },
      { label: "Processing", description: "Order processed" },
      { label: "Inventory", description: "Inventory updated" },
      { label: "Shipping", description: "Shipping arranged" },
      { label: "Tracking", description: "Customer notified" },
      { label: "Review", description: "Review requested" },
    ],
  },
};

export default function SolutionsVisualizer() {
  const [activeCategory, setActiveCategory] = useState("sales");
  const workflow = workflows[activeCategory as keyof typeof workflows];

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            <Zap className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-sm text-white/80">SOLUTIONS</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-white">What can we </span>
            <span style={{ color: PRIMARY }}>automate?</span>
          </h2>
          <p className="text-lg text-white/60">
            Explore automation possibilities across your entire business.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "text-white"
                  : "glass text-white/60 hover:text-white"
              }`}
              style={
                activeCategory === category.id
                  ? {
                      backgroundColor: PRIMARY,
                      boxShadow: `0 10px 30px ${PRIMARY_GLOW}`,
                    }
                  : { border: `1px solid ${PRIMARY_DARK}` }
              }
            >
              <category.icon className="w-4 h-4" />
              <span>{category.label}</span>
            </motion.button>
          ))}
        </div>

        {/* Workflow Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="glass rounded-3xl p-8 lg:p-12"
            style={{ border: `1px solid ${PRIMARY_DARK}` }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-white">
              {workflow.title}
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {workflow.steps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass rounded-xl p-4 text-center min-w-[120px] transition-all duration-300"
                    style={{
                      border: `1px solid ${PRIMARY_DARK}`,
                      boxShadow: `0 5px 15px rgba(0, 0, 0, 0.2)`,
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="mx-auto mb-2 w-10 h-10 flex items-center justify-center rounded-full"
                      style={{ background: PRIMARY_DARK }}
                    >
                      <CheckCircle
                        className="w-5 h-5"
                        style={{ color: PRIMARY }}
                      />
                    </motion.div>
                    <p className="font-semibold text-sm mb-1 text-white">
                      {step.label}
                    </p>
                    <p className="text-xs text-white/60">{step.description}</p>
                  </motion.div>
                  {index < workflow.steps.length - 1 && (
                    <ArrowRight
                      className="w-6 h-6 flex-shrink-0"
                      style={{ color: PRIMARY }}
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
