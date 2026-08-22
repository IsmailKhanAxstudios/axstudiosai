// // components/sections/ROICalculator.tsx
// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Calculator,
//   ArrowRight,
//   TrendingUp,
//   TrendingDown,
//   Users,
//   Clock,
//   DollarSign,
//   Calendar,
//   Zap,
//   PiggyBank,
//   BarChart3,
//   PieChart,
//   Sparkles,
//   Wallet,
//   Target,
//   Rocket,
//   ChevronDown,
//   Info,
//   CheckCircle2,
//   AlertCircle,
//   Lightbulb,
//   Gauge,
//   Activity,
//   Briefcase,
//   LineChart,
//   Award,
//   Star,
//   ThumbsUp,
//   ThumbsDown,
// } from "lucide-react";
// import Link from "next/link";

// export default function ROICalculator() {
//   const [employees, setEmployees] = useState(10);
//   const [hoursPerWeek, setHoursPerWeek] = useState(10);
//   const [hourlyCost, setHourlyCost] = useState(50);
//   const [weeksPerYear, setWeeksPerYear] = useState(48);
//   const [showBreakdown, setShowBreakdown] = useState(false);
//   const [isCalculating, setIsCalculating] = useState(false);

//   const annualCost = employees * hoursPerWeek * hourlyCost * weeksPerYear;
//   const potentialSavings = annualCost * 0.7;
//   const monthlySavings = potentialSavings / 12;
//   const dailySavings = potentialSavings / 365;
//   const hoursSaved = employees * hoursPerWeek * weeksPerYear * 0.7;

//   useEffect(() => {
//     setIsCalculating(true);
//     const timer = setTimeout(() => setIsCalculating(false), 500);
//     return () => clearTimeout(timer);
//   }, [employees, hoursPerWeek, hourlyCost, weeksPerYear]);

//   const formatCurrency = (value: number) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//       maximumFractionDigits: 0,
//     }).format(value);
//   };

//   const formatNumber = (value: number) => {
//     return new Intl.NumberFormat("en-US").format(Math.round(value));
//   };

//   // Calculate ROI percentage
//   const roiPercentage = Math.round(
//     (potentialSavings / (annualCost - potentialSavings)) * 100,
//   );

//   return (
//     <section className="py-24 relative overflow-hidden">
//       {/* Background effects */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute inset-0 opacity-20">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage:
//                 "radial-gradient(circle, #8b5cf6 1px, transparent 1px)",
//               backgroundSize: "30px 30px",
//             }}
//           />
//         </div>
//         <motion.div
//           className="absolute top-20 left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
//           animate={{ scale: [1, 1.2, 1] }}
//           transition={{ duration: 5, repeat: Infinity }}
//         />
//         <motion.div
//           className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
//           animate={{ scale: [1.2, 1, 1.2] }}
//           transition={{ duration: 6, repeat: Infinity }}
//         />
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <motion.div
//             initial={{ scale: 0 }}
//             whileInView={{ scale: 1 }}
//             transition={{ type: "spring", stiffness: 200 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4"
//           >
//             <Calculator className="w-4 h-4 text-green-400" />
//             <span className="text-sm text-zinc-300">ROI CALCULATOR</span>
//           </motion.div>

//           <h2 className="text-3xl lg:text-5xl font-bold mb-4">
//             How much could{" "}
//             <span className="gradient-text">automation save you?</span>
//           </h2>
//           <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
//             Calculate your potential savings with AI automation in real-time.
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Calculator Inputs */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="glass rounded-3xl p-8"
//           >
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-xl font-semibold flex items-center gap-2">
//                 <Calculator className="w-6 h-6 text-purple-400" />
//                 Your Inputs
//               </h3>
//               <Info className="w-5 h-5 text-zinc-500 cursor-help" />
//             </div>

//             <div className="space-y-8">
//               {/* Employees */}
//               <div>
//                 <div className="flex items-center justify-between mb-3">
//                   <label className="flex items-center gap-2 text-sm text-zinc-400">
//                     <Users className="w-4 h-4" />
//                     Number of employees
//                   </label>
//                   <motion.span
//                     key={employees}
//                     initial={{ scale: 1.5, color: "#8b5cf6" }}
//                     animate={{ scale: 1, color: "#ffffff" }}
//                     className="text-lg font-bold"
//                   >
//                     {employees}
//                   </motion.span>
//                 </div>
//                 <input
//                   type="range"
//                   min="1"
//                   max="100"
//                   value={employees}
//                   onChange={(e) => setEmployees(Number(e.target.value))}
//                   className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer custom-range"
//                 />
//                 <div className="flex justify-between text-xs text-zinc-500 mt-1">
//                   <span>1</span>
//                   <span>100</span>
//                 </div>
//               </div>

