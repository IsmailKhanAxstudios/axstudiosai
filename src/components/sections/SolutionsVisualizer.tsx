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
} from "lucide-react";

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
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            What can we automate?
          </h2>
          <p className="text-lg text-zinc-400">
            Explore automation possibilities across your entire business.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
                  : "glass text-zinc-400 hover:text-white"
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span className="text-sm">{category.label}</span>
            </button>
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
          >
            <h3 className="text-2xl font-bold mb-8 text-center">
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
                  <div className="glass rounded-xl p-4 text-center min-w-[120px] hover:scale-105 transition-transform">
                    <CheckCircle className="w-6 h-6 mx-auto mb-2 text-green-400" />
                    <p className="font-semibold text-sm mb-1">{step.label}</p>
                    <p className="text-xs text-zinc-400">{step.description}</p>
                  </div>
                  {index < workflow.steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-zinc-600" />
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
