// // // components/hero/HeroVisualization.tsx
// // "use client";

// // import { motion } from "framer-motion";
// // import {
// //   Bot,
// //   Database,
// //   Mail,
// //   BarChart3,
// //   Zap,
// //   Workflow,
// //   Cpu,
// //   Network,
// //   Shield,
// //   Globe,
// // } from "lucide-react";
// // import { useEffect, useState } from "react";

// // // Orbital nodes with Web3 feel
// // const orbitalNodes = [
// //   { id: 1, label: "Lead", icon: Zap, orbit: 1, angle: 0, color: "#8b5cf6" },
// //   {
// //     id: 2,
// //     label: "AI Agent",
// //     icon: Bot,
// //     orbit: 1,
// //     angle: 60,
// //     color: "#06b6d4",
// //   },
// //   {
// //     id: 3,
// //     label: "CRM",
// //     icon: Database,
// //     orbit: 1,
// //     angle: 120,
// //     color: "#10b981",
// //   },
// //   { id: 4, label: "Email", icon: Mail, orbit: 1, angle: 180, color: "#f59e0b" },
// //   {
// //     id: 5,
// //     label: "Analytics",
// //     icon: BarChart3,
// //     orbit: 1,
// //     angle: 240,
// //     color: "#ec4899",
// //   },
// //   {
// //     id: 6,
// //     label: "Workflow",
// //     icon: Workflow,
// //     orbit: 1,
// //     angle: 300,
// //     color: "#6366f1",
// //   },
// // ];

// // // Secondary orbiting elements
// // const techNodes = [
// //   { id: 7, icon: Cpu, orbit: 0.7, angle: 30, color: "#a855f7", size: "small" },
// //   {
// //     id: 8,
// //     icon: Network,
// //     orbit: 0.7,
// //     angle: 90,
// //     color: "#06b6d4",
// //     size: "small",
// //   },
// //   {
// //     id: 9,
// //     icon: Shield,
// //     orbit: 0.7,
// //     angle: 150,
// //     color: "#10b981",
// //     size: "small",
// //   },
// //   {
// //     id: 10,
// //     icon: Globe,
// //     orbit: 0.7,
// //     angle: 210,
// //     color: "#f59e0b",
// //     size: "small",
// //   },
// //   {
// //     id: 11,
// //     icon: Cpu,
// //     orbit: 0.7,
// //     angle: 270,
// //     color: "#ec4899",
// //     size: "small",
// //   },
// //   {
// //     id: 12,
// //     icon: Network,
// //     orbit: 0.7,
// //     angle: 330,
// //     color: "#8b5cf6",
// //     size: "small",
// //   },
// // ];

// // // Data particles flowing along paths
// // const dataParticles = Array.from({ length: 30 }, (_, i) => ({
// //   id: i,
// //   angle: (i * 360) / 30,
// //   orbit: 0.85 + (i % 3) * 0.05,
// //   duration: 2 + (i % 5) * 0.5,
// //   delay: i * 0.2,
// //   color: i % 2 === 0 ? "#8b5cf6" : "#06b6d4",
// // }));

// // export default function HeroVisualization() {
// //   const [isMounted, setIsMounted] = useState(false);
// //   const [hoveredNode, setHoveredNode] = useState<number | null>(null);

// //   useEffect(() => {
// //     setIsMounted(true);
// //   }, []);

// //   // Calculate position based on orbit and angle
// //   const getPosition = (orbit: number, angle: number) => {
// //     const radius = orbit * 45; // percentage of container
// //     const radians = (angle * Math.PI) / 180;
// //     const x = 50 + radius * Math.cos(radians);
// //     const y = 50 + radius * Math.sin(radians);
// //     return { x: `${x}%`, y: `${y}%` };
// //   };

// //   // Don't render animations until mounted on client
// //   if (!isMounted) {
// //     return (
// //       <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
// //         {/* Static placeholder */}
// //         <div className="relative w-40 h-40 lg:w-48 lg:h-48">
// //           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-30 blur-2xl" />
// //           <div className="relative w-full h-full rounded-full glass gradient-border flex items-center justify-center">
// //             <Bot className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center overflow-visible">
// //       {/* Outer rotating ring */}
// //       <motion.div
// //         className="absolute w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full border border-purple-500/20"
// //         animate={{ rotate: 360 }}
// //         transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
// //       >
// //         <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-purple-500" />
// //         <div className="absolute -bottom-1 left-1/2 w-2 h-2 rounded-full bg-cyan-500" />
// //         <div className="absolute top-1/2 -left-1 w-2 h-2 rounded-full bg-purple-400" />
// //         <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-cyan-400" />
// //       </motion.div>

