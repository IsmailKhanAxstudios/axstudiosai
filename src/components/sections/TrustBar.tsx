// components/sections/TrustBar.tsx
"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Clock, Zap, Infinity } from "lucide-react";

const stats = [
  { icon: TrendingUp, value: 80, suffix: "%", label: "Less Manual Work" },
  { icon: Clock, value: 24, suffix: "/7", label: "AI Operations" },
  { icon: Zap, value: 10, suffix: "x", label: "Faster Workflows" },
  { icon: Infinity, value: 100, suffix: "%", label: "Automation Potential" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {isInView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          onUpdate={(latest) => {
            if (typeof latest === "number") {
              // Update counter logic here
            }
          }}
        >
          {value}
          {suffix}
        </motion.span>
      ) : (
        <span>0{suffix}</span>
      )}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl lg:text-3xl font-bold mb-12"
        >
          Built for businesses that refuse to operate manually.
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center gradient-border"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
              <div className="text-3xl lg:text-4xl font-bold mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-zinc-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
