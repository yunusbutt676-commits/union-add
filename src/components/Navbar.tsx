"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () =>
      window.removeEventListener("keydown", handleEscape);
  }, [open]);

  return (
    <header
      role="banner"
      className="
        fixed top-0 left-0 z-50 w-full
        border-b border-transparent dark:border-white/10
        bg-white/90 dark:bg-[#0B0B0F]/90
        backdrop-blur-xl
        shadow-[0_4px_20px_rgba(0,0,0,.04)]
      "
    >
      <div className="mx-auto flex h-20 max-w-7xl flex-nowrap items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Union Add - Home"
          className="flex shrink-0 items-center max-w-[110px]"
        >
          <Image
            priority
            src="/Logo.png"
            alt="Union Add Advertising Agency Logo"
            width={95}
            height={40}
            sizes="75px"
            className="block h-auto w-[75px] dark:hidden"
          />

          <Image
            priority
            src="/dark.png"
            alt="Union Add Advertising Agency Logo"
            width={95}
            height={40}
            sizes="75px"
            className="hidden h-auto w-[75px] dark:block"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="
            hidden lg:flex items-center
            gap-5 xl:gap-8
            font-medium
            text-gray-800 dark:text-white
          "
        >
          {navigation.map(({ label, href }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className="
                  whitespace-nowrap
                  transition-colors
                  hover:text-[#F97316]
                  focus-visible:rounded-sm
                  focus-visible:outline-2
                  focus-visible:outline-offset-4
                  focus-visible:outline-orange-500
                "
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex xl:gap-4">
          <ThemeToggle />

          <Link
            href="/get-a-quote"
            aria-label="Request a Free Quote"
            className="
              whitespace-nowrap
              rounded-full
              bg-[#071A2E]
              px-5 py-3 xl:px-6
              text-white
              transition
              hover:bg-[#F97316]
              hover:text-white
              dark:bg-white
              dark:text-black
              focus-visible:outline-2
              focus-visible:outline-offset-2
              focus-visible:outline-orange-500
            "
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-4 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            aria-label={
              open ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((previous) => !previous)}
            className="
              flex h-11 w-11
              items-center justify-center
              rounded-lg
              text-3xl text-black dark:text-white
              transition-colors
              hover:bg-gray-100
              dark:hover:bg-white/10
              focus-visible:outline-2
              focus-visible:outline-orange-500
            "
          >
            {open ? (
              <HiX aria-hidden="true" />
            ) : (
              <HiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-navigation"
        inert={!open}
        className={`
          lg:hidden
          overflow-hidden
          border-t border-gray-100 dark:border-white/10
          bg-white dark:bg-[#0B0B0F]
          text-black dark:text-white
          transition-[max-height,opacity]
          duration-300 ease-in-out
          ${
            open
              ? "max-h-[calc(100dvh-5rem)] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav
          aria-label="Mobile Navigation"
          className="
            flex max-h-[calc(100dvh-5rem)]
            flex-col gap-2
            overflow-y-auto overscroll-contain
            px-4 py-5 sm:px-6
            text-base font-medium
          "
        >
          {navigation.map(({ label, href }) => {
            const active = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className="
                  flex min-h-11 items-center
                  justify-center rounded-xl
                  px-4 py-2.5
                  text-black dark:text-white
                  transition-colors
                  hover:bg-orange-50
                  hover:text-orange-500
                  dark:hover:bg-white/10
                  dark:hover:text-orange-400
                  focus-visible:outline-2
                  focus-visible:outline-orange-500
                "
              >
                {label}
              </Link>
            );
          })}

          <Link
            href="/get-a-quote"
            aria-label="Request a Free Quote"
            onClick={() => setOpen(false)}
            className="
              mt-3 flex min-h-12 w-full
              items-center justify-center
              rounded-full
              bg-[#071A2E]
              px-4 py-3
              text-center font-medium text-white
              transition-all duration-300
              hover:bg-orange-500
              dark:bg-white
              dark:text-[#071A2E]
              dark:hover:bg-orange-500
              dark:hover:text-white
              focus-visible:outline-2
              focus-visible:outline-orange-500
            "
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}