// //       {/* Inner rotating ring */}
// //       <motion.div
// //         className="absolute w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full border border-cyan-500/20"
// //         animate={{ rotate: -360 }}
// //         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// //       >
// //         <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 rounded-full bg-cyan-500" />
// //         <div className="absolute -bottom-1 left-1/2 w-1.5 h-1.5 rounded-full bg-purple-500" />
// //       </motion.div>

// //       {/* Grid pattern background */}
// //       <div className="absolute inset-0 opacity-20">
// //         <div
// //           className="absolute inset-0"
// //           style={{
// //             backgroundImage:
// //               "radial-gradient(circle, #8b5cf6 1px, transparent 1px)",
// //             backgroundSize: "30px 30px",
// //           }}
// //         />
// //       </div>

// //       {/* Central Core with pulsing effect */}
// //       <motion.div
// //         className="relative z-20"
// //         animate={{
// //           scale: [1, 1.05, 1],
// //         }}
// //         transition={{
// //           duration: 2,
// //           repeat: Infinity,
// //           ease: "easeInOut",
// //         }}
// //       >
// //         {/* Multiple glow layers */}
// //         <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl" />
// //         <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-2xl" />

// //         <div className="relative w-32 h-32 lg:w-40 lg:h-40">
// //           {/* Rotating gradient border */}
// //           <motion.div
// //             className="absolute inset-0 rounded-full"
// //             style={{
// //               background:
// //                 "conic-gradient(from 0deg, #8b5cf6, #06b6d4, #10b981, #8b5cf6)",
// //             }}
// //             animate={{ rotate: 360 }}
// //             transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
// //           />

// //           {/* Inner circle */}
// //           <div className="absolute inset-[2px] rounded-full bg-[#0a0a0f] flex items-center justify-center">
// //             <motion.div
// //               animate={{ rotate: [0, 10, -10, 0] }}
// //               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
// //             >
// //               <Bot className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
// //             </motion.div>
// //           </div>
// //         </div>
// //       </motion.div>

// //       {/* Orbital Nodes */}
// //       {orbitalNodes.map((node, index) => {
// //         const pos = getPosition(node.orbit, node.angle);
// //         return (
// //           <motion.div
// //             key={node.id}
// //             className="absolute z-10"
// //             style={{
// //               left: pos.x,
// //               top: pos.y,
// //             }}
// //             initial={{ opacity: 0, scale: 0 }}
// //             animate={{ opacity: 1, scale: 1 }}
// //             transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
// //             onMouseEnter={() => setHoveredNode(node.id)}
// //             onMouseLeave={() => setHoveredNode(null)}
// //           >
// //             <motion.div
// //               className="relative"
// //               animate={{
// //                 y: [0, -15, 0],
// //               }}
// //               transition={{
// //                 duration: 4,
// //                 delay: index * 0.5,
// //                 repeat: Infinity,
// //                 ease: "easeInOut",
// //               }}
// //             >
// //               {/* Connection line from center */}
// //               <motion.div
// //                 className="absolute top-1/2 left-1/2 w-[100px] h-px origin-left"
// //                 style={{
// //                   background: `linear-gradient(90deg, ${node.color}88, transparent)`,
// //                   transform: `rotate(${node.angle}deg)`,
// //                 }}
// //                 initial={{ scaleX: 0 }}
// //                 animate={{ scaleX: 1 }}
// //                 transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
// //               />

// //               {/* Glow effect */}
// //               <motion.div
// //                 className="absolute inset-0 rounded-2xl opacity-50 blur-lg"
// //                 style={{ background: node.color }}
// //                 animate={{
// //                   opacity: hoveredNode === node.id ? 0.8 : 0.3,
// //                 }}
// //               />

// //               {/* Node card */}
// //               <div
// //                 className={`relative rounded-2xl p-3 lg:p-4 cursor-pointer transition-all duration-300 ${
// //                   hoveredNode === node.id ? "scale-110 bg-white/10" : "glass"
// //                 }`}
// //                 style={{
// //                   border: `1px solid ${node.color}44`,
// //                   boxShadow:
// //                     hoveredNode === node.id
// //                       ? `0 0 30px ${node.color}66`
// //                       : `0 0 10px ${node.color}22`,
// //                 }}
// //               >
// //                 <node.icon
// //                   className="w-6 h-6 lg:w-8 lg:h-8"
// //                   style={{ color: node.color }}
// //                 />
// //                 <span className="mt-2 text-xs lg:text-sm text-white block text-center font-medium">
// //                   {node.label}
// //                 </span>
// //               </div>
// //             </motion.div>
// //           </motion.div>
// //         );
// //       })}

