
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",

    name: "Union Add",
    short_name: "Union Add",

    description:
      "Union Add is a full-service advertising, branding, digital marketing, web/app development, media buying, and creative agency based in Lahore, Pakistan.",

    start_url: "/",
    scope: "/",

    display: "standalone",
    display_override: ["standalone", "minimal-ui"],

    background_color: "#071A2E",
    theme_color: "#071A2E",

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
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],

    shortcuts: [
      {
        name: "Services",
        short_name: "Services",
        url: "/services",
      },
      {
        name: "Portfolio",
        short_name: "Portfolio",
        url: "/portfolio",
      },
      {
        name: "Get a Quote",
        short_name: "Quote",
        url: "/get-a-quote",
      },
      {
        name: "Contact",
        short_name: "Contact",
        url: "/contact",
      },
    ],
  };
}
