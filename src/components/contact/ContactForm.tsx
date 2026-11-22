"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const PRIMARY = "rgb(var(--primary))";
const PRIMARY_LIGHT = "rgb(var(--primary) / 0.6)";
const PRIMARY_DARK = "rgb(var(--primary) / 0.3)";
const PRIMARY_GLOW = "rgb(var(--primary) / 0.5)";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    linkedin: "",
    instagram: "",
    x: "",
    business: "",
    automation: "",
    projectSize: "",
    timeline: "",
    interest: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting || !validate()) return;
    setSubmitError("");

    setIsSubmitting(true);

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("The contact form is temporarily unavailable. Please email contact@axstudios.tech.");
      }
      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company || "N/A",
        phone: formData.phone || "N/A",
        website: formData.website || "N/A",
        linkedin: formData.linkedin || "N/A",
        instagram: formData.instagram || "N/A",
        x: formData.x || "N/A",
        business: formData.business,
        automation: formData.automation,
        interest: formData.interest || "N/A",
        project_size: formData.projectSize || "N/A",
        timeline: formData.timeline || "N/A",
      };

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey,
      );

      if (result.status === 200) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
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
        style={{
          border: `1px solid ${PRIMARY_LIGHT}`,
          boxShadow: `0 0 40px ${PRIMARY_GLOW}`,
        }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="mx-auto mb-6 w-20 h-20 flex items-center justify-center rounded-full"
          style={{
            background: PRIMARY_DARK,
            border: `2px solid ${PRIMARY}`,
          }}
        >
          <CheckCircle className="w-10 h-10" style={{ color: "rgb(var(--accent-text))" }} />
        </motion.div>
        <h2 className="text-2xl font-bold mb-4 text-white">Request Sent!</h2>
        <p className="text-white/60 mb-6">
          Thank you for reaching out. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              company: "",
              email: "",
              phone: "",
              website: "",
              linkedin: "",
              instagram: "",
              x: "",
              business: "",
              automation: "",
              projectSize: "",
              timeline: "",
              interest: "",
            });
          }}
          className="transition-colors"
          style={{ color: "rgb(var(--accent-text))" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "rgb(var(--foreground))")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgb(var(--accent-text))")}
        >
          Send another request
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      ref={formRef}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit}
      className="glass rounded-3xl p-5 sm:p-8 space-y-6"
      style={{ border: `1px solid ${PRIMARY_DARK}` }}
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm mb-2 text-secondary-text">
            Name *
          </label>
          <input
            type="text"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-field/50 border ${
              errors.name ? "border-red-500" : "border-line"
            } focus:outline-none focus:ring-1 transition-colors text-foreground placeholder:text-muted`}
            style={
              {
                borderColor: errors.name ? undefined : PRIMARY_DARK,
                "--tw-ring-color": PRIMARY,
              } as React.CSSProperties
            }
            onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
            onBlur={(e) => (e.target.style.borderColor = PRIMARY_DARK)}
            placeholder="John Doe"
          />
          {errors.name && (
            <p id="name-error" className="text-sm text-red-300 mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="company" className="block text-sm mb-2 text-secondary-text">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-field/50 border border-line focus:outline-none focus:ring-1 transition-colors text-foreground placeholder:text-muted"
            style={{ borderColor: PRIMARY_DARK }}
            onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
            onBlur={(e) => (e.target.style.borderColor = PRIMARY_DARK)}
            placeholder="Company Inc."
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm mb-2 text-secondary-text">
            Email *
          </label>
          <input
            type="email"
            required
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg bg-field/50 border ${
              errors.email ? "border-red-500" : "border-line"
            } focus:outline-none focus:ring-1 transition-colors text-foreground placeholder:text-muted`}
            style={{ borderColor: errors.email ? undefined : PRIMARY_DARK }}
            onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
            onBlur={(e) => (e.target.style.borderColor = PRIMARY_DARK)}
            placeholder="john@company.com"
          />
          {errors.email && (
            <p id="email-error" className="text-sm text-red-300 mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm mb-2 text-secondary-text">
            Phone (optional)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-field/50 border border-line focus:outline-none focus:ring-1 transition-colors text-foreground placeholder:text-muted"
            style={{ borderColor: PRIMARY_DARK }}
            onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
            onBlur={(e) => (e.target.style.borderColor = PRIMARY_DARK)}
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="website" className="block text-sm mb-2 text-secondary-text">
          Website (optional)
        </label>
        <input
          type="url"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-field/50 border border-line focus:outline-none focus:ring-1 transition-colors text-foreground placeholder:text-muted"
          style={{ borderColor: PRIMARY_DARK }}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = PRIMARY_DARK)}
          placeholder="https://company.com"
        />
      </div>

      <fieldset className="space-y-3">
        <legend className="text-sm text-secondary-text">Social profiles (optional)</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          {([
            ["linkedin", "LinkedIn", "https://linkedin.com/in/your-name"],
            ["instagram", "Instagram", "@yourhandle"],
            ["x", "X / Twitter", "@yourhandle"],
          ] as const).map(([name, label, placeholder]) => (
            <div key={name}>
              <label htmlFor={name} className="mb-2 block text-sm text-secondary-text">{label}</label>
              <input
                type="text"
                id={name}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                className="w-full rounded-lg border border-line bg-field/50 px-4 py-3 text-foreground transition-colors placeholder:text-muted focus:outline-none focus:ring-1"
                style={{ borderColor: PRIMARY_DARK, "--tw-ring-color": PRIMARY } as React.CSSProperties}
                onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
                onBlur={(e) => (e.target.style.borderColor = PRIMARY_DARK)}
                placeholder={placeholder}
              />
            </div>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="business" className="block text-sm mb-2 text-secondary-text">
          What does your business do? (optional)
        </label>
        <textarea
          id="business"
          name="business"
          value={formData.business}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-lg border border-line bg-field/50 px-4 py-3 text-foreground transition-colors placeholder:text-muted focus:outline-none focus:ring-1 resize-none"
          style={{ borderColor: PRIMARY_DARK, "--tw-ring-color": PRIMARY } as React.CSSProperties}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = PRIMARY_DARK)}
          placeholder="We provide..."
        />
      </div>

      <div>
        <label
          htmlFor="automation"
          className="block text-sm mb-2 text-secondary-text"
        >
          What would you like to automate? (optional)
        </label>
        <textarea
          id="automation"
          name="automation"
          value={formData.automation}
          onChange={handleChange}
          rows={3}
          className="w-full rounded-lg border border-line bg-field/50 px-4 py-3 text-foreground transition-colors placeholder:text-muted focus:outline-none focus:ring-1 resize-none"
          style={{ borderColor: PRIMARY_DARK, "--tw-ring-color": PRIMARY } as React.CSSProperties}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = PRIMARY_DARK)}
          placeholder="We want to automate..."
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="interest"
            className="block text-sm mb-2 text-secondary-text"
          >
            What are you interested in?
          </label>
          <select
            id="interest"
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-field/50 border border-line focus:outline-none focus:ring-1 transition-colors text-foreground"
            style={{ borderColor: PRIMARY_DARK }}
            onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
            onBlur={(e) => (e.target.style.borderColor = PRIMARY_DARK)}
          >
            <option value="">Select option</option>
            <option value="ai-cost-optimization">AI Cost &amp; Performance Optimization</option>
            <option value="ai-automation">AI Automation</option>
            <option value="ai-agents">AI Agents</option>
            <option value="ai-web-applications">AI Web Applications</option>
            <option value="ai-saas-development">
              Custom AI & SaaS Development
            </option>
            <option value="ai-automation-audit">
              AI Strategy & Automation Audit
            </option>
            <option value="ai-consultancy">AI Consultancy</option>
            <option value="ai-integration">AI Integration</option>
            <option value="ai-maintenance">AI Systems Maintenance</option>
            <option value="chrome-extensions">Chrome Extensions</option>
            <option value="mvp-development">MVP Development</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="projectSize"
            className="block text-sm mb-2 text-secondary-text"
          >
            Estimated project size
          </label>
          <select
            id="projectSize"
            name="projectSize"
            value={formData.projectSize}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-field/50 border border-line focus:outline-none focus:ring-1 transition-colors text-foreground"
            style={{ borderColor: PRIMARY_DARK }}
            onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
            onBlur={(e) => (e.target.style.borderColor = PRIMARY_DARK)}
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
        <label htmlFor="timeline" className="block text-sm mb-2 text-secondary-text">
          Preferred timeline
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-field/50 border border-line focus:outline-none focus:ring-1 transition-colors text-foreground"
          style={{ borderColor: PRIMARY_DARK }}
          onFocus={(e) => (e.target.style.borderColor = PRIMARY)}
          onBlur={(e) => (e.target.style.borderColor = PRIMARY_DARK)}
        >
          <option value="">Select timeline</option>
          <option value="immediate">Immediately</option>
          <option value="1-month">Within 1 month</option>
          <option value="3-months">Within 3 months</option>
          <option value="flexible">Flexible</option>
        </select>
      </div>

      {submitError && <p role="alert" className="text-sm text-red-300">{submitError}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-4 rounded-full text-white font-medium transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{
          backgroundColor: PRIMARY,
          boxShadow: `0 10px 30px ${PRIMARY_GLOW}`,
        }}
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
