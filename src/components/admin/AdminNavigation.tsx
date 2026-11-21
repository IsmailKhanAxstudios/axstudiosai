import Link from "next/link";

const links = [
  { id: "blogs", label: "Blogs", href: "/admin" },
  { id: "services", label: "Services", href: "/admin/catalog/services" },
  { id: "products", label: "Products", href: "/admin/catalog/products" },
  { id: "case-studies", label: "Case Studies", href: "/admin/catalog/case-studies" },
  { id: "inquiries", label: "Inquiries", href: "/admin/inquiries" },
] as const;

export default function AdminNavigation({ active }: { active: (typeof links)[number]["id"] }) {
  return (
    <nav aria-label="Admin sections" className="mb-6 flex flex-wrap gap-2 border-b border-foreground/10 pb-3">
      {links.map(({ id, label, href }) => (
        <Link
          key={id}
          href={href}
          aria-current={active === id ? "page" : undefined}
          className={`rounded-full px-4 py-2 text-sm font-medium ${active === id ? "bg-[rgb(var(--primary)/0.15)] text-[rgb(var(--accent-text))]" : "text-secondary-text hover:bg-foreground/5 hover:text-foreground"}`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
