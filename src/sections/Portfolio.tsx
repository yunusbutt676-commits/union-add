"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

type PortfolioCategory =
  | "Website Development"
  | "Mobile App Development"
  | "Digital Media Marketing"
  | "SEO"
  | "UI/UX Design"
  | "Graphic Design"
  | "Video Production"
  | "Bus Stand Branding"
  | "Floats Activity"
  | "Digital Streamers"
  | "Print Media"
  | "Media Planning"
  | "TVC Production"
  | "Media Buying on Satellite"
  | "Shop Board Branding"
  | "Bill Boards"
  | "Buss Branding"
  | "Cable Advertisement"
  | "Brand Activation & Event Management"
  | "Photoshoot & Designing"
  | "Public Relations"
  | "Giveaways"
  | "Offset Printing";

interface PortfolioProject {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
  alt: string;
  services: string[];
  featured?: boolean;
}

const projects: PortfolioProject[] = [
  {
    id: "shop-board-branding",
    title: "Shop Board Branding",
    category: "Shop Board Branding",
    description:
      "Retail branding and shop board solutions designed to strengthen physical brand presence and customer recognition.",
    image: "/shopb.jpeg",
    alt: "Union Add shop board branding project",
    services: [
      "Retail Branding",
      "Outdoor Branding",
      "Creative Design",
      "Brand Visibility",
    ],
    featured: true,
  },
  {
    id: "billboards",
    title: "Billboards",
    category: "Bill Boards",
    description:
      "Large-format billboard advertising designed for strong visibility, memorable creative communication and strategic outdoor reach.",
    image: "/billb.jpeg",
    alt: "Union Add billboard advertising campaign",
    services: [
      "Billboard Advertising",
      "Outdoor Media",
      "Creative Design",
      "Media Planning",
    ],
    featured: true,
  },
  {
    id: "bus-branding",
    title: "Bus Branding",
    category: "Buss Branding",
    description:
      "Large-scale mobile advertising campaigns that transform public transport into high-visibility brand communication platforms.",
    image: "/bus.jpeg",
    alt: "Union Add bus branding advertising campaign",
    services: [
      "Transit Advertising",
      "Outdoor Media",
      "Brand Visibility",
      "Campaign Creative",
    ],
    featured: true,
  },
  {
    id: "website-development",
    title: "Website Development",
    category: "Website Development",
    description:
      "Modern, responsive and conversion-focused website development for businesses that need a fast, professional and scalable digital presence.",
    image: "/web.jpeg",
    alt: "Union Add website development and digital experience project",
    services: [
      "Next.js",
      "React",
      "Responsive Design",
      "SEO",
      "Performance Optimization",
    ],
    featured: true,
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    category: "Mobile App Development",
    description:
      "User-focused mobile application development designed around performance, usability, business requirements and scalable digital experiences.",
    image: "/apps.jpeg",
    alt: "Union Add mobile application development project",
    services: [
      "Mobile Apps",
      "UI/UX",
      "API Integration",
      "Performance",
      "Scalable Architecture",
    ],
    featured: true,
  },
  {
    id: "digital-media-marketing",
    title: "Digital Media Marketing",
    category: "Digital Media Marketing",
    description:
      "Integrated digital media marketing campaigns combining creative content, audience targeting, paid advertising and performance-focused digital strategy.",
    image: "/dmms.jpeg",
    alt: "Union Add digital media marketing campaign",
    services: [
      "Digital Marketing",
      "Social Media",
      "Paid Advertising",
      "Campaign Strategy",
      "Analytics",
    ],
    featured: true,
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    category: "Graphic Design",
    description:
      "Professional visual communication including campaign creatives, brand graphics, promotional designs and digital marketing assets.",
    image: "/graphic.jpeg",
    alt: "Union Add graphic design campaign",
    services: [
      "Brand Design",
      "Campaign Creatives",
      "Social Media Design",
      "Marketing Materials",
    ],
    featured: true,
  },
  {
    id: "video-production",
    title: "Video Production",
    category: "Video Production",
    description:
      "Creative video production for advertising campaigns, social media, corporate communication, promotional content and brand storytelling.",
    image: "/videop.jpeg",
    alt: "Union Add video production and advertising project",
    services: [
      "Video Production",
      "Commercials",
      "Editing",
      "Motion Graphics",
      "Brand Storytelling",
    ],
  },
  {
    id: "bus-stand-branding",
    title: "Bus Stand Branding",
    category: "Bus Stand Branding",
    description:
      "High-visibility outdoor advertising campaigns designed to place brands in front of targeted audiences across high-traffic locations.",
    image: "/busstand.jpeg",
    alt: "Union Add bus stand branding advertising campaign",
    services: [
      "Outdoor Advertising",
      "Brand Visibility",
      "Campaign Planning",
      "Creative Design",
    ],
    featured: true,
  },
  {
    id: "floats-activity",
    title: "Floats Activity",
    category: "Floats Activity",
    description:
      "Mobile brand activation campaigns that take promotional experiences directly to audiences in high-footfall and high-visibility areas.",
    image: "/floats.jpeg",
    alt: "Union Add floats activity brand activation campaign",
    services: [
      "Brand Activation",
      "Outdoor Campaigns",
      "Promotional Activity",
      "Audience Engagement",
    ],
    featured: true,
  },
  {
    id: "digital-streamers",
    title: "Digital Streamers",
    category: "Digital Streamers",
    description:
      "Digital streamer advertising solutions designed for strong visual impact, campaign awareness and strategic outdoor brand communication.",
    image: "/dstreamers.jpeg",
    alt: "Union Add digital streamer advertising campaign",
    services: [
      "Outdoor Media",
      "Digital Advertising",
      "Creative Production",
      "Brand Awareness",
    ],
    featured: true,
  },
  {
    id: "print-media",
    title: "Print Media",
    category: "Print Media",
    description:
      "Strategic print advertising and creative production for businesses seeking targeted offline communication and brand visibility.",
    image: "/news.jpeg",
    alt: "Union Add print media advertising campaign",
    services: [
      "Print Advertising",
      "Creative Design",
      "Campaign Planning",
      "Media Placement",
    ],
    featured: true,
  },
  {
    id: "media-planning",
    title: "Media Planning",
    category: "Media Planning",
    description:
      "Data-informed media planning designed to align audiences, channels, campaign objectives, budgets and advertising reach.",
    image: "/mediasp.jpeg",
    alt: "Union Add media planning and advertising strategy project",
    services: [
      "Media Strategy",
      "Audience Planning",
      "Budget Planning",
      "Campaign Optimization",
    ],
  },
  {
    id: "tvc-production",
    title: "TVC Production",
    category: "TVC Production",
    description:
      "Television commercial production combining creative direction, production planning, visual storytelling and brand communication.",
    image: "/tvc.jpeg",
    alt: "Union Add television commercial production project",
    services: [
      "TVC Production",
      "Creative Direction",
      "Production",
      "Brand Storytelling",
    ],
  },
  {
    id: "satellite-media-buying",
    title: "Media Buying on Satellite",
    category: "Media Buying on Satellite",
    description:
      "Strategic satellite media buying designed to connect brands with relevant audiences through television advertising placements.",
    image: "/satellite.jpeg",
    alt: "Union Add satellite media buying campaign",
    services: [
      "Media Buying",
      "Satellite Advertising",
      "Campaign Planning",
      "Audience Reach",
    ],
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    category: "SEO",
    description:
      "Search engine optimization focused on technical health, useful content, on-page relevance, structured data, performance and sustainable organic visibility.",
    image: "/seos.jpeg",
    alt: "Union Add search engine optimization campaign",
    services: [
      "Technical SEO",
      "On-Page SEO",
      "Content SEO",
      "Structured Data",
      "Performance",
    ],
    featured: true,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    category: "UI/UX Design",
    description:
      "Clean, intuitive and conversion-focused digital interfaces designed around usability, accessibility, responsive behavior and brand identity.",
    image: "/ui-uxd.jpeg",
    alt: "Union Add UI UX design project",
    services: [
      "User Experience",
      "Interface Design",
      "Responsive UI",
      "Design Systems",
      "Prototyping",
    ],
    featured: true,
  },
  {
    id: "cable-advertisement",
    title: "Cable Advertisement",
    category: "Cable Advertisement",
    description:
      "Targeted cable advertising campaigns helping brands communicate with audiences through local television networks.",
    image: "/cable.jpeg",
    alt: "Union Add cable advertisement campaign",
    services: [
      "Cable Advertising",
      "Media Buying",
      "Campaign Planning",
      "Audience Targeting",
    ],
  },
  {
    id: "brand-activation",
    title: "Brand Activation & Event Management",
    category: "Brand Activation & Event Management",
    description:
      "Experiential marketing and event management campaigns designed to create memorable brand interactions and direct audience engagement.",
    image: "/events.jpeg",
    alt: "Union Add brand activation and event management campaign",
    services: [
      "Brand Activation",
      "Event Management",
      "Experiential Marketing",
      "Audience Engagement",
    ],
    featured: true,
  },
  {
    id: "photoshoot-designing",
    title: "Photoshoot & Designing",
    category: "Photoshoot & Designing",
    description:
      "Professional photography and creative design services for advertising campaigns, product communication, social media and brand identity.",
    image: "/photoshoot.jpeg",
    alt: "Union Add professional photoshoot and creative design project",
    services: [
      "Photography",
      "Creative Design",
      "Product Photography",
      "Campaign Assets",
    ],
  },
  {
    id: "public-relations",
    title: "Public Relations",
    category: "Public Relations",
    description:
      "Public relations strategies designed to strengthen brand reputation, communication, visibility and relationships with relevant audiences.",
    image: "/public.jpeg",
    alt: "Union Add public relations campaign",
    services: [
      "Public Relations",
      "Brand Communication",
      "Media Relations",
      "Reputation Management",
    ],
  },
  {
    id: "giveaways",
    title: "Giveaways",
    category: "Giveaways",
    description:
      "Branded promotional giveaways designed to increase campaign engagement, audience participation and brand recall.",
    image: "/giveaways.jpeg",
    alt: "Union Add branded giveaways campaign",
    services: [
      "Promotional Marketing",
      "Giveaways",
      "Brand Activation",
      "Audience Engagement",
    ],
    featured: true,
  },
  {
    id: "offset-printing",
    title: "Offset Printing",
    category: "Offset Printing",
    description:
      "Professional offset printing solutions for high-quality business, marketing, promotional and branded print materials.",
    image: "/offset.jpeg",
    alt: "Union Add offset printing project",
    services: [
      "Offset Printing",
      "Marketing Materials",
      "Print Production",
      "Creative Design",
    ],
    featured: true,
  },
];