// //       {/* Tech Nodes (smaller, secondary orbit) */}
// //       {techNodes.map((node, index) => {
// //         const pos = getPosition(node.orbit, node.angle);
// //         return (
// //           <motion.div
// //             key={node.id}
// //             className="absolute z-5"
// //             style={{
// //               left: pos.x,
// //               top: pos.y,
// //             }}
// //             initial={{ opacity: 0, scale: 0 }}
// //             animate={{ opacity: 0.6, scale: 1 }}
// //             transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
// //           >
// //             <motion.div
// //               animate={{
// //                 rotate: 360,
// //               }}
// //               transition={{
// //                 duration: 10 + index,
// //                 repeat: Infinity,
// //                 ease: "linear",
// //               }}
// //               className="glass rounded-lg p-2"
// //               style={{
// //                 border: `1px solid ${node.color}33`,
// //               }}
// //             >
// //               <node.icon
// //                 className="w-4 h-4 lg:w-5 lg:h-5"
// //                 style={{ color: node.color }}
// //               />
// //             </motion.div>
// //           </motion.div>
// //         );
// //       })}

// //       {/* Data Particles flowing */}
// //       {dataParticles.map((particle) => {
// //         const pos = getPosition(particle.orbit, particle.angle);
// //         return (
// //           <motion.div
// //             key={particle.id}
// //             className="absolute z-5"
// //             style={{
// //               left: pos.x,
// //               top: pos.y,
// //               width: "4px",
// //               height: "4px",
// //               borderRadius: "50%",
// //               background: particle.color,
// //               boxShadow: `0 0 10px ${particle.color}`,
// //             }}
// //             animate={{
// //               opacity: [0, 1, 0],
// //               scale: [0, 1, 0],
// //             }}
// //             transition={{
// //               duration: particle.duration,
// //               delay: particle.delay,
// //               repeat: Infinity,
// //               ease: "linear",
// //             }}
// //           />
// //         );
// //       })}

// //       {/* Scanning line effect */}
// //       <motion.div
// //         className="absolute inset-0 z-0"
// //         animate={{
// //           rotate: 360,
// //         }}
// //         transition={{
// //           duration: 8,
// //           repeat: Infinity,
// //           ease: "linear",
// //         }}
// //       >
// //         <div
// //           className="absolute top-1/2 left-1/2 w-[200%] h-px"
// //           style={{
// //             background:
// //               "linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.3), transparent)",
// //           }}
// //         />
// //       </motion.div>

// //       {/* Holographic effect overlay */}
// //       <motion.div
// //         className="absolute inset-0 z-0"
// //         animate={{
// //           opacity: [0.1, 0.2, 0.1],
// //         }}
// //         transition={{
// //           duration: 3,
// //           repeat: Infinity,
// //           ease: "easeInOut",
// //         }}
// //       ></motion.div>
// //     </div>
// //   );
// // }

// // components/hero/HeroVisualization.tsx
// "use client";

// import { motion } from "framer-motion";
// import {
//   Bot,
//   Database,
//   Mail,
//   BarChart3,
//   Zap,
//   Workflow,
//   Cpu,
//   Network,
//   Shield,
//   Globe,
//   Hexagon,
//   Triangle,
//   Circle,
// } from "lucide-react";
// import { useEffect, useState } from "react";

// // Orbital nodes with Web3 feel
// const orbitalNodes = [
//   { id: 1, label: "Lead", icon: Zap, orbit: 1, angle: 0, color: "#8b5cf6" },
//   {
//     id: 2,
//     label: "AI Agent",
//     icon: Bot,
//     orbit: 1,
//     angle: 60,
//     color: "#06b6d4",
//   },
//   {
//     id: 3,
//     label: "CRM",
//     icon: Database,
//     orbit: 1,
//     angle: 120,
//     color: "#10b981",
//   },
//   { id: 4, label: "Email", icon: Mail, orbit: 1, angle: 180, color: "#f59e0b" },
//   {
//     id: 5,
//     label: "Analytics",
//     icon: BarChart3,
//     orbit: 1,
//     angle: 240,
//     color: "#ec4899",
//   },
//   {
//     id: 6,
//     label: "Workflow",
//     icon: Workflow,
//     orbit: 1,
//     angle: 300,
//     color: "#6366f1",
//   },
// ];

// // Secondary orbiting elements
// const techNodes = [
//   { id: 7, icon: Cpu, orbit: 0.7, angle: 30, color: "#a855f7" },
//   { id: 8, icon: Network, orbit: 0.7, angle: 90, color: "#06b6d4" },
//   { id: 9, icon: Shield, orbit: 0.7, angle: 150, color: "#10b981" },
//   { id: 10, icon: Globe, orbit: 0.7, angle: 210, color: "#f59e0b" },
//   { id: 11, icon: Hexagon, orbit: 0.7, angle: 270, color: "#ec4899" },
//   { id: 12, icon: Triangle, orbit: 0.7, angle: 330, color: "#8b5cf6" },
// ];

