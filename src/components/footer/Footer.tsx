// components/footer/Footer.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Sparkles, Zap } from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${PRIMARY}, transparent)`,
            opacity: 0.5,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div
                className="p-1.5 rounded-lg"
                style={{
                  background: PRIMARY_DARK,
                  border: `1px solid ${PRIMARY_LIGHT}`,
                }}
              >
                <Zap className="w-4 h-4" style={{ color: PRIMARY }} />
              </div>
              <span className="font-space-grotesk text-xl font-bold text-white">
                AxStudios
              </span>
            </Link>
            <p className="text-white/60 text-sm">
              AI automation systems for ambitious businesses.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-4">
              {["Twitter", "LinkedIn", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="p-2 rounded-lg transition-all hover:scale-110"
                  style={{
                    background: PRIMARY_DARK,
                    border: `1px solid ${PRIMARY_DARK}`,
                  }}
                  aria-label={social}
                >
                  <ArrowUpRight
                    className="w-4 h-4"
                    style={{ color: PRIMARY }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Navigation</h3>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/solutions", label: "Solutions" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Services</h3>
            <div className="space-y-2">
              {[
                { href: "/services/ai-automation", label: "AI Automation" },
                { href: "/services/ai-agents", label: "AI Agents" },
                {
                  href: "/services/ai-web-applications",
                  label: "AI Web Applications",
                },
                {
                  href: "/services/custom-ai-saas-development",
                  label: "Custom AI & SaaS",
                },
                {
                  href: "/services/ai-automation-audit",
                  label: "Strategy & Audit",
                },
                {
                  href: "/services/ai-consultancy",
                  label: "AI Consultancy",
                },
                {
                  href: "/services/ai-integration",
                  label: "AI Integration",
                },
                {
                  href: "/services/ai-maintenance",
                  label: "AI Maintenance",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@axstudios.tech"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" style={{ color: PRIMARY }} />
                contact@axstudios.tech
                <ArrowUpRight className="w-4 h-4" style={{ color: PRIMARY }} />
              </a>

              {/* CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-all hover:scale-105"
                style={{
                  backgroundColor: PRIMARY,
                  boxShadow: `0 10px 30px ${PRIMARY_GLOW}`,
                }}
              >
                Book a Strategy Call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/40">
              © {currentYear} AxStudios. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-white/40">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="text-white/20">•</span>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <span className="text-white/20">•</span>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
