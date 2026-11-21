import { pageMetadata } from "@/lib/seo";
// app/contact/page.tsx
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import { companyLocation, companyPhone, whatsappUrl } from "@/lib/site";

export const metadata = pageMetadata(
  "/contact",
  "Contact Our AI Agency in Dubai",
  "Book a strategy call with AxStudios for AI automation, token cost optimization, an AI audit, or MVP development. Contact us by form or WhatsApp.",
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
            Tell us what you’d like to automate, where AI costs are rising, or what you want to build.
          </p>
          <p className="mt-3 text-sm text-secondary-text">
            Headquartered in {companyLocation}. <a href={whatsappUrl} className="font-medium text-foreground underline underline-offset-4">WhatsApp {companyPhone}</a>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}
