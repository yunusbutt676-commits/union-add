
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms of Service",
  description:
    "Read the Terms of Service for Union Add. Learn about our services, quotations, payments, intellectual property, website usage, and legal responsibilities.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using the Union Add website, you agree to be bound by these Terms of Service and all applicable laws. If you do not agree with these terms, please discontinue the use of our website and services.",
  },
  {
    title: "2. About Union Add",
    content:
      "Union Add is a full-service advertising agency established in 2006. We provide branding, advertising, digital marketing, media buying, website development, mobile application development, creative design, printing, public relations, event management, and related marketing solutions across Pakistan.",
  },
  {
    title: "3. Website Usage",
    content:
      "You agree to use this website only for lawful purposes. You must not attempt to gain unauthorized access, distribute harmful software, interfere with website operations, or misuse any information available on this website.",
  },
  {
    title: "4. Quotations & Services",
    content:
      "Submitting a 'Get a Quote' or contact request does not create a legally binding agreement. Every project begins only after both parties approve the proposal, pricing, scope of work, and timeline in writing.",
  },
  {
    title: "5. Payments",
    content:
      "Project fees, payment schedules, and delivery milestones are agreed separately for each client. Delayed payments may result in delays or suspension of project work until outstanding balances are cleared.",
  },
  {
    title: "6. Intellectual Property",
    content:
      "Unless otherwise agreed in writing, all website content, logos, branding, graphics, designs, software, and creative materials remain the intellectual property of Union Add. Unauthorized copying, reproduction, or distribution is prohibited.",
  },
  {
    title: "7. Third-Party Services",
    content:
      "Our projects may integrate third-party platforms including Google, Meta, payment gateways, hosting providers, analytics services, and social media platforms. Union Add is not responsible for interruptions or changes made by these third-party providers.",
  },
  {
    title: "8. Limitation of Liability",
    content:
      "Union Add shall not be liable for indirect, incidental, special, or consequential damages resulting from the use of this website or our services. We make every effort to provide accurate information but cannot guarantee uninterrupted or error-free website operation.",
  },
  {
    title: "9. Privacy",
    content:
      "Your use of this website is also governed by our Privacy Policy. By using this website or submitting a quotation request, you consent to the collection and processing of information as described in our Privacy Policy.",
  },
  {
    title: "10. Changes to These Terms",
    content:
      "Union Add reserves the right to update or modify these Terms of Service at any time. Any revisions become effective immediately after being published on this website. Continued use of the website indicates your acceptance of the updated terms.",
  },
];

