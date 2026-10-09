
import Image from "next/image";
import Link from "next/link";

const services = [
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
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full min-w-0 overflow-x-clip bg-white py-14 text-black sm:py-16 md:py-24 dark:bg-[#070707] dark:text-white"
    >
      {/* SERVICES BANNER */}
      <header
        className="relative mx-4 mb-12 mt-10 overflow-hidden rounded-2xl sm:mx-6 sm:mb-16 sm:rounded-3xl lg:mx-8 lg:mb-20 lg:rounded-[40px]"
        aria-labelledby="services-heading"
      >
        <Image
          src="/sb.jpg"
          alt="Union Add advertising, branding, digital marketing and business growth services"
          width={1600}
          height={700}
          priority
          sizes="100vw"
          className="h-[240px] w-full object-cover sm:h-[300px] md:h-[400px] lg:h-[500px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-black/60"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 text-center sm:px-6">
          <div className="w-full max-w-4xl">
            <p className="mb-4 text-xs font-medium uppercase leading-5 tracking-[2px] text-orange-400 sm:text-sm sm:tracking-[4px] md:tracking-[5px]">
              Union Add Services
            </p>

            <h1
              id="services-heading"
              className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Advertising That
              <br />
              Drives Results
            </h1>
          </div>
        </div>
      </header>

      {/* SERVICES CONTENT */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* INTRODUCTION */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12 md:mb-16">
          <p className="text-xs font-medium uppercase tracking-[2px] text-orange-500 sm:text-sm sm:tracking-[4px]">
            Our Services
          </p>

          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Everything Your Brand Needs
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">
            Union Add provides integrated advertising,
            branding, marketing, development and production
            services designed to help businesses grow.
          </p>
        </div>

        {/* RESPONSIVE SERVICE CARDS */}
        <div
          role="list"
          className="
            grid
            grid-cols-1
            items-stretch
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:gap-6
            xl:grid-cols-3
            xl:gap-8
          "
        >
          {services.map((service) => (
            <article
              key={service.title}
              role="listitem"
              className="
                group
                flex
                h-full
                min-w-0
                flex-col
                rounded-2xl
                border
                border-gray-200
                bg-white
                p-5
                transition-[border-color,transform,box-shadow]
                duration-300
                sm:rounded-3xl
                sm:p-6
                lg:p-8
                dark:border-zinc-800
                dark:bg-[#111]
                motion-safe:motion-reduce:transform-none
                motion-reduce:transition-none
                [@media(hover:hover)]:hover:-translate-y-2
                [@media(hover:hover)]:hover:border-orange-500
                [@media(hover:hover)]:hover:shadow-lg
                [@media(hover:hover)]:hover:shadow-orange-500/10
                dark:[@media(hover:hover)]:hover:border-orange-500
              "
            >
              {/* SERVICE ICON */}
              <div
                aria-hidden="true"
                className="mb-4 text-4xl leading-none sm:mb-5"
              >
                {service.icon}
              </div>

              {/* SERVICE TITLE */}
              <h3 className="mb-3 text-xl font-bold leading-snug sm:text-2xl">
                {service.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mb-5 text-sm leading-7 text-gray-600 sm:mb-6 sm:text-base dark:text-gray-400">
                {service.description}
              </p>

              {/* SERVICE FEATURES */}
              <ul
                aria-label={`${service.title} features`}
                className="mb-6 space-y-3 sm:mb-8"
              >
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex min-w-0 items-start gap-3 text-sm leading-6 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500"
                    />

                    <span className="min-w-0 break-words">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* REQUEST QUOTE */}
              <Link
                href="/get-a-quote"
                prefetch
                aria-label={`Request a quote for ${service.title}`}
                className="
                  mt-auto
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  border
                  border-orange-500/20
                  bg-orange-500/5
                  px-4
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-orange-600
                  transition-colors
                  hover:border-orange-500
                  hover:bg-orange-500
                  hover:text-white
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-orange-500
                  active:bg-orange-600
                  active:text-white
                  sm:text-base
                  dark:bg-orange-500/10
                  dark:text-orange-400
                  dark:hover:text-white
                  motion-reduce:transition-none
                "
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