// // Data particles flowing along paths
// const dataParticles = Array.from({ length: 40 }, (_, i) => ({
//   id: i,
//   angle: (i * 360) / 40,
//   orbit: 0.85 + (i % 4) * 0.08,
//   duration: 2 + (i % 5) * 0.5,
//   delay: i * 0.15,
//   color: i % 2 === 0 ? "#8b5cf6" : "#06b6d4",
//   size: 2 + (i % 3) * 1.5,
// }));

// // Floating geometric shapes
// const floatingShapes = [
//   {
//     id: 1,
//     icon: Circle,
//     x: "10%",
//     y: "15%",
//     duration: 6,
//     delay: 0,
//     color: "#8b5cf6",
//   },
//   {
//     id: 2,
//     icon: Triangle,
//     x: "90%",
//     y: "10%",
//     duration: 7,
//     delay: 1,
//     color: "#06b6d4",
//   },
//   {
//     id: 3,
//     icon: Hexagon,
//     x: "85%",
//     y: "85%",
//     duration: 8,
//     delay: 2,
//     color: "#10b981",
//   },
//   {
//     id: 4,
//     icon: Circle,
//     x: "15%",
//     y: "80%",
//     duration: 5,
//     delay: 0.5,
//     color: "#ec4899",
//   },
//   {
//     id: 5,
//     icon: Triangle,
//     x: "50%",
//     y: "5%",
//     duration: 6.5,
//     delay: 1.5,
//     color: "#f59e0b",
//   },
//   {
//     id: 6,
//     icon: Hexagon,
//     x: "5%",
//     y: "50%",
//     duration: 7.5,
//     delay: 2.5,
//     color: "#6366f1",
//   },
//   {
//     id: 7,
//     icon: Circle,
//     x: "95%",
//     y: "50%",
//     duration: 5.5,
//     delay: 0.8,
//     color: "#a855f7",
//   },
//   {
//     id: 8,
//     icon: Triangle,
//     x: "50%",
//     y: "95%",
//     duration: 6.8,
//     delay: 1.8,
//     color: "#06b6d4",
//   },
// ];

// export default function HeroVisualization() {
//   const [isMounted, setIsMounted] = useState(false);
//   const [hoveredNode, setHoveredNode] = useState<number | null>(null);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   // Calculate position based on orbit and angle
//   const getPosition = (orbit: number, angle: number) => {
//     const radius = orbit * 45; // percentage of container
//     const radians = (angle * Math.PI) / 180;
//     const x = 50 + radius * Math.cos(radians);
//     const y = 50 + radius * Math.sin(radians);
//     return { x: `${x}%`, y: `${y}%` };
//   };

//   // Don't render animations until mounted on client
//   if (!isMounted) {
//     return (
//       <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
//         {/* Static placeholder */}
//         <div className="relative w-40 h-40 lg:w-48 lg:h-48">
//           <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-30 blur-2xl" />
//           <div className="relative w-full h-full rounded-full glass gradient-border flex items-center justify-center">
//             <Bot className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center overflow-visible">
//       {/* Outer rotating ring with geometric shapes */}
//       <motion.div
//         className="absolute w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] rounded-full border border-purple-500/20"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
//       >
//         <div className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
//         <div className="absolute -bottom-1.5 left-1/2 w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)]" />
//         <div className="absolute top-1/2 -left-1.5 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
//         <div className="absolute top-1/2 -right-1.5 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
//       </motion.div>

//       {/* Inner rotating ring */}
//       <motion.div
//         className="absolute w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full border border-cyan-500/20"
//         animate={{ rotate: -360 }}
//         transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//       >
//         <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]" />
//         <div className="absolute -bottom-1 left-1/2 w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
//         <div className="absolute top-1/2 -left-1 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
//         <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_12px_rgba(236,72,153,0.8)]" />
//       </motion.div>

//       {/* Dotted ring */}
//       <motion.div
//         className="absolute w-[360px] h-[360px] lg:w-[440px] lg:h-[440px] rounded-full"
//         animate={{ rotate: 360 }}
//         transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
//       >
//         {Array.from({ length: 24 }).map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 rounded-full bg-white/20"
//             style={{
//               left: "50%",
//               top: "50%",
//               transform: `rotate(${i * 15}deg) translateY(-180px)`,
//             }}
//           />
//         ))}
//       </motion.div>

//       {/* Grid pattern background */}
//       <div className="absolute inset-0 opacity-20">
//         <div
//           className="absolute inset-0"
//           style={{
//             backgroundImage:
//               "radial-gradient(circle, #8b5cf6 1px, transparent 1px)",
//             backgroundSize: "30px 30px",
//           }}
//         />
//       </div>

