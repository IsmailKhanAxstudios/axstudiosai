// components/sections/ProblemSection.tsx
"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  Clock,
  Database,
  Unlink,
  Users,
  Settings,
  Layers,
  TrendingDown,
} from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Repetitive Admin Tasks",
    description:
      "Your team wastes hours on manual data entry and repetitive tasks that could be automated instantly.",
  },
  {
    icon: TrendingDown,
    title: "Slow Lead Follow-up",
    description:
      "Leads go cold because responses take hours instead of seconds, losing potential revenue.",
  },
  {
    icon: Database,
    title: "Manual Data Entry",
    description:
      "Information is copied between systems by hand, creating errors and inconsistencies.",
  },
  {
    icon: Unlink,
    title: "Disconnected Software",
    description:
      "Your tools don't talk to each other, creating silos and information gaps.",
  },
  {
    icon: Users,
    title: "Support Overload",
    description:
      "Customer support teams are overwhelmed with repetitive questions and requests.",
  },
  {
    icon: Settings,
    title: "Inefficient Processes",
    description:
      "Internal workflows are slow, unclear, and depend on manual handoffs.",
  },
  {
    icon: Layers,
    title: "Too Many Tools",
    description:
      "You're paying for multiple tools that don't integrate, creating complexity.",
  },
  {
    icon: AlertCircle,
    title: "Lost Opportunities",
    description:
      "Valuable opportunities slip through the cracks due to slow response times.",
  },
];

export default function ProblemSection() {
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
            Your business shouldn't depend on manual work.
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Every hour spent on repetitive tasks is an hour not spent growing
            your business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group glass rounded-2xl p-6 cursor-pointer hover:bg-zinc-900/50 transition-all"
            >
              <problem.icon className="w-8 h-8 mb-4 text-red-400 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold mb-2">{problem.title}</h3>
              <p className="text-sm text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
