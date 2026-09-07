"use client";

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header  role="banner" className="fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#0B0B0F]/90 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,.04)] dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between flex-nowrap">
        {/* Logo */}
        <Link aria-label="Go to Union Add Home" href="/" className="flex-shrink-0 max-w-[110px]">
            <Image
              priority
              src="/Logo.png"
              alt="Union Add Advertising Agency Logo"
              width={95}
              height={40}
              className="block dark:hidden w-[75px] h-auto"
            />

            <Image
              priority
              src="/dark.png"
              alt="Union Add Advertising Agency Logo"
              width={95}
              height={40}
              className="hidden dark:block w-[75px] h-auto"
            />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="
            hidden
            lg:flex
            items-center
            gap-8
            text-gray-800
            dark:text-white
            font-medium
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-orange-500
            focus-visible:ring-offset-2
          "
        >      
          <Link href="/" className="hover:text-[#F97316] transition">
            Home
          </Link>

          <Link href="/about" className="hover:text-[#F97316] transition">
            About
          </Link>

          <Link href="/services" className="hover:text-[#F97316] transition">
            Services
          </Link>

          <Link href="/portfolio" className="hover:text-[#F97316] transition">
            Portfolio
          </Link>

          <Link href="/contact" className="hover:text-[#F97316] transition">
            Contact
          </Link>
        </nav>
        
        {/* Desktop Button */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />

          <Link
            aria-label="Request a Free Quote" href="/get-a-quote"
            className="
              bg-[#071A2E]
              dark:bg-white
              dark:text-black
              text-white
              px-6
              py-3
              rounded-full
              hover:bg-[#F97316]
              hover:text-white
              transition
            "
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="lg:hidden flex items-center gap-4 ml-auto flex-shrink-0">
          <ThemeToggle />

          <button
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
            className="text-3xl text-black dark:text-white"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden
          overflow-hidden
          text-center
          transition-all
          duration-300
          bg-white
          dark:bg-[#0B0B0F]
          text-black
          dark:text-white
          ${open ? "max-h-screen" : "max-h-0"}
        `}
      >
      <nav  id="mobile-navigation" aria-label="Mobile Navigation" className="
          px-6
          py-6
          flex
          flex-col
          gap-5
          text-lg
          [&>a]:text-black
          dark:[&>a]:text-white
          [&>a]:hover:text-orange-500
          [&>a]:transition-colors
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-orange-500
          focus-visible:ring-offset-2
      ">

          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>

          <Link href="/services" onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link href="/portfolio" onClick={() => setOpen(false)}>
            Portfolio
          </Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>

          <Link
            aria-label="Request a Free Quote" href="/get-a-quote"
            onClick={() => setOpen(false)}
            className="
              mt-4
              block
              w-full
              py-3
              rounded-full
              bg-[#071A2E]
              text-center
              font-medium
              !text-white
              hover:bg-orange-500
              hover:!text-white
              dark:bg-white
              dark:!text-[#071A2E]
              dark:hover:bg-orange-500
              dark:hover:!text-white
              transition-all
              duration-300
            "
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}