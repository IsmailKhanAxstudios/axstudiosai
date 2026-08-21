// components/sections/CTASection.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative glass rounded-3xl p-12 lg:p-20 text-center overflow-hidden"
        >
          {/* Animated background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10" />
            <motion.div
              className="absolute -top-20 -left-20 w-96 h-96 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)",
              }}
              animate={{
                scale: [1.2, 1, 1.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl lg:text-6xl font-bold mb-6"
            >
              Ready to automate the work that slows you down?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto"
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
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:contact@axstudios.tech"
                className="glass inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-zinc-300 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@axstudios.tech
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
