"use client";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Web & App Development",
    description:
      "Scalable websites, business portals, eCommerce platforms, and mobile applications.",
    items: [
      "Website Development",
      "Mobile App Development",
      "UI/UX Design",
    ],
    icon: "💻",
  },
  {
    title: "Digital Marketing",
    description:
      "Data-driven marketing strategies that increase visibility, leads, and business growth.",
    items: [
      "Digital Media Marketing",
      "SEO",
      "Media Planning",
    ],
    icon: "📈",
  },
  {
    title: "Branding & Creative",
    description:
      "Creative design solutions that build memorable and impactful brands.",
    items: [
      "Branding",
      "Graphic Design",
      "Photoshoot & Designing",
      "Video Production",
    ],
    icon: "🎨",
  },
  {
    title: "Advertising Solutions",
    description:
      "ATL, BTL and outdoor advertising campaigns across Pakistan.",
    items: [
      "Bill Boards",
      "Bus Stand Branding",
      "Bus Branding",
      "Shop Board Branding",
      "Outdoor Advertisement",
      "Cable Advertisement",
      "Media Buying on Satellite",
    ],
    icon: "📢",
  },
  {
    title: "Events & Activation",
    description:
      "Brand experiences, activations and event execution that engage audiences.",
    items: [
      "Brand Activation",
      "Event Management",
      "Floats Activity",
      "Public Relations",
    ],
    icon: "🎉",
  },
  {
    title: "Print & Production",
    description:
      "Premium printing and production services for every marketing campaign.",
    items: [
      "Digital Printing",
      "Print Media",
      "TVC Production",
      "Digital Streamers",
    ],
    icon: "🖨️",
  },
];

export default function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 bg-white dark:bg-[#070707]">
     <header
        className="relative mb-20 overflow-hidden rounded-[40px]"
        aria-labelledby="services-heading"
      >
        <Image
          src="/sb.jpg"
          alt="Union Add advertising, branding, digital marketing and business growth services"
          width={1600}
          height={700}
          priority
          sizes="100vw"
          className="w-full h-[300px] md:h-[500px] object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <p className="uppercase tracking-[5px] text-orange-400 mb-4">
              Union Add Services
            </p>

            <h1 id="services-heading" className="text-4xl md:text-6xl font-bold text-white">
              Advertising That
              <br />
              Drives Results
            </h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-orange-500 uppercase tracking-[4px] font-medium">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-bold">
            Everything Your Brand Needs
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400">
            Union Add provides integrated advertising, branding, marketing,
            development and production services designed to help businesses grow.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3" role="list">
          {services.map((service) => (
            <article
              key={service.title}
              role="listitem"
              className="rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#111] p-8 hover:border-orange-500 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-5" aria-hidden="true">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8" aria-label={`${service.title} features`}>
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>

              <Link
                href="/get-a-quote"
                prefetch
                aria-label={`Request a quote for ${service.title}`}
                className="text-orange-500 font-semibold hover:underline"
              >
                Request a Quote →
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}