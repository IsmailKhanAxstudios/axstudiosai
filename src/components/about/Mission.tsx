// components/about/Mission.tsx
"use client";

import { motion } from "framer-motion";
import { Target, Zap, Brain, TrendingUp } from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

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
    <section className="py-20 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
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
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
            Our <span style={{ color: PRIMARY }}>Mission</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
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
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center transition-all duration-300"
              style={{
                border: `1px solid ${PRIMARY_DARK}`,
                boxShadow: `0 5px 15px rgba(0, 0, 0, 0.2)`,
              }}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-xl"
                style={{
                  background: PRIMARY_DARK,
                  border: `1px solid ${PRIMARY_LIGHT}`,
                }}
              >
                <item.icon className="w-7 h-7" style={{ color: PRIMARY }} />
              </motion.div>
              <h3 className="font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/60">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
