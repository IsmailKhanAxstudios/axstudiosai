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

The savings calculator assumes 70% automation and a five-day working week. Its results are illustrative gross labor savings, excluding implementation and operating costs; they are not investment ROI or guaranteed savings.