const categories: Array<"All" | PortfolioCategory> = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<"All" | PortfolioCategory>("All");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;

      if (!query) return matchesCategory;

      const searchableText = [
        project.title,
        project.category,
        project.description,
        ...project.services,
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && searchableText.includes(query);
    });
  }, [activeCategory, search]);

  const featuredProjects = projects.filter((project) => project.featured);

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://unionadd.com/portfolio#collection",
    url: "https://unionadd.com/portfolio",
    name: "Union Add Portfolio",
    description:
      "Explore Union Add advertising, branding, digital marketing, web development, SEO, media and creative work.",
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://unionadd.com/#website",
      name: "Union Add",
      url: "https://unionadd.com",
    },
    about: {
      "@type": "Organization",
      name: "Union Add",
      url: "https://unionadd.com",
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: projects.length,
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
      })),
    },
  };

  return (
    <main
      id="portfolio"
      className="min-h-screen overflow-x-hidden bg-[#F6F7F9] text-[#102033] dark:bg-[#090D14] dark:text-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />

      {/* Hero */}
      <section
        aria-labelledby="portfolio-heading"
        className="relative isolate overflow-hidden bg-[#071A2E] px-4 pb-12 pt-28 text-white sm:px-6 sm:pb-16 sm:pt-36 lg:px-10 lg:pb-24 lg:pt-40"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-20 h-80 w-80 rounded-full bg-orange-500/20 blur-3xl sm:h-[34rem] sm:w-[34rem]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-44 -left-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-orange-300 backdrop-blur sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-orange-400" />
              Our Portfolio
            </span>

            <h1
              id="portfolio-heading"
              className="mt-6 max-w-4xl text-[clamp(2.45rem,8vw,5.5rem)] font-bold leading-[1.08] tracking-tight"
            >
              Creative work built for{" "}
              <span className="text-orange-400">real-world impact.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8">
              Explore Union Add&apos;s advertising, branding, digital
              marketing, technology, media, creative production and
              communication capabilities.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                href="#portfolio-explorer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore our work <span aria-hidden="true">↗</span>
              </a>
              <Link
                href="/get-a-quote"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-bold text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start a project
              </Link>
            </div>
          </div>

          <div
            className="mt-10 grid grid-cols-3 gap-2 sm:mt-14 sm:max-w-2xl sm:gap-4"
            aria-label="Portfolio statistics"
          >
            {[
              { value: projects.length, label: "Service categories" },
              {
                value: featuredProjects.length,
                label: "Featured capabilities",
              },
              { value: "360°", label: "Advertising solutions" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.07] p-3 backdrop-blur sm:p-5"
              >
                <strong className="block text-xl font-bold sm:text-3xl">
                  {stat.value}
                </strong>
                <span className="mt-1 block text-[10px] leading-4 text-slate-300 sm:text-sm">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and category navigation */}
      <section
        id="portfolio-explorer"
        aria-labelledby="portfolio-explorer-heading"
        className="scroll-mt-6 border-b border-slate-200 bg-white dark:border-white/10 dark:bg-[#101720]"
      >
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-7 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-orange-500">
                Find a capability
              </p>
              <h2
                id="portfolio-explorer-heading"
                className="mt-1 text-xl font-bold tracking-tight sm:text-2xl"
              >
                Explore what we do
              </h2>
            </div>

            <label className="relative block w-full lg:max-w-sm">
              <span className="sr-only">Search portfolio services</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search services..."
                className="min-h-12 w-full rounded-xl border border-slate-200 bg-[#F6F7F9] py-3 pl-11 pr-4 text-base text-[#102033] outline-none transition placeholder:text-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-500"
              />
            </label>
          </div>

          <div
            className="-mx-4 mt-5 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:-mx-6 sm:px-6 lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0"
            aria-label="Filter portfolio by category"
          >
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setActiveCategory(category)}
                  className={`min-h-10 shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                    active
                      ? "border-orange-500 bg-orange-500 text-white shadow-md shadow-orange-500/20"
                      : "border-slate-200 bg-white text-slate-600 hover:border-orange-400 hover:text-orange-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio cards */}
      <section
        aria-labelledby="portfolio-projects"
        className="px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-7 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-500">
                Selected Capabilities
              </p>
              <h2
                id="portfolio-projects"
                className="mt-2 scroll-mt-8 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl"
              >
                Advertising, digital & creative work
              </h2>
            </div>
            <p
              className="text-sm font-medium text-slate-500 dark:text-slate-400"
              aria-live="polite"
            >
              Showing {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "category" : "categories"}
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group flex min-w-0 flex-col overflow-hidden rounded-[1.35rem] border border-slate-200 bg-white shadow-[0_8px_32px_rgba(7,26,46,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(7,26,46,0.12)] dark:border-white/10 dark:bg-[#111B27]"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent p-4 pt-14 sm:p-5">
                      <span className="inline-block max-w-full rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex min-h-6 items-center justify-between gap-3">
                      <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-orange-500">
                        Union Add
                      </p>
                      {project.featured && (
                        <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[10px] font-bold text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-xl font-bold leading-snug tracking-tight">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {project.description}
                    </p>

                    <ul
                      aria-label={`${project.title} services`}
                      className="mt-5 flex flex-wrap gap-2"
                    >
                      {project.services.map((service) => (
                        <li
                          key={service}
                          className="rounded-lg bg-slate-100 px-2.5 py-1.5 text-[11px] font-medium text-slate-600 dark:bg-white/[0.07] dark:text-slate-300"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/get-a-quote?service=${encodeURIComponent(
                        project.category
                      )}`}
                      aria-label={`Discuss ${project.title} with Union Add`}
                      className="mt-6 flex min-h-11 items-center justify-between gap-3 rounded-xl bg-[#071A2E] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 dark:bg-orange-500 dark:hover:bg-orange-600"
                    >
                      Discuss a Similar Project
                      <span
                        aria-hidden="true"
                        className="text-lg transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-5 py-16 text-center dark:border-white/15 dark:bg-[#111B27]">
              <div
                aria-hidden="true"
                className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-2xl text-orange-500 dark:bg-orange-500/10"
              >
                ⌕
              </div>
              <h3 className="mt-5 text-xl font-bold">
                No matching services found
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                Try another service or search term.
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearch("");
                }}
                className="mt-6 min-h-11 rounded-xl bg-orange-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* All services */}
      <section
        aria-labelledby="portfolio-services"
        className="bg-[#071A2E] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-orange-400">
              Full-Service Agency
            </p>
            <h2
              id="portfolio-services"
              className="mt-3 max-w-lg text-2xl font-bold leading-tight tracking-tight sm:text-4xl"
            >
              Advertising, marketing, media and digital solutions
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Union Add combines traditional advertising, modern digital
              marketing, technology, creative production and media solutions
              to help businesses build visibility, communicate effectively
              and reach the right audiences.
            </p>
          </div>

          <ul className="grid gap-2.5 sm:grid-cols-2">
            {categories
              .filter((category) => category !== "All")
              .map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveCategory(category);
                      requestAnimationFrame(() => {
                        document
                          .getElementById("portfolio-projects")
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      });
                    }}
                    className="flex min-h-14 w-full items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-left text-sm font-medium transition hover:border-orange-400/50 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400"
                  >
                    <span>{category}</span>
                    <span aria-hidden="true" className="shrink-0 text-orange-400">
                      →
                    </span>
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="portfolio-cta"
        className="px-4 py-12 sm:px-6 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.75rem] bg-orange-500 px-6 py-12 text-center text-white shadow-[0_22px_60px_rgba(249,115,22,0.22)] sm:px-12 sm:py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-28 h-64 w-64 rounded-full border-[45px] border-white/10"
          />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/85">
              Start Your Project
            </p>
            <h2
              id="portfolio-cta"
              className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Ready to build something that stands out?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/90 sm:text-lg">
              Tell Union Add what you want to achieve and our team can help
              plan the right advertising, digital, media or creative solution
              for your business.
            </p>
            <Link
              href="/get-a-quote"
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#071A2E] px-7 py-3 font-bold text-white transition hover:bg-white hover:text-[#071A2E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto"
            >
              Get a Free Quote <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}