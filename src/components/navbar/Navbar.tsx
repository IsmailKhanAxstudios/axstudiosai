// // components/navbar/Navbar.tsx
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

// import ServicesDropdown from "./ServicesDropdown";
// import MobileMenu from "./MobileMenu";
// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/services", label: "Services", hasDropdown: true },
//     { href: "/solutions", label: "Solutions" },
//     { href: "/process", label: "Process" },
//     { href: "/about", label: "About" },
//     { href: "/contact", label: "Contact" },
//   ];

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100 }}
//         animate={{ y: 0 }}
//         transition={{ duration: 0.5 }}
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isScrolled ? "glass shadow-lg" : "bg-transparent"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16 md:h-20">
//             {/* Logo */}
//             <Link href="/" className="flex items-center gap-2 group">
//               {/* <Logo /> */}
//               <span className="font-space-grotesk text-xl font-bold">
//                 AxStudios
//               </span>
//             </Link>

//             {/* Desktop Navigation */}
//             <div className="hidden lg:flex items-center gap-8">
//               {navLinks.map((link) => (
//                 <div key={link.href} className="relative">
//                   <Link
//                     href={link.href}
//                     className="flex items-center gap-1 text-sm text-zinc-400 hover:text-white transition-colors group"
//                     onMouseEnter={() =>
//                       link.hasDropdown && setIsServicesOpen(true)
//                     }
//                     onMouseLeave={() =>
//                       link.hasDropdown && setIsServicesOpen(false)
//                     }
//                   >
//                     {link.label}
//                     {link.hasDropdown && (
//                       <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
//                     )}
//                   </Link>
//                   {link.hasDropdown && (
//                     <AnimatePresence>
//                       {isServicesOpen && (
//                         <ServicesDropdown
//                           onClose={() => setIsServicesOpen(false)}
//                         />
//                       )}
//                     </AnimatePresence>
//                   )}
//                 </div>
//               ))}
//             </div>

//             {/* CTA */}
//             <div className="hidden lg:block">
//               <Link
//                 href="/contact"
//                 className="gradient-border glass px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform group"
//               >
//                 Book a Strategy Call
//                 <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
//               aria-label="Toggle menu"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>
//       </motion.nav>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
// components/navbar/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/solutions", label: "Solutions" },
    { href: "/process", label: "Process" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0f]/95 backdrop-blur-xl shadow-lg shadow-black/20 border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-space-grotesk text-xl font-bold">
                AxStudios
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="gradient-border glass px-6 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform group"
              >
                Book a Strategy Call
                <ArrowRight className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
