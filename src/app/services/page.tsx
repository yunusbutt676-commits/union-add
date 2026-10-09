import type { Metadata } from "next";
import Services from "../../sections/Services";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Advertising & Digital Marketing Services",
  description:
    "Explore Union Add's professional advertising, branding, digital marketing, social media management, SEO, web development, creative design, video production, media buying, and business growth solutions in Pakistan.",

  keywords: [
    "Advertising Agency Pakistan",
    "Digital Marketing Agency",
    "Branding Services",
    "SEO Services",
    "Social Media Marketing",
    "Web Development",
    "App Development",
    "Graphic Design",
    "Video Production",
    "Media Buying",
    "Union Add",
  ],

  alternates: {
    canonical: "https://unionadd.com/services",
  },

  openGraph: {
    title: "Advertising & Digital Marketing Services | Union Add",
    description:
      "Discover professional branding, advertising, digital marketing, SEO, creative design, media buying and web development services.",
    url: "https://unionadd.com/services",
    siteName: "Union Add",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Union Add Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Advertising & Digital Marketing Services | Union Add",
    description:
      "Professional advertising, branding, SEO, social media marketing and creative business solutions.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
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
      name: "Services",
      item: "https://unionadd.com/services",
    },
  ],
};

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumb),
        }}
      />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
}