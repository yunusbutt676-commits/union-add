import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Contact from "../../sections/Contact";

export const metadata: Metadata = {
  title: "Contact Union Add | Advertising & Digital Marketing Agency",
  description:
    "Contact Union Add for advertising, branding, digital marketing, SEO, web development, media buying, creative design and business growth solutions across Pakistan.",

  keywords: [
    "Contact Union Add",
    "Advertising Agency Pakistan",
    "Digital Marketing Agency",
    "Branding Agency",
    "SEO Company",
    "Web Development",
    "Creative Agency",
    "Lahore Advertising Agency",
  ],

  alternates: {
    canonical: "https://unionadd.com/contact",
  },

  openGraph: {
    title: "Contact Union Add | Advertising & Digital Marketing Agency",
    description:
      "Get in touch with Union Add for branding, advertising, SEO, digital marketing and business solutions.",
    url: "https://unionadd.com/contact",
    siteName: "Union Add",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Union Add",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Union Add",
    description:
      "Reach out to Union Add for professional advertising and digital marketing services.",
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
      name: "Contact",
      item: "https://unionadd.com/contact",
    },
  ],
};

export default function ContactPage() {
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}