function getSectionId(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <main
        className="
          min-h-screen
          min-w-0
          overflow-x-clip
          bg-white
          text-black
          dark:bg-[#070707]
          dark:text-white
        "
      >
        {/* QUICK NAVIGATION */}
        <div
          className="
            mx-auto
            w-full
            max-w-7xl
            mt-5
            px-4
            pt-20
            sm:px-6
            sm:pt-24
            lg:px-8
          "
        >
          <nav
            aria-label="Terms of Service quick navigation"
            className="
              rounded-2xl
              border
              border-gray-200
              bg-white
              p-4
              shadow-sm
              sm:rounded-3xl
              sm:p-6
              md:p-8
              dark:border-zinc-800
              dark:bg-[#111]
            "
          >
            <div className="mb-6 text-center sm:mb-8">
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[2px]
                  text-orange-500
                  sm:text-sm
                  sm:tracking-[3px]
                "
              >
                Quick Navigation
              </p>

              <h2
                className="
                  mt-3
                  text-2xl
                  font-bold
                  leading-tight
                  sm:mt-4
                  sm:text-3xl
                  md:text-4xl
                "
              >
                Contents
              </h2>
            </div>

            <div
              aria-hidden="true"
              className="my-6 border-t border-gray-200 dark:border-zinc-800"
            />

            <div
              className="
                grid
                grid-cols-1
                gap-3
                sm:grid-cols-2
                sm:gap-4
              "
            >
              {sections.map((section) => (
                <a
                  key={section.title}
                  href={`#${getSectionId(section.title)}`}
                  className="
                    group
                    flex
                    min-h-14
                    min-w-0
                    items-center
                    justify-between
                    gap-3
                    rounded-xl
                    border
                    border-gray-200
                    px-4
                    py-4
                    text-sm
                    transition-all
                    duration-300
                    hover:border-orange-500
                    hover:bg-orange-50
                    focus-visible:outline-2
                    focus-visible:outline-offset-2
                    focus-visible:outline-orange-500
                    active:bg-orange-100
                    sm:px-5
                    sm:text-base
                    dark:border-zinc-700
                    dark:hover:bg-[#1a1a1a]
                    dark:active:bg-[#222]
                    motion-reduce:transition-none
                  "
                >
                  <span className="min-w-0 font-medium leading-6">
                    {section.title}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      shrink-0
                      text-lg
                      text-orange-500
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    →
                  </span>
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* TERMS CONTENT */}
        <section
          aria-labelledby="terms-heading"
          className="
            mx-auto
            w-full
            max-w-5xl
            px-4
            pb-16
            pt-14
            sm:px-6
            sm:pb-20
            sm:pt-16
            md:py-24
            lg:px-8
          "
        >
          {/* PAGE INTRODUCTION */}
          <header
            className="
              mx-auto
              mb-10
              max-w-4xl
              text-center
              sm:mb-12
              md:mb-16
            "
          >
            <p
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[2px]
                text-orange-500
                sm:text-sm
                sm:tracking-[4px]
              "
            >
              Legal Information
            </p>

            <h1
              id="terms-heading"
              className="
                mt-5
                text-3xl
                font-bold
                leading-tight
                tracking-tight
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
              "
            >
              Terms of Service
            </h1>

            <p
              className="
                mx-auto
                mt-5
                max-w-3xl
                text-sm
                leading-7
                text-gray-600
                sm:mt-6
                sm:text-base
                sm:leading-8
                md:text-lg
                dark:text-gray-400
              "
            >
              These Terms of Service explain how you may use the
              Union Add website, our advertising services, and
              your rights and responsibilities when working
              with us.
            </p>

            <div
              className="
                mt-6
                inline-flex
                max-w-full
                items-center
                justify-center
                rounded-full
                bg-orange-100
                px-4
                py-2
                text-xs
                font-medium
                text-orange-600
                sm:mt-8
                sm:px-5
                sm:text-sm
                dark:bg-orange-900/20
                dark:text-orange-400
              "
            >
              Last Updated • July 2026
            </div>
          </header>

          {/* LEGAL SECTION CARDS */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {sections.map((section) => (
              <article
                id={getSectionId(section.title)}
                key={section.title}
                className="
                  min-w-0
                  scroll-mt-24
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-[border-color,box-shadow]
                  duration-300
                  hover:border-orange-500
                  hover:shadow-xl
                  sm:rounded-3xl
                  sm:p-7
                  md:p-8
                  dark:border-zinc-800
                  dark:bg-[#111]
                  dark:hover:border-orange-500
                  motion-reduce:transition-none
                "
              >
                <h2
                  className="
                    mb-3
                    text-xl
                    font-semibold
                    leading-snug
                    sm:mb-4
                    sm:text-2xl
                  "
                >
                  {section.title}
                </h2>

                <p
                  className="
                    text-sm
                    leading-7
                    text-gray-600
                    sm:text-base
                    sm:leading-8
                    dark:text-gray-400
                  "
                >
                  {section.content}
                </p>
              </article>
            ))}
          </div>

          {/* CONTACT PANEL */}
          <div
            className="
              mt-12
              min-w-0
              rounded-2xl
              bg-gradient-to-r
              from-orange-500
              via-orange-600
              to-orange-700
              p-5
              text-center
              text-white
              shadow-2xl
              sm:mt-16
              sm:rounded-3xl
              sm:p-8
              md:mt-20
              md:rounded-[32px]
              md:p-12
            "
          >
            <h2
              className="
                mb-4
                text-2xl
                font-bold
                leading-tight
                sm:text-3xl
              "
            >
              Questions About These Terms?
            </h2>

            <p
              className="
                mx-auto
                max-w-2xl
                text-sm
                leading-7
                text-orange-100
                sm:text-base
                sm:leading-8
              "
            >
              If you have any questions regarding these Terms
              of Service or our professional services, please
              contact the Union Add team. We&apos;ll be
              happy to assist you.
            </p>

            <div
              className="
                mt-6
                space-y-3
                text-sm
                leading-7
                sm:mt-8
                sm:text-base
              "
            >
              <p className="break-words">
                <strong>Email:</strong>{" "}
                <span className="break-all sm:break-normal">
                  union.add@gmail.com
                </span>
              </p>

              <p className="break-words">
                <strong>Phone:</strong>{" "}
                +92 321 1234560
              </p>

              <p className="break-words">
                <strong>Location:</strong>{" "}
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
