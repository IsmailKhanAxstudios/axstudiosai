import { pageMetadata } from "@/lib/seo";
import LegalPage from "@/components/ui/LegalPage";

export const metadata = pageMetadata(
  "/privacy-policy",
  "Privacy Policy",
  "Learn how AxStudios handles contact inquiries, newsletter subscriptions, and website preferences.",
);

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      introduction="This notice explains how AxStudios handles information when you visit axstudios.tech or contact us about a project."
    >
      <section>
        <h2>Information we receive</h2>
        <p>The contact form collects your name, email address, and details about your business and project. You can also provide information such as your company, phone number, website, service interest, project size, and timeline. If you email us, we receive the address and message you send. Please keep passwords, access tokens, and sensitive customer records out of initial inquiries.</p>
      </section>
      <section>
        <h2>How we use information</h2>
        <p>We use inquiry details to respond, understand your needs, prepare a proposal when appropriate, and keep relevant correspondence. Hosting and delivery services may process technical information such as IP addresses and request logs to operate and troubleshoot the website.</p>
      </section>
      <section>
        <h2>How inquiries are delivered</h2>
        <p>The contact form uses Supabase to store inquiries and EmailJS to deliver email notifications. Email providers handle the messages they deliver. Depending on where these providers operate, they may process information outside your country.</p>
        <p>If you contact us through WhatsApp, WhatsApp handles the conversation under its own privacy policy.</p>
      </section>
      <section>
        <h2>Theme preference</h2>
        <p>We save your selected light or dark theme in your browser’s local storage. You can remove this preference by clearing the site’s stored data in your browser settings.</p>
      </section>
      <section>
        <h2>Newsletter subscriptions</h2>
        <p>If you subscribe, we store your email address, sign-up time, and consent record in Supabase so we can manage your subscription. Email <a href="mailto:contact@axstudios.tech">contact@axstudios.tech</a> to withdraw consent or request deletion.</p>
      </section>
      <section>
        <h2>Retention and your choices</h2>
        <p>We keep inquiry details as needed to respond, manage relevant business records, or meet applicable obligations. Depending on applicable law, you may be entitled to request access, a copy, correction, or deletion, or to raise a concern with your privacy regulator.</p>
      </section>
      <section>
        <h2>Privacy contact</h2>
        <p>Send privacy questions or requests to <a href="mailto:contact@axstudios.tech">contact@axstudios.tech</a>.</p>
      </section>
    </LegalPage>
  );
}
