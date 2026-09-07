"use client";

import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export default function CTA() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="py-24 border-b border-white/10 text-center"
    >
      <p className="text-sm uppercase tracking-[4px] text-gray-500 mb-6">
        Let's Build Something Great
      </p>

      <h2
        id="cta-heading"
        className="text-3xl sm:text-4xl md:text-7xl font-light leading-tight max-w-4xl mx-auto"
      >
        Ready To Elevate
        <br />
        Your Brand?
      </h2>

      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
        Book a Free Consultation and Custom Quote for Brandings, Digital
        Marketing, Web/App development, SMM, SEO, and Creative
        Advertising Solutions.
      </p>

      <Link
        href="/get-a-quote"
        prefetch
        aria-label="Start your project by requesting a free quote"
        className="
          mt-10
          inline-flex
          items-center
          gap-3
          bg-white
          hover:bg-orange-500
          text-black
          hover:text-white
          px-7
          py-4
          border
          rounded-full
          font-medium
          hover:scale-105
          focus:outline-none
          focus:ring-4
          focus:ring-orange-400/40
          transition-all
          duration-300
        "
      >
        Start Your Project
        <HiArrowUpRight
          className="text-xl"
          aria-hidden="true"
        />
      </Link>
    </section>
  );
}