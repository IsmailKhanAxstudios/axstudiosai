// components/about/Philosophy.tsx
"use client";

import { motion } from "framer-motion";

const principles = [
  {
    title: "AI-First, Not AI-Only",
    description:
      "We use AI where it creates real value, not as a gimmick. The goal is business impact, not just technology.",
  },
  {
    title: "Build for Scale",
    description:
      "Every system we build is designed to handle growth, from 10 users to 10,000.",
  },
  {
    title: "Measure Everything",
    description:
      "If it can't be measured, it can't be improved. We build analytics into everything we create.",
  },
  {
    title: "User-Centric Design",
    description:
      "Technology should serve people, not the other way around. We design for humans first.",
  },
];

export default function Philosophy() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Philosophy
          </h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
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
              className="glass rounded-2xl p-8 gradient-border"
            >
              <h3 className="text-xl font-semibold mb-3">{principle.title}</h3>
              <p className="text-zinc-400">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
