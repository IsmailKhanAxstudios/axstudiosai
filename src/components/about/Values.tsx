// components/about/Values.tsx
"use client";

import { motion } from "framer-motion";
import { Shield, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Integrity",
    description: "We are honest, transparent, and ethical in everything we do.",
  },
  {
    icon: Heart,
    title: "Passion",
    description:
      "We genuinely care about our clients' success and go above and beyond.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay at the forefront of AI technology and best practices.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients as true partners.",
  },
];

export default function Values() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
          <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
            The core values that define who we are and how we work.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <value.icon className="w-10 h-10 mx-auto mb-4 text-purple-400" />
              <h3 className="font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-zinc-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
