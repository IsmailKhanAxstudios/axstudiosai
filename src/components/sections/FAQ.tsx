// components/sections/FAQ.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Zap,
  Brain,
  Bot,
  Cpu,
  Network,
  Shield,
  Rocket,
  MessageSquare,
  Hexagon,
  Circle,
  Triangle,
  ArrowRight,
  HelpCircle,
  Star,
  Lock,
  Unlock,
  Eye,
  EyeOff,
  Plus,
  Minus,
  Command,
  Terminal,
  Code2,
  Database,
  Globe,
  Layers,
  Activity,
  Gauge,
  Target,
  Award,
  ThumbsUp,
} from "lucide-react";

const faqs = [
  {
    question: "What is AI automation?",
    answer:
      "AI automation combines artificial intelligence with workflow automation to create intelligent systems that can understand, decide, and act without human intervention. It goes beyond simple rule-based automation by using AI to handle complex tasks, learn from patterns, and adapt to new situations.",
    icon: Brain,
    color: "#8b5cf6",
    category: "AI",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
  {
    question: "What types of businesses can you help?",
    answer:
      "We work with businesses of all sizes across various industries. Whether you're a startup looking to automate early processes or an established company seeking to scale operations, our solutions are tailored to your specific needs and goals.",
    icon: Target,
    color: "#06b6d4",
    category: "Business",
    gradient: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    question: "Can you automate our existing software?",
    answer:
      "Yes, we integrate with most modern software platforms through APIs, webhooks, and custom integrations. We can connect your existing tools like CRM systems, email platforms, databases, and more into automated workflows.",
    icon: Network,
    color: "#10b981",
    category: "Integration",
    gradient: "from-green-500/20 to-green-500/5",
  },
  {
    question: "Do you build custom AI agents?",
    answer:
      "Absolutely. We specialize in building custom AI agents that can handle specific tasks like lead qualification, customer support, research, and more. These agents are trained on your business context and can operate 24/7.",
    icon: Bot,
    color: "#f59e0b",
    category: "AI Agents",
    gradient: "from-amber-500/20 to-amber-500/5",
  },
  {
    question: "Can AxStudios build custom AI software?",
    answer:
      "Yes, we build custom AI-powered software solutions including SaaS products, internal tools, and web applications. Our development team can create everything from MVPs to full-scale production systems.",
    icon: Code2,
    color: "#ec4899",
    category: "Development",
    gradient: "from-pink-500/20 to-pink-500/5",
  },
  {
    question: "How long does an automation project take?",
    answer:
      "Project timelines vary based on complexity. Simple automations can be deployed in 1-2 weeks, while more complex systems may take 4-8 weeks. We provide clear timelines during the discovery phase.",
    icon: Gauge,
    color: "#6366f1",
    category: "Timeline",
    gradient: "from-indigo-500/20 to-indigo-500/5",
  },
  {
    question: "Can you integrate our APIs?",
    answer:
      "Yes, we have extensive experience with API integration. We can work with REST, GraphQL, webhooks, and other integration methods to connect your systems seamlessly.",
    icon: Database,
    color: "#14b8a6",
    category: "API",
    gradient: "from-teal-500/20 to-teal-500/5",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes, we offer ongoing support and maintenance packages to ensure your automation systems continue to perform optimally. We also provide optimization and expansion services as your business grows.",
    icon: Shield,
    color: "#f97316",
    category: "Support",
    gradient: "from-orange-500/20 to-orange-500/5",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply book a strategy call through our website. We'll discuss your business needs, identify automation opportunities, and create a roadmap for implementation. It's free and takes just 30 minutes.",
    icon: Rocket,
    color: "#a855f7",
    category: "Getting Started",
    gradient: "from-purple-500/20 to-purple-500/5",
  },
];

// Floating tech elements
const floatingElements = [
  { icon: Hexagon, x: "5%", y: "15%", duration: 6, delay: 0, color: "#8b5cf6" },
  { icon: Circle, x: "95%", y: "10%", duration: 7, delay: 1, color: "#06b6d4" },
  {
    icon: Triangle,
    x: "90%",
    y: "85%",
    duration: 8,
    delay: 2,
    color: "#10b981",
  },
  { icon: Cpu, x: "8%", y: "80%", duration: 5, delay: 0.5, color: "#ec4899" },
  {
    icon: Network,
    x: "50%",
    y: "5%",
    duration: 9,
    delay: 1.5,
    color: "#f59e0b",
  },
  {
    icon: Zap,
    x: "50%",
    y: "95%",
    duration: 6.5,
    delay: 2.5,
    color: "#6366f1",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  const filteredFaqs = activeCategory
    ? faqs.filter((faq) => faq.category === activeCategory)
    : faqs;

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #8b5cf6 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      {/* Floating tech elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.x + element.y}
          className="absolute z-10 pointer-events-none"
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <element.icon
            className="w-8 h-8"
            style={{
              color: element.color,
              filter: `drop-shadow(0 0 10px ${element.color})`,
            }}
          />
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
          >
            <HelpCircle className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-zinc-300">KNOWLEDGE BASE</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-zinc-400">
            Everything you need to know about working with AxStudios.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              activeCategory === null
                ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
                : "glass text-zinc-400 hover:text-white"
            }`}
          >
            All
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-cyan-500 text-white"
                  : "glass text-zinc-400 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative"
              >
                <div
                  className={`glass rounded-xl overflow-hidden transition-all duration-300 ${
                    openIndex === index || hoveredIndex === index
                      ? "gradient-border"
                      : ""
                  }`}
                  style={{
                    boxShadow:
                      openIndex === index || hoveredIndex === index
                        ? `0 0 30px ${faq.color}22`
                        : "none",
                  }}
                >
                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="w-full flex items-center justify-between p-6 text-left transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon */}
                      <motion.div
                        animate={openIndex === index ? { rotate: 360 } : {}}
                        transition={{ duration: 0.5 }}
                        className="p-2 rounded-lg flex-shrink-0"
                        style={{ background: `${faq.color}22` }}
                      >
                        <faq.icon
                          className="w-5 h-5"
                          style={{ color: faq.color }}
                        />
                      </motion.div>

                      <div>
                        <span className="font-semibold block">
                          {faq.question}
                        </span>
                        <span className="text-xs text-zinc-500">
                          {faq.category}
                        </span>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <div
                        className="p-1 rounded-full"
                        style={{ background: `${faq.color}22` }}
                      >
                        <ChevronDown
                          className="w-5 h-5"
                          style={{ color: faq.color }}
                        />
                      </div>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div
                          className="px-6 pb-6 pt-2"
                          style={{
                            background: `linear-gradient(135deg, ${faq.color}05, transparent)`,
                          }}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className="w-1 h-full rounded-full"
                              style={{ background: faq.color }}
                            />
                            <p className="text-zinc-400 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="glass rounded-2xl p-8 inline-block">
            <p className="text-zinc-400 mb-4">Still have questions?</p>
            <a
              href="mailto:contact@axstudios.tech"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
