import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms of Service | Union Add",
  description:
    "Read the Terms of Service for Union Add. Learn about our services, quotations, payments, intellectual property, website usage, and legal responsibilities.",
};

export default function TermsOfServicePage() {
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

  return (
    <>
      <Navbar />

      <main className="bg-white dark:bg-[#070707] text-black dark:text-white min-h-screen">
      <div className="mt-12 rounded-3xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-[#111] p-8 shadow-sm">
        <div className="mb-6">
          <div className="text-center mb-8">
            <p className="mt-10 text-orange-500 uppercase tracking-[3px] text-sm font-semibold">
              Quick Navigation
            </p>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold">
              Contents
            </h2>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-zinc-800 my-6"></div>

        <div className="grid md:grid-cols-2 gap-4">
          {sections.map((section, index) => (
            <a
              key={section.title}
              href={`#${section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-gray-200
                dark:border-zinc-700
                px-5
                py-4
                hover:border-orange-500
                hover:bg-orange-50
                dark:hover:bg-[#1a1a1a]
                transition-all
                duration-300
                group
              "
            >
              <span className="font-medium">
                {section.title}
              </span>

              <span className="text-orange-500 group-hover:translate-x-1 transition">
                →
              </span>
            </a>
          ))}
        </div>
      </div>
        <section className="max-w-5xl mx-auto px-6 py-24">

          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="mt-12 uppercase tracking-[4px] text-orange-500 font-semibold">
              Legal Information
            </p>

            <h1 className="mt-5 text-5xl md:text-6xl font-bold">
              Terms of Service
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              These Terms of Service explain how you may use the Union Add website,
              our advertising services, and your rights and responsibilities when
              working with us.
            </p>

            <div className="mt-8 inline-flex items-center rounded-full bg-orange-100 dark:bg-orange-900/20 px-5 py-2 text-sm font-medium text-orange-600">
              Last Updated • July 2026
            </div>
          </div>

          <div className="space-y-8">
            {sections.map((section) => (
              <div
                id={section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
                key={section.title}
                className="
                  rounded-3xl
                  border
                  border-gray-200
                  dark:border-zinc-800
                  bg-white
                  dark:bg-[#111]
                  p-8
                  shadow-sm
                  hover:shadow-xl
                  hover:border-orange-500
                  transition-all
                  duration-300
                "
              >
                <h2 className="text-2xl font-semibold mb-4">
                  {section.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-400 leading-8">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

        {/* Contact */}
        <div className="
          mt-20
          rounded-[32px]
          bg-gradient-to-r
          from-orange-500
          via-orange-600
          to-orange-700
          text-white
          p-12
          text-center
          shadow-2xl
        ">
          <h2 className="text-3xl font-bold mb-4">
            Questions About These Terms?
          </h2>

          <p className="max-w-2xl mx-auto text-orange-100 leading-8">
            If you have any questions regarding these Terms of Service or our
            professional services, please contact the Union Add team. We'll be
            happy to assist you.
          </p>

          <div className="mt-8 space-y-2">
            <p>
              <strong>Email:</strong> info@unionadd.com
            </p>

            <p>
              <strong>Phone:</strong> +92 321 1234560
            </p>

            <p>
              <strong>Location:</strong> Lahore, Pakistan
            </p>
          </div>
        </div>

      </section>
    </main>

    <Footer />
  </>
);
}