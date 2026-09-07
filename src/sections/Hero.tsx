import HeroCards from "../components/HeroCards";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-screen overflow-hidden bg-white dark:bg-black text-black dark:text-white"
    >
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_top,#ffffff_0%,#f5f5f5_70%)]
          dark:bg-[radial-gradient(circle_at_top,#171717_0%,#000000_75%)]
        "
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div className="z-10">

            <p className="text-red-500 tracking-[3px] uppercase mb-8">
              Integrated Advertising & Digital Solutions
            </p>

            <h1
              id="hero-heading"
              className="font-light leading-[0.95] text-6xl md:text-7xl xl:text-8xl"
            >
              We Build Brands
              <br />
              That <span className="text-red-500">Move</span>
              <br />
              Markets
            </h1>

            <p className="mt-10 text-gray-500 text-xl max-w-lg leading-9">
              Strategy. Creativity. Technology. We help Bussinesses grow through
              Brandings, Digital Marketing, SEO, Google Ads, Meta Ads, Website/App
              Development, SMM, Creative Design, and
              Advertising Solutions that Create Measurable Impact.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              {/* Portfolio */}

              <Link
                href="/portfolio"
                aria-label="View Union Add Portfolio"
                className="
                  h-14
                  px-8
                  rounded-full
                  border
                  border-black
                  dark:border-white
                  flex
                  items-center
                  justify-center
                  font-semibold
                  hover:bg-black
                  hover:text-white
                  dark:hover:bg-white
                  dark:hover:text-black
                  transition-all
                  duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-orange-500
                  focus-visible:ring-offset-2
                "
              >
                See Our Work
              </Link>

              {/* Quote */}

              <Link
                href="/get-a-quote"
                aria-label="Get a Free Quote"
                className="
                  h-14
                  px-8
                  rounded-full
                  bg-orange-500
                  text-white
                  flex
                  items-center
                  justify-center
                  font-semibold
                  hover:bg-green-600
                  transition-all
                  duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-orange-500
                  focus-visible:ring-offset-2
                "
              >
                Let's Talk
              </Link>

              {/* View Profile */}

              <Link
                href="/union-add-company-profile.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Union Add Company Profile PDF"
                className="
                  h-14
                  px-8
                  rounded-full
                  border
                  border-purple-500
                  dark:border-zinc-700
                  flex
                  items-center
                  justify-center
                  font-semibold
                  hover:border-orange-500
                  hover:text-orange-500
                  transition-all
                  duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-orange-500
                  focus-visible:ring-offset-2
                "
              >
                View Profile
              </Link>

              {/* Download Profile */}

              <a
                href="/union-add-company-profile.pdf"
                download
                aria-label="Download Union Add Company Profile PDF"
                className="
                  h-14
                  px-8
                  rounded-full
                  bg-[#071A2E]
                  dark:bg-white
                  dark:text-black
                  text-white
                  flex
                  items-center
                  justify-center
                  font-semibold
                  hover:bg-orange-500
                  hover:text-white
                  transition-all
                  duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-orange-500
                  focus-visible:ring-offset-2
                "
              >
                Download Profile
              </a>

            </div>

          </div>

          {/* Right Side */}

          <aside aria-label="Union Add Company Highlights">
            <HeroCards />
          </aside>

        </div>
      </div>
    </section>
  );
}