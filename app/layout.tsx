import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sterlingridgeventures.com"),
  title: "Sterling Ridge Ventures LLC | Field IT Services in Dallas–Fort Worth",
  description: "Sterling Ridge Ventures LLC provides professional onsite IT support, network deployments, smart-hands services, POS support, hardware installation, structured cabling, and technology rollout assistance across Dallas–Fort Worth.",
  alternates: { canonical: "/" },
  openGraph: { title: "Sterling Ridge Ventures LLC | DFW Field IT Services", description: "Dependable onsite technology support, network deployments, smart hands and structured cabling across Dallas–Fort Worth.", url: "/", siteName: "Sterling Ridge Ventures LLC", locale: "en_US", type: "website", images: [{ url: "/og.png", width: 1734, height: 907, alt: "Sterling Ridge Ventures LLC — Dependable Technology Support. Delivered Onsite." }] },
  twitter: { card: "summary_large_image", title: "Sterling Ridge Ventures LLC | DFW Field IT Services", description: "Dependable technology support delivered onsite across Dallas–Fort Worth.", images: ["/og.png"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Sterling Ridge Ventures LLC", url: "https://sterlingridgeventures.com", email: "contact@sterlingridgeventures.com", telephone: "+1-612-987-7874", areaServed: { "@type": "City", name: "Dallas–Fort Worth" }, address: { "@type": "PostalAddress", addressRegion: "TX", addressCountry: "US" }, description: "Onsite IT field services and business technology support across Dallas–Fort Worth." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
