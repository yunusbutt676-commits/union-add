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
  },
];

const categories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
] as ("All" | PortfolioCategory)[];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] =
    useState<"All" | PortfolioCategory>("All");

  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All" ||
        project.category === activeCategory;

      if (!query) {
        return matchesCategory;
      }

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

  const featuredProjects = projects.filter(
    (project) => project.featured
  );

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
      className="min-h-screen bg-white text-[#071A2E] dark:bg-[#0B0B0F] dark:text-white"
    >
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioSchema),
        }}
      />

      {/* Hero */}
      <section
        aria-labelledby="portfolio-heading"
        className="relative overflow-hidden px-6 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_35%)]"
        />

        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Our Portfolio
            </p>

            <h1
              id="portfolio-heading"
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl"
            >
              Creative work built for{" "}
              <span className="text-orange-500">
                real-world impact.
              </span>
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300 sm:text-xl">
              Explore Union Add&apos;s advertising, branding, digital
              marketing, technology, media, creative production and
              communication capabilities.
            </p>

            <div
              className="mt-10 flex flex-wrap gap-4"
              aria-label="Portfolio statistics"
            >
              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900/70">
                <strong className="block text-2xl">
                  {projects.length}
                </strong>
                <span className="text-sm text-zinc-500">
                  Service categories
                </span>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900/70">
                <strong className="block text-2xl">
                  {featuredProjects.length}
                </strong>
                <span className="text-sm text-zinc-500">
                  Featured capabilities
                </span>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 dark:border-zinc-800 dark:bg-zinc-900/70">
                <strong className="block text-2xl">
                  360°
                </strong>
                <span className="text-sm text-zinc-500">
                  Advertising solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Explorer */}
      <section
        aria-labelledby="portfolio-explorer"
        className="border-y border-zinc-200 bg-zinc-50/70 px-6 py-8 dark:border-zinc-800 dark:bg-zinc-900/30 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <h2 id="portfolio-explorer" className="sr-only">
            Explore Union Add portfolio
          </h2>

          <div
            className="flex flex-wrap items-center gap-2"
            aria-label="Portfolio categories and search"
          >
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active}
                  onClick={() =>
                    setActiveCategory(
                      category as "All" | PortfolioCategory
                    )
                  }
                  className={`whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "border-orange-500 bg-orange-500 text-white"
                      : "border-zinc-300 bg-white text-zinc-700 hover:border-orange-400 hover:text-orange-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  }`}
                >
                  {category}
                </button>
              );
            })}

            {/* Search */}
            <label className="w-full sm:w-[220px]">
              <span className="sr-only">
                Search portfolio services
              </span>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search Services..."
                aria-label="Search portfolio services"
                className="
                  w-full
                  rounded-full
                  border
                  border-zinc-300
                  bg-white
                  px-5
                  py-2.5
                  text-sm
                  text-zinc-900
                  outline-none
                  transition
                  placeholder:text-zinc-400
                  focus:border-orange-500
                  focus:ring-2
                  focus:ring-orange-500/20
                  dark:border-zinc-700
                  dark:bg-zinc-900
                  dark:text-white
                  dark:placeholder:text-zinc-500
                "
              />
            </label>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section
        aria-labelledby="portfolio-projects"
        className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Selected Capabilities
              </p>

              <h2
                id="portfolio-projects"
                className="text-3xl font-bold tracking-tight sm:text-4xl"
              >
                Advertising, digital & creative work
              </h2>
            </div>

            <p className="hidden text-sm text-zinc-500 sm:block">
              Showing {filteredProjects.length}{" "}
              {filteredProjects.length === 1
                ? "category"
                : "categories"}
            </p>
          </div>

          {filteredProjects.length > 0 ? (
            <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <article
                  key={project.id}
                  className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 pt-16">
                      <span className="rounded-full bg-black/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                        Union Add
                      </p>

                      {project.featured && (
                        <span className="rounded-full border border-orange-500/30 bg-orange-500/10 px-2.5 py-1 text-[11px] font-semibold text-orange-500">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3 text-xl font-bold">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {project.description}
                    </p>

                    <ul
                      aria-label={`${project.title} services`}
                      className="mt-5 flex flex-wrap gap-2"
                    >
                      {project.services.map((service) => (
                        <li
                          key={service}
                          className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/get-a-quote?service=${encodeURIComponent(
                        project.category
                      )}`}
                      className="mt-6 inline-flex items-center font-semibold text-orange-500 transition hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-4 dark:focus:ring-offset-zinc-900"
                      aria-label={`Discuss ${project.title} with Union Add`}
                    >
                      Discuss a Similar Project
                      <span
                        aria-hidden="true"
                        className="ml-2 transition-transform group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-zinc-300 px-6 py-20 text-center dark:border-zinc-700">
              <h3 className="text-xl font-semibold">
                No matching services found
              </h3>

              <p className="mt-2 text-zinc-500">
                Try another service or search term.
              </p>

              <button
                type="button"
                onClick={() => {
                  setActiveCategory("All");
                  setSearch("");
                }}
                className="mt-6 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                View All
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Services SEO Section */}
      <section
        aria-labelledby="portfolio-services"
        className="bg-[#071A2E] px-6 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">
                Full-Service Agency
              </p>

              <h2
                id="portfolio-services"
                className="text-3xl font-bold sm:text-4xl"
              >
                Advertising, marketing, media and digital solutions
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-zinc-300">
                Union Add combines traditional advertising, modern
                digital marketing, technology, creative production and
                media solutions to help businesses build visibility,
                communicate effectively and reach the right audiences.
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
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
                      className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left text-sm transition hover:border-orange-400/50 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400"
                    >
                      <span>{category}</span>

                      <span
                        aria-hidden="true"
                        className="text-orange-400"
                      >
                        →
                      </span>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="portfolio-cta"
        className="px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
      >
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-orange-500 px-7 py-12 text-center text-white shadow-2xl sm:px-12 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
            Start Your Project
          </p>

          <h2
            id="portfolio-cta"
            className="mx-auto mt-4 max-w-3xl text-3xl font-bold sm:text-4xl lg:text-5xl"
          >
            Ready to build something that stands out?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            Tell Union Add what you want to achieve and our team can
            help plan the right advertising, digital, media or creative
            solution for your business.
          </p>

          <Link
            href="/get-a-quote"
            className="mt-8 inline-flex rounded-full bg-[#071A2E] px-7 py-3.5 font-semibold text-white transition hover:bg-white hover:text-[#071A2E] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-500"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}