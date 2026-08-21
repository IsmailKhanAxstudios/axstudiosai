// components/about/Approach.tsx
"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Hammer,
  TestTube,
  Rocket,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover",
    description:
      "We start by understanding your business, processes, and pain points.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "We design automation solutions tailored to your specific needs.",
  },
  {
    icon: Hammer,
    title: "Build",
    description: "We develop and implement the automation systems.",
  },
  {
    icon: TestTube,
    title: "Test",
    description: "We thoroughly test everything before deployment.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "We deploy the solution and ensure smooth transition.",
  },
  {
    icon: TrendingUp,
    title: "Optimize",
    description: "We continuously monitor and improve the systems.",
  },
];

export default function Approach() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Approach</h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            A proven methodology for successful AI automation implementation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <step.icon className="w-6 h-6 text-purple-400" />
                <span className="text-sm text-zinc-500 font-mono">
                  Step {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-zinc-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