//               {/* Hours */}
//               <div>
//                 <div className="flex items-center justify-between mb-3">
//                   <label className="flex items-center gap-2 text-sm text-zinc-400">
//                     <Clock className="w-4 h-4" />
//                     Hours per week (repetitive)
//                   </label>
//                   <motion.span
//                     key={hoursPerWeek}
//                     initial={{ scale: 1.5, color: "#06b6d4" }}
//                     animate={{ scale: 1, color: "#ffffff" }}
//                     className="text-lg font-bold"
//                   >
//                     {hoursPerWeek}h
//                   </motion.span>
//                 </div>
//                 <input
//                   type="range"
//                   min="1"
//                   max="40"
//                   value={hoursPerWeek}
//                   onChange={(e) => setHoursPerWeek(Number(e.target.value))}
//                   className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer custom-range"
//                 />
//                 <div className="flex justify-between text-xs text-zinc-500 mt-1">
//                   <span>1h</span>
//                   <span>40h</span>
//                 </div>
//               </div>

//               {/* Hourly Cost */}
//               <div>
//                 <div className="flex items-center justify-between mb-3">
//                   <label className="flex items-center gap-2 text-sm text-zinc-400">
//                     <DollarSign className="w-4 h-4" />
//                     Average hourly cost
//                   </label>
//                   <motion.span
//                     key={hourlyCost}
//                     initial={{ scale: 1.5, color: "#10b981" }}
//                     animate={{ scale: 1, color: "#ffffff" }}
//                     className="text-lg font-bold"
//                   >
//                     ${hourlyCost}
//                   </motion.span>
//                 </div>
//                 <input
//                   type="range"
//                   min="20"
//                   max="200"
//                   step="5"
//                   value={hourlyCost}
//                   onChange={(e) => setHourlyCost(Number(e.target.value))}
//                   className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer custom-range"
//                 />
//                 <div className="flex justify-between text-xs text-zinc-500 mt-1">
//                   <span>$20</span>
//                   <span>$200</span>
//                 </div>
//               </div>

//               {/* Weeks */}
//               <div>
//                 <div className="flex items-center justify-between mb-3">
//                   <label className="flex items-center gap-2 text-sm text-zinc-400">
//                     <Calendar className="w-4 h-4" />
//                     Working weeks per year
//                   </label>
//                   <motion.span
//                     key={weeksPerYear}
//                     initial={{ scale: 1.5, color: "#f59e0b" }}
//                     animate={{ scale: 1, color: "#ffffff" }}
//                     className="text-lg font-bold"
//                   >
//                     {weeksPerYear}
//                   </motion.span>
//                 </div>
//                 <input
//                   type="range"
//                   min="40"
//                   max="52"
//                   value={weeksPerYear}
//                   onChange={(e) => setWeeksPerYear(Number(e.target.value))}
//                   className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer custom-range"
//                 />
//                 <div className="flex justify-between text-xs text-zinc-500 mt-1">
//                   <span>40</span>
//                   <span>52</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Results */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className="flex flex-col justify-center"
//           >
//             <div className="glass rounded-3xl p-8 gradient-border relative overflow-hidden">
//               {/* Animated background */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-purple-500/5"
//                 animate={{ opacity: [0.5, 1, 0.5] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               />

//               <div className="relative">
//                 <div className="flex items-center justify-between mb-6">
//                   <h3 className="text-xl font-semibold flex items-center gap-2">
//                     <PiggyBank className="w-6 h-6 text-green-400" />
//                     Your Results
//                   </h3>
//                   {isCalculating ? (
//                     <motion.div
//                       animate={{ rotate: 360 }}
//                       transition={{ duration: 1, repeat: Infinity }}
//                     >
//                       <Activity className="w-5 h-5 text-purple-400" />
//                     </motion.div>
//                   ) : (
//                     <CheckCircle2 className="w-5 h-5 text-green-400" />
//                   )}
//                 </div>

