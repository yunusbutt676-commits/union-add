
import HeroCards from "../components/HeroCards";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="
        relative
        min-h-screen
        min-h-[100svh]
        w-full
        min-w-0
        overflow-hidden
        bg-white
        text-black
        dark:bg-black
        dark:text-white
      "
    >
      {/* BACKGROUND GRADIENT */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,#ffffff_0%,#f5f5f5_70%)]
          dark:bg-[radial-gradient(circle_at_top,#171717_0%,#000000_75%)]
        "
      />

      {/* HERO CONTENT */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-4
          pb-14
          pt-24
          sm:px-6
          sm:pb-16
          sm:pt-28
          md:pb-20
          md:pt-32
          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            items-center
            gap-10
            sm:gap-12
            lg:grid-cols-2
            lg:gap-12
            xl:gap-16
          "
        >
          {/* LEFT CONTENT */}
          <div className="relative z-10 min-w-0">
            {/* EYEBROW */}
            <p
              className="
                mb-5
                max-w-xl
                text-xs
                font-medium
                uppercase
                leading-6
                tracking-[2px]
                text-red-500
                sm:mb-6
                sm:text-sm
                sm:tracking-[3px]
                lg:mb-8
              "
            >
              Integrated Advertising &amp; Digital Solutions
            </p>

            {/* MAIN HEADING */}
            <h1
              id="hero-heading"
              className="
                max-w-full
                text-[clamp(2.5rem,8vw,4rem)]
                font-light
                leading-[1.02]
                tracking-tight
                sm:text-6xl
                sm:leading-[0.98]
                md:text-7xl
                lg:text-[clamp(3.5rem,5.1vw,5.5rem)]
                lg:leading-[0.98]
                xl:text-8xl
              "
            >
              We Build Brands
              <br />
              That{" "}
              <span className="text-red-500">
                Move
              </span>
              <br />
              Markets
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6
                max-w-lg
                text-sm
                leading-7
                text-gray-500
                sm:mt-8
                sm:text-base
                sm:leading-8
                lg:mt-10
                lg:text-lg
                xl:text-xl
                xl:leading-9
                dark:text-gray-400
              "
            >
              Strategy. Creativity. Technology. We help
              Bussinesses grow through Brandings, Digital
              Marketing, SEO, Google Ads, Meta Ads,
              Website/App Development, SMM, Creative Design,
              and Advertising Solutions that Create
              Measurable Impact.
            </p>

            {/* CTA BUTTONS */}
            <div
              className="
                mt-8
                grid
                grid-cols-1
                gap-3
                sm:mt-10
                sm:grid-cols-2
                sm:gap-4
                lg:mt-12
                lg:flex
                lg:flex-wrap
                lg:gap-5
              "
            >
              {/* PORTFOLIO */}
              <Link
                href="/portfolio"
                aria-label="View Union Add Portfolio"
                className="
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black
                  px-6
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-orange-500
                  focus-visible:ring-offset-2
                  active:scale-[0.98]
                  sm:min-h-14
                  sm:px-8
                  sm:text-base
                  lg:w-auto
                  dark:border-white
                  dark:hover:bg-white
                  dark:hover:text-black
                  dark:focus-visible:ring-offset-black
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                See Our Work
              </Link>

              {/* GET A QUOTE */}
              <Link
                href="/get-a-quote"
                aria-label="Get a Free Quote"
                className="
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-orange-500
                  px-6
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-green-600
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-orange-500
                  focus-visible:ring-offset-2
                  active:scale-[0.98]
                  sm:min-h-14
                  sm:px-8
                  sm:text-base
                  lg:w-auto
                  dark:focus-visible:ring-offset-black
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                Let&apos;s Talk
              </Link>

              {/* VIEW COMPANY PROFILE */}
              <Link
                href="/union-add-company-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Union Add Company Profile PDF"
                className="
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-purple-500
                  px-6
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  transition-all
                  duration-300
                  hover:border-orange-500
                  hover:text-orange-500
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-orange-500
                  focus-visible:ring-offset-2
                  active:scale-[0.98]
                  sm:min-h-14
                  sm:px-8
                  sm:text-base
                  lg:w-auto
                  dark:border-zinc-700
                  dark:focus-visible:ring-offset-black
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                View Profile
              </Link>

              {/* DOWNLOAD COMPANY PROFILE */}
              <a
                href="/union-add-company-profile.pdf"
                download
                aria-label="Download Union Add Company Profile PDF"
                className="
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-[#071A2E]
                  px-6
                  py-3
                  text-center
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-orange-500
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-orange-500
                  focus-visible:ring-offset-2
                  active:scale-[0.98]
                  sm:min-h-14
                  sm:px-8
                  sm:text-base
                  lg:w-auto
                  dark:bg-white
                  dark:text-black
                  dark:focus-visible:ring-offset-black
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                Download Profile
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: COMPANY HIGHLIGHTS */}
          <aside
            aria-label="Union Add Company Highlights"
            className="
              relative
              min-w-0
              w-full
              max-w-full
            "
          >
            <HeroCards />
          </aside>
        </div>
      </div>
    </section>
  );
}
