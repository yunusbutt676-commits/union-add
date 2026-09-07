import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
<footer
  role="contentinfo"
  className="
    bg-gradient-to-br
    from-[#FFFFFF]
    via-[#F8F6FF]
    to-[#F1F5F9]
    dark:from-black
    dark:via-[#0B0B0F]
    dark:to-[#140B20]
    text-black
    dark:text-white
    transition-colors
    duration-300
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-orange-500
    focus-visible:ring-offset-2
  "
>      <div className="max-w-7xl mx-auto px-6 text-center lg:text-left">
  
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">          
        {/* Brand */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start">           
             <Image
              src="/Logo.png"
              alt="Union Add Advertising Agency Logo"
              width={120}
              height={80}
              className="block dark:hidden"
            />
            <Image
              src="/dark.png"
              alt="Union Add Advertising Agency Logo"
              width={120}
              height={80}
              className="hidden dark:block"
            />

            <p className="text-black dark:text-white leading-8 mt-2 max-w-lg">
              Integrated Advertising, All Types Branding, Digital Marketing, SEO, Google Ads,
              Meta Ads, Full Stack Web/App Development, SMM, Video Production,
              and Creative Advertising Solutions helping businesses grow since 2006.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              {[
                {
                  icon: <FaFacebookF />,
                  href: "https://www.facebook.com/UnionAdCompany/?_rdc=2&_rdr#",
                  ariaLabel:"Visit our Facebook page",
                  color: "hover:text-[#1877F2]",
                },
                {
                  icon: <FaInstagram />,
                  href: "https://www.instagram.com/unionadd/",
                  ariaLabel:"Visit our Instagram page",
                  color: "hover:text-[#E4405F]",
                },
                {
                  icon: <FaYoutube />,
                  href: "https://www.youtube.com/@unionadd",
                  ariaLabel:"Visit our YouTube page",
                  color: "hover:text-[#FF0000]",
                },
                {
                  icon: <FaTiktok />,
                  href: "https://www.tiktok.com/@union.add",
                  ariaLabel:"Visit our TikTok page",
                  color: "hover:text-[#25F4EE]",
                },
                {
                  icon: <FaWhatsapp />,
                  href: "https://wa.me/923211234560",
                  ariaLabel:"Chat with us on WhatApp",
                  color: "hover:text-[#25D366]",
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-12 h-12
                    rounded-full
                    border border-black
                    flex items-center justify-center
                    text-black-700
                    ${item.color}
                    hover:border-current
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  `}
                >
                  {item.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <address>
          <nav aria-label="Footer Navigation">
            <h3 className="text-sm uppercase tracking-[3px] text-black dark:text-white mb-6">
              Navigation
            </h3>

            <ul className="space-y-4 text-black dark:text-white">
              <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-500">About</Link></li>
              <li><Link href="/services" className="hover:text-orange-500">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-orange-500">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
            </ul>
          </nav>
          </address>

          {/* Contact */}
          <address>
          <div>
            <h3 className="text-sm uppercase tracking-[3px] text-black dark:text-white mb-6">
              Contact
            </h3>

            <div className="space-y-4 hover:text-orange-500 text-black dark:text-white">
              <address className="not-italic">
                Lahore, Pakistan
              </address>
              <a
                href="mailto:info@unionadd.com"
                className="hover:text-orange-500"
              >
                info@unionadd.com
              </a>
              <br /><br />
              <a
                href="tel:+923001234567"
                className="hover:text-orange-500"
              >
                +92 321 1234560
              </a>
              <br /><br />
              <time>Monday – Sunday <br /> 9:00 AM – 10:00 PM</time>
            </div>
          </div>
         </address>
        </div>

        {/* Bottom */}
            <div
              className="
                border-t border-white/10
                py-8
                flex
                flex-col
                md:flex-row
                items-center
                justify-between
                gap-4
                text-black
                dark:text-white
                text-sm
                text-center
                md:text-left
              "
            >          
          <p>
            © {new Date().getFullYear()} Union Add. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy-policy" className="hover:text-orange-500">
              Privacy Policy
            </Link>

            <Link href="/terms-of-service" className="hover:text-orange-500">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}