// components/contact/ContactForm.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    business: "",
    automation: "",
    projectSize: "",
    timeline: "",
    interest: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!formData.business.trim())
      newErrors.business = "Please describe your business";
    if (!formData.automation.trim())
      newErrors.automation = "Please describe what you'd like to automate";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call - Replace with actual API integration
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass rounded-3xl p-12 text-center"
      >
        <CheckCircle className="w-16 h-16 mx-auto mb-6 text-green-400" />
        <h2 className="text-2xl font-bold mb-4">Request Sent!</h2>
        <p className="text-zinc-400 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="text-purple-400 hover:text-purple-300 transition-colors"
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-8 space-y-6"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-zinc-800/50 border ${
              errors.name ? "border-red-500" : "border-zinc-700"
            } focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors`}
            placeholder="John Doe"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
            placeholder="Company Inc."
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-zinc-800/50 border ${
              errors.email ? "border-red-500" : "border-zinc-700"
            } focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors`}
            placeholder="john@company.com"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm mb-2">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm mb-2">
          Website (optional)
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
          placeholder="https://company.com"
        />
      </div>

      <div>
        <label htmlFor="business" className="block text-sm mb-2">
          What does your business do? *
        </label>
        <textarea
          id="business"
          name="business"
          value={formData.business}
          onChange={handleChange}
          rows={3}
          className={`w-full px-4 py-3 rounded-lg bg-zinc-800/50 border ${
            errors.business ? "border-red-500" : "border-zinc-700"
          } focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors resize-none`}
          placeholder="We provide..."
        />
        {errors.business && (
          <p className="text-sm text-red-500 mt-1">{errors.business}</p>
        )}
      </div>

      <div>
        <label htmlFor="automation" className="block text-sm mb-2">
          What would you like to automate? *
        </label>
        <textarea
          id="automation"
          name="automation"
          value={formData.automation}
          onChange={handleChange}
          rows={3}
          className={`w-full px-4 py-3 rounded-lg bg-zinc-800/50 border ${
            errors.automation ? "border-red-500" : "border-zinc-700"
          } focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors resize-none`}
          placeholder="We want to automate..."
        />
        {errors.automation && (
          <p className="text-sm text-red-500 mt-1">{errors.automation}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="interest" className="block text-sm mb-2">
            What are you interested in?
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
          >
            <option value="">Select option</option>
            <option value="ai-automation">AI Automation</option>
            <option value="ai-agents">AI Agents</option>
            <option value="ai-saas">AI SaaS Development</option>
            <option value="lead-automation">Lead Automation</option>
            <option value="customer-support">Customer Support</option>
            <option value="marketing-automation">Marketing Automation</option>
            <option value="custom-ai">Custom AI Solution</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="projectSize" className="block text-sm mb-2">
            Estimated project size
          </label>
          <select
            id="projectSize"
            name="projectSize"
            value={formData.projectSize}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
          >
            <option value="">Select size</option>
            <option value="small">Small (1-2 weeks)</option>
            <option value="medium">Medium (2-4 weeks)</option>
            <option value="large">Large (1-3 months)</option>
            <option value="enterprise">Enterprise (3+ months)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm mb-2">
          Preferred timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-zinc-800/50 border border-zinc-700 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-colors"
        >
          <option value="">Select timeline</option>
          <option value="immediate">Immediately</option>
          <option value="1-month">Within 1 month</option>
          <option value="3-months">Within 3 months</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Request
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </motion.form>
  );
}
