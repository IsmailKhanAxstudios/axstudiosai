// components/sections/TrustBar.tsx
"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Clock, Zap, Infinity as InfinityIcon } from "lucide-react";

const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

const stats = [
  { icon: TrendingUp, value: 80, suffix: "%", label: "Less Manual Work" },
  { icon: Clock, value: 24, suffix: "/7", label: "AI Operations" },
  { icon: Zap, value: 10, suffix: "x", label: "Faster Workflows" },
  {
    icon: InfinityIcon,
    value: 100,
    suffix: "%",
    label: "Automation Potential",
  },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60; // 60 frames
      const increment = value / steps;
      let current = 0;

      const interval = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(interval);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="inline-block">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function TrustBar() {
  return (
    <section className="py-16 relative">
      {/* Background subtle glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full opacity-10"
          style={{
            background: `radial-gradient(ellipse, ${PRIMARY}, transparent 70%)`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-2xl lg:text-3xl font-bold mb-12 text-white"
        >
          Built for businesses that{" "}
          <span style={{ color: PRIMARY }}>refuse to operate manually.</span>
        </motion.h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center transition-all duration-300"
              style={{
                border: `1px solid ${PRIMARY_DARK}`,
                boxShadow: `0 10px 30px rgba(0, 0, 0, 0.3)`,
              }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-xl"
                style={{
                  background: `${PRIMARY_DARK}`,
                  border: `1px solid ${PRIMARY_LIGHT}`,
                }}
              >
                <stat.icon className="w-7 h-7" style={{ color: PRIMARY }} />
              </motion.div>

              {/* Value */}
              <div className="text-3xl lg:text-4xl font-bold mb-2 text-white">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <p className="text-sm text-white/60">{stat.label}</p>

              {/* Bottom accent line */}
              <motion.div
                className="mt-4 h-0.5 rounded-full mx-auto"
                style={{ background: PRIMARY }}
                initial={{ width: 0 }}
                whileInView={{ width: "60%" }}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
