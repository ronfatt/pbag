import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pbag.my"),
  applicationName: "PBAG Grace Training Centre",
  title: {
    default: "PBAG Grace Training Centre | Sponsor Education in Tawau",
    template: "%s | PBAG Grace Training Centre"
  },
  description:
    "Sponsor or donate to PBAG Grace Training Centre in Tawau, Sabah, supporting education, skills training, and care for undocumented children.",
  keywords: [
    "PBAG",
    "Pusat Bimbingan Alternatif Grace",
    "Grace Training Centre",
    "PBAG Tawau",
    "Tawau donation",
    "Sabah charity",
    "sponsor a child",
    "undocumented children education",
    "alternative education Malaysia",
    "Malaysia NGO donation"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Give Every Child A Chance To Learn | PBAG Grace Training Centre",
    description:
      "Support PBAG in Tawau, Sabah. Your sponsorship or donation helps undocumented children access education, skills training, and community care.",
    url: "/",
    type: "website",
    locale: "en_MY",
    siteName: "Pusat Bimbingan Alternatif Grace",
    images: [
      {
        url: "/images/pbag-og.jpg",
        width: 1200,
        height: 630,
        alt: "PBAG Grace Training Centre students learning in Tawau"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "PBAG Grace Training Centre | Sponsor Education in Tawau",
    description:
      "Sponsor or donate to PBAG in Tawau, Sabah, and help undocumented children receive education, skills training, and care.",
    images: ["/images/pbag-og.jpg"]
  }
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "NGO"],
  name: "Pusat Bimbingan Alternatif Grace",
  alternateName: "Grace Training Centre",
  url: "https://www.pbag.my",
  logo: "https://www.pbag.my/images/pbag-logo.png",
  image: "https://www.pbag.my/images/pbag-og.jpg",
  description:
    "Pusat Bimbingan Alternatif Grace is an alternative education centre in Tawau, Sabah supporting undocumented children through education, skills training, and community care.",
  telephone: "+60198088281",
  email: "gtctawau@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "TB 14354-14356, Lot 8-10, Pekan Kinabutan, Mile 5 1/2, Jalan Apas",
    addressLocality: "Tawau",
    addressRegion: "Sabah",
    postalCode: "91000",
    addressCountry: "MY"
  },
  sameAs: ["https://www.facebook.com/gtctawau"]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
