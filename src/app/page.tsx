import type { Metadata } from "next";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import CTA from "../sections/CTA";
import LogoMarquee from "../components/LogoMarquee";
import WhatsAppTab from "../components/WhatsAppTab";
import MobileWhatsApp from "../components/MobileWhatsApp";

export const metadata: Metadata = {
  title: "360° Advertising Agency in Pakistan",
  description:
    "Union Add helps businesses grow through branding, digital marketing, SEO, Google Ads, Meta Ads, web development, social media marketing, video production, and creative advertising solutions.",
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
  ],
}; 

export default function Home() {
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

      {/* Accessibility Skip Link */}

      <main id="main-content">
        {/* Hero */}
        <Hero />

        {/* Trusted Brands */}
        <section aria-labelledby="trusted-brands">
          <h2 id="trusted-brands" className="sr-only">
            Trusted Brands and Clients
          </h2>

          <LogoMarquee />
        </section>

        {/* Call To Action */}
        <section aria-labelledby="contact-union-add">
          <h2 id="contact-union-add" className="sr-only">
            Contact Union Add
          </h2>

          <CTA />
        </section>
      </main>

      {/* Floating Buttons */}
      <WhatsAppTab />
      <MobileWhatsApp />

      <Footer />
    </>
  );
}