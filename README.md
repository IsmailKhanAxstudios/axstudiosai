This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Blog administration

Open `/admin/login` to sign in and `/admin` to search, view, create, edit, or delete published posts. Included sample posts can be edited and deleted from the same dashboard. Edits preserve the article URL. Configure these settings as server-only environment variables.

- `AXSTUDIOS_ADMIN_EMAIL` is the administrator’s sign-in address.
- `AXSTUDIOS_ADMIN_PASSWORD_HASH` is a random 16-byte hexadecimal salt, a colon, and a 64-byte hexadecimal scrypt digest. Pass the salt string to scrypt as UTF-8. Keep the password in a password manager.
- `AXSTUDIOS_ADMIN_SESSION_SECRET` is a random secret of at least 32 characters. Rotate it to invalidate existing sessions.
- `AXSTUDIOS_BLOG_DIR` is an optional absolute path to writable, persistent storage. Local development defaults to the ignored `.axstudios-data/blogs` directory.

Published posts and covers are stored together in the blog directory. Back up that directory and attach it as a persistent volume when deploying to a Node host or container. Vercel’s normal serverless filesystem does not provide persistent writable storage for these uploads. Use a host with a persistent volume or connect a durable storage backend before enabling publishing there.

The Services and Products tabs in admin add entries to the public catalog. Catalog entries and uploaded product covers are stored under `_catalog` in the same persistent directory.

## Supabase on AxStudios

Use a dedicated Supabase project. Apply the migration in `supabase/migrations` before switching the app to it. Configure `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, and the server-only `SUPABASE_SECRET_KEY` in local and deployed environments. Keep the secret out of browser code, public environment variables, and version control.

Run `npx tsx scripts/setup-supabase.ts` once with `AXSTUDIOS_BOOTSTRAP_PASSWORD` supplied in the process environment. It imports the built-in and locally saved content and covers, then provisions `admin@axstudios.tech`. The script preserves rows already present in Supabase. Unset the bootstrap password after use. Supplying a `SUPABASE_ACCESS_TOKEN` also configures Auth redirects and disables signup. Without that management token, set the production Site URL, add the three `/admin/login` URLs, and turn off public signup in the Supabase dashboard.

Once the Supabase environment is set, blog and catalog reads and writes use Supabase. Existing local settings remain available for development without Supabase. Contact submissions from the configured site are saved to a private table and visible under Admin → Inquiries. The contact API permits browser requests from `http://localhost:3000`, `https://axstudios.tech`, and `https://axstudiostech.netlify.app`.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
