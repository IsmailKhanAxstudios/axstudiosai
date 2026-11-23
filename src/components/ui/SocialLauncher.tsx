"use client";

import { usePathname } from "next/navigation";
import ExploreWithAI from "@/components/blog/ExploreWithAI";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MessageCircle, X } from "lucide-react";
import { linkedinUrl, whatsappUrl } from "@/lib/site";

const links = [
  { label: "WhatsApp", href: whatsappUrl },
  { label: "LinkedIn", href: linkedinUrl },
];

function SocialLauncher() {
  const [open, setOpen] = useState(false);
  const launcher = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    function dismissOutside(event: PointerEvent) {
      if (event.target instanceof Node && !launcher.current?.contains(event.target)) setOpen(false);
    }

    function dismissOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && !event.defaultPrevented) {
        event.preventDefault();
        setOpen(false);
        trigger.current?.focus();
      }
    }

    document.addEventListener("pointerdown", dismissOutside);
    document.addEventListener("keydown", dismissOnEscape);
    return () => {
      document.removeEventListener("pointerdown", dismissOutside);
      document.removeEventListener("keydown", dismissOnEscape);
    };
  }, [open]);

  return (
    <div ref={launcher} className="relative">
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="floating-social-links"
        aria-label={open ? "Close social links" : "Open social links"}
        title="Connect with AxStudios"
        className="grid size-11 shrink-0 place-items-center rounded-xl border border-foreground/10 shadow-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent-text))] bg-surface text-[rgb(var(--accent-text))] hover:bg-background"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <MessageCircle className="size-6" aria-hidden="true" />}
      </button>
      <nav
        id="floating-social-links"
        hidden={!open}
        aria-label="Connect with AxStudios"
        className="absolute right-full top-1/2 mr-2 w-44 -translate-y-1/2 rounded-xl border border-foreground/15 bg-background p-1.5 shadow-xl"
      >
        {links.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center gap-2 rounded-lg px-2.5 text-sm font-medium text-foreground hover:bg-foreground/5"
          >
            {label === "WhatsApp" ? (
              <MessageCircle className="size-4 text-[rgb(var(--accent-text))]" aria-hidden="true" />
            ) : (
              <span className="grid size-4 place-items-center rounded-sm bg-[#0a66c2] text-xs font-bold text-white" aria-hidden="true">in</span>
            )}
            {label}
            <ArrowUpRight className="ml-auto size-3.5 text-secondary-text" aria-hidden="true" />
          </a>
        ))}
      </nav>
    </div>
  );
}

export default function FloatingTools() {
  const pathname = usePathname();
  const showCompanyAI = pathname === "/" || pathname === "/blogs";

  return (
    <div className="fixed right-2 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-2 sm:right-4">
      {showCompanyAI && <ExploreWithAI company />}
      <SocialLauncher key={pathname} />
    </div>
  );
}
