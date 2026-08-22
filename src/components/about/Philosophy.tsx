// components/about/Philosophy.tsx
"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Lightbulb,
  TrendingUp,
  Gauge,
  Users,
} from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

const principles = [
  {
    icon: Lightbulb,
    title: "AI-First, Not AI-Only",
    description:
      "We use AI where it creates real value, not as a gimmick. The goal is business impact, not just technology.",
  },
  {
    icon: TrendingUp,
    title: "Build for Scale",
    description:
      "Every system we build is designed to handle growth, from 10 users to 10,000.",
  },
  {
    icon: Gauge,
    title: "Measure Everything",
    description:
      "If it can't be measured, it can't be improved. We build analytics into everything we create.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description:
      "Technology should serve people, not the other way around. We design for humans first.",
  },
];

export default function Philosophy() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${PRIMARY_DARK} 0%, transparent 70%)`,
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span style={{ color: PRIMARY }}>Philosophy</span>
          </h2>
          <p className="text-lg text-white/60 max-w-3xl mx-auto">
            The principles that guide how we work and build.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 transition-all duration-300"
              style={{
                border: `1px solid ${PRIMARY_DARK}`,
                boxShadow: `0 5px 15px rgba(0, 0, 0, 0.2)`,
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 rounded-xl flex-shrink-0"
                  style={{
                    background: PRIMARY_DARK,
                    border: `1px solid ${PRIMARY_LIGHT}`,
                  }}
                >
                  <principle.icon
                    className="w-6 h-6"
                    style={{ color: PRIMARY }}
                  />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-white/60">{principle.description}</p>
                </div>
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="mt-4 h-0.5 rounded-full"
                style={{ background: PRIMARY }}
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
