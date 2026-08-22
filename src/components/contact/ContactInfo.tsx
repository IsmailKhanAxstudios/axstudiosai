// components/contact/ContactInfo.tsx
"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Clock,
  MessageSquare,
  Zap,
  Shield,
  Sparkles,
} from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      {/* Contact Information */}
      <div
        className="glass rounded-3xl p-8"
        style={{ border: `1px solid ${PRIMARY_DARK}` }}
      >
        <div className="flex items-center gap-2 mb-6">
          <div
            className="p-2 rounded-lg"
            style={{
              background: PRIMARY_DARK,
              border: `1px solid ${PRIMARY_LIGHT}`,
            }}
          >
            <Mail className="w-5 h-5" style={{ color: PRIMARY }} />
          </div>
          <h2 className="text-2xl font-bold text-white">Contact Information</h2>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:contact@axstudios.tech"
            className="flex items-center gap-3 text-white/60 hover:text-white transition-colors"
          >
            <Mail className="w-5 h-5" style={{ color: PRIMARY }} />
            contact@axstudios.tech
          </a>

          {/* Divider */}
          <div className="h-px bg-white/10" />

          {/* Quick Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-white/40">
              <Clock className="w-4 h-4" style={{ color: PRIMARY }} />
              Mon - Fri, 9 AM - 6 PM EST
            </div>
            <div className="flex items-center gap-2 text-sm text-white/40">
              <Shield className="w-4 h-4" style={{ color: PRIMARY }} />
              NDA available on request
            </div>
          </div>
        </div>
      </div>

      {/* What to Expect */}
      <div
        className="glass rounded-3xl p-8"
        style={{ border: `1px solid ${PRIMARY_DARK}` }}
      >
        <div className="flex items-center gap-2 mb-6">
          <div
            className="p-2 rounded-lg"
            style={{
              background: PRIMARY_DARK,
              border: `1px solid ${PRIMARY_LIGHT}`,
            }}
          >
            <Sparkles className="w-5 h-5" style={{ color: PRIMARY }} />
          </div>
          <h2 className="text-2xl font-bold text-white">What to Expect</h2>
        </div>

        <div className="space-y-5">
          <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
            <div
              className="p-2 rounded-lg flex-shrink-0"
              style={{
                background: PRIMARY_DARK,
                border: `1px solid ${PRIMARY_LIGHT}`,
              }}
            >
              <Clock className="w-4 h-4" style={{ color: PRIMARY }} />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">
                24-Hour Response
              </h3>
              <p className="text-sm text-white/60">
                We respond to all inquiries within one business day.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
            <div
              className="p-2 rounded-lg flex-shrink-0"
              style={{
                background: PRIMARY_DARK,
                border: `1px solid ${PRIMARY_LIGHT}`,
              }}
            >
              <MessageSquare className="w-4 h-4" style={{ color: PRIMARY }} />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">
                Free Strategy Call
              </h3>
              <p className="text-sm text-white/60">
                A 30-minute call to discuss your needs and identify
                opportunities.
              </p>
            </div>
          </motion.div>

          <motion.div whileHover={{ x: 5 }} className="flex items-start gap-3">
            <div
              className="p-2 rounded-lg flex-shrink-0"
              style={{
                background: PRIMARY_DARK,
                border: `1px solid ${PRIMARY_LIGHT}`,
              }}
            >
              <Zap className="w-4 h-4" style={{ color: PRIMARY }} />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">
                Actionable Insights
              </h3>
              <p className="text-sm text-white/60">
                Get concrete recommendations you can implement immediately.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Card */}
      <div
        className="rounded-3xl p-8 text-center"
        style={{
          background: `linear-gradient(135deg, ${PRIMARY_DARK}, rgba(235, 106, 80, 0.1))`,
          border: `1px solid ${PRIMARY_LIGHT}`,
          boxShadow: `0 0 30px ${PRIMARY_GLOW}`,
        }}
      >
        <h3 className="text-lg font-bold text-white mb-2">
          Ready to get started?
        </h3>
        <p className="text-sm text-white/60 mb-4">
          Book your free consultation today.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-white text-sm font-medium transition-all hover:scale-105"
          style={{
            backgroundColor: PRIMARY,
            boxShadow: `0 5px 20px ${PRIMARY_GLOW}`,
          }}
        >
          Book Now
          <Zap className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}