//       {/* Floating geometric shapes */}
//       {floatingShapes.map((shape) => (
//         <motion.div
//           key={shape.id}
//           className="absolute z-0"
//           style={{
//             left: shape.x,
//             top: shape.y,
//           }}
//           animate={{
//             y: [0, -20, 0],
//             x: [0, 10, 0],
//             rotate: [0, 180, 360],
//             opacity: [0.2, 0.5, 0.2],
//           }}
//           transition={{
//             duration: shape.duration,
//             delay: shape.delay,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         >
//           <shape.icon
//             className="w-6 h-6 lg:w-8 lg:h-8"
//             style={{
//               color: shape.color,
//               filter: `drop-shadow(0 0 10px ${shape.color})`,
//             }}
//           />
//         </motion.div>
//       ))}

//       {/* Central Core with pulsing effect */}
//       <motion.div
//         className="relative z-20"
//         animate={{
//           scale: [1, 1.05, 1],
//         }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         {/* Multiple glow layers */}
//         <motion.div
//           className="absolute -inset-8 rounded-full bg-purple-500/20 blur-3xl"
//           animate={{
//             opacity: [0.3, 0.6, 0.3],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute -inset-4 rounded-full bg-cyan-500/20 blur-2xl"
//           animate={{
//             opacity: [0.4, 0.7, 0.4],
//           }}
//           transition={{
//             duration: 2.5,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         <div className="relative w-32 h-32 lg:w-40 lg:h-40">
//           {/* Rotating gradient border */}
//           <motion.div
//             className="absolute inset-0 rounded-full"
//             style={{
//               background:
//                 "conic-gradient(from 0deg, #8b5cf6, #06b6d4, #10b981, #ec4899, #f59e0b, #8b5cf6)",
//             }}
//             animate={{ rotate: 360 }}
//             transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
//           />

//           {/* Inner circle with glass effect */}
//           <div className="absolute inset-[3px] rounded-full bg-[#0a0a0f]/90 backdrop-blur-xl flex items-center justify-center">
//             {/* Animated icon */}
//             <motion.div
//               animate={{
//                 rotate: [0, 5, -5, 0],
//                 scale: [1, 1.1, 1],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               <Bot className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
//             </motion.div>

//             {/* Inner glow */}
//             <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-500/20" />
//           </div>
//         </div>
//       </motion.div>

//       {/* Orbital Nodes */}
//       {orbitalNodes.map((node, index) => {
//         const pos = getPosition(node.orbit, node.angle);
//         return (
//           <motion.div
//             key={node.id}
//             className="absolute z-10"
//             style={{
//               left: pos.x,
//               top: pos.y,
//               transform: "translate(-50%, -50%)",
//             }}
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
//             onMouseEnter={() => setHoveredNode(node.id)}
//             onMouseLeave={() => setHoveredNode(null)}
//           >
//             <motion.div
//               className="relative"
//               animate={{
//                 y: [0, -15, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 delay: index * 0.5,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//             >
//               {/* Connection line from center */}
//               <motion.div
//                 className="absolute top-1/2 left-1/2 w-[120px] h-px origin-left"
//                 style={{
//                   background: `linear-gradient(90deg, ${node.color}66, transparent)`,
//                   transform: `rotate(${node.angle}deg)`,
//                 }}
//                 initial={{ scaleX: 0, opacity: 0 }}
//                 animate={{ scaleX: 1, opacity: 1 }}
//                 transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
//               />

//               {/* Glow effect */}
//               <motion.div
//                 className="absolute inset-0 rounded-2xl opacity-50 blur-lg"
//                 style={{ background: node.color }}
//                 animate={{
//                   opacity: hoveredNode === node.id ? 0.8 : 0.3,
//                 }}
//                 transition={{ duration: 0.3 }}
//               />

//               {/* Node card */}
//               <div
//                 className={`relative rounded-2xl p-3 lg:p-4 cursor-pointer transition-all duration-300 ${
//                   hoveredNode === node.id ? "scale-110 bg-white/10" : "glass"
//                 }`}
//                 style={{
//                   border: `1px solid ${node.color}44`,
//                   boxShadow:
//                     hoveredNode === node.id
//                       ? `0 0 30px ${node.color}66`
//                       : `0 0 10px ${node.color}22`,
//                 }}
//               >
//                 <node.icon
//                   className="w-6 h-6 lg:w-8 lg:h-8 mx-auto"
//                   style={{ color: node.color }}
//                 />
//                 <span className="mt-2 text-xs lg:text-sm text-white block text-center font-medium">
//                   {node.label}
//                 </span>
//               </div>
//             </motion.div>
//           </motion.div>
//         );
//       })}

