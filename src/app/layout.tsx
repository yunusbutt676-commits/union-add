
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AIFloatingButton from "../components/ai/AIFloatingButton";
import "./globals.css";

const SITE_URL = "https://unionadd.com";
const SITE_NAME = "Union Add";

const SITE_TITLE =
  "Union Add | 360° Advertising Agency in Pakistan";

const SITE_DESCRIPTION =
  "Union Add is a full-service advertising agency in Lahore, Pakistan, providing branding, digital marketing, SEO, Google Ads, Meta Ads, web and app development, creative design, video production, outdoor advertising, and event management.";

const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const LOGO = `${SITE_URL}/Logo.png`;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | Union Add",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Union Add",
    "Union Add Advertising Agency",
    "Advertising Agency Pakistan",
    "Advertising Agency Lahore",
    "360 Degree Advertising Agency",
    "Digital Marketing Agency Pakistan",
    "Branding Agency Lahore",
    "Creative Agency Pakistan",
    "Google Ads Services",
    "Meta Ads Services",
    "SEO Services Pakistan",
    "Social Media Marketing",
    "Website Development",
    "Mobile App Development",
    "Video Production",
    "Graphic Design",
    "Outdoor Advertising Pakistan",
    "Event Management Pakistan",
  ],

  authors: [
    {
      name: SITE_NAME,
      url: SITE_URL,
    },
  ],

  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: "Business",

  referrer: "origin-when-cross-origin",

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

  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_PK",
    type: "website",

    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Union Add Advertising Agency in Pakistan",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071A2E",
  colorScheme: "light dark",
};

const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,

      name: SITE_NAME,
      legalName: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,

      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: LOGO,
        contentUrl: LOGO,
        caption: "Union Add",
      },

      image: {
        "@id": `${SITE_URL}/#logo`,
      },

      email: "union.add@gmail.com",
      telephone: "+923211234560",
      foundingDate: "2006",

      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: "+923211234560",
          email: "union.add@gmail.com",
          areaServed: "PK",
          availableLanguage: ["en", "ur"],
        },
      ],

      sameAs: [
        "https://www.facebook.com/UnionAdCompany/",
        "https://www.instagram.com/unionadd/",
        "https://www.linkedin.com/in/union-add-advertisement-company-294177176/",
        "https://www.youtube.com/@unionadd",
        "https://www.tiktok.com/@union.add",
      ],

      location: {
        "@id": `${SITE_URL}/#localbusiness`,
      },
    },

    {
      "@type": [
        "LocalBusiness",
        "AdvertisingAgency",
      ],

      "@id": `${SITE_URL}/#localbusiness`,

      name: SITE_NAME,
      url: SITE_URL,
      description: SITE_DESCRIPTION,

      image: OG_IMAGE,

      logo: {
        "@id": `${SITE_URL}/#logo`,
      },

      telephone: "+923211234560",
      email: "union.add@gmail.com",

      address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },

      areaServed: {
        "@type": "Country",
        name: "Pakistan",
      },

      parentOrganization: {
        "@id": `${SITE_URL}/#organization`,
      },

      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Union Add Advertising and Digital Services",

        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Advertising Solutions",
            itemListElement: [
              {
                "@type": "OfferCatalog",
                name: "Outdoor Advertising",
              },
              {
                "@type": "OfferCatalog",
                name: "Media Buying",
              },
              {
                "@type": "OfferCatalog",
                name: "Brand Activation",
              },
            ],
          },

          {
            "@type": "OfferCatalog",
            name: "Digital Marketing",
            itemListElement: [
              {
                "@type": "OfferCatalog",
                name: "Search Engine Optimization",
              },
              {
                "@type": "OfferCatalog",
                name: "Social Media Marketing",
              },
              {
                "@type": "OfferCatalog",
                name: "Google Ads and Meta Ads",
              },
            ],
          },

          {
            "@type": "OfferCatalog",
            name: "Branding and Creative",
            itemListElement: [
              {
                "@type": "OfferCatalog",
                name: "Brand Identity and Graphic Design",
              },
              {
                "@type": "OfferCatalog",
                name: "Video Production",
              },
              {
                "@type": "OfferCatalog",
                name: "Creative Design",
              },
            ],
          },

          {
            "@type": "OfferCatalog",
            name: "Web and App Development",
            itemListElement: [
              {
                "@type": "OfferCatalog",
                name: "Website Development",
              },
              {
                "@type": "OfferCatalog",
                name: "Mobile Application Development",
              },
              {
                "@type": "OfferCatalog",
                name: "UI and UX Design",
              },
            ],
          },

          {
            "@type": "OfferCatalog",
            name: "Events and Activation",
          },

          {
            "@type": "OfferCatalog",
            name: "Print and Production",
          },
        ],
      },
    },

    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,

      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      inLanguage: "en",

      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {children}

        <AIFloatingButton />
      </body>
    </html>
  );
}
