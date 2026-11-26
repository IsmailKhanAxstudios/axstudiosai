# AxStudios

AI automation agency website built with Next.js, React, Tailwind CSS and Framer Motion.

## Run locally

```sh
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` for a production build and `npm start` to serve it. Run `npm run lint` for static checks.

## Contact form configuration

The contact form posts to `/api/contact`, which stores inquiries in Supabase using the server-only `SUPABASE_SECRET_KEY`. Apply the `contact_submissions` migration and set `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, and `SUPABASE_SECRET_KEY` in the deployment environment. Resend settings (`RESEND_API_KEY`, `CONTACT_RECEIVER_EMAIL`, and a verified `CONTACT_SENDER_EMAIL`) enable email notifications; submissions are still saved when email notifications are not configured.

## Content and estimates

Service links target sections on `/services`. Placeholder social and policy links were removed until real destinations and approved policy content are available.

The savings calculator assumes 70% automation and a five-day working week. Its results are illustrative gross labor savings, excluding implementation and operating costs; they are not investment ROI or guaranteed savings.
