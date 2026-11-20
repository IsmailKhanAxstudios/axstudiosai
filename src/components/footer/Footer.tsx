// components/footer/Footer.tsx
"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Sparkles, Zap } from "lucide-react";

const PRIMARY = "rgb(var(--primary))";
const PRIMARY_LIGHT = "rgb(var(--primary) / 0.6)";
const PRIMARY_DARK = "rgb(var(--primary) / 0.3)";
const PRIMARY_GLOW = "rgb(var(--primary) / 0.5)";

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
                <Zap className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
              </div>
              <span className="font-space-grotesk text-xl font-bold text-foreground">
                AxStudios
              </span>
            </Link>
            <p className="text-secondary-text text-sm">
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
                    style={{ color: "rgb(var(--accent-text))" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Navigation</h3>
            <div className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/solutions", label: "Solutions" },
                { href: "/products", label: "Products" },
                { href: "/blogs", label: "Blogs" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-secondary-text hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Services</h3>
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
                  href: "/services#chrome-extensions",
                  label: "Chrome Extensions",
                },
                {
                  href: "/services#mvp-development",
                  label: "MVP Development",
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
                  className="block text-sm text-secondary-text hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact</h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@axstudios.tech"
                className="inline-flex items-center gap-2 text-sm text-secondary-text hover:text-foreground transition-colors"
              >
                <Mail className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
                contact@axstudios.tech
                <ArrowUpRight className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
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
        <div className="mt-12 pt-8 border-t border-foreground/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted">
              © {currentYear} AxStudios. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-xs text-muted">
              <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <span className="text-foreground/20" aria-hidden="true">•</span>
              <Link href="/terms-and-conditions" className="hover:text-foreground transition-colors">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
