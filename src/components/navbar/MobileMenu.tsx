// components/navbar/MobileMenu.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { X, ArrowRight, Zap } from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusable = () => Array.from(panelRef.current?.querySelectorAll<HTMLElement>('a[href], button') ?? []);
    focusable()[0]?.focus();
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    const desktop = window.matchMedia("(min-width: 1024px)");
    const handleResize = () => { if (desktop.matches) onClose(); };
    desktop.addEventListener("change", handleResize);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKey);
      desktop.removeEventListener("change", handleResize);
      previousFocus?.focus();
    };
  }, [onClose]);
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/solutions", label: "Solutions" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] lg:hidden"
    >
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Main navigation"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30 }}
        className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#0a0a0f] border-l border-white/10 p-6 overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div
              className="p-1.5 rounded-lg"
              style={{
                background: PRIMARY_DARK,
                border: `1px solid ${PRIMARY_LIGHT}`,
              }}
            >
              <Zap className="w-4 h-4" style={{ color: PRIMARY }} />
            </div>
            <span className="text-xl font-bold text-white">Menu</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-white/60" />
          </button>
        </div>

        <div className="space-y-2">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                href={link.href}
                onClick={onClose}
                className="block px-4 py-3 rounded-xl text-base text-white/60 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/contact"
            onClick={onClose}
            className="px-6 py-3.5 rounded-full text-center font-medium text-white flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
            style={{
              backgroundColor: PRIMARY,
              boxShadow: `0 10px 30px ${PRIMARY_GLOW}`,
            }}
          >
            Book a Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <p className="text-xs text-white/40 mb-1">Contact</p>
          <a
            href="mailto:contact@axstudios.tech"
            className="text-sm text-white/60 hover:text-white transition-colors"
          >
            contact@axstudios.tech
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}
