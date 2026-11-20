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

const PRIMARY = "rgb(var(--primary))";
const PRIMARY_LIGHT = "rgb(var(--primary) / 0.6)";
const PRIMARY_DARK = "rgb(var(--primary) / 0.3)";
const PRIMARY_GLOW = "rgb(var(--primary) / 0.5)";

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
            <Mail className="w-5 h-5" style={{ color: "rgb(var(--accent-text))" }} />
          </div>
          <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:contact@axstudios.tech"
            className="flex items-center gap-3 text-secondary-text hover:text-foreground transition-colors"
          >
            <Mail className="w-5 h-5" style={{ color: "rgb(var(--accent-text))" }} />
            contact@axstudios.tech
          </a>

          {/* Divider */}
          <div className="h-px bg-foreground/10" />

          {/* Quick Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted">
              <Clock className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
              Mon - Fri, 9 AM - 6 PM EST
            </div>
            <div className="flex items-center gap-2 text-sm text-muted">
              <Shield className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
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
            <Sparkles className="w-5 h-5" style={{ color: "rgb(var(--accent-text))" }} />
          </div>
          <h2 className="text-2xl font-bold text-foreground">What to Expect</h2>
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
              <Clock className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                24-Hour Response
              </h3>
              <p className="text-sm text-secondary-text">
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
              <MessageSquare className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Free Strategy Call
              </h3>
              <p className="text-sm text-secondary-text">
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
              <Zap className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">
                Actionable Insights
              </h3>
              <p className="text-sm text-secondary-text">
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
          background: `linear-gradient(135deg, ${PRIMARY_DARK}, rgb(var(--primary) / 0.1))`,
          border: `1px solid ${PRIMARY_LIGHT}`,
          boxShadow: `0 0 30px ${PRIMARY_GLOW}`,
        }}
      >
        <h3 className="text-lg font-bold text-foreground mb-2">
          Ready to get started?
        </h3>
        <p className="text-sm text-secondary-text mb-4">
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
