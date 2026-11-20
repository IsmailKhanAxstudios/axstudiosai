// components/sections/ROICalculator.tsx
"use client";

import { useState, useEffect, useRef } from "react";
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

const PRIMARY = "rgb(var(--primary))";
const PRIMARY_LIGHT = "rgb(var(--primary) / 0.6)";
const PRIMARY_DARK = "rgb(var(--primary) / 0.3)";
const PRIMARY_GLOW = "rgb(var(--primary) / 0.5)";

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

  const calcTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Brief "calculating" pulse whenever an input changes.
  const pulseCalculating = () => {
    setIsCalculating(true);
    if (calcTimer.current) clearTimeout(calcTimer.current);
    calcTimer.current = setTimeout(() => setIsCalculating(false), 500);
  };

  useEffect(
    () => () => {
      if (calcTimer.current) clearTimeout(calcTimer.current);
    },
    [],
  );

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
          style={{ background: "rgb(var(--foreground) / 0.03)" }}
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
            <Calculator className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
            <span className="text-sm text-foreground/80">ROI CALCULATOR</span>
          </motion.div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            <span className="text-foreground">How much could </span>
            <span style={{ color: "rgb(var(--accent-text))" }}>automation save you?</span>
          </h2>
          <p className="text-lg text-secondary-text max-w-2xl mx-auto">
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
              <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                <Calculator className="w-6 h-6" style={{ color: "rgb(var(--accent-text))" }} />
                Your Inputs
              </h3>
              <Info className="w-5 h-5 text-muted cursor-help" />
            </div>

            <div className="space-y-8">
              {/* Employees */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-sm text-secondary-text">
                    <Users className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
                    Number of employees
                  </label>
                  <motion.span
                    key={employees}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    className="text-lg font-bold text-foreground"
                  >
                    {employees}
                  </motion.span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={employees}
                  onChange={(e) => {
                    setEmployees(Number(e.target.value));
                    pulseCalculating();
                  }}
                  className="w-full h-2 bg-track rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: PRIMARY }}
                />
                <div className="flex justify-between text-xs text-muted mt-1">
                  <span>1</span>
                  <span>100</span>
                </div>
              </div>

              {/* Hours */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-sm text-secondary-text">
                    <Clock className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
                    Hours per week (repetitive)
                  </label>
                  <motion.span
                    key={hoursPerWeek}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    className="text-lg font-bold text-foreground"
                  >
                    {hoursPerWeek}h
                  </motion.span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => {
                    setHoursPerWeek(Number(e.target.value));
                    pulseCalculating();
                  }}
                  className="w-full h-2 bg-track rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: PRIMARY }}
                />
                <div className="flex justify-between text-xs text-muted mt-1">
                  <span>1h</span>
                  <span>40h</span>
                </div>
              </div>

              {/* Hourly Cost */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-sm text-secondary-text">
                    <DollarSign
                      className="w-4 h-4"
                      style={{ color: "rgb(var(--accent-text))" }}
                    />
                    Average hourly cost
                  </label>
                  <motion.span
                    key={hourlyCost}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    className="text-lg font-bold text-foreground"
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
                  onChange={(e) => {
                    setHourlyCost(Number(e.target.value));
                    pulseCalculating();
                  }}
                  className="w-full h-2 bg-track rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: PRIMARY }}
                />
                <div className="flex justify-between text-xs text-muted mt-1">
                  <span>$20</span>
                  <span>$200</span>
                </div>
              </div>

              {/* Weeks */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className="flex items-center gap-2 text-sm text-secondary-text">
                    <Calendar className="w-4 h-4" style={{ color: "rgb(var(--accent-text))" }} />
                    Working weeks per year
                  </label>
                  <motion.span
                    key={weeksPerYear}
                    initial={{ scale: 1.5 }}
                    animate={{ scale: 1 }}
                    className="text-lg font-bold text-foreground"
                  >
                    {weeksPerYear}
                  </motion.span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="52"
                  value={weeksPerYear}
                  onChange={(e) => {
                    setWeeksPerYear(Number(e.target.value));
                    pulseCalculating();
                  }}
                  className="w-full h-2 bg-track rounded-lg appearance-none cursor-pointer"
                  style={{ accentColor: PRIMARY }}
                />
                <div className="flex justify-between text-xs text-muted mt-1">
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
                  <h3 className="text-xl font-semibold flex items-center gap-2 text-foreground">
                    <PiggyBank className="w-6 h-6" style={{ color: "rgb(var(--accent-text))" }} />
                    Your Results
                  </h3>
                  {isCalculating ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <Activity
                        className="w-5 h-5"
                        style={{ color: "rgb(var(--accent-text))" }}
                      />
                    </motion.div>
                  ) : (
                    <CheckCircle2
                      className="w-5 h-5"
                      style={{ color: "rgb(var(--accent-text))" }}
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
                      <p className="text-sm text-secondary-text flex items-center gap-2">
                        <ThumbsDown
                          className="w-4 h-4"
                          style={{ color: "rgb(var(--accent-text))" }}
                        />
                        Annual manual-work cost
                      </p>
                      <AlertCircle
                        className="w-4 h-4"
                        style={{ color: "rgb(var(--accent-text))" }}
                      />
                    </div>
                    <motion.p
                      key={annualCost}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-3xl font-bold text-foreground"
                    >
                      {formatCurrency(annualCost)}
                    </motion.p>
                  </div>

                  {/* Potential Savings */}
                  <div
                    className="p-4 rounded-xl"
                    style={{
                      background: `linear-gradient(135deg, ${PRIMARY_DARK}, rgb(var(--primary) / 0.15))`,
                      border: `1px solid ${PRIMARY_LIGHT}`,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-secondary-text flex items-center gap-2">
                        <ThumbsUp
                          className="w-4 h-4"
                          style={{ color: "rgb(var(--accent-text))" }}
                        />
                        Potential automation savings
                      </p>
                      <TrendingUp
                        className="w-4 h-4"
                        style={{ color: "rgb(var(--accent-text))" }}
                      />
                    </div>
                    <motion.p
                      key={potentialSavings}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl font-bold"
                      style={{ color: "rgb(var(--accent-text))" }}
                    >
                      {formatCurrency(potentialSavings)}
                    </motion.p>
                    <p className="text-xs text-muted mt-1">
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
                        <p className="text-lg font-bold text-foreground">
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted">{stat.label}</p>
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
                      <Rocket className="w-5 h-5" style={{ color: "rgb(var(--accent-text))" }} />
                      <span className="text-sm text-secondary-text">
                        Projected ROI
                      </span>
                    </div>
                    <span
                      className="text-lg font-bold"
                      style={{ color: "rgb(var(--accent-text))" }}
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
                    <span className="text-sm text-secondary-text">
                      View Breakdown
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${showBreakdown ? "rotate-180" : ""}`}
                      style={{ color: "rgb(var(--accent-text))" }}
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
                            <span className="text-muted">Labor Cost</span>
                            <span className="text-foreground">
                              {formatCurrency(annualCost * 0.5)}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted">Time Savings</span>
                            <span className="text-foreground">
                              {formatCurrency(annualCost * 0.3)}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted">
                              Error Reduction
                            </span>
                            <span className="text-foreground">
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
                    Let&apos;s find your automation opportunities
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
