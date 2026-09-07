import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AIFloatingButton from "../components/ai/AIFloatingButton";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://unionadd.com"),

  title: {
    default:
      "Union Add | 360° Advertising Agency in Pakistan",
    template: "%s | Union Add",
  },

  description:
    "Union Add is a full-service advertising agency in Pakistan specializing in branding, digital marketing, social media marketing, Google Ads, Meta Ads, SEO, web development, creative design, and video production.",

  keywords: [
    "Union Add",
    "Advertising Agency Pakistan",
    "Digital Marketing",
    "Branding",
    "Creative Agency",
    "Google Ads",
    "Meta Ads",
    "SEO Services",
    "Social Media Marketing",
    "Website Development",
    "Video Production",
    "Graphic Design",
    "Advertising Company Lahore",
  ],

  authors: [
    {
      name: "Union Add",
    },
  ],

  creator: "Union Add",

  publisher: "Union Add",

  applicationName: "Union Add",

  category: "Business",

  alternates: {
    canonical: "/",
  },

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
    title:
      "Union Add | 360° Advertising Agency in Pakistan",

    description:
      "Creative branding, digital marketing, Google Ads, Meta Ads, SEO, web development, video production, and advertising solutions.",

    url: "https://unionadd.com",

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

    title:
      "Union Add | 360° Advertising Agency",

    description:
      "Creative branding, digital marketing, SEO, web development, Google Ads, Meta Ads, and advertising services.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#071A2E",
  colorScheme: "light dark",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://unionadd.com/#organization",
                  name: "Union Add",
                  url: "https://unionadd.com",
                  logo: "https://unionadd.com/Logo.png",
                  email: "info@unionadd.com",
                  telephone: "+923045478602",
                  foundingDate: "2006",
                  sameAs: [
                    "https://facebook.com/yourpage",
                    "https://instagram.com/yourpage",
                    "https://linkedin.com/company/yourpage",
                    "https://youtube.com/@yourchannel",
                    "https://tiktok.com/@yourpage"
                  ]
                },
                {
                  "@type": "LocalBusiness",
                  "@id": "https://unionadd.com/#localbusiness",
                  name: "Union Add",
                  image: "https://unionadd.com/og-image.jpg",
                  url: "https://unionadd.com",
                  telephone: "+923045478602",
                  email: "info@unionadd.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Lahore",
                    addressCountry: "PK"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://unionadd.com/#website",
                  url: "https://unionadd.com",
                  name: "Union Add",
                  publisher: {
                    "@id": "https://unionadd.com/#organization"
                  }
                }
              ]
            }),
          }}
        />

        {children}

        <AIFloatingButton />

      </body>
    </html>
  );
}