import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import LegalPage from "@/components/ui/LegalPage";

export const metadata = pageMetadata(
  "/terms-and-conditions",
  "Terms & Conditions",
  "Read the terms for using the AxStudios website, viewing service and product information, and submitting project inquiries.",
);

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      introduction="These terms apply to your use of axstudios.tech and the project inquiry options available on the website."
    >
      <section>
        <h2>Website use</h2>
        <p>Use the website lawfully and provide information you have permission to share. Do not use the site to send spam, impersonate another person or organisation, or interfere with its operation.</p>
      </section>
      <section>
        <h2>Project inquiries</h2>
        <p>An inquiry starts a conversation. If we agree to work together, the project agreement sets out the scope, fees, milestones, ownership, and support arrangements for that engagement.</p>
      </section>
      <section>
        <h2>Content and examples</h2>
        <p>Service descriptions, sample products, demos, and calculator results illustrate what a project may involve. Results, timing, and costs depend on the project. AxStudios and its licensors retain their rights in the website content and branding. You may browse the site and share links to it.</p>
      </section>
      <section>
        <h2>External links</h2>
        <p>External websites and services have their own terms and privacy practices. Review them before using those services or sharing information with them.</p>
      </section>
      <section>
        <h2>Privacy and questions</h2>
        <p>Read our <Link href="/privacy-policy">Privacy Policy</Link> for information about how we handle inquiries. For questions about these terms, email <a href="mailto:contact@axstudios.tech">contact@axstudios.tech</a>.</p>
      </section>
    </LegalPage>
  );
}