//                 <div className="space-y-6">
//                   {/* Annual Cost */}
//                   <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
//                     <div className="flex items-center justify-between mb-2">
//                       <p className="text-sm text-zinc-400 flex items-center gap-2">
//                         <ThumbsDown className="w-4 h-4 text-red-400" />
//                         Annual manual-work cost
//                       </p>
//                       <AlertCircle className="w-4 h-4 text-red-400" />
//                     </div>
//                     <motion.p
//                       key={annualCost}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="text-3xl font-bold text-red-400"
//                     >
//                       {formatCurrency(annualCost)}
//                     </motion.p>
//                   </div>

//                   {/* Potential Savings */}
//                   <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20">
//                     <div className="flex items-center justify-between mb-2">
//                       <p className="text-sm text-zinc-400 flex items-center gap-2">
//                         <ThumbsUp className="w-4 h-4 text-green-400" />
//                         Potential automation savings
//                       </p>
//                       <TrendingUp className="w-4 h-4 text-green-400" />
//                     </div>
//                     <motion.p
//                       key={potentialSavings}
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       className="text-4xl font-bold gradient-text"
//                     >
//                       {formatCurrency(potentialSavings)}
//                     </motion.p>
//                     <p className="text-xs text-zinc-500 mt-1">
//                       Based on 70% automation potential
//                     </p>
//                   </div>

//                   {/* Quick Stats */}
//                   <div className="grid grid-cols-3 gap-3">
//                     <div className="text-center p-3 rounded-lg bg-white/5">
//                       <p className="text-lg font-bold text-white">
//                         {formatCurrency(monthlySavings)}
//                       </p>
//                       <p className="text-xs text-zinc-500">Monthly</p>
//                     </div>
//                     <div className="text-center p-3 rounded-lg bg-white/5">
//                       <p className="text-lg font-bold text-white">
//                         {formatCurrency(dailySavings)}
//                       </p>
//                       <p className="text-xs text-zinc-500">Daily</p>
//                     </div>
//                     <div className="text-center p-3 rounded-lg bg-white/5">
//                       <p className="text-lg font-bold text-white">
//                         {formatNumber(hoursSaved)}h
//                       </p>
//                       <p className="text-xs text-zinc-500">Hours Saved</p>
//                     </div>
//                   </div>

//                   {/* ROI Indicator */}
//                   <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10">
//                     <div className="flex items-center gap-2">
//                       <Rocket className="w-5 h-5 text-purple-400" />
//                       <span className="text-sm text-zinc-300">
//                         Projected ROI
//                       </span>
//                     </div>
//                     <span className="text-lg font-bold text-white">
//                       {roiPercentage}%
//                     </span>
//                   </div>

//                   {/* Breakdown Toggle */}
//                   <button
//                     onClick={() => setShowBreakdown(!showBreakdown)}
//                     className="w-full flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
//                   >
//                     <span className="text-sm text-zinc-300">
//                       View Breakdown
//                     </span>
//                     <ChevronDown
//                       className={`w-4 h-4 transition-transform ${showBreakdown ? "rotate-180" : ""}`}
//                     />
//                   </button>

//                   {/* Breakdown Details */}
//                   <AnimatePresence>
//                     {showBreakdown && (
//                       <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="overflow-hidden"
//                       >
//                         <div className="space-y-2 p-4 rounded-lg bg-white/5">
//                           <div className="flex justify-between text-sm">
//                             <span className="text-zinc-400">Labor Cost</span>
//                             <span className="text-white">
//                               {formatCurrency(annualCost * 0.5)}
//                             </span>
//                           </div>
//                           <div className="flex justify-between text-sm">
//                             <span className="text-zinc-400">Time Savings</span>
//                             <span className="text-white">
//                               {formatCurrency(annualCost * 0.3)}
//                             </span>
//                           </div>
//                           <div className="flex justify-between text-sm">
//                             <span className="text-zinc-400">
//                               Error Reduction
//                             </span>
//                             <span className="text-white">
//                               {formatCurrency(annualCost * 0.2)}
//                             </span>
//                           </div>
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>

//                   <Link
//                     href="/contact"
//                     className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
//                   >
//                     Let's find your automation opportunities
//                     <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// components/sections/ROICalculator.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  ArrowRight,
  TrendingUp,
  Users,
  Clock,
  DollarSign,
  Calendar,
  PiggyBank,
  Sparkles,
  ChevronDown,
  Info,
  CheckCircle2,
  AlertCircle,
  Rocket,
  Activity,
  ThumbsUp,
  ThumbsDown,
} from "lucide-react";
import Link from "next/link";

