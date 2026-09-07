"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroCards() {
  return (
    <div
      className="
        relative
        flex
        justify-center
        items-center
        h-[320px]
        sm:h-[420px]
        md:h-[520px]
        lg:h-[700px]
      "
    >
      {/* Main Card */}
      <motion.div
        aria-label="Union Add featured advertising campaign"
        animate={{
          y: [0, -20, 0],
          rotate: [-2, 0, -2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          will-change-transform
          w-[220px]
          h-[280px]
          sm:w-[280px]
          sm:h-[360px]
          md:w-[360px]
          md:h-[470px]
          lg:w-[500px]
          lg:h-[620px]
          rounded-[36px]
          overflow-hidden
          shadow-2xl
          border border-white/10
        "
      >
        <Image
          src="/bau.jpeg"
          alt="Union Add advertising campaign showcasing branding and digital marketing"
          fill
          priority
          sizes="(max-width:768px) 100vw, 50vw"
          className="object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
        />

        <div
          className="
            absolute
            bottom-4
            left-4
            sm:bottom-6
            sm:left-6
            lg:bottom-10
            lg:left-10
          "
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-light">
            Drive Beyond
            <br />
            Campaign
          </h3>

          <Link
            href="/portfolio"
            prefetch
            className="mt-2 lg:mt-5 inline-block text-xs sm:text-sm lg:text-base text-gray-300 hover:text-orange-400 transition-colors"
          >
            View Case Study →
          </Link>
        </div>
      </motion.div>

      {/* Floating Card */}
      <motion.div
        aria-label="Union Add creative branding showcase"
        animate={{
          y: [0, 30, 0],
          rotate: [8, 10, 8],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          will-change-transform
          right-2
          sm:right-4
          lg:right-0
          top-12
          sm:top-16
          md:top-20
          lg:top-28
          w-[110px]
          h-[190px]
          sm:w-[150px]
          sm:h-[260px]
          md:w-[190px]
          md:h-[340px]
          lg:w-[240px]
          lg:h-[450px]
          rounded-[30px]
          overflow-hidden
          shadow-2xl
          border border-white/10
        "
      >
        <Image
          src="/uau.jpeg"
          alt="Creative branding and marketing campaign by Union Add"
          fill
          sizes="(max-width:768px) 100vw, 30vw"
          className="object-cover"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"
        />

        <div
          className="
            absolute
            bottom-3
            left-3
            sm:bottom-5
            sm:left-5
            lg:bottom-10
            lg:left-8
          "
        >
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light">
            Future
            <br />
            Vision
          </h3>

          <Link
            href="/portfolio"
            prefetch
            className="mt-2 inline-block text-[11px] sm:text-xs lg:text-base text-gray-300 hover:text-orange-400 transition-colors"
          >
            View Case Study →
          </Link>
        </div>
      </motion.div>
    </div>
  );
}