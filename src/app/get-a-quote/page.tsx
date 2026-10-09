import type { Metadata } from "next";
import Script from "next/script";
import QuoteForm from "../../components/QuoteForm";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a free quote from Union Add for advertising, branding, digital marketing, web development, mobile apps, SEO, media buying and creative services in Pakistan.",
  keywords: [
    "Get a Quote",
    "Advertising Agency Pakistan",
    "Digital Marketing Lahore",
    "Branding Agency",
    "Website Development",
    "Mobile App Development",
    "SEO Services",
    "Union Add",
  ],
  alternates: {
    canonical: "/get-a-quote",
  },
  openGraph: {
    title: "Get a Quote | Union Add",
    description:
      "Tell us about your project and receive a customized proposal from Union Add.",
    url: "https://unionadd.com/get-a-quote",
    siteName: "Union Add",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Union Add - Get a Quote",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Quote | Union Add",
    description:
      "Request a free quote for advertising, branding, web development and digital marketing.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://unionadd.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Get a Quote",
      item: "https://unionadd.com/get-a-quote",
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb),
        }}
      />

      <main id="main-content">
        <QuoteForm />
      </main>
    </>
  );
}