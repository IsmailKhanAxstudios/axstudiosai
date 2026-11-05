import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="glass mx-auto max-w-5xl rounded-3xl border border-[#eb6a50]/30 px-5 py-12 text-center sm:px-12">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          Ready to build your <span className="text-[#eb6a50]">AI advantage?</span>
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-white/70">
          Tell us where repetitive work is slowing you down. Let&apos;s explore the right automation for your business.
        </p>
        <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#eb6a50] px-6 py-4 font-medium text-white transition-colors hover:bg-[#ce543c]">
          Book a Strategy Call <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" />
        </Link>
      </div>
    </section>
  );
}
