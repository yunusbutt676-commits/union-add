"use client";

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
    <main className="bg-white dark:bg-[#070707] text-black dark:text-white">

      {/* Hero */}
      <section  aria-labelledby="contact-heading" className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="mt-10 uppercase tracking-[4px] text-orange-500 font-medium">
            Contact Us
          </p>

          <h1  id="contact-heading" className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
            Let's Build Something
            <span className="text-orange-500"> Amazing</span>
          </h1>

          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Whether you're launching a new brand, planning a marketing campaign,
            or building a digital product, our team is ready to help.
          </p>

        </div>
      </section>

      {/* Contact Info */}
      <section aria-labelledby="contact-information" className="pb-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <h2
            id="contact-information"
            className="sr-only"
          >
            Contact Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {/* Office */}
            <article className="rounded-3xl border border-gray-200 dark:border-zinc-800 p-8 hover:border-orange-500 transition">
              <HiOutlineMapPin aria-hidden="true" className="text-4xl text-orange-500 mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Office
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                Lahore, Pakistan
              </p>
            </article>

            {/* Email */}
            <article className="rounded-3xl border border-gray-200 dark:border-zinc-800 p-8 hover:border-orange-500 transition">
              <HiOutlineEnvelope aria-hidden="true" className="text-4xl text-orange-500 mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Email
              </h3>

              <a
                href="mailto:info@unionadd.com"
                className="text-gray-600 dark:text-gray-400 hover:text-orange-500"
              >
                info@unionadd.com
              </a>
            </article>

            {/* Phone */}
            <article className="rounded-3xl border border-gray-200 dark:border-zinc-800 p-8 hover:border-orange-500 transition">
              <HiOutlinePhone aria-hidden="true" className="text-4xl text-orange-500 mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Phone
              </h3>

              <a
                href="https://wa.me/923211234560?text=Hi%20Union%20Add."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Union Add on WhatsApp"
                title="Chat with Union Add on WhatsApp"
                className="inline-flex items-center justify-center text-green-500 hover:text-green-600 transition-colors duration-300"
              >
                <FaWhatsapp className="h-6 w-6" aria-hidden="true" />
                 <b className="ml-2">+92-321-1234560</b>
              </a>

            </article>

            {/* Hours */}
            <article className="rounded-3xl border border-gray-200 dark:border-zinc-800 p-8 hover:border-orange-500 transition">
              <HiOutlineClock aria-hidden="true" className="text-4xl text-orange-500 mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Working Hours
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                Monday – Sunday
                <br />
                9:00 AM – 10:00 PM
              </p>
            </article>

          </div>

        </div>
      </section>
            
      {/* Google Map */}
      <section className="pb-24" aria-labelledby="office-location">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-12 text-center">
            <p className="uppercase tracking-[4px] text-orange-500">
              Visit Us
            </p>

            <h2 id="office-location" className="mt-4 text-3xl md:text-5xl font-bold">
              Find Our Office
            </h2>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-gray-200 dark:border-zinc-800 shadow-xl">

            <iframe
              title="Union Add Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.9266474565698!2d74.34239507442553!3d31.52617454685738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904f0efae3b29%3A0x32318d019ebcefea!2sMiraj%20Plaza!5e0!3m2!1sen!2s!4v1785494111549!5m2!1sen!2s"
              width="100%"
              height="500"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="border-0"
            />

          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="pb-24" aria-labelledby="why-union-add">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <p className="uppercase tracking-[4px] text-orange-500">
              Why Union Add
            </p>

            <h2 id="why-union-add" className="mt-4 text-3xl md:text-5xl font-bold">
              Trusted Since 2006
            </h2>

            <p className="mt-5 text-gray-600 dark:text-gray-400">
              We combine creativity, technology and strategy to deliver
              measurable business growth for brands across Pakistan.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8" role="list">

            <article role="listitem" className="rounded-3xl border border-gray-200 dark:border-zinc-800 p-8 hover:border-orange-500 transition">
              <div className="text-5xl mb-5">⚡</div>

              <h3 className="text-2xl font-semibold mb-4">
                Fast Response
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                We respond quickly to enquiries and keep communication clear
                throughout every project.
              </p>
            </article>

            <article role="listitem" className="rounded-3xl border border-gray-200 dark:border-zinc-800 p-8 hover:border-orange-500 transition">
              <div className="text-5xl mb-5">🎯</div>

              <h3 className="text-2xl font-semibold mb-4">
                Strategic Solutions
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                Every campaign is designed around your business goals to
                maximize return on investment.
              </p>
            </article>

            <article role="listitem" className="rounded-3xl border border-gray-200 dark:border-zinc-800 p-8 hover:border-orange-500 transition">
              <div aria-hidden="true" className="text-5xl mb-5">🤝</div>

              <h3 className="text-2xl font-semibold mb-4">
                Long-Term Partnership
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                We work as an extension of your team, building relationships
                based on trust, quality and measurable results.
              </p>
            </article>

          </div>

        </div>
      </section>
            {/* CTA */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">

          <div
            className="
              rounded-[40px]
              bg-gradient-to-r
              from-orange-500
              via-orange-600
              to-orange-700
              text-white
              px-8
              py-16
              md:px-16
              md:py-20
              text-center
            "
          >

            <p className="uppercase tracking-[4px] text-orange-100">
              Ready to Grow?
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">
              Let's Create Something
              <br />
              Extraordinary Together
            </h2>

            <p className="mt-6 max-w-2xl mx-auto text-orange-100 text-lg">
              Whether you need advertising, branding, digital marketing,
              web development or media buying, Union Add is ready to
              turn your vision into results.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

              <Link
                href="/get-a-quote"
                prefetch
                aria-label="Request a project quote"
                className="
                  px-8
                  py-4
                  rounded-full
                  bg-white
                  text-black
                  font-semibold
                  hover:bg-gray-100
                  transition
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
                  items-center
                  justify-center
                  px-8
                  py-4
                  rounded-full
                  border
                  border-white
                  font-semibold
                  hover:bg-white
                  hover:text-black
                  transition-all
                  duration-300
                  focus:outline-none
                  focus:ring-2
                  focus:ring-white
                  focus:ring-offset-2
                  focus:ring-offset-black
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