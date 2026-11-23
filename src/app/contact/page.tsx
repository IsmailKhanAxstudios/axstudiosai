import { pageMetadata } from "@/lib/seo";
// app/contact/page.tsx
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import { companyLocation, whatsappUrl } from "@/lib/site";
import { MessageCircle } from "lucide-react";

export const metadata = pageMetadata(
  "/contact",
  "Book an AI Automation Strategy Call in Dubai",
  "Contact AxStudios in Dubai to discuss workflow automation, a custom AI agent, LLM API costs, or an MVP build. Reach us by form or WhatsApp.",
);

export default function ContactPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Contact our <span className="text-[rgb(var(--accent-text))]">AI agency</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Tell us which workflow you want to automate, where LLM API costs are rising, or what custom software or MVP you want to build.
          </p>
          <p className="mt-3 text-sm text-secondary-text">Headquartered in {companyLocation}.</p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#137640] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#0c5d31]">
            <MessageCircle className="size-4" aria-hidden="true" />
            Chat with us on WhatsApp
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}
