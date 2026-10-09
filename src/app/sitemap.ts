
import type { MetadataRoute } from "next";

const baseUrl = "https://unionadd.com";

const routes = [
  {
    path: "",
    changeFrequency: "weekly",
    priority: 1.0,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/portfolio",
    changeFrequency: "weekly",
    priority: 0.9,
  },
  {
    path: "/ai",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/get-a-quote",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/privacy-policy",
    changeFrequency: "yearly",
    priority: 0.3,
  },
  {
    path: "/terms-of-service",
    changeFrequency: "yearly",
    priority: 0.3,
  },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
