import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Union Add",
    short_name: "Union Add",
    description:
      "Union Add is a full-service advertising, branding, digital marketing, web/app development, media buying, and creative agency based in Lahore, Pakistan.",

    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#f97316",

    lang: "en",
    dir: "ltr",

    categories: [
      "business",
      "marketing",
      "advertising",
      "branding",
      "technology",
    ],

    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    shortcuts: [
      {
        name: "Services",
        short_name: "Services",
        url: "/services",
        icons: [
          {
            src: "/icon.png",
            sizes: "192x192",
          },
        ],
      },
      {
        name: "Portfolio",
        short_name: "Portfolio",
        url: "/portfolio",
        icons: [
          {
            src: "/icon.png",
            sizes: "192x192",
          },
        ],
      },
      {
        name: "Get a Quote",
        short_name: "Quote",
        url: "/get-a-quote",
        icons: [
          {
            src: "/icon.png",
            sizes: "192x192",
          },
        ],
      },
      {
        name: "Contact",
        short_name: "Contact",
        url: "/contact",
        icons: [
          {
            src: "/icon.png",
            sizes: "192x192",
          },
        ],
      },
    ],
  };
}