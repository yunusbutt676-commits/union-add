"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppTab() {
  return (
    <a
      href="https://wa.me/923211234560?text=Hello%20Union%20Add,%20I%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Union Add on WhatsApp"
      title="Chat with us on WhatsApp"
      className="
        fixed
        right-0
        top-1/2
        -translate-y-1/2
        z-[100]
        hidden
        lg:flex
        flex-col
        items-center
        justify-center
        gap-4
        w-[58px]
        h-[170px]
        bg-[#1FA855]
        hover:bg-[#25D366]
        rounded-l-2xl
        py-4
        shadow-xl
        hover:w-[64px]
        transition-all
        duration-300
        focus:outline-none
        focus:ring-4
        focus:ring-green-400/40
      "
    >
      <span
        className="
          text-white
          text-sm
          font-medium
          tracking-wide
          [writing-mode:vertical-rl]
          rotate-180
          select-none
        "
      >
        WhatsApp
      </span>

      <FaWhatsapp
        className="text-white text-2xl"
        aria-hidden="true"
      />
    </a>
  );
}