
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="
        w-full
        min-w-0
        border-b
        border-gray-200
        px-4
        py-14
        text-center
        sm:px-6
        sm:py-18
        md:py-24
        lg:px-8
        dark:border-white/10
      "
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* EYEBROW TEXT */}
        <p
          className="
            mb-5
            text-xs
            font-medium
            uppercase
            tracking-[2px]
            text-gray-500
            sm:mb-6
            sm:text-sm
            sm:tracking-[4px]
          "
        >
          Let&apos;s Build Something Great
        </p>

        {/* MAIN HEADING */}
        <h2
          id="cta-heading"
          className="
            mx-auto
            max-w-4xl
            text-3xl
            font-light
            leading-tight
            tracking-tight
            sm:text-4xl
            md:text-6xl
            lg:text-7xl
          "
        >
          Ready To Elevate
          <br />
          Your Brand?
        </h2>

        {/* DESCRIPTION */}
        <p
          className="
            mx-auto
            mt-5
            max-w-2xl
            text-sm
            leading-7
            text-gray-600
            sm:mt-6
            sm:text-base
            md:text-lg
            dark:text-gray-400
          "
        >
          Book a Free Consultation and Custom Quote for
          Brandings, Digital Marketing, Web/App development,
          SMM, SEO, and Creative Advertising Solutions.
        </p>

        {/* CTA BUTTON */}
        <Link
          href="/get-a-quote"
          prefetch
          aria-label="Start your project by requesting a free quote"
          className="
            mt-8
            inline-flex
            min-h-12
            w-full
            max-w-sm
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-gray-200
            bg-white
            px-7
            py-4
            text-center
            text-sm
            font-medium
            text-black
            transition-all
            duration-300
            hover:scale-105
            hover:border-orange-500
            hover:bg-orange-500
            hover:text-white
            focus-visible:outline-none
            focus-visible:ring-4
            focus-visible:ring-orange-400/40
            active:scale-[0.98]
            sm:mt-10
            sm:w-auto
            sm:text-base
            dark:border-white/20
            motion-reduce:transform-none
            motion-reduce:transition-none
          "
        >
          <span>Start Your Project</span>

          <HiArrowUpRight
            aria-hidden="true"
            className="h-5 w-5 shrink-0"
          />
        </Link>
      </div>
    </section>
  );
}
