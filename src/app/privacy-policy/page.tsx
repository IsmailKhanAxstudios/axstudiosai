import type { Metadata } from "next";
import LegalPage from "@/components/ui/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | AxStudios",
  description: "How AxStudios handles project inquiries, email delivery, and your website theme preference.",
};

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
        <p>The website form uses EmailJS to send your submission. The site’s separate contact endpoint uses Resend for email delivery. Email providers handle the messages they deliver. Depending on where these providers operate, they may process information outside your country.</p>
      </section>
      <section>
        <h2>Theme preference</h2>
        <p>We save your selected light or dark theme in your browser’s local storage. You can remove this preference by clearing the site’s stored data in your browser settings.</p>
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
