import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  { name: "DomiumPro", image: "/products/domiumpro.png", imageAlt: "DomiumPro property management sign-in screen" },
  { name: "FlowDesk", image: "/products/flowdesk.webp", description: "A workspace for team requests and approvals.", sample: true },
  { name: "BriefBoard", image: "/products/briefboard.webp", description: "A space to organise project ideas, requirements, and decisions.", sample: true },
  { name: "LaunchMeter", image: "/products/launchmeter.webp", description: "A dashboard for tracking adoption and feedback after launch.", sample: true },
];

export default function ProductsSection({ preview = false }: { preview?: boolean }) {
  const Heading = preview ? "h2" : "h1";
  const ProductHeading = preview ? "h3" : "h2";
  const visibleProducts = preview ? products.slice(0, 2) : products;

  return (
    <section
      aria-labelledby="products-heading"
      className={preview ? "relative pb-8 pt-14 sm:pt-16" : "relative pb-16 pt-28 sm:pt-32"}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-8 max-w-2xl text-center">
          <Heading id="products-heading" className="text-3xl font-bold text-foreground lg:text-5xl">
            Our <span className="text-[rgb(var(--accent-text))]">Products</span>
          </Heading>
          <p className="mt-4 text-lg text-secondary-text">Explore the products we build at AxStudios.</p>
        </header>

        <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 sm:gap-5">
          {visibleProducts.map(({ name, image, imageAlt, description, sample }) => (
            <li key={name} className="overflow-hidden rounded-2xl border bg-surface/80 [border-color:rgb(var(--primary)/0.25)]">
              <div className="relative aspect-[16/8] overflow-hidden border-b border-foreground/10 bg-field">
                <Image
                  src={image}
                  alt={imageAlt ?? ""}
                  fill
                  sizes="(min-width: 1088px) 500px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="px-5 py-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <ProductHeading className="text-xl font-semibold text-foreground">{name}</ProductHeading>
                  {sample && <span className="rounded-full border border-foreground/10 px-2.5 py-1 text-xs text-secondary-text">Sample concept</span>}
                </div>
                {description && <p className="mt-2 text-sm leading-relaxed text-secondary-text">{description}</p>}
              </div>
            </li>
          ))}
        </ul>
        {preview && (
          <div className="mt-5 text-center">
            <Link href="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-[rgb(var(--accent-text))] hover:underline">
              View all products <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
