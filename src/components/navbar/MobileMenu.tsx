// components/navbar/MobileMenu.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/solutions", label: "Solutions" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const servicesLinks = [
    { href: "/services/ai-automation", label: "AI Automation" },
    { href: "/services/ai-agents", label: "AI Agents" },
    { href: "/services/ai-saas-development", label: "AI SaaS Development" },
    { href: "/services/sales-automation", label: "Sales Automation" },
    {
      href: "/services/customer-support-automation",
      label: "Customer Support",
    },
    { href: "/services/marketing-automation", label: "Marketing Automation" },
    { href: "/services/custom-ai-solutions", label: "Custom AI Solutions" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-40 lg:hidden"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30 }}
        className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#0a0a0f] border-l border-white/10 p-6 overflow-y-auto"
      >
        <div className="space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="block py-2 text-lg text-zinc-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Services Accordion */}
          <div>
            <button
              onClick={() =>
                setExpandedSection(
                  expandedSection === "services" ? null : "services",
                )
              }
              className="flex items-center justify-between w-full py-2 text-lg text-zinc-300 hover:text-white transition-colors"
            >
              Services
              <ChevronDown
                className={`w-5 h-5 transition-transform ${expandedSection === "services" ? "rotate-180" : ""}`}
              />
            </button>

            {expandedSection === "services" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="pl-4 space-y-2 mt-2"
              >
                {servicesLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className="block py-1.5 text-base text-zinc-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </div>

          <Link
            href="/contact"
            onClick={onClose}
            className="gradient-border glass px-6 py-3 rounded-full text-center font-medium flex items-center justify-center gap-2 mt-8"
          >
            Book a Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </motion.div>
    </motion.div>
  );
}
