# AxStudios

AI automation agency website built with Next.js, React, Tailwind CSS and Framer Motion.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` for a production build and `npm start` to serve it. Run `npm run lint` for static checks.

## Contact form configuration

The browser form uses EmailJS. Set these values in `.env.local` and rebuild after changing them:

```dotenv
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Configure the EmailJS template to accept `name`, `email`, `company`, `phone`, `website`, `business`, `automation`, `interest`, `project_size`, and `timeline`. Restrict permitted origins in EmailJS. If configuration is missing, the form displays an email fallback instead of claiming success.

The separate `/api/contact` endpoint uses Resend and requires `RESEND_API_KEY` and `CONTACT_RECEIVER_EMAIL`. Set `CONTACT_SENDER_EMAIL` to an address on your verified sending domain for production delivery. The default Resend onboarding address is for testing. Server credentials must never use a `NEXT_PUBLIC_` prefix. Builds do not require email credentials.

## Content and estimates

Service links target sections on `/services`. Placeholder social and policy links were removed until real destinations and approved policy content are available.

<<<<<<< HEAD
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
=======
The savings calculator assumes 70% automation and a five-day working week. Its results are illustrative gross labor savings, excluding implementation and operating costs; they are not investment ROI or guaranteed savings.
>>>>>>> ac30c2a607d97b3877acfbf927d7e1666aee63f1
