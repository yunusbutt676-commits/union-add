import type { Metadata } from "next";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Portfolio from "../../sections/Portfolio";

export const metadata: Metadata = {
  title:
    "Portfolio | Advertising, Digital Marketing & Creative Work",

  description:
    "Explore Union Add's portfolio of advertising, digital marketing, SEO, branding, web development, media planning, outdoor advertising, creative design, video production and brand activation solutions in Pakistan.",

  keywords: [
    "Union Add Portfolio",
    "Advertising Agency Portfolio Pakistan",
    "Digital Marketing Portfolio Pakistan",
    "Creative Agency Portfolio",
    "Branding Portfolio Pakistan",
    "SEO Portfolio Pakistan",
    "Web Development Portfolio",
    "Media Advertising Portfolio",
    "Outdoor Advertising Portfolio",
    "Digital Marketing Agency Lahore",
    "Advertising Agency Lahore",
    "Creative Agency Pakistan",
  ],

  alternates: {
    canonical: "/portfolio",
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  openGraph: {
    title:
      "Portfolio | Advertising, Digital Marketing & Creative Work | Union Add",

    description:
      "Explore Union Add's advertising, branding, digital marketing, technology, media and creative work.",

    url: "https://unionadd.com/portfolio",

    siteName: "Union Add",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "https://unionadd.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Union Add advertising and digital marketing portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Portfolio | Advertising, Digital Marketing & Creative Work | Union Add",

    description:
      "Explore Union Add's advertising, branding, digital marketing, media and creative portfolio.",

    images: ["https://unionadd.com/og-image.jpg"],
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://unionadd.com/",
    },

    {
      "@type": "ListItem",
      position: 2,
      name: "Portfolio",
      item: "https://unionadd.com/portfolio",
    },
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />

      <script
        id="portfolio-breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <Portfolio />

      <Footer />
    </>
  );
}