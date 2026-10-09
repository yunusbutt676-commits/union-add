
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/UnionAdCompany/",
    color: "hover:text-[#1877F2]",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/unionadd/",
    color: "hover:text-[#E4405F]",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "https://www.youtube.com/@unionadd",
    color: "hover:text-[#FF0000]",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@union.add",
    color: "hover:text-[#25F4EE]",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    href: "https://wa.me/923211234560",
    color: "hover:text-[#25D366]",
  },
];

const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Union Add Website Footer"
      className="
        w-full
        overflow-hidden

        bg-gradient-to-br
        from-[#FFFFFF]
        via-[#F8F6FF]
        to-[#F1F5F9]

        dark:from-black
        dark:via-[#0B0B0F]
        dark:to-[#140B20]

        text-gray-900
        dark:text-white

        transition-colors
        duration-300
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
        "
      >
        {/* MAIN FOOTER */}
        <div
          className="
            grid
            grid-cols-1
            gap-10
            py-12

            sm:py-14
            md:grid-cols-2
            lg:grid-cols-4
            lg:gap-10
            lg:py-16

            text-center
            lg:text-left
          "
        >
          {/* BRAND */}
          <div
            className="
              flex
              min-w-0
              flex-col
              items-center

              md:col-span-2
              lg:col-span-2
              lg:items-start
            "
          >
            <Link
              href="/"
              aria-label="Union Add Advertising Agency - Home"
              className="
                inline-flex
                items-center
                rounded-lg

                focus-visible:outline-2
                focus-visible:outline-offset-4
                focus-visible:outline-orange-500
              "
            >
              <Image
                src="/Logo.png"
                alt="Union Add Advertising Agency"
                width={120}
                height={80}
                sizes="120px"
                className="
                  block
                  h-auto
                  w-[120px]
                  object-contain
                  dark:hidden
                "
              />

              <Image
                src="/dark.png"
                alt="Union Add Advertising Agency"
                width={120}
                height={80}
                sizes="120px"
                className="
                  hidden
                  h-auto
                  w-[120px]
                  object-contain
                  dark:block
                "
              />
            </Link>

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                leading-7

                sm:text-base
                sm:leading-8

                text-gray-700
                dark:text-gray-300
              "
            >
              Union Add is a full-service advertising,
              branding, and digital marketing agency
              based in Lahore, Pakistan. Since 2006,
              we have helped businesses grow through
              integrated advertising, brand identity,
              SEO, Google Ads, Meta Ads, social media
              marketing, full-stack web and app
              development, video production, and
              creative marketing solutions.
            </p>

            {/* SOCIAL LINKS */}
            <nav
              aria-label="Union Add Social Media Profiles"
              className="
                mt-7
                flex
                flex-wrap
                items-center
                justify-center
                gap-3

                sm:gap-4

                lg:justify-start
              "
            >
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit Union Add on ${social.name}`}
                    title={`Union Add on ${social.name}`}
                    className={`
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center

                      rounded-full

                      border
                      border-gray-300
                      dark:border-white/20

                      bg-white/60
                      dark:bg-white/5

                      text-gray-800
                      dark:text-gray-200

                      text-lg

                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-current
                      hover:shadow-md

                      focus-visible:outline-2
                      focus-visible:outline-offset-3
                      focus-visible:outline-orange-500

                      ${social.color}
                    `}
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
            </nav>
          </div>

          {/* NAVIGATION */}
          <nav
            aria-label="Footer Navigation"
            className="min-w-0"
          >
            <h2
              className="
                mb-6
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]

                text-gray-900
                dark:text-white
              "
            >
              Navigation
            </h2>

            <ul
              className="
                flex
                flex-col
                items-center
                gap-4

                lg:items-start
              "
            >
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="
                      inline-flex
                      min-h-8
                      items-center

                      text-sm
                      sm:text-base

                      text-gray-700
                      dark:text-gray-300

                      transition-colors
                      duration-200

                      hover:text-orange-500
                      dark:hover:text-orange-400

                      focus-visible:rounded-sm
                      focus-visible:outline-2
                      focus-visible:outline-offset-3
                      focus-visible:outline-orange-500
                    "
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <section
            aria-labelledby="footer-contact-heading"
            className="min-w-0"
          >
            <h2
              id="footer-contact-heading"
              className="
                mb-6
                text-sm
                font-semibold
                uppercase
                tracking-[0.18em]

                text-gray-900
                dark:text-white
              "
            >
              Contact
            </h2>

            <address
              className="
                flex
                flex-col
                items-center
                gap-4

                not-italic

                text-sm
                sm:text-base

                text-gray-700
                dark:text-gray-300

                lg:items-start
              "
            >
              <span>
                Lahore, Pakistan
              </span>

              <a
                href="mailto:union.add@gmail.com"
                className="
                  max-w-full
                  break-all
                  transition-colors

                  hover:text-orange-500
                  dark:hover:text-orange-400

                  focus-visible:rounded-sm
                  focus-visible:outline-2
                  focus-visible:outline-offset-3
                  focus-visible:outline-orange-500
                "
              >
                union.add@gmail.com
              </a>

              <a
                href="tel:+923211234560"
                className="
                  transition-colors

                  hover:text-orange-500
                  dark:hover:text-orange-400

                  focus-visible:rounded-sm
                  focus-visible:outline-2
                  focus-visible:outline-offset-3
                  focus-visible:outline-orange-500
                "
              >
                +92 321 1234560
              </a>
            </address>

            {/* BUSINESS HOURS */}
            <div
              className="
                mt-5
                text-sm
                leading-7
                sm:text-base

                text-gray-700
                dark:text-gray-300
              "
            >
              <p className="font-medium">
                <b>Business Hours</b>
              </p>

              <p>Monday – Sunday</p>
              <p>9:00 AM – 10:00 PM</p>
            </div>
          </section>
        </div>

        {/* BOTTOM FOOTER */}
        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-4

            border-t
            border-gray-200
            dark:border-white/10

            py-7
            sm:py-8

            text-center
            text-sm

            text-gray-600
            dark:text-gray-400

            md:flex-row
            md:text-left
          "
        >
          <p className="leading-6">
            © {new Date().getFullYear()} Union Add. All rights reserved.
            <span className="block sm:inline">
              {" "}Website by{" "}
              <a
                href="https://gmcodes9.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-orange-500 transition-colors hover:text-orange-400"
              >
                GmCodes9
              </a>.
            </span>
          </p>

          <nav
            aria-label="Legal Information"
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-x-6
              gap-y-3
            "
          >
            <Link
              href="/privacy-policy"
              className="
                transition-colors
                hover:text-orange-500
                dark:hover:text-orange-400

                focus-visible:rounded-sm
                focus-visible:outline-2
                focus-visible:outline-offset-3
                focus-visible:outline-orange-500
              "
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="
                transition-colors
                hover:text-orange-500
                dark:hover:text-orange-400

                focus-visible:rounded-sm
                focus-visible:outline-2
                focus-visible:outline-offset-3
                focus-visible:outline-orange-500
              "
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
