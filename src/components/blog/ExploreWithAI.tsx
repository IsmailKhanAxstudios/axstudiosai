"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ArrowUpRight, Asterisk, Bot, CircleSlash2, Layers, Search, Sparkles, X } from "lucide-react";
import { siteOrigin } from "@/lib/site";

type ExploreWithAIProps =
  | { articleUrl: string; compact?: boolean; company?: false }
  | { company: true; compact?: never; articleUrl?: never };

export default function ExploreWithAI({ articleUrl, compact = false, company = false }: ExploreWithAIProps) {
  const headingId = useId();
  const panelId = useId();
  const [open, setOpen] = useState(false);
  const [clipboardStatus, setClipboardStatus] = useState<"idle" | "copied" | "manual">("idle");
  const launcher = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const label = company ? "Ask AI about AxStudios" : compact ? "Summarize with AI" : "Explore with AI";
  const prompt = company
    ? `Give me a brief overview of AxStudios using its official website: ${siteOrigin}/. Summarize what the company does and the services it offers. Use only information you can verify from the website.`
    : `Summarize this article: ${articleUrl}`;
  const query = encodeURIComponent(prompt);
  const assistants = [
    { name: "ChatGPT", href: `https://chatgpt.com/?q=${query}`, icon: Bot, copyPrompt: false },
    { name: "Claude", href: `https://claude.ai/new?q=${query}`, icon: Asterisk, copyPrompt: true },
    { name: "Gemini", href: "https://gemini.google.com/app", icon: Sparkles, copyPrompt: true },
  ];
  if (company) {
    assistants.push(
      { name: "Perplexity", href: "https://www.perplexity.ai/", icon: Search, copyPrompt: true },
      { name: "Grok", href: "https://grok.com/", icon: CircleSlash2, copyPrompt: true },
      { name: "Copilot", href: "https://copilot.microsoft.com/", icon: Layers, copyPrompt: true },
    );
  }

  useEffect(() => {
    if (!open) return;

    function dismissOutside(event: PointerEvent) {
      if (event.target instanceof Node && !launcher.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function dismissOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape" && !event.defaultPrevented) {
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

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(prompt);
      setClipboardStatus("copied");
    } catch {
      setClipboardStatus("manual");
    }
  }

  const panel = (
    <section
      id={panelId}
      aria-labelledby={headingId}
      className={company
        ? "absolute right-full top-1/2 mr-2 max-h-[70dvh] w-[min(15rem,calc(100vw-4.5rem))] -translate-y-1/2 overflow-y-auto rounded-2xl border border-foreground/15 bg-surface p-3 shadow-xl"
        : compact ? "border-b border-foreground/10 px-3 py-1.5"
        : "mt-6 rounded-2xl border border-foreground/10 bg-surface/70 p-4 sm:p-5"}
    >
      <div className={compact ? "flex flex-wrap items-center justify-end gap-x-2 gap-y-1.5" : "space-y-3"}>
        <p id={headingId} className={compact ? "text-xs font-medium text-secondary-text" : "text-xs font-semibold uppercase tracking-widest text-secondary-text"}>
          {label}
        </p>
        <ul className={company ? "space-y-1" : compact ? "flex flex-wrap gap-1" : "flex flex-wrap gap-2"}>
          {assistants.map(({ name, href, icon: Icon, copyPrompt: shouldCopy }) => (
            <li key={name}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                onClick={shouldCopy ? copyPrompt : undefined}
                className={`inline-flex items-center rounded-lg border border-foreground/15 text-foreground transition-colors hover:bg-foreground/5 hover:[border-color:rgb(var(--primary)/0.55)] ${compact ? "size-8 justify-center" : "min-h-10 gap-2 px-3 py-2 text-sm font-medium"} ${company ? "w-full" : ""}`}
              >
                <Icon className="size-4 text-[rgb(var(--accent-text))]" aria-hidden="true" />
                <span className={compact ? "sr-only" : undefined}>{name}</span>
                {!compact && <ArrowUpRight className={`size-3.5 text-secondary-text ${company ? "ml-auto" : ""}`} aria-hidden="true" />}
                <span className="sr-only">
                  {shouldCopy ? " (opens in a new tab and copies the prompt)" : " (opens in a new tab)"}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div role="status" className={clipboardStatus === "idle" ? "sr-only" : "mt-3 text-sm text-secondary-text"}>
        {clipboardStatus === "copied" && "Prompt copied. Paste it into the chat if the prompt field is empty."}
        {clipboardStatus === "manual" && "Copy the prompt below and paste it into the chat."}
      </div>
      {clipboardStatus === "manual" && (
        <textarea
          aria-label={company ? "Company overview prompt" : "Article summary prompt"}
          readOnly
          rows={2}
          value={prompt}
          onFocus={(event) => event.currentTarget.select()}
          className="mt-2 w-full resize-y rounded-lg border border-foreground/10 bg-background p-2 text-sm text-foreground"
        />
      )}
    </section>
  );

  if (!company) return panel;

  return (
    <div ref={launcher} className="relative">
      <button
        ref={trigger}
        type="button"
        aria-label={open ? "Close AxStudios AI assistants" : label}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        title={label}
        onClick={() => {
          if (!open) setClipboardStatus("idle");
          setOpen(!open);
        }}
        className="grid size-11 shrink-0 place-items-center rounded-xl border border-foreground/10 shadow-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[rgb(var(--accent-text))] bg-[rgb(var(--primary))] text-[#24100b] hover:brightness-110"
      >
        {open ? <X className="size-5" aria-hidden="true" /> : <Sparkles className="size-5" aria-hidden="true" />}
      </button>
      {open && panel}
    </div>
  );
}