// Primary color: rgb(235, 106, 80) - Coral
const PRIMARY = "rgb(235, 106, 80)";
const PRIMARY_LIGHT = "rgba(235, 106, 80, 0.6)";
const PRIMARY_DARK = "rgba(235, 106, 80, 0.3)";
const PRIMARY_GLOW = "rgba(235, 106, 80, 0.5)";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(50);
  const [weeksPerYear, setWeeksPerYear] = useState(48);
  const [showBreakdown, setShowBreakdown] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const annualCost = employees * hoursPerWeek * hourlyCost * weeksPerYear;
  const potentialSavings = annualCost * 0.7;
  const monthlySavings = potentialSavings / 12;
  const dailySavings = potentialSavings / 365;
  const hoursSaved = employees * hoursPerWeek * weeksPerYear * 0.7;

  useEffect(() => {
    setIsCalculating(true);
    const timer = setTimeout(() => setIsCalculating(false), 500);
    return () => clearTimeout(timer);
  }, [employees, hoursPerWeek, hourlyCost, weeksPerYear]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat("en-US").format(Math.round(value));
  };

  const roiPercentage = Math.round(
    (potentialSavings / (annualCost - potentialSavings)) * 100,
  );

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle, ${PRIMARY_DARK} 1px, transparent 1px)`,
              backgroundSize: "30px 30px",
            }}
          />
        </div>
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: PRIMARY_DARK }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ background: "rgba(255, 255, 255, 0.03)" }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            style={{ border: `1px solid ${PRIMARY_DARK}` }}
          >
            <Calculator className="w-4 h-4" style={{ color: PRIMARY }} />
            <span className="text-sm text-white/80">ROI CALCULATOR</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-white">How much could </span>
            <span style={{ color: PRIMARY }}>automation save you?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Calculate your potential savings with AI automation in real-time.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calculator Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="glass rounded-3xl p-8"
            style={{ border: `1px solid ${PRIMARY_DARK}` }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                <Calculator className="w-6 h-6" style={{ color: PRIMARY }} />
                Your Inputs
              </h3>
              <Info className="w-5 h-5 text-white/40 cursor-help" />
            </div>

            <div className="space-y-8">
              {/* Employees */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-sm text-white/60">
                    <Users className="w-4 h-4" style={{ color: PRIMARY }} />
                    Number of employees
                  </label>
                  <motion.span
                    key={employees}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    className="text-lg font-bold text-white"
                  >
                    {employees}
                  </motion.span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: PRIMARY }}
                />
                <div className="flex justify-between text-xs text-white/40 mt-1">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-sm text-white/60">
                    <Clock className="w-4 h-4" style={{ color: PRIMARY }} />
                    Hours per week (repetitive)
                  </label>
                  <motion.span
                    key={hoursPerWeek}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    className="text-lg font-bold text-white"
                  >
                    {hoursPerWeek}h
                  </motion.span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: PRIMARY }}
                />
                <div className="flex justify-between text-xs text-white/40 mt-1">
                  <span>1h</span>
                  <span>40h</span>
                </div>
              </div>

              {/* Hourly Cost */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-sm text-white/60">
                    <DollarSign
                      className="w-4 h-4"
                      style={{ color: PRIMARY }}
                    />
                    Average hourly cost
                  </label>
                  <motion.span
                    key={hourlyCost}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    className="text-lg font-bold text-white"
                  >
                    ${hourlyCost}
                  </motion.span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="200"
                  step="5"
                  value={hourlyCost}
                  onChange={(e) => setHourlyCost(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: PRIMARY }}
                />
                <div className="flex justify-between text-xs text-white/40 mt-1">
                  <span>$20</span>
                  <span>$200</span>
                </div>
              </div>

              {/* Weeks */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-sm text-white/60">
                    <Calendar className="w-4 h-4" style={{ color: PRIMARY }} />
                    Working weeks per year
                  </label>
                  <motion.span
                    key={weeksPerYear}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    className="text-lg font-bold text-white"
                  >
                    {weeksPerYear}
                  </motion.span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="52"
                  value={weeksPerYear}
                  onChange={(e) => setWeeksPerYear(Number(e.target.value))}
                  className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: PRIMARY }}
                />
                <div className="flex justify-between text-xs text-white/40 mt-1">
                  <span>40</span>
                  <span>52</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <div
              className="glass rounded-3xl p-8 relative overflow-hidden"
              style={{
                border: `1px solid ${PRIMARY_LIGHT}`,
                boxShadow: `0 0 40px ${PRIMARY_GLOW}`,
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${PRIMARY_DARK}, transparent)`,
                }}
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                    <PiggyBank className="w-6 h-6" style={{ color: PRIMARY }} />
                    Your Results
                  </h3>
                  {isCalculating ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Activity
                        className="w-5 h-5"
                        style={{ color: PRIMARY }}
                      />
                    </motion.div>
                  ) : (
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: PRIMARY }}
                    />
                  )}
                </div>

                <div className="space-y-6">
                  {/* Annual Cost */}
                  <div
                    className="p-4 rounded-xl"
                    style={{ background: PRIMARY_DARK }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-white/60 flex items-center gap-2">
                        <ThumbsDown
                          className="w-4 h-4"
                          style={{ color: PRIMARY }}
                        />
                        Annual manual-work cost
                      </p>
                      <AlertCircle
                        className="w-4 h-4"
                        style={{ color: PRIMARY }}
                      />
                    </div>
                    <motion.p
                      key={annualCost}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl font-bold text-white"
                    >
                      {formatCurrency(annualCost)}
                    </motion.p>
                  </div>

                  {/* Potential Savings */}
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${PRIMARY_DARK}, rgba(235, 106, 80, 0.15))`,
                      border: `1px solid ${PRIMARY_LIGHT}`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-white/60 flex items-center gap-2">
                        <ThumbsUp
                          className="w-4 h-4"
                          style={{ color: PRIMARY }}
                        />
                        Potential automation savings
                      </p>
                      <TrendingUp
                        className="w-4 h-4"
                        style={{ color: PRIMARY }}
                      />
                    </div>
                    <motion.p
                      key={potentialSavings}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl font-bold"
                      style={{ color: PRIMARY }}
                    >
                      {formatCurrency(potentialSavings)}
                    </motion.p>
                    <p className="text-xs text-white/40 mt-1">
                      Based on 70% automation potential
                    </p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        value: formatCurrency(monthlySavings),
                        label: "Monthly",
                      },
                      { value: formatCurrency(dailySavings), label: "Daily" },
                      {
                        value: `${formatNumber(hoursSaved)}h`,
                        label: "Hours Saved",
                      },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center p-3 rounded-lg"
                        style={{ background: PRIMARY_DARK }}
                      >
                        <p className="text-lg font-bold text-white">
                          {stat.value}
                        </p>
                        <p className="text-xs text-white/40">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* ROI Indicator */}
                  <div
                    className="flex items-center justify-between p-4 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${PRIMARY_DARK}, transparent)`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Rocket className="w-5 h-5" style={{ color: PRIMARY }} />
                      <span className="text-sm text-white/60">
                        Projected ROI
                      </span>
                    </div>
                    <span
                      className="text-lg font-bold"
                      style={{ color: PRIMARY }}
                    >
                      {roiPercentage}%
                    </span>
                  </div>

                  {/* Breakdown Toggle */}
                  <button
                    onClick={() => setShowBreakdown(!showBreakdown)}
                    className="w-full flex items-center justify-between p-3 rounded-lg transition-colors"
                    style={{ background: PRIMARY_DARK }}
                  >
                    <span className="text-sm text-white/60">
                      View Breakdown
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${showBreakdown ? "rotate-180" : ""}`}
                      style={{ color: PRIMARY }}
                    />
                  </button>

                  {/* Breakdown Details */}
                  <AnimatePresence>
                    {showBreakdown && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div
                          className="space-y-2 p-4 rounded-lg"
                          style={{ background: PRIMARY_DARK }}
                        >
                          <div className="flex justify-between text-sm">
                            <span className="text-white/40">Labor Cost</span>
                            <span className="text-white">
                              {formatCurrency(annualCost * 0.5)}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-white/40">Time Savings</span>
                            <span className="text-white">
                              {formatCurrency(annualCost * 0.3)}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-white/40">
                              Error Reduction
                            </span>
                            <span className="text-white">
                              {formatCurrency(annualCost * 0.2)}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-medium transition-all hover:scale-105"
                    style={{
                      backgroundColor: PRIMARY,
                      boxShadow: `0 10px 30px ${PRIMARY_GLOW}`,
                    }}
                  >
                    Let's find your automation opportunities
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
