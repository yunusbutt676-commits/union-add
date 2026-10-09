"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Award, Sparkles } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-white text-zinc-900 dark:bg-[#070707] dark:text-white">
      {/* Hero */}
      <section aria-labelledby="about-hero-heading" className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-[150px]" />
          <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-yellow-400/10 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 font-medium text-orange-500 sm:mb-8 sm:px-5">
              <Sparkles size={18} />
              About Union Add
            </div>

            <h1
              id="about-hero-heading"
              className="text-4xl font-black leading-tight sm:text-6xl lg:text-7xl"
            >
              Building Powerful
              <span className="block bg-gradient-to-r from-orange-500 via-amber-400 to-orange-600 bg-clip-text text-transparent">
                Brands Since 2006
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-8 sm:text-lg sm:leading-9 md:text-xl">
              Union Add is a full-service advertising, branding, marketing,
              and technology agency delivering strategic campaigns, creative
              experiences, and measurable business growth across Pakistan.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-5">
              <Link
                href="/get-a-quote"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600 sm:w-auto"
              >
                Get a Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-zinc-300 px-8 py-4 font-semibold transition hover:border-orange-500 hover:text-orange-500 dark:border-zinc-700 sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-14 grid grid-cols-2 gap-3 sm:mt-24 sm:gap-6 lg:grid-cols-4"
          >
            {[
              { value: "2006", title: "Founded" },
              { value: "20+", title: "Years Experience" },
              { value: "Pakistan", title: "Nationwide Reach" },
              { value: "ATL • TTL • BTL", title: "Integrated Marketing" },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-200 bg-white/70 p-3 text-center shadow-xl backdrop-blur-xl transition hover:-translate-y-2 dark:border-zinc-800 dark:bg-[#111]/80 sm:p-8"
              >
                <Award
                  className="mx-auto mb-3 text-orange-500 sm:mb-5"
                  size={26}
                />
                <h3 className="break-words text-lg font-black leading-tight sm:text-3xl">
                  {item.value}
                </h3>
                <p className="mt-2 text-xs leading-snug text-zinc-500 dark:text-zinc-400 sm:text-base">
                  {item.title}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section
        aria-labelledby="our-story-heading"
        className="relative overflow-hidden py-14 sm:py-24 lg:py-32"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-32 top-20 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-yellow-400/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-20 sm:px-6 lg:grid-cols-2 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="mb-6 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 font-semibold text-orange-500">
              Our Story
            </span>

            <h2
              id="our-story-heading"
              className="text-3xl font-black leading-tight sm:text-4xl md:text-5xl"
            >
              Nearly Two Decades
              <span className="block text-orange-500">
                Of Creative Excellence.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-8 sm:text-lg sm:leading-9">
              Founded in <strong>2006</strong>, Union Add began with a simple
              vision—to provide businesses with credible, innovative, and
              impactful advertising solutions that truly deliver results.
            </p>

            <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-6 sm:text-lg sm:leading-9">
              Over the years, we have grown into a trusted full-service
              advertising and marketing agency, helping businesses strengthen
              their brands, increase visibility, and create meaningful
              connections with their audiences across Pakistan.
            </p>

            <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-6 sm:text-lg sm:leading-9">
              Today, Union Add combines creativity, strategic thinking,
              modern technology, and nationwide execution to deliver
              integrated marketing solutions that inspire confidence and
              drive measurable business growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[24px] border border-zinc-200 shadow-2xl dark:border-zinc-800 sm:rounded-[40px]">
              <Image
                src="/about-story.jpg"
                alt="Union Add Advertising Agency in Lahore Pakistan Since 2006"
                width={900}
                height={520}
                priority
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,900px"
                className="h-[300px] w-full object-cover sm:h-[520px]"
              />
            </div>

            {/* Card stays in the page flow on phones so its text is visible. */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative -mt-8 mx-3 rounded-3xl border border-zinc-200 bg-white/90 p-5 shadow-2xl backdrop-blur-xl dark:border-zinc-800 dark:bg-[#111]/90 sm:absolute sm:-bottom-8 sm:left-8 sm:right-8 sm:mx-0 sm:mt-0 sm:p-8"
            >
              <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                Trusted Since 2006
              </h3>
              <p className="leading-7 text-zinc-600 dark:text-zinc-400 sm:leading-8">
                From strategy and branding to nationwide advertising
                campaigns, Union Add continues to help organizations build
                stronger brands through creativity, innovation, and
                measurable marketing solutions.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        aria-labelledby="mission-heading"
        className="relative py-14 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-6 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 font-semibold text-orange-500">
              Our Purpose
            </span>
            <h2
              id="mission-heading"
              className="text-3xl font-black sm:text-4xl md:text-5xl"
            >
              Driven By Vision.
              <span className="block text-orange-500">
                Powered By Purpose.
              </span>
            </h2>
            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-9">
              Every successful campaign starts with a clear vision and a
              strong purpose. At Union Add, these principles shape every
              strategy, design, and marketing solution we create.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 sm:mt-20 sm:gap-10 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-[#111]/80 sm:p-10"
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white sm:mb-8">
                🎯
              </div>
              <h3 className="mb-5 text-2xl font-bold sm:mb-6 sm:text-3xl">
                Our Mission
              </h3>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-9">
                To empower businesses through strategic advertising,
                creative branding, innovative marketing, and modern
                technology solutions that strengthen brands, engage
                audiences, and generate measurable business growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ y: -10 }}
              className="relative overflow-hidden rounded-[32px] border border-zinc-200 bg-white/70 p-6 shadow-xl backdrop-blur-xl dark:border-zinc-800 dark:bg-[#111]/80 sm:p-10"
            >
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-yellow-400/10 blur-3xl" />
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-yellow-400 text-3xl text-white sm:mb-8">
                🚀
              </div>
              <h3 className="mb-5 text-2xl font-bold sm:mb-6 sm:text-3xl">
                Our Vision
              </h3>
              <p className="text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-9">
                To become Pakistan&apos;s most trusted integrated advertising
                and marketing partner by delivering world-class creativity,
                strategic innovation, exceptional customer experiences, and
                long-term business success.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-14 overflow-hidden rounded-[36px] bg-gradient-to-r from-[#071A2E] via-[#102B49] to-orange-500 p-6 text-center text-white sm:mt-24 sm:p-10 lg:p-16"
          >
            <h3 className="text-2xl font-black sm:text-3xl md:text-5xl">
              Great Brands Don&apos;t Happen By Chance.
            </h3>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-white/90 sm:text-lg sm:leading-9">
              They are built through strategy, creativity, innovation, and
              consistent execution. Since 2006, Union Add has helped
              businesses across Pakistan transform ideas into impactful
              marketing experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Businesses Choose Union Add */}
      <section className="relative overflow-hidden py-14 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-6 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 font-semibold text-orange-500">
              Why Union Add
            </span>
            <h2 className="text-3xl font-black sm:text-4xl md:text-5xl">
              Why Bussinesses
              <span className="block text-orange-500">
                Choose Union Add
              </span>
            </h2>
            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-9">
              We combine creativity, technology and strategic marketing to
              deliver campaigns that create measurable bussiness growth.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:mt-20 sm:grid-cols-2 sm:gap-8 xl:grid-cols-3">
            {[
              {
                icon: "🚀",
                title: "Full Service Agency",
                text: "Advertising, Branding, Digital Media Marketing, Full Stack Web Development, Mobile Apps and Creative Production under one roof.",
              },
              {
                icon: "🎯",
                title: "Result-Driven",
                text: "Every campaign is planned with measurable KPIs focused on leads, sales, awareness and long-term growth.",
              },
              {
                icon: "💡",
                title: "Creative Thinking",
                text: "Our designers, strategists and marketers create memorable campaigns that capture attention.",
              },
              {
                icon: "📈",
                title: "Nationwide Reach",
                text: "From outdoor media and cable advertising to digital campaigns, we execute projects throughout Pakistan.",
              },
              {
                icon: "🤝",
                title: "Long-Term Partnership",
                text: "Many clients work with Union Add as their complete external marketing department.",
              },
              {
                icon: "⭐",
                title: "Since 2006",
                text: "Nearly two decades of experience delivering advertising and marketing excellence.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[30px] border border-zinc-200 bg-white p-6 shadow-lg transition-all duration-500 hover:shadow-2xl dark:border-zinc-800 dark:bg-[#111] sm:p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-yellow-400/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-3xl text-white sm:mb-8">
                  {item.icon}
                </div>
                <h3 className="relative mb-4 text-2xl font-bold sm:mb-5">
                  {item.title}
                </h3>
                <p className="relative leading-7 text-zinc-600 dark:text-zinc-400 sm:leading-8">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section
        aria-labelledby="timeline-heading"
        className="relative overflow-hidden py-14 sm:py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-6 inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 font-semibold text-orange-500">
              Our Journey
            </span>
            <h2
              id="timeline-heading"
              className="text-3xl font-black sm:text-4xl md:text-5xl"
            >
              Nearly 20 Years
              <span className="block text-orange-500">
                Of Continuous Growth
              </span>
            </h2>
            <p className="mt-6 text-base leading-7 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-9">
              Every milestone reflects our commitment to creativity,
              innovation, and delivering successful advertising and
              marketing solutions across Pakistan.
            </p>
          </motion.div>

          <div className="relative mx-auto mt-12 max-w-5xl sm:mt-24">
            <div className="absolute bottom-0 left-5 top-0 w-[3px] bg-gradient-to-b from-orange-500 via-orange-300 to-orange-500 md:left-1/2 md:-translate-x-1/2" />

            {[
              {
                year: "2006",
                title: "Union Add Founded",
                text: "Union Add was established with a vision to provide credible advertising solutions and become a trusted communication partner for businesses.",
              },
              {
                year: "2010",
                title: "Expanding Advertising Services",
                text: "Successfully expanded into ATL, TTL and BTL advertising, strengthening relationships with leading brands.",
              },
              {
                year: "2015",
                title: "Nationwide Marketing Campaigns",
                text: "Delivered integrated campaigns across Pakistan including outdoor advertising, branding, cable media and activation.",
              },
              {
                year: "2020",
                title: "Digital Transformation",
                text: "Introduced digital marketing, social media, creative design and modern business solutions for growing companies.",
              },
              {
                year: "2026",
                title: "Technology + Marketing Agency",
                text: "Today Union Add combines advertising, branding, web development, mobile applications and digital marketing into one complete business solution.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className={`relative mb-8 flex flex-col items-start gap-6 sm:mb-20 sm:gap-10 md:items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="ml-14 w-[calc(100%-3.5rem)] md:ml-0 md:w-[45%]">
                  <div className="rounded-[28px] border border-zinc-200 bg-white p-5 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:border-zinc-800 dark:bg-[#111] sm:p-8">
                    <span className="text-lg font-bold text-orange-500">
                      {item.year}
                    </span>
                    <h3 className="mt-3 text-xl font-bold sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-7 text-zinc-600 dark:text-zinc-400 sm:mt-5 sm:leading-8">
                      {item.text}
                    </p>
                  </div>
                </div>

                <div className="absolute left-0 top-8 h-10 w-10 rounded-full border-[6px] border-white bg-orange-500 shadow-xl dark:border-[#070707] md:left-1/2 md:-translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative overflow-hidden bg-[#050505] py-16 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,.08),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-20">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              Why Union Add
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl">
              Trusted by Bussinesses
              <br />
              Across Pakistan
            </h2>
            <p className="mt-6 leading-7 text-gray-400 sm:leading-8">
              Since 2006, Union Add has helped brands communicate, grow,
              and lead through integrated advertising, branding, media
              buying, digital marketing, and creative production.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                number: "20+",
                title: "Years of Experience",
                text: "Providing complete advertising and marketing solutions since 2006.",
              },
              {
                number: "360°",
                title: "Integrated Services",
                text: "ATL, BTL, TTL, digital media marketing, branding, media buying and production.",
              },
              {
                number: "Pakistan",
                title: "Nationwide Reach",
                text: "Executing campaigns across major cities through trusted media partners.",
              },
              {
                number: "Results",
                title: "Client-Focused",
                text: "Every campaign is planned, monitored and optimized for measurable growth.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-orange-500/50 hover:bg-white/10 sm:p-8"
              >
                <h3 className="break-words text-4xl font-bold text-orange-500 sm:text-5xl">
                  {item.number}
                </h3>
                <h4 className="mt-5 text-2xl font-semibold text-white sm:mt-6">
                  {item.title}
                </h4>
                <p className="mt-4 leading-7 text-gray-400 sm:leading-8">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Union Add */}
      <section className="relative overflow-hidden bg-purple-700 py-14 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-orange-500/20 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-orange-400">
              Why Choose Union Add
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Trusted Advertising &amp;
              <br />
              Digital Growth Partner
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
              Every campaign we build is backed by strategic thinking,
              creative excellence and measurable performance. Since 2006,
              businesses across Pakistan have trusted Union Add to deliver
              advertising solutions that strengthen brands and generate
              meaningful results.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:mt-20 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-orange-500 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white">
                🚀
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                Strategy First
              </h3>
              <p className="mt-4 leading-7 text-gray-300 sm:leading-8">
                Every project begins with research, planning and business
                objectives to ensure campaigns deliver maximum impact.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-orange-500 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white">
                🎯
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                Result Driven
              </h3>
              <p className="mt-4 leading-7 text-gray-300 sm:leading-8">
                We focus on measurable growth through advertising, branding,
                media planning and digital marketing strategies.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-orange-500 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white">
                🤝
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                Long-Term Partnership
              </h3>
              <p className="mt-4 leading-7 text-gray-300 sm:leading-8">
                We don&apos;t just deliver projects—we become your trusted
                advertising and marketing partner for long-term business
                success.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-orange-500 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white">
                🌍
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                Nationwide Reach
              </h3>
              <p className="mt-4 leading-7 text-gray-300 sm:leading-8">
                From outdoor advertising and cable media to nationwide
                campaigns, we execute projects across Pakistan with
                consistency and precision.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-orange-500 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white">
                💡
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                Creative Innovation
              </h3>
              <p className="mt-4 leading-7 text-gray-300 sm:leading-8">
                Our designers, marketers and creative specialists combine
                fresh ideas with modern technologies to create memorable
                brand experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-orange-500 sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl text-white">
                ⭐
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-white">
                Since 2006
              </h3>
              <p className="mt-4 leading-7 text-gray-300 sm:leading-8">
                Nearly two decades of experience have enabled Union Add to
                build lasting client relationships through quality,
                commitment and dependable execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="cta-heading"
        className="relative overflow-hidden py-16 sm:py-28"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A2E] via-[#0E2D4F] to-[#071A2E]" />
        <div className="absolute inset-0 opacity-10">
          <article className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-500 blur-[140px]" />
          <article className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500 blur-[140px]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center rounded-full border border-orange-500/30 bg-orange-500/10 px-5 py-2 text-sm font-medium text-orange-400">
            Ready To Grow?
          </span>

          <h2
            id="cta-heading"
            className="mt-8 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-6xl"
          >
            Let&apos;s Build Your
            <span className="text-orange-500"> Next Success Story</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-9 md:text-xl">
            Whether you&apos;re launching a startup, scaling an established
            business, or planning a nationwide advertising campaign, Union
            Add combines creative thinking, digital innovation, strategic
            media planning, and measurable execution to deliver marketing
            that drives real business growth.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-5">
            <Link
              href="https://wa.me/923211234560?text=Hi%20Union%20Add,%20I%20would%20like%20a%20free%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get a free consultation on WhatsApp"
              title="Get a free consultation on WhatsApp"
              className="inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-orange-600 sm:w-auto"
            >
              Get Free Consultation
            </Link>

            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-8 py-4 text-white transition-all duration-300 hover:bg-white hover:text-black sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}