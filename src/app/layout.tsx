// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Background from "@/components/ui/Background";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingTools from "@/components/ui/SocialLauncher";
import { themeInitScript } from "@/lib/theme";
import { siteOrigin } from "@/lib/site";
import { organizationId, websiteId } from "@/lib/seo";
import StructuredData from "@/components/ui/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: "AxStudios — AI Automation & Intelligent Business Systems",
  description:
    "AxStudios builds AI automation systems, AI agents, custom software, and intelligent workflows that help businesses work smarter and scale faster.",
  openGraph: {
    title: "AxStudios — AI Automation & Intelligent Business Systems",
    description:
      "Build smarter. Automate everything. Scale faster with intelligent AI automation systems.",
    type: "website",
    url: "https://axstudios.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "AxStudios — AI Automation & Intelligent Business Systems",
    description:
      "Build smarter. Automate everything. Scale faster with intelligent AI automation systems.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground antialiased">
        <StructuredData data={{
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Organization", "@id": organizationId, name: "AxStudios", url: siteOrigin,
              logo: `${siteOrigin}/logo-land.svg`, email: "contact@axstudios.tech", telephone: "+918591897818",
              address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" } },
            { "@type": "WebSite", "@id": websiteId, name: "AxStudios", url: siteOrigin, publisher: { "@id": organizationId } },
          ],
        }} />
        <Script id="theme-init" strategy="beforeInteractive">
          {themeInitScript}
        </Script>
        <Background />
        <CustomCursor />
        <Navbar />
        <main>{children}</main>
        <FloatingTools />
        <Footer />
      </body>
    </html>
  );
}
