import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://drerakanyal.com"),
  title: {
    default: "Dr. Era Kanyal Negi | Child Birth Educator & Lactation Consultant",
    template: "%s | Dr. Era Kanyal Negi",
  },
  description:
    "CAPPA (US) Certified Child Birth Educator & Lactation Consultant helping families navigate pregnancy, childbirth, breastfeeding and early parenting with confidence in India.",
  keywords: [
    "childbirth education",
    "lactation consultant",
    "breastfeeding consultant",
    "parenting classes",
    "prenatal education",
    "postnatal support",
    "India",
    "pregnancy education",
    "CAPPA certified",
    "Dr Era Kanyal Negi",
    "birth educator India",
    "lactation support",
    "newborn care",
    "breastfeeding help",
    "online lactation consultant",
  ],
  authors: [{ name: "Dr. Era Kanyal Negi" }],
  creator: "Dr. Era Kanyal Negi",
  publisher: "Dr. Era Kanyal Negi",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drerakanyal.com",
    siteName: "Dr. Era Kanyal Negi",
    title: "Dr. Era Kanyal Negi | Child Birth Educator & Lactation Consultant",
    description:
      "CAPPA (US) Certified Child Birth Educator & Lactation Consultant. Expert guidance for pregnancy, birth & parenthood.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Era Kanyal Negi - Child Birth Educator & Lactation Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Era Kanyal Negi | Child Birth Educator & Lactation Consultant",
    description:
      "CAPPA (US) Certified Child Birth Educator & Lactation Consultant.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://drerakanyal.com",
  },
  category: "Healthcare",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF7F5" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1614" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://drerakanyal.com/#person",
      name: "Dr. Era Kanyal Negi",
      jobTitle: "Child Birth Educator & Lactation Consultant",
      description:
        "CAPPA (US) Certified Child Birth Educator & Lactation Consultant helping families navigate pregnancy, childbirth, breastfeeding and early parenting.",
      telephone: "+919560011192",
      email: "erakanyalnegi@gmail.com",
      url: "https://drerakanyal.com",
      sameAs: ["https://wa.me/919560011192"],
      knowsAbout: [
        "Childbirth Education",
        "Lactation Consultation",
        "Breastfeeding",
        "Prenatal Care",
        "Postnatal Support",
        "Newborn Care",
        "Parenting",
      ],
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Certification",
        educationalLevel: "Professional",
        recognizedBy: {
          "@type": "Organization",
          name: "CAPPA (Childbirth and Postpartum Professional Association)",
          url: "https://cappa.net",
        },
      },
    },
    {
      "@type": "MedicalBusiness",
      "@id": "https://drerakanyal.com/#business",
      name: "Dr. Era Kanyal Negi - Child Birth Education & Lactation Services",
      url: "https://drerakanyal.com",
      telephone: "+919560011192",
      email: "erakanyalnegi@gmail.com",
      priceRange: "₹₹",
      medicalSpecialty: ["Obstetrics", "Lactation"],
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Childbirth Education",
        },
        {
          "@type": "MedicalTherapy",
          name: "Lactation Consultation",
        },
        {
          "@type": "MedicalTherapy",
          name: "Prenatal Education",
        },
        {
          "@type": "MedicalTherapy",
          name: "Postnatal Support",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Nunito:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
