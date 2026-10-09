
import Link from "next/link";

import {
  HiOutlineMapPin,
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineClock,
} from "react-icons/hi2";

import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <main className="min-h-screen w-full min-w-0 overflow-x-clip bg-white text-black dark:bg-[#070707] dark:text-white">

      {/* HERO */}
      <section
        aria-labelledby="contact-heading"
        className="py-14 sm:py-18 md:py-24"
      >
        <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">

          <p className="mt-10 text-xs font-medium uppercase tracking-[3px] text-orange-500 sm:mt-10 sm:text-sm sm:tracking-[4px]">
            Contact Us
          </p>

          <h1
            id="contact-heading"
            className="mx-auto mt-5 max-w-5xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Let&apos;s Build Something
            <span className="text-orange-500"> Amazing</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base md:text-lg dark:text-gray-400">
            Whether you&apos;re launching a new brand,
            planning a marketing campaign, or building
            a digital product, our team is ready to help.
          </p>

        </div>
      </section>

      {/* CONTACT INFORMATION */}
      <section
        aria-labelledby="contact-information"
        className="pb-14 sm:pb-16 md:pb-20"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <h2 id="contact-information" className="sr-only">
            Contact Information
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-4">

            {/* OFFICE */}
            <article className="min-w-0 rounded-3xl border border-gray-200 p-6 transition-colors duration-300 hover:border-orange-500 sm:p-8 dark:border-zinc-800 dark:hover:border-orange-500">

              <HiOutlineMapPin
                aria-hidden="true"
                className="mb-5 h-10 w-10 text-orange-500"
              />

              <h3 className="mb-3 text-xl font-semibold">
                Office
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">
                Lahore, Pakistan
              </p>

            </article>

            {/* EMAIL */}
            <article className="min-w-0 rounded-3xl border border-gray-200 p-6 transition-colors duration-300 hover:border-orange-500 sm:p-8 dark:border-zinc-800 dark:hover:border-orange-500">

              <HiOutlineEnvelope
                aria-hidden="true"
                className="mb-5 h-10 w-10 text-orange-500"
              />

              <h3 className="mb-3 text-xl font-semibold">
                Email
              </h3>

              <a
                href="mailto:info@unionadd.com"
                className="inline-block max-w-full break-all rounded-sm text-sm leading-7 text-gray-600 transition-colors hover:text-orange-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 sm:text-base dark:text-gray-400 dark:hover:text-orange-400"
              >
                union.add@gmail.com
              </a>

            </article>

            {/* PHONE */}
            <article className="min-w-0 rounded-3xl border border-gray-200 p-6 transition-colors duration-300 hover:border-orange-500 sm:p-8 dark:border-zinc-800 dark:hover:border-orange-500">

              <HiOutlinePhone
                aria-hidden="true"
                className="mb-5 h-10 w-10 text-orange-500"
              />

              <h3 className="mb-3 text-xl font-semibold">
                Phone
              </h3>

              <a
                href="https://wa.me/923211234560?text=Hi%20Union%20Add."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Union Add on WhatsApp"
                title="Chat with Union Add on WhatsApp"
                className="inline-flex min-h-11 max-w-full items-center gap-2 rounded-sm text-sm font-semibold text-green-500 transition-colors duration-300 hover:text-green-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-500 sm:text-base"
              >
                <FaWhatsapp
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0"
                />

                <span className="break-words">
                  +92-321-1234560
                </span>
              </a>

            </article>

            {/* WORKING HOURS */}
            <article className="min-w-0 rounded-3xl border border-gray-200 p-6 transition-colors duration-300 hover:border-orange-500 sm:p-8 dark:border-zinc-800 dark:hover:border-orange-500">

              <HiOutlineClock
                aria-hidden="true"
                className="mb-5 h-10 w-10 text-orange-500"
              />

              <h3 className="mb-3 text-xl font-semibold">
                Working Hours
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">
                Monday – Sunday
                <br />
                9:00 AM – 10:00 PM
              </p>

            </article>

          </div>
        </div>
      </section>

      {/* GOOGLE MAP */}
      <section
        aria-labelledby="office-location"
        className="pb-16 sm:pb-20 md:pb-24"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mb-8 text-center sm:mb-12">

            <p className="text-xs uppercase tracking-[3px] text-orange-500 sm:text-base sm:tracking-[4px]">
              Visit Us
            </p>

            <h2
              id="office-location"
              className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl"
            >
              Find Our Office
            </h2>

          </div>

          <div className="w-full overflow-hidden rounded-3xl border border-gray-200 shadow-xl dark:border-zinc-800">

            <iframe
              title="Union Add Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.9266474565698!2d74.34239507442553!3d31.52617454685738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f0efae3b29%3A0x32318d019ebcefea!2sMiraj%20Plaza!5e0!3m2!1sen!2s!4v1785494111549!5m2!1sen!2s"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[280px] w-full border-0 sm:h-[360px] md:h-[440px] lg:h-[500px]"
            />

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        aria-labelledby="why-union-add"
        className="pb-16 sm:pb-20 md:pb-24"
      >
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16">

            <p className="text-xs uppercase tracking-[3px] text-orange-500 sm:text-base sm:tracking-[4px]">
              Why Union Add
            </p>

            <h2
              id="why-union-add"
              className="mt-4 text-2xl font-bold leading-tight sm:text-3xl md:text-5xl"
            >
              Trusted Since 2006
            </h2>

            <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">
              We combine creativity, technology and strategy
              to deliver measurable business growth for
              brands across Pakistan.
            </p>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:gap-8">

            {/* FAST RESPONSE */}
            <article className="min-w-0 rounded-3xl border border-gray-200 p-6 transition-colors duration-300 hover:border-orange-500 sm:p-8 dark:border-zinc-800 dark:hover:border-orange-500">

              <div aria-hidden="true" className="mb-5 text-5xl">
                ⚡
              </div>

              <h3 className="mb-4 text-xl font-semibold sm:text-2xl">
                Fast Response
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">
                We respond quickly to enquiries and keep
                communication clear throughout every project.
              </p>

            </article>

            {/* STRATEGIC SOLUTIONS */}
            <article className="min-w-0 rounded-3xl border border-gray-200 p-6 transition-colors duration-300 hover:border-orange-500 sm:p-8 dark:border-zinc-800 dark:hover:border-orange-500">

              <div aria-hidden="true" className="mb-5 text-5xl">
                🎯
              </div>

              <h3 className="mb-4 text-xl font-semibold sm:text-2xl">
                Strategic Solutions
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">
                Every campaign is designed around your
                business goals to maximize return on investment.
              </p>

            </article>

            {/* LONG-TERM PARTNERSHIP */}
            <article className="min-w-0 rounded-3xl border border-gray-200 p-6 transition-colors duration-300 hover:border-orange-500 sm:p-8 dark:border-zinc-800 dark:hover:border-orange-500">

              <div aria-hidden="true" className="mb-5 text-5xl">
                🤝
              </div>

              <h3 className="mb-4 text-xl font-semibold sm:text-2xl">
                Long-Term Partnership
              </h3>

              <p className="text-sm leading-7 text-gray-600 sm:text-base dark:text-gray-400">
                We work as an extension of your team,
                building relationships based on trust,
                quality and measurable results.
              </p>

            </article>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20 md:pb-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">

          <div
            className="
              rounded-3xl
              bg-gradient-to-r
              from-orange-500
              via-orange-600
              to-orange-700
              px-5
              py-12
              text-center
              text-white
              sm:rounded-[40px]
              sm:px-8
              sm:py-16
              md:px-16
              md:py-20
            "
          >

            <p className="text-xs uppercase tracking-[3px] text-orange-100 sm:text-base sm:tracking-[4px]">
              Ready to Grow?
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">
              Let&apos;s Create Something
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Extraordinary Together
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-orange-100 sm:text-base md:text-lg">
              Whether you need advertising, branding,
              digital marketing, web development or media
              buying, Union Add is ready to turn your
              vision into results.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">

              <Link
                href="/get-a-quote"
                prefetch
                aria-label="Request a project quote"
                className="
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  px-8
                  py-4
                  text-center
                  font-semibold
                  text-black
                  transition-colors
                  hover:bg-gray-100
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                  sm:w-auto
                "
              >
                Request a Quote
              </Link>

              <a
                href="https://wa.me/923211234560?text=Hello%20Union%20Add%2C%20I'm%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Union Add on WhatsApp"
                title="Chat with Union Add on WhatsApp"
                className="
                  inline-flex
                  min-h-12
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white
                  px-8
                  py-4
                  text-center
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:text-black
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-white
                  sm:w-auto
                "
              >
                Call Us
              </a>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
