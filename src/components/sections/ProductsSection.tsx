import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { getPublicProducts } from "@/lib/catalogStore";

export default async function ProductsSection({ preview = false }: { preview?: boolean }) {
  const Heading = preview ? "h2" : "h1";
  const ProductHeading = preview ? "h3" : "h2";
  const products = await getPublicProducts();
  const visibleProducts = preview ? products.slice(0, 2) : products;

  return (
    <section
      aria-labelledby="products-heading"
      className={preview ? "relative pb-8 pt-14 sm:pt-16" : "relative pb-16 pt-28 sm:pt-32"}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="mx-auto mb-8 max-w-2xl px-2 text-center sm:mb-10">
          <Heading id="products-heading" className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Our <span className="text-[rgb(var(--accent-text))]">Products</span>
          </Heading>
          <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-secondary-text sm:mt-4 sm:text-lg">Explore the products we build at AxStudios.</p>
        </header>

        <ul className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6">
          {visibleProducts.map(({ name, image, imageAlt, description, sample, website }) => (
            <li key={name} className="overflow-hidden rounded-2xl border bg-surface/80 [border-color:rgb(var(--primary)/0.25)]">
              <div className="relative aspect-[16/9] overflow-hidden border-b border-foreground/10 bg-field sm:aspect-[16/8]">
                <Image
                  src={image}
                  unoptimized={image.startsWith("https://")}
                  alt={imageAlt ?? ""}
                  fill
                  sizes="(min-width: 1088px) 500px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-4 sm:px-5 sm:py-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <ProductHeading className="min-w-0 break-words text-lg font-semibold text-foreground sm:text-xl">{name}</ProductHeading>
                  {sample && <span className="rounded-full border border-foreground/10 px-2.5 py-1 text-xs text-secondary-text">Sample concept</span>}
                </div>
                {description && <p className="mt-2 text-sm leading-relaxed text-secondary-text">{description}</p>}
                {website && (
                  <a href={website} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[rgb(var(--accent-text))] hover:underline">
                    Visit product <ArrowRight className="size-4" aria-hidden="true" />
                  </a>
                )}
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
