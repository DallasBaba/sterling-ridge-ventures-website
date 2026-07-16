import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sterlingridgeventures.com"),
  title: "Dallas–Fort Worth Field Service Provider | Sterling Ridge Ventures LLC",
  description: "Reliable Dallas–Fort Worth field IT coverage for Field Nation buyers, MSPs, dispatch teams, project managers, and national technology deployment companies.",
  alternates: { canonical: "/" },
  openGraph: { title: "Sterling Ridge Ventures LLC | DFW Field Service Provider", description: "Buyer-focused field IT support with reliable communication, onsite execution, and documented close-out across Dallas–Fort Worth.", url: "/", siteName: "Sterling Ridge Ventures LLC", locale: "en_US", type: "website", images: [{ url: "/og.png", width: 1734, height: 907, alt: "Sterling Ridge Ventures LLC field service provider for Dallas–Fort Worth" }] },
  twitter: { card: "summary_large_image", title: "Sterling Ridge Ventures LLC | DFW Field Service Provider", description: "Reliable DFW field service coverage for dispatch teams, MSPs, and national deployment companies.", images: ["/og.png"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const structuredData = { "@context": "https://schema.org", "@type": "ProfessionalService", name: "Sterling Ridge Ventures LLC", url: "https://sterlingridgeventures.com", email: "contact@sterlingridgeventures.com", telephone: "+1-612-987-7874", areaServed: ["Dallas–Fort Worth", "North Texas", "United States"], address: { "@type": "PostalAddress", addressLocality: "Dallas", addressRegion: "TX", addressCountry: "US" }, description: "Buyer-focused onsite field IT services for MSPs, dispatch teams, project managers, and national technology deployment companies across Dallas–Fort Worth." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
