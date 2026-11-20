import type { ReactNode } from "react";

export default function LegalPage({
  title,
  introduction,
  children,
}: {
  title: string;
  introduction: string;
  children: ReactNode;
}) {
  return (
    <article className="relative mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6 sm:pt-32">
      <header className="mb-8 border-b border-foreground/10 pb-8">
        <h1 className="text-3xl font-bold text-foreground sm:text-5xl">{title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-secondary-text">{introduction}</p>
      </header>
      <div className="space-y-7 text-secondary-text [&_a]:font-medium [&_a]:text-foreground [&_a]:underline [&_a]:underline-offset-4 [&_h2]:mb-2 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:leading-relaxed">
        {children}
      </div>
    </article>
  );
}
