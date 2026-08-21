// components/sections/WhyAxStudios.tsx
"use client";

import { motion } from "framer-motion";
import { Heart, Brain, Network, TrendingUp, Users, Target } from "lucide-react";

const reasons = [
  {
    icon: Heart,
    title: "Built Around You",
    description:
      "No cookie-cutter automation packages. Every system is designed around your specific business needs.",
  },
  {
    icon: Brain,
    title: "AI First",
    description:
      "We use AI where it creates real business leverage, not just for the sake of using AI.",
  },
  {
    icon: Network,
    title: "Connected Systems",
    description:
      "Connect CRM, email, databases, APIs, websites, and internal tools seamlessly.",
  },
  {
    icon: TrendingUp,
    title: "Built to Scale",
    description:
      "Systems designed to grow with your business, handling increased volume without breaking.",
  },
  {
    icon: Users,
    title: "Human + AI",
    description:
      "Automation handles repetitive work while humans stay focused on high-value decisions.",
  },
  {
    icon: Target,
    title: "Results Focused",
    description:
      "Every automation should have a measurable business purpose and clear ROI.",
  },
];

export default function WhyAxStudios() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Why businesses choose AxStudios
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            We're not just another automation agency. We're your strategic
            partner in digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 gradient-border hover:bg-zinc-900/50 transition-all"
            >
              <reason.icon className="w-10 h-10 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-zinc-400">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
