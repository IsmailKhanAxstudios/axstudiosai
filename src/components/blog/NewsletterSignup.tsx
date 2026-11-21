import NewsletterForm from "@/app/newsletter/NewsletterForm";

export default function NewsletterSignup() {
  return (
    <aside className="mt-12 rounded-2xl border border-line bg-surface p-5 sm:p-8">
      <h2 className="text-xl font-semibold text-foreground sm:text-2xl">Subscribe to the AxStudios newsletter</h2>
      <p className="mb-5 mt-2 text-sm leading-relaxed text-secondary-text">
        Get new articles on AI, business, and markets in your inbox.
      </p>
      <NewsletterForm />
    </aside>
  );
}
