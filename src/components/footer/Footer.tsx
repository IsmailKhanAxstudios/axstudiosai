// components/footer/Footer.tsx
"use client";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      {/* Animated gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* <Logo /> */}
              <span className="font-space-grotesk text-xl font-bold">
                AxStudios
              </span>
            </Link>
            <p className="text-zinc-400 text-sm">
              AI automation systems for ambitious businesses.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
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
                  className="block text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <div className="space-y-2">
              {[
                { href: "/services/ai-automation", label: "AI Automation" },
                { href: "/services/ai-agents", label: "AI Agents" },
                { href: "/services/ai-saas-development", label: "AI SaaS" },
                {
                  href: "/services/sales-automation",
                  label: "Sales Automation",
                },
                {
                  href: "/services/customer-support-automation",
                  label: "Support Automation",
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <a
              href="mailto:contact@axstudios.tech"
              className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
            >
              contact@axstudios.tech
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-zinc-500">
            © {currentYear} AxStudios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
