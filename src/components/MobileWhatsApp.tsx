"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function MobileWhatsApp() {
  return (
    <a
      href="https://wa.me/923211234560?text=Hello%20Union%20Add,%20I%20would%20like%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Union Add on WhatsApp"
      title="Chat with us on WhatsApp"
      className="
        lg:hidden
        fixed
        bottom-6
        right-6
        z-[100]
        w-16
        h-16
        rounded-full
        bg-[#25D366]
        flex
        items-center
        justify-center
        shadow-2xl
        hover:scale-110
        active:scale-95
        transition-all
        duration-300
        focus:outline-none
        focus:ring-4
        focus:ring-green-400/40
      "
    >
      <FaWhatsapp
        className="text-white text-3xl"
        aria-hidden="true"
      />
    </a>
  );
}