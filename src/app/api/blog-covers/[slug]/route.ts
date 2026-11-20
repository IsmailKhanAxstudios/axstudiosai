import { readBlogCover } from "@/lib/blogStore";

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const cover = await readBlogCover((await params).slug);
  if (!cover) return new Response(null, { status: 404 });

  return new Response(new Uint8Array(cover.bytes), {
    headers: {
      "Content-Type": cover.type,
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
