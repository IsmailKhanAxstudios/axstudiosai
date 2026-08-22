// components/sections/CTASection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Sparkles, Zap } from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

export default function CTASection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative glass rounded-3xl p-12 lg:p-20 text-center overflow-hidden"
          style={{
            border: `1px solid ${PRIMARY_LIGHT}`,
            boxShadow: `0 20px 60px ${PRIMARY_GLOW}`,
          }}
        >
          {/* Animated background */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute top-0 left-0 w-full h-full"
              style={{
                background: `linear-gradient(135deg, ${PRIMARY_DARK}, rgba(235, 106, 80, 0.1))`,
              }}
            />
            <motion.div
              className="absolute -top-20 -left-20 w-96 h-96 rounded-full"
              style={{
                background: `radial-gradient(circle, ${PRIMARY_GLOW} 0%, transparent 70%)`,
              }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full"
              style={{
                background: `radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%)`,
              }}
              animate={{ scale: [1.2, 1, 1.2] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
              style={{ border: `1px solid ${PRIMARY_DARK}` }}
            >
              <Sparkles className="w-4 h-4" style={{ color: PRIMARY }} />
              <span className="text-sm text-white/80">GET STARTED TODAY</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl lg:text-6xl font-bold mb-6 text-white"
            >
              Ready to automate the work that{" "}
              <span style={{ color: PRIMARY }}>slows you down?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-white/60 mb-10 max-w-2xl mx-auto"
            >
              Tell us what your business is doing manually. We'll help you
              identify what can be automated.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-white font-medium transition-all hover:scale-105"
                style={{
                  backgroundColor: PRIMARY,
                  boxShadow: `0 10px 30px ${PRIMARY_GLOW}`,
                }}
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:contact@axstudios.tech"
                className="glass inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-white/80 hover:text-white transition-all"
                style={{ border: `1px solid ${PRIMARY_DARK}` }}
              >
                <Mail className="w-5 h-5" style={{ color: PRIMARY }} />
                contact@axstudios.tech
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-white/40"
            >
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" style={{ color: PRIMARY }} />
                <span>Free 30-min consultation</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" style={{ color: PRIMARY }} />
                <span>No commitment required</span>
              </div>
              <span className="text-white/20">•</span>
              <div className="flex items-center gap-2">
                <Zap className="w-3.5 h-3.5" style={{ color: PRIMARY }} />
                <span>Response within 24 hours</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
