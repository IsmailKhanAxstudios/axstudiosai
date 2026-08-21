// app/contact/page.tsx
import { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact AxStudios — Book a Strategy Call',
  description: 'Get in touch with AxStudios to discuss your AI automation needs.',
}

export default function ContactPage() {
  return (
    <section className="relative min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Let's build your <span className="gradient-text">AI advantage.</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Tell us about your business and what you'd like to automate. 
            We'll get back to you within 24 hours.
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