//       {/* Tech Nodes (smaller, secondary orbit) */}
//       {techNodes.map((node, index) => {
//         const pos = getPosition(node.orbit, node.angle);
//         return (
//           <motion.div
//             key={node.id}
//             className="absolute z-5"
//             style={{
//               left: pos.x,
//               top: pos.y,
//               transform: "translate(-50%, -50%)",
//             }}
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 0.6, scale: 1 }}
//             transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
//           >
//             <motion.div
//               animate={{
//                 rotate: [0, 360],
//               }}
//               transition={{
//                 duration: 10 + index,
//                 repeat: Infinity,
//                 ease: "linear",
//               }}
//               className="glass rounded-xl p-2"
//               style={{
//                 border: `1px solid ${node.color}33`,
//                 boxShadow: `0 0 10px ${node.color}22`,
//               }}
//             >
//               <node.icon
//                 className="w-4 h-4 lg:w-5 lg:h-5"
//                 style={{ color: node.color }}
//               />
//             </motion.div>
//           </motion.div>
//         );
//       })}

//       {/* Data Particles flowing */}
//       {dataParticles.map((particle) => {
//         const pos = getPosition(particle.orbit, particle.angle);
//         return (
//           <motion.div
//             key={particle.id}
//             className="absolute z-5"
//             style={{
//               left: pos.x,
//               top: pos.y,
//               width: `${particle.size}px`,
//               height: `${particle.size}px`,
//               borderRadius: "50%",
//               background: particle.color,
//               boxShadow: `0 0 ${particle.size * 3}px ${particle.color}`,
//             }}
//             animate={{
//               opacity: [0, 1, 0],
//               scale: [0, 1, 0],
//             }}
//             transition={{
//               duration: particle.duration,
//               delay: particle.delay,
//               repeat: Infinity,
//               ease: "linear",
//             }}
//           />
//         );
//       })}

//       {/* Holographic effect overlay */}
//       <motion.div
//         className="absolute inset-0 z-0 pointer-events-none"
//         animate={{
//           opacity: [0.1, 0.2, 0.1],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       >
//         <div
//           className="absolute inset-0"
//           style={{
//             background:
//               "radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
//           }}
//         />
//       </motion.div>

//       {/* Corner accents */}
//       <motion.div
//         className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-purple-500/30"
//         animate={{ opacity: [0.3, 0.7, 0.3] }}
//         transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/30"
//         animate={{ opacity: [0.3, 0.7, 0.3] }}
//         transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-green-500/30"
//         animate={{ opacity: [0.3, 0.7, 0.3] }}
//         transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-pink-500/30"
//         animate={{ opacity: [0.3, 0.7, 0.3] }}
//         transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
//       />
//     </div>
//   );
// }

// components/hero/HeroVisualization.tsx
"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Database,
  Mail,
  BarChart3,
  Zap,
  Workflow,
  Cpu,
  Network,
  Shield,
  Globe,
  Hexagon,
  Triangle,
  Circle,
} from "lucide-react";
import { useEffect, useState } from "react";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

// Orbital nodes - Using primary and white variations
const orbitalNodes = [
  { id: 1, label: "Lead", icon: Zap, orbit: 1, angle: 0, color: PRIMARY },
  {
    id: 2,
    label: "AI Agent",
    icon: Bot,
    orbit: 1,
    angle: 60,
    color: PRIMARY_LIGHT,
  },
  {
    id: 3,
    label: "CRM",
    icon: Database,
    orbit: 1,
    angle: 120,
    color: PRIMARY_LIGHT,
  },
  {
    id: 4,
    label: "Email",
    icon: Mail,
    orbit: 1,
    angle: 180,
    color: PRIMARY_LIGHT,
  },
  {
    id: 5,
    label: "Analytics",
    icon: BarChart3,
    orbit: 1,
    angle: 240,
    color: PRIMARY_LIGHT,
  },
  {
    id: 6,
    label: "Workflow",
    icon: Workflow,
    orbit: 1,
    angle: 300,
    color: PRIMARY_LIGHT,
  },
];

// Secondary orbiting elements
const techNodes = [
  { id: 7, icon: Cpu, orbit: 0.7, angle: 30, color: PRIMARY },
  { id: 8, icon: Network, orbit: 0.7, angle: 90, color: "#ffffff" },
  { id: 9, icon: Shield, orbit: 0.7, angle: 150, color: PRIMARY_LIGHT },
  { id: 10, icon: Globe, orbit: 0.7, angle: 210, color: "#ffffff" },
  { id: 11, icon: Hexagon, orbit: 0.7, angle: 270, color: PRIMARY_LIGHT },
  { id: 12, icon: Triangle, orbit: 0.7, angle: 330, color: "#ffffff" },
];

// Data particles - Primary and white
const dataParticles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  angle: (i * 360) / 40,
  orbit: 0.85 + (i % 4) * 0.08,
  duration: 2 + (i % 5) * 0.5,
  delay: i * 0.15,
  color: i % 2 === 0 ? PRIMARY : "#ffffff",
  size: 2 + (i % 3) * 1.5,
}));

