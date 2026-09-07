import type { Metadata } from "next";

import About from "../../sections/About";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "About Union Add | Advertising & Digital Marketing Agency in Pakistan",
  description:
    "Learn about Union Add, a full-service advertising, branding, digital marketing, creative design, web development and media agency helping businesses grow since 2006.",

  keywords: [
    "Union Add",
    "Advertising Agency Pakistan",
    "Digital Marketing Agency",
    "Branding Agency",
    "Creative Agency",
    "Social Media Marketing",
    "SEO Agency",
    "Web Development",
    "Media Buying",
    "Lahore Advertising Agency",
  ],

  alternates: {
    canonical: "/about",
  },

  openGraph: {
    title: "About Union Add",
    description:
      "Discover Union Add's story, expertise, and commitment to helping businesses grow through branding, advertising and digital marketing.",
    url: "/about",
    siteName: "Union Add",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Union Add",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About Union Add",
    description:
      "Creative advertising, branding, digital marketing and web solutions since 2006.",
    images: ["/og-image.jpg"],
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
      name: "About",
      item: "https://unionadd.com/about",
    },
  ],
};

export default function AboutPage() {
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
        <About />
      </main>

      <Footer />
    </>
  );
}