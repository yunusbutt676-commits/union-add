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
  title: "Privacy Policy | Union Add",
  description:
    "Learn how Union Add collects, uses and protects your information across our website, applications and digital services.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
    <Navbar />
    <main className="bg-white dark:bg-[#070707] text-black dark:text-white">

      {/* HERO */}

      <section className="relative overflow-hidden bg-[#071A2E]">

        <div className="absolute inset-0 bg-gradient-to-br from-[#071A2E] via-[#0A2340] to-black opacity-95" />

        <div className="relative max-w-7xl mx-auto px-6 py-28">

          <span className="inline-flex items-center rounded-full bg-orange-500/15 border border-orange-500/30 px-5 py-2 text-sm text-orange-400">
            Privacy & Security
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight text-white">
            Privacy
            <span className="text-orange-500">
              {" "}Policy
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-300 leading-9">
            At Union Add, protecting your privacy is important to us.
            This policy explains what information we collect,
            how we use it, and how we keep it secure whenever
            you use our website, submit a quote request,
            or communicate with our team.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/contact"
              className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold text-white transition"
            >
              Contact Us
            </Link>

            <Link
              href="/get-a-quote"
              className="border border-white/20 hover:bg-white hover:text-black px-8 py-4 rounded-full transition flex items-center gap-2"
            >
              Request a Quote
              <ArrowRight size={18} />
            </Link>

          </div>

          <p className="mt-10 text-gray-400">
            Last Updated: July 2026
          </p>

        </div>

      </section>

      {/* INTRO */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-4xl">

            <h2 className="text-4xl font-bold">
              Your Privacy Matters
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-9 text-lg">
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

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-14">
            Information We Collect
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">

            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8">

              <ShieldCheck
                className="text-orange-500"
                size={42}
              />

              <h3 className="mt-6 text-2xl font-semibold">
                Personal Information
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">

                <li>• Full Name</li>
                <li>• Company Name</li>
                <li>• Email Address</li>
                <li>• Phone Number</li>
                <li>• Country</li>

              </ul>

            </div>

            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8">

              <Database
                className="text-orange-500"
                size={42}
              />

              <h3 className="mt-6 text-2xl font-semibold">
                Project Information
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">

                <li>• Requested Service</li>
                <li>• Budget</li>
                <li>• Timeline</li>
                <li>• Project Description</li>

              </ul>

            </div>

            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 p-8">

              <Mail
                className="text-orange-500"
                size={42}
              />

              <h3 className="mt-6 text-2xl font-semibold">
                Communication
              </h3>

              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">

                <li>• Quote Requests</li>
                <li>• Email Replies</li>
                <li>• WhatsApp Communication</li>
                <li>• Customer Support</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* HOW WE USE */}

      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-[36px] bg-[#071A2E] text-white p-12">

            <h2 className="text-4xl font-bold">
              How We Use Your Information
            </h2>

            <p className="mt-8 text-gray-300 leading-9 text-lg">
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
      
            {/* DATA SECURITY */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-8">

            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 p-10">

              <h2 className="text-3xl font-bold">
                Data Security
              </h2>

              <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8">
                Union Add uses industry-standard security practices to
                protect your personal information. Data submitted
                through our website is stored securely and access is
                limited to authorized personnel only.
              </p>

              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                <li>• Secure website connection (HTTPS)</li>
                <li>• Restricted internal access</li>
                <li>• Protected databases</li>
                <li>• Regular security monitoring</li>
              </ul>

            </div>

            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 p-10">

              <h2 className="text-3xl font-bold">
                Third-Party Services
              </h2>

              <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8">
                We only use trusted third-party services necessary to
                operate our bussiness and communicate with clients.
              </p>

              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                <li>• Email delivery services</li>
                <li>• WhatsApp communication</li>
                <li>• Secure cloud hosting</li>
                <li>• Database services</li>
              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* YOUR RIGHTS */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-[36px] bg-orange-50 dark:bg-[#111] border border-orange-200 dark:border-zinc-800 p-12">

            <h2 className="text-4xl font-bold">
              Your Rights
            </h2>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-9 text-lg">
              You have the right to request access to the personal
              information we hold about you, request corrections,
              request deletion of your information, or contact us
              regarding any privacy concern at any time.
            </p>

          </div>

        </div>

      </section>

      {/* POLICY UPDATES */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold">
            Changes to this Privacy Policy
          </h2>

          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8">
            We may update this Privacy Policy from time to time to
            reflect changes in our services, legal requirements, or
            business practices. Any updates will be published on this
            page with the revised "Last Updated" date.
          </p>

        </div>

      </section>

      {/* CONTACT */}

      <section className="pb-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="rounded-[40px] bg-[#071A2E] text-white p-14 text-center">

            <h2 className="text-4xl md:text-5xl font-bold">
              Contact Union Add
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-gray-300 leading-8">
              If you have any questions regarding this Privacy Policy
              or the way your information is handled, please contact
              us. We will be happy to assist you.
            </p>

            <div className="mt-10 space-y-3 text-lg">

              <p>
                📧 Email: <strong>info@unionadd.com</strong>
              </p>

              <p>
                🌐 Website: <strong>www.unionadd.com</strong>
              </p>

              <p>
                📍 Lahore, Punjab, Pakistan
              </p>

            </div>

            <Link
              href="/contact"
              className="
                inline-flex
                mt-10
                items-center
                gap-2
                rounded-full
                bg-orange-500
                hover:bg-orange-600
                px-8
                py-4
                font-semibold
                transition
              "
            >
              Contact Us
              <ArrowRight size={18} />
            </Link>

          </div>

        </div>

      </section>
      
    </main>

    <Footer />
    
  </>

  );

}