import type { Metadata } from "next";
import { Geist, Geist_Mono, Press_Start_2P } from "next/font/google";
import Script from "next/script";
import WorldSwitcher from "@/components/WorldSwitcher";
import "./globals.css";

const GA_ID = "G-N0B2S2BF68";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pressStart2P = Press_Start_2P({
  variable: "--font-press-start-2p",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Gray | Software Consultant in Madison, WI | Kinetic.codes",
  description:
    "Independent software consultant in Madison, Wisconsin. Fractional CTO, technical leadership, system architecture, and 0-to-1 product development. Almost 20 years experience.",
  keywords: [
    "software consultant madison wi",
    "software consultant madison wisconsin",
    "fractional cto madison",
    "technical consultant wisconsin",
    "software development madison",
    "principal engineer",
    "technical leader",
    "software contractor madison",
    "freelance developer madison wi",
    "startup consultant wisconsin",
  ],
  authors: [{ name: "Lucas Gray" }],
  openGraph: {
    title: "Lucas Gray | Software Consultant in Madison, WI",
    description:
      "Independent software consultant in Madison, Wisconsin. Fractional CTO, technical leadership, and product development.",
    url: "https://kinetic.codes",
    siteName: "Kinetic.codes",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Gray | Software Consultant in Madison, WI",
    description:
      "Independent software consultant in Madison, Wisconsin. Fractional CTO, technical leadership, and product development.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://kinetic.codes",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Kinetic.codes - Lucas Gray",
  description:
    "Independent software consultant specializing in fractional CTO services, technical leadership, system architecture, and product development.",
  url: "https://kinetic.codes",
  email: "hello@kinetic.codes",
  founder: {
    "@type": "Person",
    name: "Lucas Gray",
    jobTitle: "Software Consultant",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madison",
    addressRegion: "WI",
    addressCountry: "US",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Madison",
      addressRegion: "WI",
    },
    {
      "@type": "State",
      name: "Wisconsin",
    },
    {
      "@type": "Country",
      name: "United States",
    },
  ],
  serviceType: [
    "Software Consulting",
    "Fractional CTO",
    "Technical Leadership",
    "System Architecture",
    "Product Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pressStart2P.variable} antialiased bg-background text-foreground`}
      >
        <WorldSwitcher />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
