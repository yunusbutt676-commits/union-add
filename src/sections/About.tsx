"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Sparkles,
} from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white dark:bg-[#070707] text-zinc-900 dark:text-white overflow-hidden">

      {/* Hero */}

      <section aria-labelledby="about-hero-heading" className="relative">

        {/* Background */}

        <div className="absolute inset-0 overflow-hidden">

          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-[700px]
              h-[700px]
              rounded-full
              bg-orange-500/10
              blur-[150px]
            "
          />

          <div
            className="
              absolute
              bottom-0
              right-0
              w-[450px]
              h-[450px]
              rounded-full
              bg-yellow-400/10
              blur-[140px]
            "
          />

        </div>

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            pt-36
            pb-24
          "
        >

          <motion.div

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: .8,
            }}

            className="max-w-4xl mx-auto text-center"

          >

            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-orange-500/30
                bg-orange-500/10
                px-5
                py-2
                text-orange-500
                font-medium
                mb-8
              "
            >

              <Sparkles size={18} />

              About Union Add

            </div>

            <h1
              id="about-hero-heading"
              className="
                text-5xl
                sm:text-6xl
                lg:text-7xl
                font-black
                leading-tight
              "
            >

              Building Powerful

              <span
                className="
                  block
                  bg-gradient-to-r
                  from-orange-500
                  via-amber-400
                  to-orange-600
                  bg-clip-text
                  text-transparent
                "
              >

                Brands Since 2006

              </span>

            </h1>

            <p
              className="
                mt-8
                text-lg
                md:text-xl
                text-zinc-600
                dark:text-zinc-400
                leading-9
                max-w-3xl
                mx-auto
              "
            >

              Union Add is a full-service advertising, branding,
              marketing, and technology agency delivering
              strategic campaigns, creative experiences, and
              measurable business growth across Pakistan.

            </p>

            <div
              className="
                mt-12
                flex
                flex-col
                sm:flex-row
                justify-center
                gap-5
              "
            >

              <Link
                href="/get-a-quote"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-orange-500
                  hover:bg-orange-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition
                "
              >

                Get a Quote

                <ArrowRight size={18} />

              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-zinc-300
                  dark:border-zinc-700
                  px-8
                  py-4
                  font-semibold
                  hover:border-orange-500
                  hover:text-orange-500
                  transition
                "
              >

                Contact Us

              </Link>

            </div>

          </motion.div>

          {/* Statistics */}

          <motion.div

            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              delay: .2,
              duration: .8,
            }}

            className="
              mt-24
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-6
            "

          >

            {[
              {
                value: "2006",
                title: "Founded",
              },
              {
                value: "20+",
                title: "Years Experience",
              },
              {
                value: "Pakistan",
                title: "Nationwide Reach",
              },
              {
                value: "ATL • TTL • BTL",
                title: "Integrated Marketing",
              },
            ].map((item) => (

              <div

                key={item.title}

                className="
                  rounded-3xl
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  bg-white/70
                  dark:bg-[#111]/80
                  backdrop-blur-xl
                  p-8
                  text-center
                  hover:-translate-y-2
                  transition
                  shadow-xl
                "

              >

                <Award
                  className="
                    mx-auto
                    mb-5
                    text-orange-500
                  "
                  size={30}
                />

                <h3
                  className="
                    text-3xl
                    font-black
                  "
                >

                  {item.value}

                </h3>

                <p
                  className="
                    mt-2
                    text-zinc-500
                    dark:text-zinc-400
                  "
                >

                  {item.title}

                </p>

              </div>

            ))}

          </motion.div>

        </div>

      </section>

      {/* ================= OUR STORY ================= */}

      <section
        aria-labelledby="our-story-heading"
        className="
          relative
          py-24
          lg:py-32
          overflow-hidden
        "
      >
        {/* Background Glow */}

        <div className="absolute inset-0 overflow-hidden">

          <div
            className="
              absolute
              -left-32
              top-20
              w-[420px]
              h-[420px]
              rounded-full
              bg-orange-500/10
              blur-[120px]
            "
          />

          <div
            className="
              absolute
              right-0
              bottom-0
              w-[350px]
              h-[350px]
              rounded-full
              bg-yellow-400/10
              blur-[120px]
            "
          />

        </div>

        <div
          className="
            relative
            max-w-7xl
            mx-auto
            px-6
            lg:px-10
            grid
            lg:grid-cols-2
            gap-20
            items-center
          "
        >

          {/* Left */}

          <motion.div

            initial={{
              opacity: 0,
              x: -50,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: .8,
            }}

          >

            <span
              className="
                inline-flex
                items-center
                rounded-full
                bg-orange-500/10
                border
                border-orange-500/30
                text-orange-500
                px-5
                py-2
                font-semibold
                mb-6
              "
            >
              Our Story
            </span>

            <h2
              id="our-story-heading"
              className="
                text-4xl
                md:text-5xl
                font-black
                leading-tight
              "
            >
              Nearly Two Decades
              <span className="block text-orange-500">
                Of Creative Excellence.
              </span>
            </h2>

            <p
              className="
                mt-8
                text-lg
                leading-9
                text-zinc-600
                dark:text-zinc-400
              "
            >
              Founded in <strong>2006</strong>, Union Add began with a
              simple vision—to provide businesses with credible,
              innovative, and impactful advertising solutions that
              truly deliver results.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-9
                text-zinc-600
                dark:text-zinc-400
              "
            >
              Over the years, we have grown into a trusted
              full-service advertising and marketing agency,
              helping businesses strengthen their brands,
              increase visibility, and create meaningful
              connections with their audiences across Pakistan.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-9
                text-zinc-600
                dark:text-zinc-400
              "
            >
              Today, Union Add combines creativity,
              strategic thinking, modern technology,
              and nationwide execution to deliver
              integrated marketing solutions that
              inspire confidence and drive measurable
              business growth.
            </p>

          </motion.div>

          {/* Right */}

          <motion.div

            initial={{
              opacity: 0,
              x: 50,
            }}

            whileInView={{
              opacity: 1,
              x: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: .8,
            }}

            className="relative"

          >

            <div
              className="
                rounded-[40px]
                overflow-hidden
                border
                border-zinc-200
                dark:border-zinc-800
                shadow-2xl
              "
            >

              <Image
                src="/about-story.jpg"
                alt="Union Add Advertising Agency in Lahore Pakistan Since 2006"
                width={900}
                height={520}
                priority
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,900px"
                className="
                  w-full
                  h-[520px]
                  object-cover
                "
              />

            </div>

            {/* Floating Card */}

            <motion.div

              animate={{
                y: [0, -10, 0],
              }}

              transition={{
                duration: 4,
                repeat: Infinity,
              }}

              className="
                absolute
                -bottom-8
                left-8
                right-8
                rounded-3xl
                bg-white/90
                dark:bg-[#111]/90
                backdrop-blur-xl
                border
                border-zinc-200
                dark:border-zinc-800
                p-8
                shadow-2xl
              "

            >

              <h3
                className="
                  text-2xl
                  font-bold
                  mb-3
                "
              >
                Trusted Since 2006
              </h3>

              <p
                className="
                  text-zinc-600
                  dark:text-zinc-400
                  leading-8
                "
              >
                From strategy and branding to nationwide
                advertising campaigns, Union Add continues
                to help organizations build stronger brands
                through creativity, innovation, and measurable
                marketing solutions.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* ================= MISSION & VISION ================= */}

      <section aria-labelledby="mission-heading" className="relative py-24 lg:py-32">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="text-center max-w-3xl mx-auto"
          >

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-orange-500/30
                bg-orange-500/10
                text-orange-500
                px-5
                py-2
                font-semibold
                mb-6
              "
            >
              Our Purpose
            </span>

            <h2 className="text-4xl md:text-5xl font-black">

              Driven By Vision.
              <span className="block text-orange-500">
                Powered By Purpose.
              </span>

            </h2>

            <p className="mt-6 text-lg leading-9 text-zinc-600 dark:text-zinc-400">

              Every successful campaign starts with a clear vision
              and a strong purpose. At Union Add, these principles
              shape every strategy, design, and marketing solution
              we create.

            </p>

          </motion.div>

          {/* Cards */}

          <div className="grid lg:grid-cols-2 gap-10 mt-20">

            {/* Mission */}

            <motion.div

              initial={{ opacity: 0, x: -40 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true }}

              transition={{ duration: .7 }}

              whileHover={{
                y: -10
              }}

              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-zinc-200
                dark:border-zinc-800
                bg-white/70
                dark:bg-[#111]/80
                backdrop-blur-xl
                p-10
                shadow-xl
              "

            >

              {/* Background */}

              <div
                className="
                  absolute
                  -right-20
                  -top-20
                  w-56
                  h-56
                  rounded-full
                  bg-orange-500/10
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-orange-500
                  flex
                  items-center
                  justify-center
                  text-white
                  text-3xl
                  mb-8
                "
              >

                🎯

              </div>

              <h3 className="text-3xl font-bold mb-6">

                Our Mission

              </h3>

              <p
                className="
                  leading-9
                  text-lg
                  text-zinc-600
                  dark:text-zinc-400
                "
              >

                To empower businesses through strategic advertising,
                creative branding, innovative marketing, and modern
                technology solutions that strengthen brands,
                engage audiences, and generate measurable business
                growth.

              </p>

            </motion.div>

            {/* Vision */}

            <motion.div

              initial={{ opacity: 0, x: 40 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true }}

              transition={{ duration: .7 }}

              whileHover={{
                y: -10
              }}

              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-zinc-200
                dark:border-zinc-800
                bg-white/70
                dark:bg-[#111]/80
                backdrop-blur-xl
                p-10
                shadow-xl
              "

            >

              <div
                className="
                  absolute
                  -left-20
                  -bottom-20
                  w-56
                  h-56
                  rounded-full
                  bg-yellow-400/10
                  blur-3xl
                "
              />

              <div
                className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  from-orange-500
                  to-yellow-400
                  flex
                  items-center
                  justify-center
                  text-white
                  text-3xl
                  mb-8
                "
              >

                🚀

              </div>

              <h3 className="text-3xl font-bold mb-6">

                Our Vision

              </h3>

              <p
                className="
                  leading-9
                  text-lg
                  text-zinc-600
                  dark:text-zinc-400
                "
              >

                To become Pakistan's most trusted integrated
                advertising and marketing partner by delivering
                world-class creativity, strategic innovation,
                exceptional customer experiences, and long-term
                business success.

              </p>

            </motion.div>

          </div>

          {/* Quote */}

          <motion.div

            initial={{ opacity: 0, y: 40 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{ delay: .2 }}

            className="
              mt-24
              rounded-[36px]
              overflow-hidden
              bg-gradient-to-r
              from-[#071A2E]
              via-[#102B49]
              to-orange-500
              text-white
              p-10
              lg:p-16
              text-center
            "

          >

            <h3
              className="
                text-3xl
                md:text-5xl
                font-black
              "
            >

              Great Brands
              Don't Happen By Chance.

            </h3>

            <p
              className="
                mt-6
                max-w-3xl
                mx-auto
                text-lg
                leading-9
                text-white/90
              "
            >

              They are built through strategy, creativity,
              innovation, and consistent execution.
              Since 2006, Union Add has helped businesses
              across Pakistan transform ideas into impactful
              marketing experiences.

            </p>

          </motion.div>

        </div>

      </section>
      
      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-24 lg:py-32 relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .7 }}
            className="text-center max-w-3xl mx-auto"
          >

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-orange-500/30
                bg-orange-500/10
                text-orange-500
                px-5
                py-2
                font-semibold
                mb-6
              "
            >
              Why Union Add
            </span>

            <h2 className="text-4xl md:text-5xl font-black">

              Why Bussinesses
              <span className="block text-orange-500">
                Choose Union Add
              </span>

            </h2>

            <p
              className="
                mt-6
                text-lg
                leading-9
                text-zinc-600
                dark:text-zinc-400
              "
            >

              We combine creativity, technology and strategic
              marketing to deliver campaigns that create
              measurable bussiness growth.

            </p>

          </motion.div>

          <div
            className="
              mt-20
              grid
              sm:grid-cols-2
              xl:grid-cols-3
              gap-8
            "
          >

            {[
              {
                icon: "🚀",
                title: "Full Service Agency",
                text:
                  "Advertising, Branding, Digital Media Marketing, Full Stack Web Development, Mobile Apps and Creative Production under one roof."
              },
              {
                icon: "🎯",
                title: "Result-Driven",
                text:
                  "Every campaign is planned with measurable KPIs focused on leads, sales, awareness and long-term growth."
              },
              {
                icon: "💡",
                title: "Creative Thinking",
                text:
                  "Our designers, strategists and marketers create memorable campaigns that capture attention."
              },
              {
                icon: "📈",
                title: "Nationwide Reach",
                text:
                  "From outdoor media and cable advertising to digital campaigns, we execute projects throughout Pakistan."
              },
              {
                icon: "🤝",
                title: "Long-Term Partnership",
                text:
                  "Many clients work with Union Add as their complete external marketing department."
              },
              {
                icon: "⭐",
                title: "Since 2006",
                text:
                  "Nearly two decades of experience delivering advertising and marketing excellence."
              }

            ].map((item, index) => (

              <motion.div

                key={item.title}

                initial={{
                  opacity: 0,
                  y: 40
                }}

                whileInView={{
                  opacity: 1,
                  y: 0
                }}

                viewport={{
                  once: true
                }}

                transition={{
                  delay: index * .08
                }}

                whileHover={{
                  y: -12,
                  scale: 1.02
                }}

                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-zinc-200
                  dark:border-zinc-800
                  bg-white
                  dark:bg-[#111]
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                  duration-500
                "

              >

                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    bg-gradient-to-br
                    from-orange-500/10
                    via-transparent
                    to-yellow-400/10
                  "
                />

                <div
                  className="
                    relative
                    w-16
                    h-16
                    rounded-2xl
                    bg-orange-500
                    text-white
                    text-3xl
                    flex
                    items-center
                    justify-center
                    mb-8
                  "
                >

                  {item.icon}

                </div>

                <h3
                  className="
                    relative
                    text-2xl
                    font-bold
                    mb-5
                  "
                >

                  {item.title}

                </h3>

                <p
                  className="
                    relative
                    text-zinc-600
                    dark:text-zinc-400
                    leading-8
                  "
                >

                  {item.text}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= COMPANY TIMELINE ================= */}

        <section aria-labelledby="timeline-heading" className="relative py-24 lg:py-32 overflow-hidden">

          <div className="max-w-7xl mx-auto px-6 lg:px-10">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
              className="text-center max-w-3xl mx-auto"
            >

              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-orange-500/30
                  bg-orange-500/10
                  text-orange-500
                  px-5
                  py-2
                  font-semibold
                  mb-6
                "
              >
                Our Journey
              </span>

              <h2 className="text-4xl md:text-5xl font-black">

                Nearly 20 Years
                <span className="block text-orange-500">
                  Of Continuous Growth
                </span>

              </h2>

              <p
                className="
                  mt-6
                  text-lg
                  leading-9
                  text-zinc-600
                  dark:text-zinc-400
                "
              >

                Every milestone reflects our commitment to
                creativity, innovation, and delivering successful
                advertising and marketing solutions across Pakistan.

              </p>

            </motion.div>

            {/* Vertical Line */}

            <div className="relative max-w-5xl mx-auto mt-24">

              <div
                className="
                  absolute
                  left-5
                  md:left-1/2
                  md:-translate-x-1/2
                  top-0
                  bottom-0
                  w-[3px]
                  bg-gradient-to-b
                  from-orange-500
                  via-orange-300
                  to-orange-500
                "
              />

              {[
                {
                  year: "2006",
                  title: "Union Add Founded",
                  text:
                    "Union Add was established with a vision to provide credible advertising solutions and become a trusted communication partner for businesses."
                },
                {
                  year: "2010",
                  title: "Expanding Advertising Services",
                  text:
                    "Successfully expanded into ATL, TTL and BTL advertising, strengthening relationships with leading brands."
                },
                {
                  year: "2015",
                  title: "Nationwide Marketing Campaigns",
                  text:
                    "Delivered integrated campaigns across Pakistan including outdoor advertising, branding, cable media and activation."
                },
                {
                  year: "2020",
                  title: "Digital Transformation",
                  text:
                    "Introduced digital marketing, social media, creative design and modern business solutions for growing companies."
                },
                {
                  year: "2026",
                  title: "Technology + Marketing Agency",
                  text:
                    "Today Union Add combines advertising, branding, web development, mobile applications and digital marketing into one complete business solution."
                }

              ].map((item, index) => (

                <motion.div

                  key={item.year}

                  initial={{
                    opacity: 0,
                    y: 40
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}

                  viewport={{
                    once: true
                  }}

                  transition={{
                    delay: index * .12
                  }}

                  className={`
                    relative
                    flex
                    flex-col
                    md:flex-row
                    ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                    items-start
                    md:items-center
                    gap-10
                    mb-20
                  `}

                >

                  {/* Card */}

                  <div
                    className="
                      w-full
                      md:w-[45%]
                      ml-14
                      md:ml-0
                    "
                  >

                    <div
                      className="
                        rounded-[28px]
                        border
                        border-zinc-200
                        dark:border-zinc-800
                        bg-white
                        dark:bg-[#111]
                        p-8
                        shadow-lg
                        hover:-translate-y-2
                        hover:shadow-2xl
                        transition-all
                        duration-500
                      "
                    >

                      <span
                        className="
                          text-orange-500
                          font-bold
                          text-lg
                        "
                      >
                        {item.year}
                      </span>

                      <h3
                        className="
                          mt-3
                          text-2xl
                          font-bold
                        "
                      >
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-5
                          leading-8
                          text-zinc-600
                          dark:text-zinc-400
                        "
                      >
                        {item.text}
                      </p>

                    </div>

                  </div>

                  {/* Timeline Dot */}

                  <div
                    className="
                      absolute
                      left-0
                      md:left-1/2
                      md:-translate-x-1/2
                      top-8
                      w-10
                      h-10
                      rounded-full
                      bg-orange-500
                      border-[6px]
                      border-white
                      dark:border-[#070707]
                      shadow-xl
                    "
                  />

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* ================= WHY CHOOSE US ================= */}

        <section className="relative py-28 bg-[#050505] overflow-hidden">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,.08),transparent_40%)]" />

          <div className="relative max-w-7xl mx-auto px-6">

            <div className="text-center max-w-3xl mx-auto mb-20">

              <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-semibold">
                Why Union Add
              </span>

              <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white leading-tight">
                Trusted by Bussinesses
                <br />
                Across Pakistan
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                Since 2006, Union Add has helped brands communicate,
                grow, and lead through integrated advertising,
                branding, media buying, digital marketing,
                and creative production.
              </p>

            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

              {[
                {
                  number: "20+",
                  title: "Years of Experience",
                  text: "Providing complete advertising and marketing solutions since 2006."
                },

                {
                  number: "360°",
                  title: "Integrated Services",
                  text: "ATL, BTL, TTL, digital media marketing, branding, media buying and production."
                },

                {
                  number: "Pakistan",
                  title: "Nationwide Reach",
                  text: "Executing campaigns across major cities through trusted media partners."
                },

                {
                  number: "Results",
                  title: "Client-Focused",
                  text: "Every campaign is planned, monitored and optimized for measurable growth."
                }

              ].map((item, index) => (

                <div
                  key={index}
                  className="
                    group
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    backdrop-blur-xl
                    p-8
                    hover:border-orange-500/50
                    hover:bg-white/10
                    transition-all
                    duration-500
                  "
                >

                  <h3 className="text-5xl font-bold text-orange-500">
                    {item.number}
                  </h3>

                  <h4 className="mt-6 text-2xl font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-4 text-gray-400 leading-8">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

      {/* ================= WHY CHOOSE UNION ADD ================= */}

      <section className="relative py-24 bg-purple-700 overflow-hidden">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center">

            <span className="inline-flex px-5 py-2 rounded-full bg-orange-500/20 text-orange-400 text-sm font-semibold tracking-wider uppercase">
              Why Choose Union Add
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
              Trusted Advertising &
              <br />
              Digital Growth Partner
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-8">
              Every campaign we build is backed by strategic thinking,
              creative excellence and measurable performance. Since 2006,
              businesses across Pakistan have trusted Union Add to deliver
              advertising solutions that strengthen brands and generate
              meaningful results.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-500 transition">

              <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-2xl">
                🚀
              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                Strategy First
              </h3>

              <p className="text-gray-300 mt-4 leading-8">
                Every project begins with research, planning and business
                objectives to ensure campaigns deliver maximum impact.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-500 transition">

              <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-2xl">
                🎯
              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                Result Driven
              </h3>

              <p className="text-gray-300 mt-4 leading-8">
                We focus on measurable growth through advertising,
                branding, media planning and digital marketing strategies.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-500 transition">

              <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-2xl">
                🤝
              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                Long-Term Partnership
              </h3>

              <p className="text-gray-300 mt-4 leading-8">
                We don't just deliver projects—we become your trusted
                advertising and marketing partner for long-term business
                success.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-500 transition">

              <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-2xl">
                🌍
              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                Nationwide Reach
              </h3>

              <p className="text-gray-300 mt-4 leading-8">
                From outdoor advertising and cable media to nationwide
                campaigns, we execute projects across Pakistan with
                consistency and precision.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-500 transition">

              <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-2xl">
                💡
              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                Creative Innovation
              </h3>

              <p className="text-gray-300 mt-4 leading-8">
                Our designers, marketers and creative specialists combine
                fresh ideas with modern technologies to create memorable
                brand experiences.
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-orange-500 transition">

              <div className="w-14 h-14 rounded-2xl bg-orange-500 flex items-center justify-center text-white text-2xl">
                ⭐
              </div>

              <h3 className="text-2xl font-semibold text-white mt-6">
                Since 2006
              </h3>

              <p className="text-gray-300 mt-4 leading-8">
                Nearly two decades of experience have enabled Union Add
                to build lasting client relationships through quality,
                commitment and dependable execution.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          PART 4 - CTA
      ========================= */}

      <section aria-labelledby="cta-heading" className="relative py-28 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r from-[#071A2E] via-[#0E2D4F] to-[#071A2E]" />

        <div className="absolute inset-0 opacity-10">
          <article className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-[140px]" />
          <article className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[140px]" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-orange-500/30
              bg-orange-500/10
              px-5
              py-2
              text-sm
              font-medium
              text-orange-400
            "
          >
            Ready To Grow?
          </span>

          <h2
            className="
              mt-8
              text-4xl
              md:text-6xl
              font-bold
              text-white
              leading-tight
            "
          >
            Let's Build Your
            <span className="text-orange-500">
              {" "}Next Success Story
            </span>
          </h2>

          <p
            className="
              mt-8
              max-w-3xl
              mx-auto
              text-lg
              md:text-xl
              leading-9
              text-gray-300
            "
          >
            Whether you're launching a startup, scaling an established
            business, or planning a nationwide advertising campaign,
            Union Add combines creative thinking, digital innovation,
            strategic media planning, and measurable execution to
            deliver marketing that drives real business growth.
          </p>

          <div
            className="
              mt-12
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-5
            "
          >
            <Link
              href="https://wa.me/923211234560?text=Hi%20Union%20Add,%20I%20would%20like%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get a free consultation on WhatsApp"
              title="Get a free consultation on WhatsApp"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-full
                bg-orange-500
                hover:bg-orange-600
                text-white
                font-semibold
                transition-all
                duration-300
                hover:scale-105
              "
            >
              Get Free Consultation
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                justify-center
                px-8
                py-4
                rounded-full
                border
                border-white/20
                text-white
                hover:bg-white
                hover:text-black
                transition-all
                duration-300
              "
            >
              Contact Us
            </Link>
          </div>

        </div>

      </section>

    </main>
  );
}