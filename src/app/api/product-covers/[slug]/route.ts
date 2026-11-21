import { readProductCover } from "@/lib/catalogStore";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const cover = await readProductCover((await params).slug);
  if (!cover) return new Response(null, { status: 404 });

  return new Response(new Uint8Array(cover.bytes), {
    headers: {
      "Content-Type": cover.type,
      "Cache-Control": "public, max-age=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
