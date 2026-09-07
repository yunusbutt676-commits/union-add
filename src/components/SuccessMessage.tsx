"use client";

import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface SuccessMessageProps {
  form: {
    name: string;
    company: string;
    email: string;
    phone: string;
    service: string;
    budget: string;
    timeline: string;
    description: string;
  };
}

export default function SuccessMessage({ form, }: SuccessMessageProps) {
  const router = useRouter();
  const [seconds, setSeconds] = useState(30);
  
  const whatsapp =
  `*New Quote Request*\n\n` +
  
  `*Name:* ${form.name}\n` +
  `*Company:* ${form.company}\n` +
  `*Email:* ${form.email}\n` +
  `*Phone:* ${form.phone}\n` +
  `*Country:* ${form.country}\n` +
  `*Service:* ${form.service}\n` +
  `*Budget:* ${form.budget}\n` +
  `*Timeline:* ${form.timeline}\n\n` +

  `*Message:*\n` +
  `${form.description}`;

  const whatsappUrl = `https://wa.me/${
    process.env.NEXT_PUBLIC_CEO_WHATSAPP
  }?text=${encodeURIComponent(whatsapp)}`;

  useEffect(() => {
    if (seconds === 0) {
      router.replace("/");
      return;
    }

    const timer = setTimeout(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds, router]);

  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-5
        py-20
        bg-gradient-to-br
        from-white
        via-[#FAFAFA]
        to-[#FFF7F2]
        dark:from-[#070707]
        dark:via-[#0D0D0D]
        dark:to-[#151515]
      "
    >
      <div
        className="
          w-full
          max-w-3xl
          rounded-[32px]
          border
          border-gray-200
          dark:border-zinc-800
          bg-white/90
          dark:bg-[#111]/90
          backdrop-blur-xl
          shadow-2xl
          p-8
          md:p-14
          text-center
        "
      >
        {/* Badge */}

        <span
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-green-100
            dark:bg-green-900/20
            text-green-600
            px-5
            py-2
            text-sm
            font-semibold
            mb-8
          "
        >
          ✓ Quote Request Submitted
        </span>

        {/* Icon */}

        <HiCheckCircle
          className="
            mx-auto
            text-green-500
            text-7xl
            md:text-8xl
            mb-8
          "
        />

        {/* Heading */}

        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
          Thank You{form.name ? `, ${form.name}` : ""}!
        </h1>

        {/* Description */}

        <p className="mt-8 text-lg md:text-xl leading-9 text-gray-600 dark:text-gray-400">
          Your quote request has been received successfully.

          <br />
          <br />
     
          A confirmation email has been sent to your email address.

          <br />

          Our team will carefully review your project requirements
          and contact you within

          <span className="font-semibold text-orange-500">
            {" "}24 business hours.
          </span>
        </p>

        {/* Progress */}

        <div className="mt-10">
          <div className="h-2 rounded-full overflow-hidden bg-gray-200 dark:bg-zinc-800">
            <div
              className="h-full bg-orange-500 transition-all duration-1000"
              style={{
                width: `${((30 - seconds) / 30) * 100}%`,
              }}
            />
          </div>

          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Redirecting to Home in{" "}
            <span className="font-semibold text-orange-500">
              {seconds}s
            </span>
          </p>
        </div>

        {/* What's Next */}

        <div
          className="
            mt-10
            rounded-2xl
            border
            border-gray-200
            dark:border-zinc-800
            bg-gray-50
            dark:bg-[#181818]
            p-6
            text-left
          "
        >
          <h3 className="text-lg font-semibold mb-4 text-black dark:text-white">
            What happens next?
          </h3>

          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li>✓ Your request has been securely received.</li>
            <li>✓ A confirmation email has been sent to your email address.</li>
            <li>✓ Our experts will review your project.</li>
            <li>✓ We'll contact you within 24 business hours.</li>
          </ul>
        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              px-8
              py-4
              rounded-full
              bg-green-600
              text-white
              font-semibold
              hover:bg-green-700
              transition-all
              duration-300
              hover:scale-105
              sm:hidden
            "
          >
            Continue on WhatsApp
          </a>
          <Link
            href="/"
            className="
              flex
              items-center
              justify-center
              px-8
              py-4
              rounded-full
              bg-[#071A2E]
              text-white
              font-semibold
              hover:bg-orange-500
              transition-all
              duration-300
              hover:scale-105
            "
          >
            Back to Home
          </Link>

          <Link
            href="/services"
            className="
              flex
              items-center
              justify-center
              px-8
              py-4
              rounded-full
              border
              border-gray-300
              dark:border-zinc-700
              font-semibold
              hover:border-orange-500
              hover:text-orange-500
              transition-all
              duration-300
            "
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}