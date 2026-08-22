// // components/navbar/MobileMenu.tsx
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ArrowRight } from "lucide-react";

// export default function MobileMenu({ onClose }: { onClose: () => void }) {
//   const [expandedSection, setExpandedSection] = useState<string | null>(null);

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/contact", label: "Contact" },
//   ];

//   const servicesLinks = [
//     { href: "/services/ai-automation", label: "AI Automation" },
//     { href: "/services/ai-agents", label: "AI Agents" },
//     {
//       href: "/services/ai-web-applications",
//       label: "AI-Powered Web Applications",
//     },
//     {
//       href: "/services/custom-ai-saas-development",
//       label: "Custom AI & SaaS Development",
//     },
//     {
//       href: "/services/ai-automation-audit",
//       label: "AI Strategy & Automation Audit",
//     },
//     { href: "/services/ai-maintenance", label: "AI Systems Maintenance" },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-40 lg:hidden"
//     >
//       <div
//         className="absolute inset-0 bg-black/80 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "100%" }}
//         transition={{ type: "spring", damping: 30 }}
//         className="absolute right-0 top-0 h-full w-full max-w-sm bg-[#0a0a0f] border-l border-white/10 p-6 overflow-y-auto"
//       >
//         {/* Header */}
//         <div className="flex items-center justify-between mb-8">
//           <span className="text-xl font-bold text-white">Menu</span>
//           <button
//             onClick={onClose}
//             className="p-2 rounded-lg hover:bg-white/10 transition-colors"
//             aria-label="Close menu"
//           >
//             <ChevronDown className="w-5 h-5 rotate-180 text-zinc-400" />
//           </button>
//         </div>

//         <div className="space-y-2">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={onClose}
//               className="block px-4 py-3 rounded-xl text-base text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
//             >
//               {link.label}
//             </Link>
//           ))}

//           {/* Services Accordion */}
//           <div>
//             <button
//               onClick={() =>
//                 setExpandedSection(
//                   expandedSection === "services" ? null : "services",
//                 )
//               }
//               className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-base text-zinc-300 hover:text-white hover:bg-white/5 transition-all"
//             >
//               Services
//               <ChevronDown
//                 className={`w-5 h-5 transition-transform ${
//                   expandedSection === "services" ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             <AnimatePresence>
//               {expandedSection === "services" && (
//                 <motion.div
//                   initial={{ height: 0, opacity: 0 }}
//                   animate={{ height: "auto", opacity: 1 }}
//                   exit={{ height: 0, opacity: 0 }}
//                   transition={{ duration: 0.3 }}
//                   className="overflow-hidden"
//                 >
//                   <div className="pl-4 mt-1 space-y-1">
//                     {servicesLinks.map((link, index) => (
//                       <motion.div
//                         key={link.href}
//                         initial={{ opacity: 0, x: -10 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.2, delay: index * 0.05 }}
//                       >
//                         <Link
//                           href={link.href}
//                           onClick={onClose}
//                           className="block px-4 py-2.5 rounded-lg text-sm text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
//                         >
//                           {link.label}
//                         </Link>
//                       </motion.div>
//                     ))}
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* CTA */}
//         <div className="mt-8">
//           <Link
//             href="/contact"
//             onClick={onClose}
//             className="gradient-border glass px-6 py-3.5 rounded-full text-center font-medium flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
//           >
//             Book a Strategy Call
//             <ArrowRight className="w-4 h-4" />
//           </Link>
//         </div>

//         {/* Contact Info */}
//         <div className="mt-8 pt-6 border-t border-white/10">
//           <p className="text-xs text-zinc-500 mb-1">Contact</p>
//           <a
//             href="mailto:contact@axstudios.tech"
//             className="text-sm text-zinc-400 hover:text-white transition-colors"
//           >
//             contact@axstudios.tech
//           </a>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// }

// components/navbar/MobileMenu.tsx
// components/navbar/MobileMenu.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X, ArrowRight, Zap } from "lucide-react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

export default function MobileMenu({ onClose }: { onClose: () => void }) {
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
