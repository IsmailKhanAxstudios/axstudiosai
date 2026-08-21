// components/about/Mission.tsx
"use client";

import { motion } from "framer-motion";
import { Target, Zap, Brain, TrendingUp } from "lucide-react";

const focus = [
  {
    icon: Brain,
    title: "Intelligent Systems",
    description: "Building AI-powered systems that think and adapt.",
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Eliminating manual work through smart automation.",
  },
  {
    icon: Target,
    title: "AI Agents",
    description: "Creating autonomous agents that handle complex tasks.",
  },
  {
    icon: TrendingUp,
    title: "Business Efficiency",
    description: "Optimizing operations for maximum performance.",
  },
];

export default function Mission() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            To help businesses leverage AI and automation to operate more
            efficiently, scale faster, and focus on what truly matters.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {focus.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <item.icon className="w-10 h-10 mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
