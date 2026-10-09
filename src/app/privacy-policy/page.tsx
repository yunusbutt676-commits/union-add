
import Link from "next/link";
import {
  ShieldCheck,
  Database,
  Mail,
  ArrowRight,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Union Add collects, uses and protects your information across our website, applications and digital services.",
};

const informationCards = [
  {
    title: "Personal Information",
    icon: ShieldCheck,
    items: [
      "Full Name",
      "Company Name",
      "Email Address",
      "Phone Number",
      "Country",
    ],
  },
  {
    title: "Project Information",
    icon: Database,
    items: [
      "Requested Service",
      "Budget",
      "Timeline",
      "Project Description",
    ],
  },
  {
    title: "Communication",
    icon: Mail,
    items: [
      "Quote Requests",
      "Email Replies",
      "WhatsApp Communication",
      "Customer Support",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="min-w-0 overflow-x-clip bg-white text-black dark:bg-[#070707] dark:text-white">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#071A2E]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#071A2E] via-[#0A2340] to-black opacity-95"
          />

          <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 md:py-28 lg:px-8">
            <span className="inline-flex max-w-full items-center rounded-full border border-orange-500/30 bg-orange-500/15 px-4 py-2 text-xs font-medium text-orange-400 sm:px-5 sm:text-sm">
              Privacy &amp; Security
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-white sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl">
              Privacy{" "}
              <span className="text-orange-500">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-gray-300 sm:mt-8 sm:text-base sm:leading-8 md:text-xl md:leading-9">
              At Union Add, protecting your privacy is important to us.
              This policy explains what information we collect,
              how we use it, and how we keep it secure whenever
              you use our website, submit a quote request,
              or communicate with our team.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 active:bg-orange-700 sm:px-8 sm:py-4 sm:text-base"
              >
                Contact Us
              </Link>

              <Link
                href="/get-a-quote"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 active:bg-white/20 sm:px-8 sm:py-4 sm:text-base"
              >
                Request a Quote
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="shrink-0"
                />
              </Link>
            </div>

            <p className="mt-8 text-xs text-gray-400 sm:mt-10 sm:text-sm">
              Last Updated: July 2026
            </p>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="py-14 sm:py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Your Privacy Matters
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 md:text-lg md:leading-9 dark:text-gray-400">
                Union Add respects your privacy and is committed to
                protecting the information you share with us.
                We only collect information necessary to provide
                advertising, branding, marketing, web development,
                mobile application development and customer support
                services.
              </p>
            </div>
          </div>
        </section>

        {/* INFORMATION WE COLLECT */}
        <section className="pb-14 sm:pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold leading-tight sm:mb-10 sm:text-4xl md:mb-14">
              Information We Collect
            </h2>

            <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
              {informationCards.map((card) => {
                const Icon = card.icon;

                return (
                  <article
                    key={card.title}
                    className="flex h-full min-w-0 flex-col rounded-2xl border border-zinc-200 bg-white p-5 transition-[border-color,transform,box-shadow] duration-300 sm:rounded-3xl sm:p-7 lg:p-8 dark:border-zinc-800 dark:bg-[#111] [@media(hover:hover)]:hover:-translate-y-1 [@media(hover:hover)]:hover:border-orange-500 [@media(hover:hover)]:hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
                  >
                    <Icon
                      aria-hidden="true"
                      className="h-9 w-9 shrink-0 text-orange-500 sm:h-10 sm:w-10"
                    />

                    <h3 className="mt-5 text-xl font-semibold leading-snug sm:mt-6 sm:text-2xl">
                      {card.title}
                    </h3>

                    <ul className="mt-5 space-y-3 text-sm leading-6 text-gray-600 sm:mt-6 sm:text-base dark:text-gray-400">
                      {card.items.map((item) => (
                        <li
                          key={item}
                          className="flex min-w-0 items-start gap-3"
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
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* HOW WE USE INFORMATION */}
        <section className="pb-14 sm:pb-16 md:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="min-w-0 rounded-2xl bg-[#071A2E] p-5 text-white sm:rounded-3xl sm:p-8 md:rounded-[36px] md:p-12">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                How We Use Your Information
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-300 sm:mt-8 sm:text-base sm:leading-8 md:text-lg md:leading-9">
                The information you provide is used only to deliver
                our services, respond to quote requests,
                communicate with you regarding your project,
                prepare proposals, improve customer support,
                and provide updates about requested services.
                We do not sell or rent your personal information
                to third parties.
              </p>
            </div>
          </div>
        </section>

        {/* DATA SECURITY AND THIRD-PARTY SERVICES */}
        <section className="pb-14 sm:pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8">
              <article className="flex h-full min-w-0 flex-col rounded-2xl border border-zinc-200 bg-white p-5 sm:rounded-3xl sm:p-8 lg:p-10 dark:border-zinc-800 dark:bg-[#111]">
                <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                  Data Security
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 dark:text-gray-400">
                  Union Add uses industry-standard security practices to
                  protect your personal information. Data submitted
                  through our website is stored securely and access is
                  limited to authorized personnel only.
                </p>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-600 sm:text-base dark:text-gray-400">
                  {[
                    "Secure website connection (HTTPS)",
                    "Restricted internal access",
                    "Protected databases",
                    "Regular security monitoring",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex min-w-0 items-start gap-3"
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
              </article>

              <article className="flex h-full min-w-0 flex-col rounded-2xl border border-zinc-200 bg-white p-5 sm:rounded-3xl sm:p-8 lg:p-10 dark:border-zinc-800 dark:bg-[#111]">
                <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
                  Third-Party Services
                </h2>

                <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 dark:text-gray-400">
                  We only use trusted third-party services necessary to
                  operate our bussiness and communicate with clients.
                </p>

                <ul className="mt-6 space-y-3 text-sm leading-6 text-gray-600 sm:text-base dark:text-gray-400">
                  {[
                    "Email delivery services",
                    "WhatsApp communication",
                    "Secure cloud hosting",
                    "Database services",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex min-w-0 items-start gap-3"
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
              </article>
            </div>
          </div>
        </section>

        {/* YOUR RIGHTS */}
        <section className="pb-14 sm:pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="min-w-0 rounded-2xl border border-orange-200 bg-orange-50 p-5 sm:rounded-3xl sm:p-8 md:rounded-[36px] md:p-12 dark:border-zinc-800 dark:bg-[#111]">
              <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
                Your Rights
              </h2>

              <p className="mt-5 text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 md:text-lg md:leading-9 dark:text-gray-400">
                You have the right to request access to the personal
                information we hold about you, request corrections,
                request deletion of your information, or contact us
                regarding any privacy concern at any time.
              </p>
            </div>
          </div>
        </section>

        {/* POLICY UPDATES */}
        <section className="pb-14 sm:pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
              Changes to this Privacy Policy
            </h2>

            <p className="mt-5 max-w-4xl text-sm leading-7 text-gray-600 sm:mt-6 sm:text-base sm:leading-8 dark:text-gray-400">
              We may update this Privacy Policy from time to time to
              reflect changes in our services, legal requirements, or
              business practices. Any updates will be published on this
              page with the revised &quot;Last Updated&quot; date.
            </p>
          </div>
        </section>

        {/* CONTACT */}
        <section className="pb-16 sm:pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="min-w-0 rounded-2xl bg-[#071A2E] p-5 text-center text-white sm:rounded-3xl sm:p-9 md:rounded-[40px] md:p-14">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Contact Union Add
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-gray-300 sm:mt-6 sm:text-base sm:leading-8">
                If you have any questions regarding this Privacy Policy
                or the way your information is handled, please contact
                us. We will be happy to assist you.
              </p>

              <div className="mt-8 space-y-4 text-sm leading-7 sm:mt-10 sm:text-lg">
                <p className="break-words">
                  📧 Email:{" "}
                  <strong className="break-all sm:break-normal">
                    union.add@gmail.com
                  </strong>
                </p>

                <p className="break-words">
                  🌐 Website:{" "}
                  <strong>www.unionadd.com</strong>
                </p>

                <p>
                  📍 Lahore, Punjab, Pakistan
                </p>
              </div>

              <Link
                href="/contact"
                className="mt-8 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 active:bg-orange-700 sm:mt-10 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
              >
                Contact Us
                <ArrowRight
                  size={18}
                  aria-hidden="true"
                  className="shrink-0"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
