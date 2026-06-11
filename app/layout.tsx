import type { Metadata } from "next";
import { Fraunces, Karla, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

const karla = Karla({
  subsets: ["latin"],
  variable: "--font-karla",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: `${site.name} | Web developer in the North Cotswolds`,
  description:
    "Websites, online shops and the systems behind them. A freelance web developer working with businesses in Moreton-in-Marsh, Shipston-on-Stour, Chipping Campden and the surrounding villages.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${site.name} | Web developer in the North Cotswolds`,
    description:
      "Websites, online shops and the systems behind them, built by a local developer who sticks around after launch.",
    url: site.domain,
    siteName: site.name,
    locale: "en_GB",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  url: site.domain,
  email: site.email,
  telephone: site.phone,
  description:
    "Freelance web developer building websites, online shops, system integrations and technical SEO for businesses in the North Cotswolds.",
  areaServed: [...site.towns, "North Cotswolds"].map((name) => ({
    "@type": "Place",
    name,
  })),
  parentOrganization: {
    "@type": "Organization",
    name: site.company,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      // Font variables must live on <html>: the Tailwind theme references
      // them at :root, where body-level variables aren't visible.
      className={`${fraunces.variable} ${karla.variable} ${jetbrains.variable}`}
    >
      <body className="grain">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