// Floating geometric shapes
const floatingShapes = [
  {
    id: 1,
    icon: Circle,
    x: "10%",
    y: "15%",
    duration: 6,
    delay: 0,
    color: PRIMARY,
  },
  {
    id: 2,
    icon: Triangle,
    x: "90%",
    y: "10%",
    duration: 7,
    delay: 1,
    color: "#ffffff",
  },
  {
    id: 3,
    icon: Hexagon,
    x: "85%",
    y: "85%",
    duration: 8,
    delay: 2,
    color: PRIMARY_LIGHT,
  },
  {
    id: 4,
    icon: Circle,
    x: "15%",
    y: "80%",
    duration: 5,
    delay: 0.5,
    color: "#ffffff",
  },
  {
    id: 5,
    icon: Triangle,
    x: "50%",
    y: "5%",
    duration: 6.5,
    delay: 1.5,
    color: PRIMARY,
  },
  {
    id: 6,
    icon: Hexagon,
    x: "5%",
    y: "50%",
    duration: 7.5,
    delay: 2.5,
    color: PRIMARY_LIGHT,
  },
  {
    id: 7,
    icon: Circle,
    x: "95%",
    y: "50%",
    duration: 5.5,
    delay: 0.8,
    color: "#ffffff",
  },
  {
    id: 8,
    icon: Triangle,
    x: "50%",
    y: "95%",
    duration: 6.8,
    delay: 1.8,
    color: PRIMARY,
  },
];

