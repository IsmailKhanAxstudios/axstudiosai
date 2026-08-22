// // components/ui/Background.tsx
// "use client";

// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// export default function Background() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
//       {/* Grid pattern */}
//       <div className="absolute inset-0 opacity-[0.03]">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px),
//                            linear-gradient(to bottom, #fff 1px, transparent 1px)`,
//             backgroundSize: "60px 60px",
//           }}
//         />
//       </div>

//       {/* Animated gradients */}
//       <motion.div
//         className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)",
//         }}
//         animate={{
//           x: mousePosition.x * 0.02,
//           y: mousePosition.y * 0.02,
//         }}
//         transition={{ type: "spring", stiffness: 50 }}
//       />

//       <motion.div
//         className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)",
//         }}
//         animate={{
//           x: mousePosition.x * -0.03,
//           y: mousePosition.y * -0.03,
//         }}
//         transition={{ type: "spring", stiffness: 50 }}
//       />

//       {/* Center glow */}
//       <div
//         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
//         style={{
//           background:
//             "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)",
//         }}
//       />

//       {/* Noise texture */}
//       <div
//         className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
//           backgroundSize: "256px 256px",
//         }}
//       />
//     </div>
//   );
// }
// components/ui/Background.tsx
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.15)";
const PRIMARY_SUBTLE = "rgba(235, 106, 80, 0.08)";
const PRIMARY_FAINT = "rgba(235, 106, 80, 0.04)";

export default function Background() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid pattern - subtle */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), 
                           linear-gradient(to bottom, #fff 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Top left coral glow */}
      <motion.div
        className="absolute -top-20 -left-20 w-[500px] h-[500px]"
        style={{
          background: `radial-gradient(circle, ${PRIMARY_DARK} 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{
          x: mousePosition.x * 0.015,
          y: mousePosition.y * 0.015,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      />

      {/* Bottom right white glow */}
      <motion.div
        className="absolute -bottom-20 -right-20 w-[500px] h-[500px]"
        style={{
          background: `radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
        animate={{
          x: mousePosition.x * -0.02,
          y: mousePosition.y * -0.02,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      />

      {/* Center subtle coral glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
        style={{
          background: `radial-gradient(circle, ${PRIMARY_FAINT} 0%, transparent 60%)`,
          filter: "blur(30px)",
        }}
      />

      {/* Top right faint glow */}
      <motion.div
        className="absolute top-1/4 right-0 w-[300px] h-[300px]"
        style={{
          background: `radial-gradient(circle, ${PRIMARY_SUBTLE} 0%, transparent 70%)`,
          filter: "blur(30px)",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom left faint glow */}
      <motion.div
        className="absolute bottom-1/4 left-0 w-[300px] h-[300px]"
        style={{
          background: `radial-gradient(circle, ${PRIMARY_SUBTLE} 0%, transparent 70%)`,
          filter: "blur(30px)",
        }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />

      {/* Noise texture - very subtle */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
      />
    </div>
  );
}
