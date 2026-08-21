// // components/hero/Hero.tsx
// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { ArrowRight, Sparkles, Zap, Bot, Workflow } from "lucide-react";
// import HeroVisualization from "./HeroVisualization";

// export default function Hero() {
//   return (
//     <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="text-center lg:text-left">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
//             >
//               <Sparkles className="w-4 h-4 text-purple-400" />
//               <span className="text-sm text-zinc-300">
//                 AI AUTOMATION STUDIO
//               </span>
//             </motion.div>

//             <motion.h1
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
//             >
//               Build Smarter.
//               <br />
//               <span className="gradient-text">Automate Everything.</span>
//               <br />
//               Scale Faster.
//             </motion.h1>

//             <motion.p
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0"
//             >
//               AxStudios designs and builds intelligent AI automation systems
//               that eliminate repetitive work, connect your tools, and help your
//               business operate at a completely different level.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
//             >
//               <Link
//                 href="/contact"
//                 className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
//               >
//                 <span className="flex items-center gap-2">
//                   Book a Strategy Call
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </span>
//               </Link>
//               <Link
//                 href="/services"
//                 className="glass px-8 py-4 rounded-full font-medium text-zinc-300 hover:text-white transition-colors"
//               >
//                 Explore Our Services
//               </Link>
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-sm text-zinc-500"
//             >
//               <Zap className="w-4 h-4" />
//               <span>AI Systems</span>
//               <span className="text-zinc-700">•</span>
//               <span>Automation</span>
//               <span className="text-zinc-700">•</span>
//               <span>Integrations</span>
//               <span className="text-zinc-700">•</span>
//               <span>Custom Software</span>
//             </motion.div>
//           </div>

//           {/* Right Visual */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//           >
//             <HeroVisualization />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/hero/Hero.tsx
// components/hero/Hero.tsx

// components/hero/Hero.tsx
// components/hero/Hero.tsx

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { useState, useEffect } from "react";
import HeroVisualization from "./HeroVisualization";

// Rotating phrases for the headline
const rotatingPhrases = [
  "Automate Everything.",
  "Scale Faster.",
  "Work Smarter.",
  "Save Time.",
  "Reduce Costs.",
  "Boost Revenue.",
  "Eliminate Manual Work.",
  "Accelerate Growth.",
];

// Custom hook for typing effect
function useTypingEffect(text: string, isActive: boolean) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (!isActive) {
      setDisplayedText("");
      return;
    }

    let currentIndex = 0;
    setDisplayedText("");
    setIsTyping(true);

    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, 60); // Typing speed

    return () => {
      clearInterval(interval);
      setIsTyping(false);
    };
  }, [text, isActive]);

  return { displayedText, isTyping };
}

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  // Typing effect hook
  const { displayedText, isTyping: typingInProgress } = useTypingEffect(
    rotatingPhrases[currentPhrase],
    isTyping,
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!typingInProgress) {
      // Wait after typing completes, then move to next phrase
      timeout = setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % rotatingPhrases.length);
        setIsTyping(false);
        // Small delay before starting to type next phrase
        setTimeout(() => {
          setIsTyping(true);
        }, 100);
      }, 2000); // Wait 2 seconds before deleting/next phrase
    }

    return () => clearTimeout(timeout);
  }, [typingInProgress, currentPhrase]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-zinc-300 font-medium tracking-wider">
                AI AUTOMATION STUDIO
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              {/* Line 1 - Static */}
              <span className="block h-[1.2em] leading-[1.2]">
                Build Smarter.
              </span>

              {/* Line 2 - Typing animation */}
              <span className="block h-[1.2em] leading-[1.2] overflow-hidden">
                <span className="gradient-text inline-block whitespace-nowrap">
                  {displayedText}
                  {/* Blinking cursor */}
                  <motion.span
                    className="inline-block w-[3px] h-[0.8em] bg-cyan-400 ml-1 align-baseline"
                    animate={{
                      opacity: typingInProgress ? [1, 0] : [1, 1],
                    }}
                    transition={{
                      duration: typingInProgress ? 0.5 : 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </span>
              </span>

              {/* Line 3 - Static */}
              <span className="block h-[1.2em] leading-[1.2]">
                Scale Faster.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              AxStudios designs and builds intelligent AI automation systems
              that eliminate repetitive work, connect your tools, and help your
              business operate at a completely different level.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                <span className="flex items-center gap-2">
                  Book a Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                href="/services"
                className="glass px-8 py-4 rounded-full font-medium text-zinc-300 hover:text-white transition-colors"
              >
                Explore Our Services
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-3 text-sm text-zinc-500"
            >
              <Zap className="w-4 h-4" />
              <span>AI Systems</span>
              <span className="text-zinc-700">•</span>
              <span>Automation</span>
              <span className="text-zinc-700">•</span>
              <span>Integrations</span>
              <span className="text-zinc-700">•</span>
              <span>Custom Software</span>
            </motion.div>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <HeroVisualization />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
