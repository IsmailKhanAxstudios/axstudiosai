// components/sections/ServicesSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { PublicService } from "@/lib/catalogStore";
import {
  Zap,
  Bot,
  Code,
  Puzzle,
  Rocket,
  Settings,
  Globe,
  ArrowRight,
  SearchCheck,
  Users,
  Network,
  Sparkles,
  CheckCircle2,
  Cpu,
  Shield,
  Gauge,
} from "lucide-react";

const PRIMARY = "rgb(var(--primary))";
const PRIMARY_LIGHT = "rgb(var(--primary) / 0.6)";
const PRIMARY_DARK = "rgb(var(--primary) / 0.3)";
const PRIMARY_GLOW = "rgb(var(--primary) / 0.5)";

const serviceIcons = { Zap, Bot, Code, Puzzle, Rocket, Settings, Globe, SearchCheck, Users, Network, Sparkles, Gauge };

export default function ServicesSection({ services, directory = false }: { services: PublicService[]; directory?: boolean }) {
  const Heading = directory ? "h1" : "h2";
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(var(--foreground)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--foreground)) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: `radial-gradient(circle, ${PRIMARY_DARK} 0%, transparent 70%)`,
          }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            style={{ border: `1px solid ${PRIMARY_DARK}` }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
            <span className="text-sm text-foreground/80">CORE SERVICES</span>
          </motion.div>

          <Heading className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            <span className="text-foreground">AI automation </span>
            <span style={{ color: "rgb(var(--accent-text))" }}>
              {directory ? "and development services" : "for your business."}
            </span>
          </Heading>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
            Explore custom AI agents, workflow integrations, AI audits, LLM cost optimization,
            and SaaS development for new products and internal tools.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const ServiceIcon = serviceIcons[service.icon];
            const isHovered = hoveredService === service.title;
            const isSelected = selectedService === service.title;

            return (
              <motion.div
                key={service.title}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredService(service.title)}
                onMouseLeave={() => setHoveredService(null)}
                onClick={() =>
                  setSelectedService(
                    selectedService === service.title ? null : service.title,
                  )
                }
                className="relative group cursor-pointer scroll-mt-28"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="relative rounded-2xl p-5 transition-all duration-300 h-full"
                  style={{
                    background:
                      isHovered || isSelected
                        ? `linear-gradient(135deg, ${PRIMARY_DARK}, rgb(var(--primary) / 0.1))`
                        : "rgb(var(--surface) / 0.7)",
                    border: `1px solid ${
                      isHovered || isSelected ? PRIMARY_LIGHT : PRIMARY_DARK
                    }`,
                    boxShadow:
                      isHovered || isSelected
                        ? `0 0 25px ${PRIMARY_GLOW}`
                        : "none",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className="text-xs font-mono"
                      style={{ color: "rgb(var(--accent-text))" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <motion.div
                      animate={
                        isHovered || isSelected
                          ? { rotate: 360, scale: 1.1 }
                          : {}
                      }
                      transition={{ duration: 0.5 }}
                      className="p-2.5 rounded-xl"
                      style={{
                        background: PRIMARY_DARK,
                        border: `1px solid ${PRIMARY_LIGHT}`,
                      }}
                    >
                      <ServiceIcon
                        className="w-6 h-6"
                        style={{ color: "rgb(var(--accent-text))" }}
                      />
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <span
                    className="inline-block text-[9px] uppercase tracking-wider px-2 py-1 rounded-full mb-2"
                    style={{
                      background: PRIMARY_DARK,
                      color: "rgb(var(--accent-text))",
                    }}
                  >
                    {service.category}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-secondary-text mb-3 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Expandable Features */}
                  <AnimatePresence>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-3 mt-3 border-t border-foreground/10 space-y-1.5">
                          {service.features.map((feature, idx) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: idx * 0.05 }}
                              className="flex items-center gap-2 text-[11px] text-secondary-text"
                            >
                              <CheckCircle2
                                className="w-3 h-3 flex-shrink-0"
                                style={{ color: "rgb(var(--accent-text))" }}
                              />
                              {feature}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Link */}
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
                    style={{ color: "rgb(var(--accent-text))" }}
                  >
                    Explore {service.title}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: Cpu, label: `${services.length} Core Services`, value: "AI and software development" },
            {
              icon: Network,
              label: "50+ Integrations",
              value: "Connected systems",
            },
            {
              icon: Shield,
              label: "Enterprise Grade",
              value: "Security & compliance",
            },
            { icon: Gauge, label: "3x Faster", value: "Time to deployment" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-6 text-center"
              style={{ border: `1px solid ${PRIMARY_DARK}` }}
            >
              <stat.icon
                className="w-8 h-8 mx-auto mb-3"
                style={{ color: "rgb(var(--accent-text))" }}
              />
              <div className="text-xl font-bold text-foreground mb-1">
                {stat.label}
              </div>
              <p className="text-sm text-secondary-text">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
