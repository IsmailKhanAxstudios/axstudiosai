// components/contact/ContactInfo.tsx
"use client";

import { motion } from "framer-motion";
import { Mail, Clock, MessageSquare, Zap } from "lucide-react";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <div className="glass rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

        <div className="space-y-4">
          <a
            href="mailto:contact@axstudios.tech"
            className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5 text-purple-400" />
            contact@axstudios.tech
          </a>
        </div>
      </div>

      <div className="glass rounded-3xl p-8">
        <h2 className="text-2xl font-bold mb-6">What to Expect</h2>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-purple-400 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">24-Hour Response</h3>
              <p className="text-sm text-zinc-400">
                We respond to all inquiries within one business day.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-purple-400 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Free Strategy Call</h3>
              <p className="text-sm text-zinc-400">
                A 30-minute call to discuss your needs and identify
                opportunities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Zap className="w-5 h-5 text-purple-400 mt-1" />
            <div>
              <h3 className="font-semibold mb-1">Actionable Insights</h3>
              <p className="text-sm text-zinc-400">
                Get concrete recommendations you can implement immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