export default function HeroVisualization() {
  const [isMounted, setIsMounted] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Calculate position based on orbit and angle
  const getPosition = (orbit: number, angle: number) => {
    const radius = orbit * 45;
    const radians = (angle * Math.PI) / 180;
    const x = 50 + radius * Math.cos(radians);
    const y = 50 + radius * Math.sin(radians);
    return { x: `${x}%`, y: `${y}%` };
  };

  // Static placeholder for SSR
  if (!isMounted) {
    return (
      <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center">
        <div className="relative w-40 h-40 lg:w-48 lg:h-48">
          <div
            className="absolute inset-0 rounded-full opacity-30 blur-2xl"
            style={{ background: PRIMARY }}
          />
          <div className="relative w-full h-full rounded-full glass gradient-border flex items-center justify-center">
            <Bot className="w-16 h-16 lg:w-20 lg:h-20 text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center overflow-visible">
      {/* Outer rotating ring */}
      <motion.div
        className="absolute w-[420px] h-[420px] lg:w-[520px] lg:h-[520px] rounded-full"
        style={{ border: `1px solid ${PRIMARY_DARK}` }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <div
          className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full"
          style={{ background: PRIMARY, boxShadow: `0 0 15px ${PRIMARY_GLOW}` }}
        />
        <div className="absolute -bottom-1.5 left-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
        <div
          className="absolute top-1/2 -left-1.5 w-3 h-3 rounded-full"
          style={{
            background: PRIMARY_LIGHT,
            boxShadow: `0 0 15px ${PRIMARY_GLOW}`,
          }}
        />
        <div className="absolute top-1/2 -right-1.5 w-3 h-3 rounded-full bg-white/70 shadow-[0_0_15px_rgba(255,255,255,0.4)]" />
      </motion.div>

      {/* Inner rotating ring */}
      <motion.div
        className="absolute w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] rounded-full"
        style={{ border: `1px solid ${PRIMARY_DARK}` }}
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" />
        <div
          className="absolute -bottom-1 left-1/2 w-2 h-2 rounded-full"
          style={{ background: PRIMARY, boxShadow: `0 0 12px ${PRIMARY_GLOW}` }}
        />
        <div
          className="absolute top-1/2 -left-1 w-2 h-2 rounded-full"
          style={{ background: PRIMARY_LIGHT }}
        />
        <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-white/70" />
      </motion.div>

      {/* Dotted ring */}
      <motion.div
        className="absolute w-[360px] h-[360px] lg:w-[440px] lg:h-[440px] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: "50%",
              top: "50%",
              transform: `rotate(${i * 15}deg) translateY(-180px)`,
              background: i % 2 === 0 ? PRIMARY_DARK : "rgba(255,255,255,0.15)",
            }}
          />
        ))}
      </motion.div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${PRIMARY_DARK} 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Floating geometric shapes */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute z-0"
          style={{ left: shape.x, top: shape.y }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            rotate: [0, 180, 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <shape.icon
            className="w-6 h-6 lg:w-8 lg:h-8"
            style={{
              color: shape.color,
              filter: `drop-shadow(0 0 10px ${shape.color === "#ffffff" ? "rgba(255,255,255,0.5)" : PRIMARY_GLOW})`,
            }}
          />
        </motion.div>
      ))}

      {/* Central Core */}
      <motion.div
        className="relative z-20"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glow layers */}
        <motion.div
          className="absolute -inset-8 rounded-full blur-3xl"
          style={{ background: PRIMARY_DARK }}
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -inset-4 rounded-full blur-2xl bg-white/10"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative w-32 h-32 lg:w-40 lg:h-40">
          {/* Rotating gradient border - Primary to white */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: `conic-gradient(from 0deg, ${PRIMARY}, ${PRIMARY_LIGHT}, #ffffff, ${PRIMARY_LIGHT}, ${PRIMARY})`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner circle */}
          <div className="absolute inset-[3px] rounded-full bg-[#0a0a0f]/90 backdrop-blur-xl flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Bot className="w-12 h-12 lg:w-16 lg:h-16 text-white" />
            </motion.div>
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: `radial-gradient(circle, ${PRIMARY_DARK}, transparent)`,
              }}
            />
          </div>
        </div>
      </motion.div>

      {/* Orbital Nodes */}
      {orbitalNodes.map((node, index) => {
        const pos = getPosition(node.orbit, node.angle);
        return (
          <motion.div
            key={node.id}
            className="absolute z-10"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <motion.div
              className="relative"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                delay: index * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Connection line */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-[120px] h-px origin-left"
                style={{
                  background: `linear-gradient(90deg, ${node.color === "#ffffff" ? "rgba(255,255,255,0.4)" : PRIMARY_LIGHT}, transparent)`,
                  transform: `rotate(${node.angle}deg)`,
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              />

              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-50 blur-lg"
                style={{ background: node.color }}
                animate={{ opacity: hoveredNode === node.id ? 0.8 : 0.3 }}
                transition={{ duration: 0.3 }}
              />

              {/* Node card */}
              <div
                className={`relative rounded-2xl p-3 lg:p-4 cursor-pointer transition-all duration-300 ${
                  hoveredNode === node.id ? "scale-110 bg-white/10" : "glass"
                }`}
                style={{
                  border: `1px solid ${node.color === "#ffffff" ? "rgba(255,255,255,0.3)" : PRIMARY_LIGHT}`,
                  boxShadow:
                    hoveredNode === node.id
                      ? `0 0 30px ${node.color === "#ffffff" ? "rgba(255,255,255,0.4)" : PRIMARY_GLOW}`
                      : `0 0 10px ${node.color === "#ffffff" ? "rgba(255,255,255,0.2)" : PRIMARY_DARK}`,
                }}
              >
                <node.icon
                  className="w-6 h-6 lg:w-8 lg:h-8 mx-auto"
                  style={{ color: node.color }}
                />
                <span className="mt-2 text-xs lg:text-sm text-white block text-center font-medium">
                  {node.label}
                </span>
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Tech Nodes */}
      {techNodes.map((node, index) => {
        const pos = getPosition(node.orbit, node.angle);
        return (
          <motion.div
            key={node.id}
            className="absolute z-5"
            style={{
              left: pos.x,
              top: pos.y,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{
                duration: 10 + index,
                repeat: Infinity,
                ease: "linear",
              }}
              className="glass rounded-xl p-2"
              style={{
                border: `1px solid ${node.color === "#ffffff" ? "rgba(255,255,255,0.3)" : PRIMARY_DARK}`,
                boxShadow: `0 0 10px ${node.color === "#ffffff" ? "rgba(255,255,255,0.2)" : PRIMARY_DARK}`,
              }}
            >
              <node.icon
                className="w-4 h-4 lg:w-5 lg:h-5"
                style={{ color: node.color }}
              />
            </motion.div>
          </motion.div>
        );
      })}

      {/* Data Particles */}
      {dataParticles.map((particle) => {
        const pos = getPosition(particle.orbit, particle.angle);
        return (
          <motion.div
            key={particle.id}
            className="absolute z-5"
            style={{
              left: pos.x,
              top: pos.y,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: "50%",
              background: particle.color,
              boxShadow: `0 0 ${particle.size * 3}px ${particle.color === "#ffffff" ? "rgba(255,255,255,0.5)" : PRIMARY_GLOW}`,
            }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        );
      })}

      {/* Corner accents */}
      <motion.div
        className="absolute top-0 left-0 w-16 h-16"
        style={{
          borderTop: `2px solid ${PRIMARY_DARK}`,
          borderLeft: `2px solid ${PRIMARY_DARK}`,
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-white/20"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-white/20"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-16 h-16"
        style={{
          borderBottom: `2px solid ${PRIMARY_DARK}`,
          borderRight: `2px solid ${PRIMARY_DARK}`,
        }}
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
