// components/about/AboutHero.tsx
"use client";

import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            We build systems that make
            <br />
            <span className="gradient-text">businesses smarter.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            AxStudios is an AI automation studio focused on creating intelligent
            systems, automation, AI agents, and custom software that transform
            how businesses operate.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
